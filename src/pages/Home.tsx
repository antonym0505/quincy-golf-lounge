import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Amenities from '../components/sections/Amenities';
import Pricing from '../components/sections/Pricing';
import Events from '../components/sections/Events';
import Contact from '../components/sections/Contact';

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Amenities />
            <Pricing />
            <Events />
            <Contact />
        </>
    );
}
