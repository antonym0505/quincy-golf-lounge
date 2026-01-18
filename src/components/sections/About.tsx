import { useFacility } from '../../context/FacilityContext';

export default function About() {
    const { facility } = useFacility();

    return (
        <section className="py-20 bg-brand-cream/20" id="about">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        About {facility.name}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">{facility.description}</p>
                    <p className="text-gray-500 italic mb-8">
                        Construction begins January 19, with a planned opening in late January.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        {facility.stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-4xl font-bold text-brand-green mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
