import { Link } from 'react-router-dom';
import { useFacility } from '../../context/FacilityContext';

export default function Header() {
    const { facility } = useFacility();

    return (
        <header className="w-full bg-white shadow-sm">
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link to="/" className="text-xl font-bold text-gray-900">
                    {facility.name}
                </Link>

                <div className="flex items-center gap-6">
                    <Link to="/" className="text-gray-600 hover:text-gray-900">
                        Home
                    </Link>
                    <a href="/#about" className="text-gray-600 hover:text-gray-900">
                        About
                    </a>
                    <a href="/#pricing" className="text-gray-600 hover:text-gray-900">
                        Pricing
                    </a>
                    <a href="/#events" className="text-gray-600 hover:text-gray-900">
                        Events
                    </a>
                    <Link
                        to="/book"
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                        Book a Bay
                    </Link>
                </div>
            </nav>
        </header>
    );
}
