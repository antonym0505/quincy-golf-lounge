import { useFacility } from '../../context/FacilityContext';

export default function Pricing() {
    const { facility } = useFacility();
    const SPECIAL_PRICING = import.meta.env.SPECIAL_PRICING || 'Opening Special';

    return (
        <section className="py-20 bg-white" id="pricing">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
                    Pricing
                </h2>
                <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                    Simple, transparent pricing. Book by the hour or join as a member for
                    exclusive benefits.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {facility.pricing.map((plan) => (
                        <div
                            key={plan.name}
                            className={`rounded-xl p-8 relative ${plan.popular
                                ? 'bg-green-600 text-white ring-4 ring-green-600 ring-offset-4'
                                : 'bg-gray-50'
                                }`}
                        >
                            {(plan.popular || SPECIAL_PRICING) && (
                                <div className="text-sm font-semibold mb-4 uppercase tracking-wide -mt-4">
                                    {SPECIAL_PRICING || 'Most Popular'}
                                </div>
                            )}
                            <h3
                                className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'
                                    }`}
                            >
                                {plan.name}
                            </h3>
                            <div className="mb-4">
                                <div className="flex flex-wrap items-baseline-last gap-2">
                                    <span
                                        className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'
                                            } ${SPECIAL_PRICING && plan.special ? 'text-2xl line-through opacity-70' : ''}`}
                                    >
                                        {plan.price}
                                    </span>
                                    {SPECIAL_PRICING && plan.special && (
                                        <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-green-600'}`}>
                                            {plan.special}
                                        </span>
                                    )}
                                    <span className={plan.popular ? 'text-green-100' : 'text-gray-500'}>
                                        {plan.unit}
                                    </span>
                                </div>
                            </div>
                            <p
                                className={`mb-6 ${plan.popular ? 'text-green-100' : 'text-gray-600'
                                    }`}
                            >
                                {plan.description}
                            </p>
                            <ul className="space-y-3">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-2">
                                        <span
                                            className={plan.popular ? 'text-green-200' : 'text-green-600'}
                                        >
                                            ✓
                                        </span>
                                        <span className={plan.popular ? 'text-white' : 'text-gray-600'}>
                                            {feature}
                                        </span>
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
