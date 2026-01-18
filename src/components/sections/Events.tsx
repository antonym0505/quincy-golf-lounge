import { useFacility } from '../../context/FacilityContext';

export default function Events() {
    const { facility } = useFacility();
    const { events } = facility;

    return (
        <section className="py-20 bg-white" id="events">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-green-50 rounded-2xl overflow-hidden border border-green-100 shadow-sm">
                    <div className="p-8 md:p-12">
                        <div className="text-sm font-semibold text-green-600 mb-2 uppercase tracking-wider">
                            Perfect for small groups
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            {events.title}
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            {events.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                            {events.items.map((item) => (
                                <div key={item} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-green-100">
                                    <span className="text-green-600 text-xl font-bold">✓</span>
                                    <span className="font-semibold text-gray-900">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4 border-t border-green-200 pt-8">
                            <p className="text-green-800 font-medium">
                                {events.note}
                            </p>
                            <p className="text-sm text-gray-500 italic">
                                {events.capacityNote}
                            </p>
                        </div>

                        <div className="mt-10 opacity-50 pointer-events-none">
                            <a
                                href="mailto:info@quincygolflounge.com"
                                className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors shadow-lg shadow-green-200"
                            >
                                Inquire About an Event
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
