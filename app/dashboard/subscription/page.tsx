import { subscriptions } from "@/app/services/pricing";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import prisma from "@/prisma/client";
import { currentUser } from "@clerk/nextjs/server";
import { Check, X } from "lucide-react";
import Link from "next/link";

async function page() {
  const user = await currentUser();
  const currentUserEmailAddress = user?.emailAddresses[0].emailAddress;

  let currentSubscription = "Free";

  const subscriber = await prisma.subscriber.findFirst({
    where: {
      userId: currentUserEmailAddress,
    },
  });

  if (subscriber) currentSubscription = subscriber.subscription;

  return (
    <div className="">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Your Subscription
          </h1>
          <div className="mt-4 p-4 bg-white rounded-lg shadow-md inline-block">
            <p className="text-xl text-gray-700">
              Current Plan:{" "}
              <span className="font-semibold text-primary">
                {currentSubscription}
              </span>
            </p>
          </div>
        </div>

        <div className="text-center mt-16 mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Available Plans</h2>
          <p className="mt-4 text-xl text-gray-500">
            Choose the perfect subscription that fits your needs.
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
          {subscriptions.map((sub) => (
            <Card
              key={sub.name}
              className={`flex flex-col justify-between ${
                currentSubscription === sub.name ? "ring-2 ring-primary" : ""
              }`}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">
                  {sub.name}
                </CardTitle>
                <CardDescription>
                  <span className="text-4xl font-bold">{sub.price}</span>
                  <span className="text-gray-500">/month</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {sub.description}
                </p>
                <ul className="space-y-3">
                  {sub.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                  {sub.notIncluded.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-400">
                      <X className="h-5 w-5 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant={
                    currentSubscription === sub.name ? "default" : "outline"
                  }
                  className="w-full"
                  asChild
                >
                  {currentSubscription === sub.name ? (
                    <span>Current Plan</span>
                  ) : (
                    <Link
                      href={
                        sub.paymentLink +
                        `?prefilled_email=${currentUserEmailAddress}`
                      }
                      target="_blank"
                    >
                      Select Plan
                    </Link>
                  )}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
