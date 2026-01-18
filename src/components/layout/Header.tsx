import { Link } from 'react-router-dom';
import { useFacility } from '../../context/FacilityContext';

export default function Header() {
    const { facility } = useFacility();

    return (
        <header className="w-full bg-white shadow-sm">
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <img src={facility.logos.color} alt={facility.name} className="h-12 w-auto" />
                </Link>

                <div className="flex items-center gap-6">
                    <Link to="/" className="text-gray-600 hover:text-gray-900 hidden md:block">
                        Home
                    </Link>
                    <a href="/#about" className="text-gray-600 hover:text-gray-900 hidden md:block">
                        About
                    </a>
                    <a href="/#pricing" className="text-gray-600 hover:text-gray-900 hidden md:block">
                        Pricing
                    </a>
                    <a href="/#events" className="text-gray-600 hover:text-gray-900 hidden md:block">
                        Events
                    </a>
                    <Link
                        to="/book"
                        className="bg-brand-green text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                    >
                        Book a Bay
                    </Link>
                </div>
            </nav>
        </header>
    );
}
