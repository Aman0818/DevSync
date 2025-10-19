import { CheckIcon } from "lucide-react";

export const pricingData = [
    {
        title: "Starter",
        price: 0,
        currency: "INR",
        billing: "mo",
        description: "For individuals — manage up to 3 projects.",
        features: [
            { name: "Up to 3 projects", icon: CheckIcon },
            { name: "Basic code review", icon: CheckIcon },
            { name: "Community support", icon: CheckIcon }
        ],
        buttonText: "Try DevSync Free",
    },
    {
        title: "Team",
        price: 499,
        currency: "INR",
        billing: "mo",
        description: "For small teams — unlimited repos, 10 collaborators.",
        features: [
            { name: "Unlimited repositories", icon: CheckIcon },
            { name: "10 collaborators", icon: CheckIcon },
            { name: "Priority email support", icon: CheckIcon },
            { name: "Team analytics", icon: CheckIcon }
        ],
        buttonText: "Try DevSync Free",
        mostPopular: true
    },
    {
        title: "Enterprise",
        price: 1999,
        currency: "INR",
        billing: "mo",
        description: "Custom solutions with SSO & advanced analytics.",
        features: [
            { name: "SSO & SAML", icon: CheckIcon },
            { name: "Advanced analytics", icon: CheckIcon },
            { name: "Dedicated account manager", icon: CheckIcon },
            { name: "Custom integrations", icon: CheckIcon }
        ],
        buttonText: "Contact Sales",
    }
];