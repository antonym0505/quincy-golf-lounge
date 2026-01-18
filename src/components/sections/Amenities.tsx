import { useFacility } from '../../context/FacilityContext';

export default function Amenities() {
    const { facility } = useFacility();

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                    What We Offer
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {facility.amenities.map((amenity) => (
                        <div
                            key={amenity.title}
                            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="text-4xl mb-4">{amenity.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {amenity.title}
                            </h3>
                            <p className="text-gray-600">{amenity.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
