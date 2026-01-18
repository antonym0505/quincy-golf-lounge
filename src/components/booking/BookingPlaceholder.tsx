import { useFacility } from "../../context/FacilityContext";

export default function BookingPlaceholder() {
    const { facility } = useFacility();
    return (
        <div className="bg-gray-100 rounded-xl p-8 text-center">
            <div className="text-4xl mb-4">🏌️</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Online Booking Coming Soon
            </h3>
            <p className="text-gray-600 mb-6">
                Our online booking system is being set up. In the meantime, please contact us directly to reserve a bay.
            </p>
            <div className="space-y-4">
                <a
                    href={`tel:${facility.phone}`}
                    className="block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                    Call {facility.phone.replace(/.+(\d{3})(\d{3})(\d{4})$/, '($1) $2-$3')}
                </a>
                <a
                    href={`mailto:${facility.email}`}
                    className="block border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                    Email info@quincygolflounge.com
                </a>
            </div>
        </div>
    );
}
