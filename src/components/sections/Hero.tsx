import { Link } from 'react-router-dom';
import { useFacility } from '../../context/FacilityContext';

export default function Hero() {
    const { facility } = useFacility();

    return (
        <section className="relative bg-brand-green-dark text-white py-24 lg:py-32 overflow-hidden">
            {/* Background elements for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_var(--color-brand-green)_0%,_transparent_70%)] opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />

            <div className="relative container mx-auto px-4 text-center">
                <div className="mb-8">
                    {/* <img src={facility.logos.white} alt={facility.name} className="h-24 md:h-32 w-auto mx-auto" /> */}
                    <img src={facility.logos.color} alt={facility.name} className="h-24 md:h-32 w-auto mx-auto" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    {facility.tagline}
                </h1>
                <div className="inline-block bg-brand-gold text-brand-green px-4 py-1 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase">
                    Opening Late January
                </div>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    A premium indoor golf experience featuring TrackMan technology,
                    private simulator play, and a relaxed, alcohol-free environment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/book"
                        className="bg-brand-green text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
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
