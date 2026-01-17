import BookingPlaceholder from './BookingPlaceholder';
// import { useTrackman } from '../../hooks/useTrackman';

interface BookingWidgetProps {
    // Props for when Trackman is integrated
    facilityId?: string;
}

export default function BookingWidget({ facilityId: _facilityId }: BookingWidgetProps) {
    // TODO: Implement Trackman booking integration
    // const { bays, loading, error } = useTrackman(facilityId);

    // For now, show the placeholder
    const isTrackmanConnected = false;

    if (!isTrackmanConnected) {
        return <BookingPlaceholder />;
    }

    // TODO: Render actual booking interface when Trackman is connected
    return (
        <div className="space-y-6">
            {/* Bay selection */}
            <div className="grid grid-cols-2 gap-4">
                {/* Bay cards will go here */}
            </div>

            {/* Time slot selection */}
            <div>
                {/* Time slots will go here */}
            </div>

            {/* Booking form */}
            <form>
                {/* Form fields will go here */}
            </form>
        </div>
    );
}
