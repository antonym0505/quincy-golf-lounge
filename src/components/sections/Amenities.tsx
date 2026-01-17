const amenities = [
    {
        title: 'Trackman Technology',
        description: 'Industry-leading golf simulator technology with precise ball tracking and swing analysis.',
        icon: '🎯',
    },
    {
        title: 'Full Bar & Lounge',
        description: 'Enjoy craft cocktails, local beers, and a curated wine selection while you play.',
        icon: '🍺',
    },
    {
        title: 'Food Menu',
        description: 'Delicious appetizers and light fare to keep you fueled throughout your session.',
        icon: '🍔',
    },
    {
        title: 'Private Bays',
        description: 'Comfortable, climate-controlled bays with seating for groups up to 6 people.',
        icon: '🏌️',
    },
    {
        title: 'Events & Parties',
        description: 'Host your next corporate event, birthday party, or bachelor party with us.',
        icon: '🎉',
    },
    {
        title: 'Lessons Available',
        description: 'Improve your game with lessons from our PGA-certified instructors.',
        icon: '📚',
    },
];

export default function Amenities() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                    What We Offer
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {amenities.map((amenity) => (
                        <div
                            key={amenity.title}
                            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="text-4xl mb-4">{amenity.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {amenity.title}
                            </h3>
                            <p className="text-gray-600">
                                {amenity.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
