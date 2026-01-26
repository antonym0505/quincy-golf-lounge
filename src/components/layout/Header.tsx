import { Link } from 'react-router-dom';

import TransparentLogo from '../../assets/logo_transparent.svg';
import NameWhite from '../../assets/name_white.svg';

export default function Header() {
    return (
        <header className="w-full aspect-[6/5] bg-[url('/src/assets/golf_swing.png')] bg-cover bg-no-repeat flex flex-col">
            <nav className="container px-4 py-4 flex justify-center mx-auto">
                <Link to="/">
                    <img src={TransparentLogo} alt="Quincy Golf Lounge" className="h-28 w-auto" />
                </Link>
            </nav>
            <div className="flex-1 flex flex-col items-center justify-center gap-4">
                <img src={NameWhite} alt="Quincy Golf Lounge" />
                <a
                    href="https://www.yourgolfbooking.com/venues/quincy-golf-lounge/booking"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-brand-green text-brand-cream text-4xl font-main uppercase px-6 py-3"
                >
                    Book A Bay
                </a>
            </div>
        </header>
    );
}
