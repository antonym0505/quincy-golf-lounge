// Re-export types from services for convenience
export type { Bay, TimeSlot, Booking } from '../services/trackman';

// Additional shared types
export interface ContactInfo {
    name: string;
    email: string;
    phone: string;
}

export interface BusinessHours {
    day: string;
    open: string;
    close: string;
}
