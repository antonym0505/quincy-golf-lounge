export default function Footer() {
    return (
        <footer className="w-full bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Business Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quincy Golf Lounge</h3>
                        <p className="text-gray-400">
                            Premium indoor golf simulator experience in Quincy.
                        </p>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="font-semibold mb-4">Hours</h4>
                        <ul className="text-gray-400 space-y-2">
                            <li>Monday - Thursday: 10am - 10pm</li>
                            <li>Friday - Saturday: 10am - 12am</li>
                            <li>Sunday: 10am - 8pm</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <ul className="text-gray-400 space-y-2">
                            <li>123 Main Street, Quincy, MA 02169</li>
                            <li>Phone: (617) 555-0123</li>
                            <li>Email: info@quincygolflounge.com</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Quincy Golf Lounge. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
