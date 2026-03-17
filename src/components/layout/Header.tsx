import { Link } from 'react-router-dom';

import TransparentLogo from '../../assets/logo_transparent.svg';
import NameWhite from '../../assets/name_white.svg';

export default function Header() {
    return (
        <header className="relative h-screen bg-[url('/src/assets/birmingham-mail.webp')] bg-cover lg:bg-contain bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-brand-black/40 backdrop-blur-[1px]"></div>
            <div className="relative z-10 flex flex-col h-full">
                <nav className="px-4 py-4 flex justify-end mx-auto">
                    <Link to="/">
                        <img src={TransparentLogo} alt="Quincy Golf Lounge" className="h-12 w-auto" />
                    </Link>
                </nav>
                <div className="flex-1 flex flex-col items-center justify-center gap-4">
                    <img src={NameWhite} alt="Quincy Golf Lounge" className="h-24 lg:h-32 w-auto" />
                    <a
                        href="https://www.yourgolfbooking.com/venues/quincy-golf-lounge/booking"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-brand-green text-brand-cream text-xl lg:text-2xl font-main uppercase px-4 py-2"
                    >
                        Book A Bay
                    </a>
                </div>
            </div>
        </header>
    );
}
