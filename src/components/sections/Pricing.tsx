export default function Pricing() {
    return (
        <section className="relative flex items-center justify-center pt-20 pb-10 lg:pt-32 lg:pb-16 min-h-[600px] w-full bg-[url('/src/assets/green_garden_course.png')] bg-cover bg-center bg-no-repeat overflow-hidden" id="pricing">
            {/* Elegant dark overlay */}
            <div className="absolute inset-0 bg-brand-black/60 backdrop-blur-[1px]"></div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl lg:text-6xl font-info text-center mb-16 text-brand-cream">
                    Guest Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-7xl mx-auto mb-20 lg:mb-32">
                    <div className="flex flex-col items-center text-brand-cream text-center">
                        <h3 className="text-2xl lg:text-3xl font-info mb-6 border-b border-brand-cream/20 w-full pb-3">Off Peak</h3>
                        <p className="text-xl lg:text-2xl font-main">Mon–Thu</p>
                        <p className="text-sm lg:text-base font-main opacity-70">(9am–4pm)</p>
                        <p className="text-xl lg:text-2xl font-main mt-4 mb-6">$35/hour</p>
                        <div className="space-y-1 opacity-90">
                            <p className="text-xs lg:text-sm font-main">$10 per additional player</p>
                            <p className="text-xs lg:text-sm font-main">4 people max.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-brand-cream text-center">
                        <h3 className="text-2xl lg:text-3xl font-info mb-6 border-b border-brand-cream/20 w-full pb-3">Peak</h3>
                        <p className="text-xl lg:text-2xl font-main">Mon–Thu</p>
                        <p className="text-sm lg:text-base font-main opacity-70">(4pm–10pm)</p>
                        <p className="text-xl lg:text-2xl font-main mt-4 mb-6">$45/hour</p>
                        <div className="space-y-1 opacity-90">
                            <p className="text-xs lg:text-sm font-main">$10 per additional player</p>
                            <p className="text-xs lg:text-sm font-main">4 people max.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-brand-cream text-center">
                        <h3 className="text-2xl lg:text-3xl font-info mb-6 border-b border-brand-cream/20 w-full pb-3">Weekend</h3>
                        <p className="text-xl lg:text-2xl font-main text-balance">Fri–Sun & Holidays</p>
                        <p className="text-sm lg:text-base font-main opacity-70">(9am–10pm)</p>
                        <p className="text-xl lg:text-2xl font-main mt-4 mb-6">$60/hour</p>
                        <div className="space-y-1 opacity-90">
                            <p className="text-xs lg:text-sm font-main">$10 per additional player</p>
                            <p className="text-xs lg:text-sm font-main">4 people max.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-brand-cream text-center">
                        <h3 className="text-2xl lg:text-3xl font-info mb-6 border-b border-brand-cream/20 w-full pb-3">Extras</h3>
                        <p className="text-xl lg:text-2xl font-main">Rental Clubs</p>
                        <p className="text-sm lg:text-base font-main opacity-70">(Lefty & Righty)</p>
                        <p className="text-xl lg:text-2xl font-main mt-4 mb-6">$25/set</p>
                        <div className="space-y-1 opacity-90">
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
