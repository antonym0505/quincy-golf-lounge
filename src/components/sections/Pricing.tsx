export default function Pricing() {
    return (
        <section className="flex items-center justify-center h-half" id="pricing">
            <div className="container mx-auto p-4 text-brand-cream">
                <h2 className="text-4xl font-info text-center mb-12">
                    Guest Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    <div className="flex flex-col items-center">
                        <h3 className="text-2xl font-info mb-2">Off Peak</h3>
                        <p className="text-xl font-main">
                            Mon–Thu (9am–4pm)
                        </p>
                        <p className="text-lg font-main">
                            $35/hour
                        </p>
                        <p className="text-md font-main">
                            $10 per additional player
                        </p>
                        <p className="text-md font-main">
                            4 people max.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="text-2xl font-info mb-2">Peak</h3>
                        <p className="text-xl font-main">
                            Mon–Thu (4pm–10pm)
                        </p>
                        <p className="text-lg font-main">
                            $45/hour
                        </p>
                        <p className="text-md font-main">
                            $10 per additional player
                        </p>
                        <p className="text-md font-main">
                            4 people max.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="text-2xl font-info mb-2">Weekend</h3>
                        <p className="text-xl font-main text-balance text-center">
                            Fri–Sun & Holidays (9am–10pm)
                        </p>
                        <p className="text-lg font-main">
                            $60/hour
                        </p>
                        <p className="text-md font-main">
                            $10 per additional player
                        </p>
                        <p className="text-md font-main">
                            4 people max.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="text-2xl font-info mb-2">Rentals</h3>
                        <p className="text-xl font-main">
                            Rental Clubs Available
                        </p>
                        <p className="text-lg font-main">
                            $25
                        </p>
                        <p className="text-md font-main">
                            Left-handed and right-handed sets
                        </p>
                    </div>
                </div>
            </div>
        </section >
    );
}
