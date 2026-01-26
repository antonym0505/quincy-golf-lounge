import { useState, useEffect } from 'react';
import type { Bay, TimeSlot } from '../services/trackman';
import { getBays, getTimeSlots } from '../services/trackman';

interface UseTrackmanResult {
    bays: Bay[];
    timeSlots: TimeSlot[];
    loading: boolean;
    error: Error | null;
    selectedBay: string | null;
    selectedDate: string | null;
    setSelectedBay: (bayId: string | null) => void;
    setSelectedDate: (date: string | null) => void;
}

/**
 * React hook for Trackman booking integration
 * 
 * TODO: Complete implementation once Trackman API access is obtained
 */
export function useTrackman(facilityId?: string): UseTrackmanResult {
    const [bays, setBays] = useState<Bay[]>([]);
    const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [selectedBay, setSelectedBay] = useState<string | null>(null);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);

    // Fetch bays when facility ID is available
    useEffect(() => {
        if (!facilityId) return;

        async function fetchBays() {
            setLoading(true);
            setError(null);
            try {
                const fetchedBays = await getBays(facilityId!);
                setBays(fetchedBays);
            } catch (err) {
                setError(err instanceof Error ? err : new Error('Failed to fetch bays'));
            } finally {
                setLoading(false);
            }
        }

        fetchBays();
    }, [facilityId]);

    // Fetch time slots when bay and date are selected
    useEffect(() => {
        if (!selectedBay || !selectedDate) {
            setTimeSlots([]);
            return;
        }

        async function fetchTimeSlots() {
            setLoading(true);
            setError(null);
            try {
                const slots = await getTimeSlots(selectedBay!, selectedDate!);
                setTimeSlots(slots);
            } catch (err) {
                setError(err instanceof Error ? err : new Error('Failed to fetch time slots'));
            } finally {
                setLoading(false);
            }
        }

        fetchTimeSlots();
    }, [selectedBay, selectedDate]);

    return {
        bays,
        timeSlots,
        loading,
        error,
        selectedBay,
        selectedDate,
        setSelectedBay,
        setSelectedDate,
    };
}
