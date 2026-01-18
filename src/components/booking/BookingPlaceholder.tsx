import { useFacility } from "../../context/FacilityContext";

export default function BookingPlaceholder() {
    const { facility } = useFacility();
    return (
        <div className="bg-gray-100 rounded-xl p-8 text-center">
            <div className="mb-6">
                <img src={facility.logos.color} alt={facility.name} className="h-16 w-auto mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Online Booking Coming Soon
            </h3>
            <p className="text-gray-600 mb-6">
                Our online booking system is being set up. In the meantime, please contact us directly to reserve a bay.
            </p>
            <div className="space-y-4">
                <a
                    href={`tel:${facility.phone}`}
                    className="block bg-brand-green text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
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
