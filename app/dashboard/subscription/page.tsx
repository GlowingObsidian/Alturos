import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const subscriptions = [
  {
    name: "Free",
    price: "$0",
    description: "Basic features for personal use",
    features: ["Create up to 3 forms", "250 form responses"],
    notIncluded: ["Priority support", "Form styling"],
  },
  {
    name: "Professional",
    price: "$99",
    description: "Advanced features for professionals",
    features: [
      "Create up to 10 forms",
      "1,000 form responses",
      "Priority support",
    ],
    notIncluded: ["Form styling"],
  },
  {
    name: "Business",
    price: "$199",
    description: "Enterprise-grade solutions for teams",
    features: [
      "Unlimited form creation",
      "Unlimited responses",
      "24/7 support",
      "Form styling",
    ],
    notIncluded: [],
  },
];

function page() {
  const currentSubscription = "Free";

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
                >
                  {currentSubscription === sub.name
                    ? "Current Plan"
                    : "Select Plan"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            You can change your subscription at any time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
