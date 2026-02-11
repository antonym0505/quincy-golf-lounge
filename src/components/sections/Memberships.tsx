export default function Memberships() {
    return (
        <section className="flex items-center justify-center h-half w-full" id="memberships">
            <div className="container mx-auto p-4 text-brand-cream">
                {/* <h2 className="text-4xl font-info text-center mb-12">
                    Membership Information
                </h2> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
                    <div className="flex flex-col items-center">
                        <h3 className="text-2xl font-info mb-2">Early Bird Membership</h3>
                        <p className="text-xl font-main">
                            Unlimited Play Until 4pm
                        </p>
                        <p className="text-lg font-main">
                            Weekdays (excluding holidays)
                        </p>
                        <table className="font-main my-2 mx-auto text-lg whitespace-nowrap">
                            <tr>
                                <td>Monthly</td>
                                <td>$450</td>
                            </tr>
                            <tr>
                                <td>3 Month</td>
                                <td>$1200</td>
                            </tr>
                            <tr>
                                <td>6 Month</td>
                                <td>$2000</td>
                            </tr>
                            <tr>
                                <td>Annually</td>
                                <td>$2600</td>
                            </tr>
                        </table>
                        <p className="text-md font-main">
                            2 hours/day max.
                        </p>
                        <p className="text-md font-main">
                            $10 per guest (4 people max.)
                        </p>
                        <p className="text-md font-main">
                            Member must be present
                        </p>
                        <p className="text-md font-main">
                            No refunds
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="text-2xl font-info mb-2">Clubhouse Membership</h3>
                        <p className="text-xl font-main">
                            Unlimited Play
                        </p>
                        <p className="text-lg font-main">
                            Unlimited Guests
                        </p>
                        <table className="font-main my-2 mx-auto text-lg whitespace-nowrap">
                            <tr>
                                <td>Monthly</td>
                                <td>$550</td>
                            </tr>
                            <tr>
                                <td>3 Month</td>
                                <td>$1400</td>
                            </tr>
                            <tr>
                                <td>6 Month</td>
                                <td>$2100</td>
                            </tr>
                            <tr>
                                <td>Annually</td>
                                <td>$2900</td>
                            </tr>
                        </table>
                        <p className="text-md font-main">
                            2 hours/day max.
                        </p>
                        <p className="text-md font-main">
                            $0 per guest (4 people max.)
                        </p>
                        <p className="text-md font-main">
                            Member must be present
                        </p>
                        <p className="text-md font-main">
                            No refunds
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
