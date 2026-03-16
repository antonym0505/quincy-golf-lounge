import { Link } from 'react-router-dom';

import TransparentLogo from '../../assets/logo_transparent.svg';
import LogoDark from '../../assets/logo_dark.svg';
import NameWhite from '../../assets/name_white.svg';
import NameColor from '../../assets/name_color.svg';

export default function Header() {
    const toggleTheme = () => {
        const theme = document.documentElement.getAttribute('data-theme');
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }

    return (
        // <header className="relative h-screen bg-[url('/src/assets/birmingham-mail.png')] dark:bg-[url('/src/assets/golf_swing.png')] bg-cover lg:bg-contain bg-center bg-no-repeat">
        <header className="relative h-screen bg-[url('/src/assets/birmingham-mail.png')] bg-cover lg:bg-contain bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px]"></div>
            <div className="flex flex-col h-full w-full relative z-10">
                <nav className="px-4 py-4 flex justify-center mx-auto">
                    <Link to="/" onClick={toggleTheme}>
                        <img src={TransparentLogo} alt="Quincy Golf Lounge" className="h-12 w-auto hidden dark:block" />
                        <img src={LogoDark} alt="Quincy Golf Lounge" className="h-12 w-auto dark:hidden" />
                    </Link>
                </nav>
                <div className="flex-1 flex flex-col items-center justify-center gap-4">
                    <img src={NameWhite} alt="Quincy Golf Lounge" className="h-24 lg:h-32 w-auto hidden dark:block" />
                    <img src={NameColor} alt="Quincy Golf Lounge" className="h-24 lg:h-32 w-auto block dark:hidden" />
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
