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
import { Check, X } from "lucide-react";
import Link from "next/link";

function SubscriptionPlans({
  showcase,
  currentSubscription,
  currentUserEmailAddress,
}: {
  showcase?: boolean;
  currentSubscription?: string;
  currentUserEmailAddress?: string;
}) {
  return (
    <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
      {subscriptions.map((sub) => (
        <Card
          key={sub.name}
          className={`flex flex-col justify-between ${
            !showcase && currentSubscription === sub.name
              ? "ring-2 ring-primary"
              : ""
          }`}
        >
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">{sub.name}</CardTitle>
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
            {!showcase && (
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
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default SubscriptionPlans;
