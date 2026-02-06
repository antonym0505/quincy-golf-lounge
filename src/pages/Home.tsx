import Hero from '../components/sections/Hero';
import Amenities from '../components/sections/Amenities';
import Pricing from '../components/sections/Pricing';
import Memberships from '../components/sections/Memberships';

export default function Home() {
    return (
        <>
            <Hero />
            <Amenities />
            <Pricing />
            <Memberships />
            <div className="my-8 text-brand-cream text-center w-full">
                For private events, including corporate gatherings and celebrations, please call to discuss details.
            </div>
        </>
    );
}
