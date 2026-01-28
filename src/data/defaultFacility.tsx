import leafIcon from '../assets/leaf.png';
import logoColor from '../assets/logos/Quincy_Golf_Lounge_Logo_Color.png';
import logoWhite from '../assets/logos/Quincy_Golf_Lounge_Logo_White.png';
import logoBlack from '../assets/logos/Quincy_Golf_Lounge_Logo_Black.png';
import type { FacilityInfo } from '../types/facility';

/**
 * Default facility data
 * 
 * This serves as the initial/fallback data for the FacilityContext.
 * Eventually this will be fetched from an API.
 */
export const defaultFacility: FacilityInfo = {
    // Branding
    name: 'Quincy Golf Lounge',
    tagline: 'Play. Practice. Chill.',
    description: `Quincy Golf Lounge brings world-class Trackman golf simulation to the heart of Quincy. 
    Whether you’re dialing in your swing, playing iconic courses, or just looking for a fun indoor activity, 
    our private simulator bay delivers a premium, comfortable experience year-round. 
    We are family-friendly, alcohol-free, and offer a juice bar and vending options on site.`,
    logos: {
        color: logoColor,
        white: logoWhite,
        black: logoBlack,
    },

    // Contact
    address: {
        street: '723 Washington Street',
        city: 'Quincy',
        state: 'MA',
        zip: '02169',
    },
    phone: '+16170000000',
    email: 'info@quincygolflounge.com',

    // Operations
    hours: [
        { days: '', open: '9:00 AM', close: '10:00 PM' },
    ],

    // Stats
    stats: [
        { value: '1', label: 'Simulator Bay' },
        { value: '200+', label: 'Courses Available' },
        { value: '7', label: 'Days a Week' },
    ],

    // Amenities
    amenities: [
        {
            title: 'Trackman Technology',
            description: 'Powered by Trackman, the industry leader in golf simulation used by professionals worldwide.',
            icon: '🎯',
        },
        {
            title: 'Private Simulator Bay',
            description: 'Reserve your own bay for practice or play. Ideal for individuals and small groups up to 4 players.',
            icon: '🏌️',
        },
        {
            title: 'Juice Bar & Snacks',
            description: 'Fresh juices and vending options available. We are an alcohol-free environment.',
            icon: '🥤',
        },
        {
            title: 'Cannabis Lounge',
            description: 'Offering products from Quincy Cannabis Company. Coming soon!',
            icon: <img src={leafIcon} alt="Leaf" className="h-lh filter-[var(--filter-leaf)]" />,
        }
    ],

    // Pricing
    pricing: [
        {
            name: 'Early Bird',
            price: '$39',
            unit: '/hour',
            description: 'Before 12pm',
            features: [
                'Up to 4 players per bay',
                'Trackman precision',
                'Weekend fun with friends',
            ],
            popular: true,
        },
        {
            name: 'Weekday Rate',
            price: '$50',
            unit: '/hour',
            description: 'Mon–Thu (9am–4pm)',
            features: [
                'Up to 4 players per bay',
                'Trackman precision',
                '200+ courses',
            ],
            special: '$45',
        },
        {
            name: 'Weekday Evenings',
            price: '$60',
            unit: '/hour',
            description: 'Mon–Thu (4pm–10pm)',
            features: [
                'Up to 4 players per bay',
                'Trackman precision',
                'Perfect for after work',
            ],
            special: '$55',
        },
        {
            name: 'Weekend Rate',
            price: '$65',
            unit: '/hour',
            description: 'Fri–Sun (All Day)',
            features: [
                'Up to 4 players per bay',
                'Trackman precision',
                'Weekend fun with friends',
            ],
            special: '$60',
        },
    ],

    // Booking info
    bookingInfo: [
        'Bay accommodates up to 4 players',
        'Club Rentals: $10 per session',
        'Trackman Combine: $20',
        'Free cancellation up to 24 hours before your session',
    ],

    // Events
    events: {
        title: 'Events & Group Bookings',
        description: 'Quincy Golf Lounge is available for small group events, including:',
        items: [
            'Birthday parties',
            'Corporate outings',
            'Team nights',
            'League play',
        ],
        note: 'We are currently accepting event inquiries for February and beyond.',
        capacityNote: 'Note: We are launching with one simulator bay (up to 4 players at a time). Larger groups can be accommodated with rotating sessions.',
    },
};
