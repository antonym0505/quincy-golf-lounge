import { useFacility } from '../../context/FacilityContext';

export default function Events() {
    const { facility } = useFacility();
    const { events } = facility;

    return (
        <section className="py-20 bg-white" id="events">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-brand-cream rounded-2xl overflow-hidden border border-brand-gold/30 shadow-sm">
                    <div className="p-8 md:p-12">
                        <div className="text-sm font-semibold text-brand-green mb-2 uppercase tracking-wider">
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
                                <div key={item} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-brand-gold/20">
                                    <span className="text-brand-green text-xl font-bold">✓</span>
                                    <span className="font-semibold text-gray-900">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4 border-t border-brand-green/20 pt-8">
                            <p className="text-green-800 font-medium">
                                {events.note}
                            </p>
                            <p className="text-sm text-gray-500 italic">
                                {events.capacityNote}
                            </p>
                        </div>

                        <div className="mt-10">
                            <a
                                href="mailto:info@quincygolflounge.com"
                                className="inline-block bg-brand-green text-white px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity shadow-lg shadow-brand-green/20"
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
