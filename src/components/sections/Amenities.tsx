export default function Amenities() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="aspect-square bg-[url('/src/assets/golf_ball.png')] bg-cover bg-no-repeat flex items-center justify-center p-12">
                        <div className="bg-[#D9D9D947] text-[#1A2E1E] font-hero text-center w-full h-full">
                            <h3 className="text-4xl p-4 line-clamp-2 text-visible">
                                Trackman
                                <br />
                                Technology
                            </h3>
                            <p className="text-xl text-wrap p-2">
                                Powered by Trackman, the industry leader in golf simulation used by professionals worldwide.
                            </p>
                        </div>
                    </div>
                    <div className="aspect-square bg-[url('/src/assets/golf_ball.png')] bg-cover bg-no-repeat flex items-center justify-center p-12">
                        <div className="bg-[#D9D9D947] text-[#1A2E1E] font-hero text-center w-full h-full">
                            <h3 className="text-4xl p-4 line-clamp-2 text-visible">
                                Cannabis
                                <br />
                                Lounge
                            </h3>
                            <p className="text-xl text-wrap p-2">
                                Offering products from Quincy Cannabis Company. Coming soon!
                            </p>
                        </div>
                    </div>
                    <div className="aspect-square bg-[url('/src/assets/golf_ball.png')] bg-cover bg-no-repeat flex items-center justify-center p-12">
                        <div className="bg-[#D9D9D947] text-[#1A2E1E] font-hero text-center w-full h-full">
                            <h3 className="text-4xl p-4 line-clamp-2 text-visible">
                                Private
                                <br />
                                Bay
                            </h3>
                            <p className="text-xl text-wrap p-2">
                                Reserve your own bay for practice or play. Ideal for individuals and small groups up to 4 players.
                            </p>
                        </div>
                    </div>
                    <div className="aspect-square bg-[url('/src/assets/golf_ball.png')] bg-cover bg-no-repeat flex items-center justify-center p-12">
                        <div className="bg-[#D9D9D947] text-[#1A2E1E] font-hero text-center w-full h-full">
                            <h3 className="text-4xl p-4 line-clamp-2 text-visible">
                                Juice Bar &
                                <br />
                                Snacks
                            </h3>
                            <p className="text-xl text-wrap p-2">
                                Fresh juices and vending options available. We are an alcohol-free environment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
