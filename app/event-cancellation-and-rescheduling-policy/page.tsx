import { Lock } from "lucide-react";
import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

export default function EventCancellationAndReschedulingPolicy() {
    return (
        <main>
            <NavBar />
            <div className="mb-6 mt-28 mx-auto text-center px-4">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-termsaccent-foreground">
                    BlacVolta Event Cancellation &amp; Rescheduling Policy
                </h1>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blacvolta-gold/10 text-blacvolta-gold text-sm font-medium mb-6">
                    <Lock className="h-4 w-4" />
                    Last Updated: September 2026
                </div>
            </div>

            <div className="text-sm my-6 max-w-4xl mx-auto md:text-lg text-white font-normal px-4">
                <p className="mb-3">
                    Event Organizers using BlacVolta are responsible for providing accurate event information and promptly notifying BlacVolta of cancellations, postponements and material changes.
                </p>
                <p>
                    This policy explains how those changes are handled.
                </p>
            </div>

            <section className="max-w-4xl mx-auto mb-6 px-4">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    1. Organizer responsibility
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        The Event Organizer is responsible for the production and delivery of its event.
                    </p>
                    <p className="my-2">
                        Unless BlacVolta is expressly identified as the Event Organizer or co-organizer, listing or selling tickets through BlacVolta does not make BlacVolta responsible for producing the event.
                    </p>
                    <p className="my-2">
                        Organizers are responsible for ensuring that event information—including date, time, location, lineup and admission requirements—is accurate.
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto mb-6 px-4">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    2. Event cancellations
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        An Event Organizer that decides to cancel an event must notify BlacVolta as soon as reasonably possible.
                    </p>
                    <p className="mt-3 mb-2 font-medium">BlacVolta may immediately:</p>
                    <ul className="list-disc pl-6 space-y-1.5 my-2">
                        <li>Stop further ticket sales.</li>
                        <li>Mark the event as cancelled.</li>
                        <li>Notify affected ticket holders.</li>
                        <li>Disable ticket transfers or related event functionality.</li>
                        <li>Suspend settlement of ticket revenue.</li>
                        <li>Begin the applicable refund process.</li>
                    </ul>
                    <p className="mt-4">
                        The organizer must not continue selling tickets to an event it knows will not proceed.
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto mb-6 px-4">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    3. Who pays when an event is cancelled?
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        Where cancellation is attributable to the Event Organizer, the Event Organizer is financially responsible for eligible ticket refunds.
                    </p>
                    <p className="my-2">
                        BlacVolta may deduct refund amounts from ticket revenue it is holding on behalf of the organizer.
                    </p>
                    <p className="my-2">
                        If funds have already been paid to the organizer, the organizer may be required to return sufficient funds to BlacVolta to cover approved refunds, chargebacks and associated obligations.
                    </p>
                    <p className="my-2">
                        This should also form part of the separate BlacVolta Organizer Agreement.
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto mb-6 px-4">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    4. Holding ticket revenue
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        To protect ticket holders, Event Organizers and the integrity of the BlacVolta ticketing platform, BlacVolta may retain all or a portion of ticket proceeds until an event has successfully taken place and applicable settlement conditions have been satisfied.
                    </p>
                    <p className="my-2">
                        The timing and amount of settlements may vary depending on the Event Organizer, event history, transaction volume, refund exposure, chargeback risk, event size and other reasonable risk considerations.
                    </p>
                    <p className="my-2">
                        BlacVolta may establish a refund and chargeback reserve by withholding a portion of ticket proceeds until after the event. This reserve may be used to cover approved refunds, payment disputes, chargebacks, reversals or other customer liabilities connected to the event.
                    </p>
                    <p className="my-2">
                        For new Event Organizers, high-volume events, events with significant advance ticket sales, events with elevated cancellation risk, or accounts with unusual refund or chargeback activity, BlacVolta may increase the amount retained or delay settlement until after the event.
                    </p>
                    <p className="my-2">
                        Where appropriate, BlacVolta may also release ticket proceeds in staged settlements, rather than paying the full available balance at once.
                    </p>
                    <p className="my-2">
                        The amount available for settlement may therefore be calculated after accounting for applicable deductions.
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto mb-6 px-4">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    5. Rescheduled events
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        If an event is moved to another date, existing tickets will ordinarily remain valid for the rescheduled event.
                    </p>
                    <p className="my-2">
                        The organizer must provide BlacVolta with the new date, time and any other material changes as soon as possible.
                    </p>
                    <p className="my-2">
                        BlacVolta may then communicate those changes directly to ticket holders through the app, email, SMS, push notification or other available communication channels.
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto mb-6 px-4">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    6. Refund window for rescheduled events
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        Where appropriate, affected customers may be given a defined period—for example, 7 or 14 days after the rescheduling announcement—to request a refund if they cannot attend the new date.
                    </p>
                    <p className="my-2">
                        The exact refund window should be communicated with the rescheduling notice.
                    </p>
                    <p className="my-2">
                        After the communicated deadline passes, the ticket may remain valid for the rescheduled event but no longer qualify for a voluntary rescheduling refund, subject to applicable law.
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto mb-6 px-4">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    7. Significant event changes
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        BlacVolta may treat a change as material where it substantially changes what a reasonable customer understood they were purchasing.
                    </p>
                    <p className="my-2">
                        Examples may include a major date change, relocation to another city, cancellation of the principal advertised performer, substantial change in event format, or a significant reduction in what the ticket was advertised to include.
                    </p>
                    <p className="my-2">
                        Not every adjustment to an event will constitute a material change.
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto mb-6 px-4">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    8. Event postponement without a new date
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        If an event is postponed but the organizer has not yet confirmed a replacement date, BlacVolta may temporarily maintain the customer&apos;s ticket while awaiting further information.
                    </p>
                    <p className="my-2">
                        However, organizers should not be permitted to leave an event indefinitely in a &ldquo;postponed&rdquo; status simply to avoid issuing refunds.
                    </p>
                    <p className="my-2">
                        BlacVolta may establish a reasonable deadline for the organizer to provide a replacement date. If that deadline passes without adequate resolution, BlacVolta may treat the event as cancelled for refund purposes where appropriate.
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto mb-6 px-4">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    9. Event cancellation after settlement
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        If BlacVolta has already transferred ticket revenue to the organizer before an event is cancelled, the organizer remains responsible for its refund obligations.
                    </p>
                    <p className="my-2">
                        BlacVolta may require repayment of the relevant amount and, where permitted by the Organizer Agreement, may offset outstanding refund liabilities against future settlements owed to that organizer.
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto mb-6 px-4">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    10. Chargebacks
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        Customers should first use BlacVolta&apos;s refund process before initiating a chargeback with their bank or payment provider.
                    </p>
                    <p className="my-2">
                        Where a chargeback arises because an organizer cancelled an event, failed to provide the advertised event or otherwise breached its obligations, BlacVolta may recover the amount of the chargeback and associated payment-provider costs from the organizer where permitted under the Organizer Agreement.
                    </p>
                    <p className="my-2">
                        Fraudulent or duplicate chargebacks may result in account restrictions.
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto mb-6 px-4">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    11. Organizer failure or abandonment
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        If an organizer becomes unreachable, ceases operations, abandons an event or fails to cooperate with legitimate refund requests, BlacVolta may suspend the organizer and future ticket sales while investigating.
                    </p>
                    <p className="my-2">
                        Where BlacVolta still controls unsettled ticket proceeds, those funds may be held while valid customer claims are resolved.
                    </p>
                    <p className="my-2">
                        This is an important protection for BlacVolta&apos;s reputation even though BlacVolta did not organize the underlying event.
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto mb-6 px-4">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    12. Communication with ticket holders
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        BlacVolta and the Event Organizer may contact affected customers regarding cancellations, postponements, venue changes, refund deadlines and other essential event information.
                    </p>
                    <p className="my-2">
                        Customers are responsible for keeping the contact information associated with their BlacVolta account current.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
