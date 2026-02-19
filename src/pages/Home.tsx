import Hero from '../components/sections/Hero';
import Pricing from '../components/sections/Pricing';
import Memberships from '../components/sections/Memberships';

export default function Home() {
    return (
        <>
            <Hero />
            <Pricing />
            <Memberships />
            <div className="font-main my-16 lg:my-24 p-4 text-brand-cream text-center text-lg w-full">
                For private events, including corporate gatherings and celebrations, please call to discuss details.
            </div>
        </>
    );
}
