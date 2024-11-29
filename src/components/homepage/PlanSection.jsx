import React from "react";

const PlanSection = () => {
  const plans = [
    {
      title: "Free",
      description: "For individuals to get started",
      features: [
        "Talk to Zonix on the web, iOS, and Android",
        "Ask about images and docs",
        "Access to one of our latest models",
      ],
      price: "$0",
      footer: "Free for everyone",
    },
    {
      title: "Pro",
      description: "For Zonix power users",
      features: [
        "Everything in Free, plus:",
        "More usage than Free",
        "Access to Projects to organize documents and chats",
        "Ability to use more models, like Zonix 3.5 Sonnet and Zonix 3 Opus",
        "Early access to new features",
      ],
      price: "$0",
      footer: "Per month",
    },
    {
      title: "Team",
      description: "For fast-growing teams",
      features: [
        "Everything in Pro, plus:",
        "More usage than Pro",
        "Central billing and administration",
        "Early access to collaboration features",
      ],
      price: "$0",
      footer:
        "Per person / month with annual subscription discount. $30 if billed monthly. Minimum 5 members.",
    },
    {
      title: "Enterprise",
      description: "For businesses operating at scale",
      features: [
        "Everything in Team, plus:",
        "More usage than Team",
        "Expanded context window",
        "Single sign-on (SSO) and domain capture",
        "Role-based access with fine-grained permissioning",
        "System for Cross-domain Identity Management (SCIM)",
        "Audit logs",
        "Data source integrations",
      ],
      price: "Contact sales",
    },
  ];
  return (
    <div className="bg-gray-50 p-10">
      <h1 className="text-center text-4xl font-bold mb-12 text-gray-800">
        Explore Plans
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {plan.title}
              </h2>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <ul className="space-y-2 text-gray-700">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-green-500 mr-2">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <p className="text-4xl font-bold text-gray-800">{plan.price}</p>
              <p className="text-gray-500">{plan.footer}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-gray-500 text-center mt-12">
        Prices shown do not include applicable taxes.
      </p>
    </div>
  );
};

export default PlanSection;
