import { prices } from "@/app/services/pricing";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export async function POST(req: NextRequest) {
  const body = await req.json();

  switch (body.type) {
    case "checkout.session.completed": {
      const event: Stripe.CheckoutSessionCompletedEvent = body;

      const session = await stripe.checkout.sessions.retrieve(
        event.data.object.id,
        {
          expand: ["line_items"],
        }
      );
      const customerId = session.customer_details?.email || "";
      const priceId = session.line_items?.data[0].price?.id || "";

      const subscriber = await prisma.subscriber.findFirst({
        where: {
          userId: customerId,
        },
      });

      if (!subscriber) {
        const newSubscriber = await prisma.subscriber.create({
          data: {
            userId: customerId,
            subscription: prices[priceId],
          },
        });
        return NextResponse.json(newSubscriber, { status: 201 });
      } else {
        const updatedSubscriber = await prisma.subscriber.update({
          where: {
            id: subscriber.id,
          },
          data: {
            subscription: prices[priceId],
          },
        });
        return NextResponse.json(updatedSubscriber, { status: 200 });
      }
    }

    case "customer.subscription.deleted": {
      const customerId = body.userId;

      const deletedSubscriber = await prisma.subscriber.delete({
        where: {
          id: customerId,
        },
      });

      return NextResponse.json(deletedSubscriber, { status: 200 });
    }
  }

  return NextResponse.json({});
}
