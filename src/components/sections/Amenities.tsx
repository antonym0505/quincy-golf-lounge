export default function Amenities() {
    return (
        <section className="flex items-center justify-center min-h-[50vh] w-full">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
                    <div className="aspect-square bg-[url('/src/assets/golf_ball.png')] bg-cover bg-no-repeat flex items-center justify-center p-12">
                        <div className="bg-[#D9D9D988] shadow-info text-[#1A2E1E] font-hero text-center w-full h-full p-2 flex flex-col">
                            <h3 className="text-2xl m-auto leading-tight mb-2 flex-1 flex items-center">
                                Trackman
                                <br />
                                Technology
                            </h3>
                            <p className="text-lg text-wrap leading-tight flex-1 flex items-start">
                                Powered by Trackman, the industry leader in golf simulation used by professionals worldwide.
                            </p>
                        </div>
                    </div>
                    <div className="aspect-square bg-[url('/src/assets/golf_ball.png')] bg-cover bg-no-repeat flex items-center justify-center p-12">
                        <div className="bg-[#D9D9D988] shadow-info text-[#1A2E1E] font-hero text-center w-full h-full p-2 flex flex-col">
                            <h3 className="text-2xl m-auto leading-tight mb-2 flex-1 flex items-center">
                                Cannabis
                                <br />
                                Lounge
                            </h3>
                            <p className="text-lg text-wrap leading-tight flex-1 flex items-start">
                                Offering products from Quincy Cannabis Company. Coming soon!
                            </p>
                        </div>
                    </div>
                    <div className="aspect-square bg-[url('/src/assets/golf_ball.png')] bg-cover bg-no-repeat flex items-center justify-center p-12">
                        <div className="bg-[#D9D9D988] shadow-info text-[#1A2E1E] font-hero text-center w-full h-full p-2 flex flex-col">
                            <h3 className="text-2xl m-auto leading-tight mb-2 flex-1 flex items-center">
                                Private
                                <br />
                                Simulator
                            </h3>
                            <p className="text-lg text-wrap leading-tight flex-1 flex items-start">
                                Reserve your own bay for practice or play. Ideal for individuals and small groups up to 4 players.
                            </p>
                        </div>
                    </div>
                    <div className="aspect-square bg-[url('/src/assets/golf_ball.png')] bg-cover bg-no-repeat flex items-center justify-center p-12">
                        <div className="bg-[#D9D9D988] shadow-info text-[#1A2E1E] font-hero text-center w-full h-full p-2 flex flex-col">
                            <h3 className="text-2xl m-auto leading-tight mb-2 flex-1 flex items-center">
                                Juice Bar &
                                <br />
                                Snacks
                            </h3>
                            <p className="text-lg text-wrap leading-tight flex-1 flex items-start">
                                Fresh juices and vending options available. We are an alcohol-free environment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
