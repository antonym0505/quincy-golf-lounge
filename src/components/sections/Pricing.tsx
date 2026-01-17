const pricingPlans = [
    {
        name: 'Walk-In Rate',
        price: '$60',
        unit: '/hour per bay',
        description: 'Perfect for a quick session',
        features: [
            'Up to 6 players per bay',
            '200+ world-famous courses',
            'Full swing analysis',
            'Food & beverage service',
        ],
    },
    {
        name: 'Prime Time',
        price: '$75',
        unit: '/hour per bay',
        description: 'Fridays, Saturdays & Evenings',
        features: [
            'Up to 6 players per bay',
            '200+ world-famous courses',
            'Full swing analysis',
            'Food & beverage service',
            'Priority booking',
        ],
        popular: true,
    },
    {
        name: 'Membership',
        price: '$299',
        unit: '/month',
        description: 'For the dedicated golfer',
        features: [
            '10 hours included monthly',
            'Discounted additional hours',
            'Priority booking access',
            'Guest passes (2/month)',
            'Member-only events',
        ],
    },
];

export default function Pricing() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
                    Pricing
                </h2>
                <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                    Simple, transparent pricing. Book by the hour or join as a member for exclusive benefits.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {pricingPlans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`rounded-xl p-8 ${plan.popular
                                    ? 'bg-green-600 text-white ring-4 ring-green-600 ring-offset-4'
                                    : 'bg-gray-50'
                                }`}
                        >
                            {plan.popular && (
                                <div className="text-sm font-semibold mb-4 uppercase tracking-wide">
                                    Most Popular
                                </div>
                            )}
                            <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                                {plan.name}
                            </h3>
                            <div className="mb-4">
                                <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                                    {plan.price}
                                </span>
                                <span className={plan.popular ? 'text-green-100' : 'text-gray-500'}>
                                    {plan.unit}
                                </span>
                            </div>
                            <p className={`mb-6 ${plan.popular ? 'text-green-100' : 'text-gray-600'}`}>
                                {plan.description}
                            </p>
                            <ul className="space-y-3">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-2">
                                        <span className={plan.popular ? 'text-green-200' : 'text-green-600'}>✓</span>
                                        <span className={plan.popular ? 'text-white' : 'text-gray-600'}>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
