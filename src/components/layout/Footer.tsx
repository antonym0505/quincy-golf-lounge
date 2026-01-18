import { useFacility } from '../../context/FacilityContext';

export default function Footer() {
    const { facility } = useFacility();
    const { address } = facility;

    return (
        <footer className="w-full bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Business Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">{facility.name}</h3>
                        <p className="text-gray-400">
                            Premium indoor golf simulator experience in {address.city}.
                        </p>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="font-semibold mb-4">Hours</h4>
                        <ul className="text-gray-400 space-y-2">
                            {facility.hours.map((h) => (
                                <li key={h.days}>
                                    {h.days && `${h.days}: `}{h.open} - {h.close}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <ul className="text-gray-400 space-y-2">
                            <li>
                                {address.street}, {address.city}, {address.state} {address.zip}
                            </li>
                            <li>Phone: {facility.phone.replace(/.+(\d{3})(\d{3})(\d{4})$/, '($1) $2-$3')}</li>
                            <li>Email: {facility.email}</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>
                        &copy; {new Date().getFullYear()} {facility.name}. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
