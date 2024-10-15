import SubscriptionPlans from "@/app/(components)/SubscriptionPlans";
import prisma from "@/prisma/client";
import { currentUser } from "@clerk/nextjs/server";

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

        <SubscriptionPlans
          currentSubscription={currentSubscription}
          currentUserEmailAddress={currentUserEmailAddress}
        />
      </div>
    </div>
  );
}

export default page;
