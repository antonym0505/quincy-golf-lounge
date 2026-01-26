import { Link } from 'react-router-dom';
import { useFacility } from '../context/FacilityContext';
import BookingWidget from '../components/booking/BookingWidget';

export default function Book() {
    const { facility } = useFacility();

    return (
        <div className="py-16 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    <Link
                        to="/"
                        className="inline-flex items-center text-brand-green hover:opacity-80 transition-opacity mb-8"
                    >
                        ← Back to Home
                    </Link>

                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Book a Bay
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Reserve your simulator bay and start playing on the world's best
                        courses.
                    </p>

                    <BookingWidget />

                    <div className="mt-12 bg-white rounded-xl p-6 shadow-sm">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">
                            Booking Information
                        </h2>
                        <ul className="space-y-3 text-gray-600">
                            {facility.bookingInfo.map((info) => (
                                <li key={info} className="flex items-start gap-2">
                                    <span className="text-brand-green">✓</span>
                                    <span>{info}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
