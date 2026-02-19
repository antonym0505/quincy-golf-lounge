export default function Memberships() {
    return (
        <section className="flex items-center justify-center pt-10 pb-20 lg:pt-16 lg:pb-32 w-full" id="memberships">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
                    <div className="flex flex-col items-center text-brand-cream text-center">
                        <h3 className="text-2xl lg:text-3xl font-info mb-6 border-b border-brand-cream/20 w-full pb-3">Early Bird Membership</h3>
                        <p className="text-xl lg:text-2xl font-main">Unlimited Play Until 4pm</p>
                        <p className="text-sm lg:text-base font-main opacity-70 mb-6">Weekdays (excluding holidays)</p>

                        <div className="w-full space-y-2 mb-8 font-main text-lg lg:text-xl">
                            <div className="flex justify-between border-b border-brand-cream/10 pb-1"><span>Monthly</span><span>$450</span></div>
                            <div className="flex justify-between border-b border-brand-cream/10 pb-1"><span>3 Month</span><span>$1200</span></div>
                            <div className="flex justify-between border-b border-brand-cream/10 pb-1"><span>6 Month</span><span>$2000</span></div>
                            <div className="flex justify-between border-b border-brand-cream/10 pb-1"><span>Annually</span><span>$2600</span></div>
                        </div>

                        <div className="space-y-1 opacity-90 text-xs lg:text-sm">
                            <p className="font-main">2 hours/day max.</p>
                            <p className="font-main">$10 per guest (4 people max.)</p>
                            <p className="font-main italic">Member must be present</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center text-brand-cream text-center">
                        <h3 className="text-2xl lg:text-3xl font-info mb-6 border-b border-brand-cream/20 w-full pb-3">Clubhouse Membership</h3>
                        <p className="text-xl lg:text-2xl font-main font-bold">Unlimited Play</p>
                        <p className="text-sm lg:text-base font-main opacity-70 mb-6">Unlimited Guests</p>

                        <div className="w-full space-y-2 mb-8 font-main text-lg lg:text-xl">
                            <div className="flex justify-between border-b border-brand-cream/10 pb-1"><span>Monthly</span><span>$550</span></div>
                            <div className="flex justify-between border-b border-brand-cream/10 pb-1"><span>3 Month</span><span>$1400</span></div>
                            <div className="flex justify-between border-b border-brand-cream/10 pb-1"><span>6 Month</span><span>$2100</span></div>
                            <div className="flex justify-between border-b border-brand-cream/10 pb-1"><span>Annually</span><span>$2900</span></div>
                        </div>

                        <div className="space-y-1 opacity-90 text-xs lg:text-sm">
                            <p className="font-main">2 hours/day max.</p>
                            <p className="font-main">$0 per guest (4 people max.)</p>
                            <p className="font-main italic">Member must be present</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
