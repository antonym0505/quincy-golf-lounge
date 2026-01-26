export default function Pricing() {
    return (
        <section className="py-20" id="pricing">
            <div className="container mx-auto px-4 text-brand-cream">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-info text-center mb-12">
                    Guest Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    <div className="flex flex-col items-center">
                        <h3 className="text-4xl font-info mb-2">Early Bird</h3>
                        <p className="text-xl font-main">
                            $39/hour
                        </p>
                        <p className="text-xl font-main">
                            Before 12pm
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="text-4xl font-info mb-2">Weekday</h3>
                        <p className="text-xl font-main">
                            <s>$50</s>
                            &nbsp;$45/hour
                        </p>
                        <p className="text-xl font-main">
                            Mon–Thu (9am–4pm)
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="text-4xl font-info mb-2">Weekday Evening</h3>
                        <p className="text-xl font-main">
                            <s>$60</s>
                            &nbsp;$55/hour
                        </p>
                        <p className="text-xl font-main">
                            Mon–Thu (4pm–10pm)
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="text-4xl font-info mb-2">Weekend</h3>
                        <p className="text-xl font-main">
                            <s>$65</s>
                            &nbsp;$60/hour
                        </p>
                        <p className="text-xl font-main">
                            Fri–Sun (All Day)
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
