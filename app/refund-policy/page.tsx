import { ArrowLeft, Shield, Lock, Globe, FileText, Mail } from "lucide-react";
import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
export default function RefundPolicy() {
    return (
        <main>
            <NavBar />
            <div className="mb-6 mt-28 mx-auto text-center px-4">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-termsaccent-foreground">
                    BlacVolta Refund Policy
                </h1>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blacvolta-gold/10 text-blacvolta-gold text-sm font-medium mb-6">
                    <Lock className="h-4 w-4" />
                    Last Updated: September 2026
                </div>
            </div>
            <div className="text-sm my-6 max-w-4xl mx-auto md:text-lg text-white font-normal">
                <p>BlacVolta provides technology that allows users to discover events, RSVP and purchase tickets
                    from independent event organizers. Unless expressly stated otherwise, BlacVolta is not the
                    producer, promoter or organizer of events listed on the platform. </p>
                <p>Refund eligibility may therefore depend on the refund terms established by the relevant Event
                    Organizer, the circumstances surrounding the event and applicable law.</p>
            </div>

            <section className="max-w-4xl mx-auto mb-6">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    1. Refund eligibility
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        A ticket may be eligible for a refund where an event is cancelled by the Event Organizer; where
                        a refund is required under applicable law; where the customer has been charged more than
                        once for the same transaction due to a verified technical or payment error; where BlacVolta or
                        the Event Organizer expressly offers a refund; or in other circumstances determined by
                        BlacVolta following investigation.
                    </p>
                    <p className="my-2">A customer&apos;s inability to attend an event does not automatically entitle the customer to a refund.</p>
                    <p className="my-2">Where an Event Organizer establishes event-specific refund conditions, those conditions should
                        be displayed on the event page or during checkout before purchase.</p>
                </div>
            </section>
            <section className="max-w-4xl mx-auto">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    2. Change-of-mind refunds
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        Unless otherwise stated by the Event Organizer, tickets are generally non-refundable where the
                        event is proceeding as advertised but the ticket holder can no longer attend.
                    </p>
                    <p className="my-2">This includes personal scheduling conflicts, travel disruptions, illness, failure to obtain visas,
                        transportation issues, accommodation problems or other circumstances outside the control of
                        BlacVolta and the Event Organizer, except where applicable law provides otherwise.
                    </p>
                    <p className="my-2">Organizers may voluntarily approve refunds in these circumstances at their discretion.</p>
                </div>
            </section>
            <section className="max-w-4xl mx-auto">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    3. How to request a refund
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        Eligible customers may submit a refund request through the BlacVolta app or the support
                        channel provided by BlacVolta.
                    </p>
                    <p className="my-2">
                        The customer may be required to provide their name, email address or telephone number
                        associated with the account, event name, order or ticket reference, reason for the request and
                        any supporting information reasonably required to investigate the request.
                    </p>
                    <p className="my-2">Submitting a refund request does not automatically mean that the refund has been approved.</p>
                </div>
            </section>
            <section className="max-w-4xl mx-auto">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    4. Refund review
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        Where the refund relates to an organizer-controlled matter, BlacVolta may forward the request
                        to the relevant Event Organizer for review.
                    </p>
                    <p className="my-2">
                        BlacVolta may also independently review transaction records, event status and other relevant
                        information before processing a refund.
                    </p>
                    <p className="my-2">Customers will be notified once a request has been approved or declined.</p>
                </div>
            </section>
            <section className="max-w-4xl mx-auto">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    5. Processing approved refunds
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        Approved refunds will generally be returned to the original payment method used for the
                        transaction unless another method is required because of technical limitations.
                    </p>
                    <p className="my-2">
                        BlacVolta will initiate approved refunds as soon as reasonably practicable. The time required for
                        the funds to appear in the customer&apos;s account may depend on the bank, mobile-money
                        operator, card network or payment provider involved.
                    </p>
                    <p className="my-2">The refund should not be considered delayed solely because the payment provider requires
                        additional processing time after BlacVolta has initiated it. </p>
                </div>
            </section>
            <section className="max-w-4xl mx-auto">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    6. Ticketing and service fees
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        Where an event is cancelled by the organizer, the ticket&apos;s face value will ordinarily be
                        refundable.
                    </p>
                    <p className="my-2">
                        Whether booking, processing, payment or platform/service fees are refundable will be
                        communicated at checkout and may depend on whether those fees have already been incurred
                        in processing the transaction, subject always to applicable law.
                    </p>
                    <p className="my-2">This distinction should be clearly displayed before the customer completes payment.</p>
                </div>
            </section>
            <section className="max-w-4xl mx-auto">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    7. Cancelled events
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        If an Event Organizer cancels an event and does not provide a replacement date, eligible ticket
                        holders will ordinarily receive a refund of the ticket&apos;s refundable value.
                    </p>
                    <p className="my-2">
                        BlacVolta may automatically initiate refunds or provide customers with instructions for
                        requesting them.
                    </p>
                    <p className="my-2">The Event Organizer remains responsible for funding refunds arising from its cancellation of an
                        event.</p>
                    <p className="my-2">Where BlacVolta is holding ticket proceeds that have not yet been settled to the organizer,
                        BlacVolta may use those funds to satisfy valid customer refunds before releasing the remaining
                        balance to the organizer.</p>
                </div>
            </section>
            <section className="max-w-4xl mx-auto">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    8. Postponed or rescheduled events
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        A postponed or rescheduled event is not automatically treated as a cancelled event.
                    </p>
                    <p className="my-2">
                        Tickets will ordinarily remain valid for the new date unless the Event Organizer or BlacVolta
                        communicates otherwise.
                    </p>
                    <p className="my-2">Where the change is material, the organizer may establish a period during which customers
                        who cannot attend the new date can request a refund.</p>
                    <p className="my-2">The applicable deadline and refund procedure will be communicated to affected ticket holders.</p>
                </div>
            </section>
            <section className="max-w-4xl mx-auto">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    9. Venue changes
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        A change of venue does not automatically qualify a ticket for a refund.
                    </p>
                    <p className="my-2">
                        However, where the venue change materially changes the nature or accessibility of the
                        event—for example, relocation to another city or a substantially different location—BlacVolta
                        and the Event Organizer may provide affected customers with a refund option.
                    </p>
                </div>
            </section>
            <section className="max-w-4xl mx-auto">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    10. Artist, speaker or lineup changes
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        Festivals, concerts, conferences and similar events may involve multiple performers, speakers
                        or participants.
                    </p>
                    <p className="my-2">
                        Unless a particular artist, speaker or participant has expressly been advertised as the principal
                        basis of the ticket purchase, changes to the lineup will not ordinarily constitute cancellation of
                        the event or automatically entitle the ticket holder to a refund.
                    </p>
                    <p className="my-2">
                        Where a headline act is cancelled and the nature of the event is substantially affected, the Event
                        Organizer may establish a refund process.
                    </p>
                </div>
            </section>
            <section className="max-w-4xl mx-auto">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    11. Weather and circumstances beyond the organizer&apos;s control
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        Events may occasionally be affected by severe weather, government restrictions, public-safety
                        concerns, venue emergencies, natural disasters or other circumstances outside the reasonable
                        control of the Event Organizer.
                    </p>
                    <p className="my-2">
                        Refunds, postponements or ticket transfers in these situations will be determined based on the
                        circumstances, the organizer&apos;s event-specific policy and applicable law.
                    </p>
                </div>
            </section>
            <section className="max-w-4xl mx-auto">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    12. Used or scanned tickets
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        Tickets that have already been successfully scanned or used to enter an event will generally not
                        be eligible for a refund.
                    </p>
                    <p className="my-2">
                        Claims concerning an experience after entry—such as dissatisfaction with the event—should
                        ordinarily be directed to the Event Organizer.
                    </p>
                    <p className="my-2">
                        This does not affect rights that cannot legally be excluded.
                    </p>
                </div>
            </section>
            <section className="max-w-4xl mx-auto">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    13. Fraudulent or abusive refund requests
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        BlacVolta may decline refund requests where there is reasonable evidence of ticket fraud,
                        altered tickets, duplicate claims, unauthorized resale, payment abuse, fraudulent chargebacks
                        or other misuse of the platform.
                    </p>
                    <p className="my-2">
                        Accounts associated with repeated fraudulent activity may also be restricted or suspended
                    </p>
                </div>
            </section>
            <Footer />
        </main>
    )
}