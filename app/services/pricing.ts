export const subscriptions = [
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
    priceId: "",
    paymentLink: "https://buy.stripe.com/test_5kA2898209He6LmeUX",
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
    priceId: "",
    paymentLink: "https://buy.stripe.com/test_aEU5kl3LK4mUfhSfZ2",
  },
];

export const prices: { [key: string]: string } = {
  price_1Q9L74P64YNdcnHqDOrBXzY3: "Professional",
  price_1Q9LA6P64YNdcnHq89HiMHJ5: "Business",
};
