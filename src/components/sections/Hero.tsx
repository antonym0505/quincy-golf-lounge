import { Link } from 'react-router-dom';
import { useFacility } from '../../context/FacilityContext';

export default function Hero() {
    const { facility } = useFacility();

    return (
        <section className="relative bg-gray-900 text-white py-24 lg:py-32">
            {/* Background placeholder - designer will add image */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-gray-900 opacity-90" />

            <div className="relative container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    {facility.tagline}
                </h1>
                <div className="inline-block bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
                    Opening Late January
                </div>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    A premium indoor golf experience featuring TrackMan technology,
                    private simulator play, and a relaxed, alcohol-free environment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/book"
                        className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                        Book a Bay
                    </Link>
                    <a
                        href="#about"
                        className="border border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
}
