import Logo from '../../assets/logos/Quincy_Golf_Lounge_Logo_Color.png';

export default function Footer() {
    return (
        <footer className="w-full py-12 text-brand-cream/60 border-t border-white/10">
            <div className="container mx-auto px-4 w-fit">
                {/* Info Section */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-left">
                    <div className="flex-shrink-0">
                        <img src={Logo} alt="Quincy Golf Lounge" className="h-24 w-auto" />
                    </div>
                    {/* Hours */}
                    <div>
                        <h4 className="font-info text-xl mb-3 uppercase tracking-wider">Visit</h4>
                        <p className="font-main text-lg">
                            Sun – Sat&emsp;|&emsp;9am – 10pm
                        </p>
                        <p className="font-main text-lg">
                            723 Washington St.
                            Quincy, MA 02169
                        </p>
                    </div>
                    {/* Contact */}
                    <div>
                        <h4 className="font-info text-xl mb-3 uppercase tracking-wider">Contact</h4>
                        <p className="font-main text-lg">
                            <a href="tel:+17816331174" className="hover:opacity-80 transition-opacity">
                                (781) 633-1174
                            </a>
                        </p>
                        <p className="font-main text-lg lowercase">
                            <a href="mailto:info@quincygolflounge.com" className="hover:opacity-80 transition-opacity">
                                info@quincygolflounge.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/5 text-center text-brand-cream/40 font-main text-sm">
                <p>&copy; {new Date().getFullYear()} Quincy Golf Lounge. All rights reserved.</p>
            </div>
        </footer>
    );
}
