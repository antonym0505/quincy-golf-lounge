export default function Contact() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                    Visit Us
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">Get in Touch</h3>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <span className="text-2xl">📍</span>
                                <div>
                                    <div className="font-medium text-gray-900">Address</div>
                                    <div className="text-gray-600">
                                        123 Main Street<br />
                                        Quincy, MA 02169
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <span className="text-2xl">📞</span>
                                <div>
                                    <div className="font-medium text-gray-900">Phone</div>
                                    <a href="tel:+16175550123" className="text-green-600 hover:text-green-700">
                                        (617) 555-0123
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <span className="text-2xl">✉️</span>
                                <div>
                                    <div className="font-medium text-gray-900">Email</div>
                                    <a href="mailto:info@quincygolflounge.com" className="text-green-600 hover:text-green-700">
                                        info@quincygolflounge.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map placeholder */}
                    <div className="bg-gray-200 rounded-xl h-64 lg:h-auto flex items-center justify-center">
                        <div className="text-gray-500 text-center">
                            <div className="text-4xl mb-2">🗺️</div>
                            <div>Map will be embedded here</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
