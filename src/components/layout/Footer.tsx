import Logo from '../../assets/Quincy_Golf_Lounge_Logo.svg';

export default function Footer() {
    return (
        <footer className="w-full py-12 text-brand-cream bg-[#1A2E1E]">
            <div className="container px-12">
                {/* Info Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-9 max-w-3xl">
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
                            <a href="mailto:info@quincygolflounge.com" className="hover:opacity-80 transition-opacity">
                                info@quincygolflounge.com
                            </a>
                        </p>
                    </div>
                    {/* Hours */}
                    <div className="justify-self-center md:justify-self-start text-center md:text-left">
                        <h4 className="font-info text-lg mb-2 uppercase tracking-wider">Hours</h4>
                        <p className="font-main">
                            9am – 10pm
                        </p>
                        <p className="font-main">
                            723 Washington St.
                            <br />
                            Quincy, MA 02169
                        </p>
                    </div>
                </div>
            </div>
            <div className="pt-12 -mb-12 text-center text-brand-cream/40 font-main text-sm">
                <p>&copy; {new Date().getFullYear()} Quincy Golf Lounge. All rights reserved.</p>
            </div>
        </footer>
    );
}
