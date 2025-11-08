import { Check, Plane, Hotel, Users } from "lucide-react";

const tiers = [
  {
    name: "Essential",
    price: "$1,799",
    description: "Comfortable and complete essentials for a spiritually-focused trip.",
    features: [
      { icon: Plane, text: "Economy flights (regional hubs)" },
      { icon: Hotel, text: "3★ hotels near Haram" },
      { icon: Users, text: "Group guide and support" },
    ],
    cta: "Choose Essential",
    highlight: false,
  },
  {
    name: "Premium",
    price: "$2,699",
    description: "Balanced comfort with upgraded stays and schedule flexibility.",
    features: [
      { icon: Plane, text: "Flexible flights (preferred carriers)" },
      { icon: Hotel, text: "4★ hotels walking distance" },
      { icon: Users, text: "Scholar-led guidance" },
    ],
    cta: "Most Popular",
    highlight: true,
  },
  {
    name: "Signature",
    price: "$3,899",
    description: "Luxury hospitality with bespoke experiences and private support.",
    features: [
      { icon: Plane, text: "Business upgrade options" },
      { icon: Hotel, text: "5★ hotels (Kaaba view options)" },
      { icon: Users, text: "Private concierge support" },
    ],
    cta: "Enquire Now",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-gray-600">
            All packages include visa processing, ground transfers, and curated ziyarat. Choose the comfort level that suits your journey.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`${tier.highlight ? "ring-2 ring-emerald-600" : "ring-1 ring-gray-200"} relative flex flex-col rounded-2xl bg-white p-6 shadow-sm`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
                  Recommended
                </span>
              )}
              <h3 className="text-lg font-semibold text-gray-900">{tier.name}</h3>
              <p className="mt-1 text-3xl font-bold text-gray-900">{tier.price}</p>
              <p className="mt-2 text-sm text-gray-600">{tier.description}</p>
              <ul className="mt-6 space-y-3">
                {tier.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-md bg-emerald-50 p-1.5 text-emerald-700 ring-1 ring-emerald-100">
                      <f.icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm text-gray-700">{f.text}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`${tier.highlight ? "bg-emerald-600 text-white hover:bg-emerald-700" : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"} mt-8 w-full rounded-md px-4 py-2 text-sm font-semibold transition`}
              >
                {tier.cta}
              </button>
              <p className="mt-3 text-center text-xs text-gray-500">Taxes and fees included.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
