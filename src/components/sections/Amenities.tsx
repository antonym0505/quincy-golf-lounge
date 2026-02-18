export default function Amenities() {
    return (
        <section className="flex items-center justify-center h-half w-full mb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    <div className="aspect-square bg-[url('/src/assets/golf_ball.png')] bg-cover bg-no-repeat w-full max-w-[320px] mx-auto relative">
                        <div className="bg-[#D9D9D988] shadow-info text-[#1A2E1E] font-hero text-center absolute inset-8 flex flex-col items-center justify-center p-2 overflow-hidden">
                            <h3 className="flex-1 text-2xl m-auto leading-tight p-2">
                                Trackman
                                <br />
                                Technology
                            </h3>
                            <p className="flex-2 text-lg leading-tight p-2 text-balance">
                                Powered by Trackman, the industry leader in golf simulation used by professionals worldwide.
                            </p>
                        </div>
                    </div>
                    {/* <div className="aspect-square bg-[url('/src/assets/golf_ball.png')] bg-cover bg-no-repeat w-full max-w-[320px] mx-auto relative">
                        <div className="bg-[#D9D9D988] shadow-info text-[#1A2E1E] font-hero text-center absolute inset-8 flex flex-col items-center justify-center p-2 overflow-hidden">
                            <h3 className="flex-1 text-2xl m-auto leading-tight p-2">
                                Cannabis
                                <br />
                                Lounge
                            </h3>
                            <p className="flex-2 text-lg leading-tight p-2 text-balance">
                                Offering products from Quincy Cannabis Company. Coming soon!
                            </p>
                        </div>
                    </div> */}
                    <div className="aspect-square bg-[url('/src/assets/golf_ball.png')] bg-cover bg-no-repeat w-full max-w-[320px] mx-auto relative">
                        <div className="bg-[#D9D9D988] shadow-info text-[#1A2E1E] font-hero text-center absolute inset-8 flex flex-col items-center justify-center p-2 overflow-hidden">
                            <h3 className="flex-1 text-2xl m-auto leading-tight p-2">
                                Private
                                <br />
                                Simulator
                            </h3>
                            <p className="flex-2 text-lg leading-tight p-2 text-balance">
                                Reserve your own bay for practice or play. Ideal for individuals and small groups up to 4 players.
                            </p>
                        </div>
                    </div>
                    <div className="aspect-square bg-[url('/src/assets/golf_ball.png')] bg-cover bg-no-repeat w-full max-w-[320px] mx-auto relative">
                        <div className="bg-[#D9D9D988] shadow-info text-[#1A2E1E] font-hero text-center absolute inset-8 flex flex-col items-center justify-center p-2 overflow-hidden">
                            <h3 className="flex-1 text-2xl m-auto leading-tight p-2">
                                Juice Bar &
                                <br />
                                Snacks
                            </h3>
                            <p className="flex-2 text-lg leading-tight p-2 text-balance">
                                Fresh juices and vending options available.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
