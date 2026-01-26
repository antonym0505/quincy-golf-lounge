import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { FacilityInfo } from '../types/facility';
import { defaultFacility } from '../data/defaultFacility';

interface FacilityContextValue {
    facility: FacilityInfo;
    loading: boolean;
    error: Error | null;
}

const FacilityContext = createContext<FacilityContextValue | undefined>(undefined);

interface FacilityProviderProps {
    children: ReactNode;
}

/**
 * FacilityProvider
 * 
 * Provides facility information to all child components.
 * Currently uses default data, but can be extended to fetch from an API.
 */
export function FacilityProvider({ children }: FacilityProviderProps) {
    const [facility, _setFacility] = useState<FacilityInfo>(defaultFacility);
    const [loading, _setLoading] = useState(false);
    const [error, _setError] = useState<Error | null>(null);

    useEffect(() => {
        // TODO: Fetch facility data from API when available
        // For now, use default data
        async function fetchFacilityData() {
            // Example of future API integration:
            // setLoading(true);
            // try {
            //   const response = await fetch('/api/facility');
            //   const data = await response.json();
            //   setFacility(data);
            // } catch (err) {
            //   setError(err instanceof Error ? err : new Error('Failed to fetch facility data'));
            // } finally {
            //   setLoading(false);
            // }
        }

        fetchFacilityData();
    }, []);

    return (
        <FacilityContext.Provider value={{ facility, loading, error }}>
            {children}
        </FacilityContext.Provider>
    );
}

/**
 * useFacility hook
 * 
 * Access facility data from any component within the FacilityProvider.
 * Throws an error if used outside of the provider.
 */
export function useFacility(): FacilityContextValue {
    const context = useContext(FacilityContext);

    if (context === undefined) {
        throw new Error('useFacility must be used within a FacilityProvider');
    }

    return context;
}
