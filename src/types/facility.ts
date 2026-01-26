/**
 * Facility Information Types
 * 
 * These interfaces define the structure for all facility-related data
 * that will be provided via the FacilityContext.
 */

import type { ReactNode } from "react";

export interface Address {
    street: string;
    city: string;
    state: string;
    zip: string;
}

export interface BusinessHours {
    days: string;  // e.g., "Monday - Thursday"
    open: string;  // e.g., "10am"
    close: string; // e.g., "10pm"
}

export interface PricingTier {
    name: string;
    price: string;
    unit: string;
    description: string;
    features: string[];
    popular?: boolean;
    special?: string;
}

export interface Amenity {
    title: string;
    description: string;
    icon: ReactNode;
}

export interface FacilityStat {
    value: string;
    label: string;
}

export interface FacilityInfo {
    // Branding
    name: string;
    tagline: string;
    description: string;
    logos: {
        color: string;
        white: string;
        black: string;
    };

    // Contact
    address: Address;
    phone: string;
    email: string;

    // Operations
    hours: BusinessHours[];

    // Content
    stats: FacilityStat[];
    amenities: Amenity[];
    pricing: PricingTier[];

    // Booking info
    bookingInfo: string[];

    // Events
    events: {
        title: string;
        description: string;
        items: string[];
        note: string;
        capacityNote: string;
    };
}
