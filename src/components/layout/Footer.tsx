import Logo from '../../assets/Quincy_Golf_Lounge_Logo.svg';

export default function Footer() {
    return (
        <footer className="w-full py-12 text-brand-cream bg-[#1A2E1E]">
            <div className="container px-12 mx-auto">
                {/* Info Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-9 max-w-3xl mx-auto">
                    <div className="flex-shrink-0 h-full justify-self-center md:justify-self-start">
                        <img src={Logo} alt="Quincy Golf Lounge" className="h-full w-auto md:shadow-info" />
                    </div>
                    {/* Contact */}
                    <div className="justify-self-center md:justify-self-start text-center md:text-left">
                        <h4 className="font-info text-lg mb-2 uppercase tracking-wider">Contact</h4>
                        <p className="font-main">
                            <a href="tel:+17816331174" className="hover:opacity-80 transition-opacity">
                                (781) 633-1174
                            </a>
                        </p>
                        <p className="font-main lowercase">
                            <a href="mailto:quincygolflounge@gmail.com" className="hover:opacity-80 transition-opacity">
                                quincygolflounge@gmail.com
                            </a>
                        </p>
                        <div className="mt-4 flex justify-center md:justify-start">
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-80 transition-opacity"
                                aria-label="Instagram"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </a>
                        </div>
                    </div>
                    {/* Hours */}
                    <div className="justify-self-center md:justify-self-start text-center md:text-left">
                        <h4 className="font-info text-lg mb-2 uppercase tracking-wider">Hours</h4>
                        <p className="font-main">
                            9am – 10pm
                        </p>
                        <a
                            className="font-main"
                            href="https://maps.app.goo.gl/KxG7vSKhJGd6eJS56"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            723 Washington St.
                            <br />
                            Quincy, MA 02169
                        </a>
                    </div>
                </div>
            </div>
            <div className="pt-16 pb-8 text-center text-brand-cream/40 font-main text-sm mt-12 border-t border-brand-cream/5">
                <p>&copy; {new Date().getFullYear()} Quincy Golf Lounge. All rights reserved.</p>
            </div>
        </footer>
    );
}
