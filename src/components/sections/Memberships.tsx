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
                        <p className="text-sm font-main">
                            Weekdays (excluding holidays)
                        </p>
                        <p className="text-sm font-main">
                            2 hours/day max.
                        </p>
                        <table className="my-2 mx-auto">
                            <tr>
                                <td className="text-sm">
                                    Monthly
                                </td>
                                <td className="text-sm">
                                    $399
                                </td>
                                {/* <td className="text-xs text-balance">
                                    Valid for 1 month from signup
                                </td> */}
                            </tr>
                            <tr>
                                <td className="text-sm whitespace-nowrap">
                                    3 Month
                                </td>
                                <td className="text-sm">
                                    $1200
                                </td>
                                {/* <td className="text-xs text-balance">
                                    Valid for 6 months from signup
                                </td> */}
                            </tr>
                            <tr>
                                <td className="text-sm whitespace-nowrap">
                                    6 Month
                                </td>
                                <td className="text-sm">
                                    $2000
                                </td>
                                {/* <td className="text-xs text-balance">
                                    Valid for 6 months from signup
                                </td> */}
                            </tr>
                            <tr>
                                <td className="text-sm">
                                    Annually
                                </td>
                                <td className="text-sm">
                                    $2600
                                </td>
                                {/* <td className="text-xs text-balance">
                                    Valid for 12 months from signup
                                </td> */}
                            </tr>
                        </table>
                        <p className="text-sm font-main">
                            $10 per guest (4 people max.)
                        </p>
                        <p className="text-sm font-main">
                            Member must be present
                        </p>
                        <p className="text-sm font-main">
                            No refunds
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="text-2xl font-info mb-2">Clubhouse Membership</h3>
                        <p className="text-xl font-main">
                            Unlimited Play
                        </p>
                        <p className="text-sm font-main">
                            Unlimited Guests
                        </p>
                        <p className="text-sm font-main">
                            2 hours/day max.
                        </p>
                        <table className="my-2 mx-auto">
                            <tr>
                                <td className="text-sm">
                                    Monthly
                                </td>
                                <td className="text-sm">
                                    $550
                                </td>
                            </tr>
                            <tr>
                                <td className="text-sm whitespace-nowrap">
                                    3 Month
                                </td>
                                <td className="text-sm">
                                    $1400
                                </td>
                            </tr>
                            <tr>
                                <td className="text-sm whitespace-nowrap">
                                    6 Month
                                </td>
                                <td className="text-sm">
                                    $2100
                                </td>
                            </tr>
                            <tr>
                                <td className="text-sm">
                                    Annually
                                </td>
                                <td className="text-sm">
                                    $2900
                                </td>
                            </tr>
                        </table>
                        <p className="text-sm font-main">
                            $0 per guest (4 people max.)
                        </p>
                        <p className="text-sm font-main">
                            Member must be present
                        </p>
                        <p className="text-sm font-main">
                            No refunds
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
