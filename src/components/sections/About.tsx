export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        About Quincy Golf Lounge
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Located in the heart of Quincy, we offer a premium indoor golf experience
                        featuring state-of-the-art Trackman simulators. Whether you're looking to
                        improve your game, enjoy a round with friends, or host a private event,
                        our comfortable lounge atmosphere has everything you need.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-green-600 mb-2">4</div>
                            <div className="text-gray-600">Simulator Bays</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-green-600 mb-2">200+</div>
                            <div className="text-gray-600">Courses Available</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-green-600 mb-2">7</div>
                            <div className="text-gray-600">Days a Week</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
