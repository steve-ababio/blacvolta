import { Lock } from "lucide-react";
import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

export default function AffiliatePolicy() {
    return (
        <main>
            <NavBar />
            <div className="mb-6 mt-28 mx-auto text-center px-4">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-termsaccent-foreground">
                    BlacVolta Affiliate Program Policy
                </h1>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blacvolta-gold/10 text-blacvolta-gold text-sm font-medium mb-6">
                    <Lock className="h-4 w-4" />
                    Last Updated: September 2026
                </div>
            </div>

            <div className="text-sm my-6 max-w-4xl mx-auto md:text-lg text-white font-normal px-4">
                <p className="mb-3">
                    The BlacVolta Affiliate Program allows approved users, creators, promoters, partners and other participants to earn commissions by referring customers to eligible events and products available through the BlacVolta platform.
                </p>
                <p className="mb-3">
                    Affiliates may receive unique referral links, affiliate codes, promotional codes or other tracking tools that allow BlacVolta to attribute eligible transactions to them.
                </p>
                <p>
                    Participation in the Affiliate Program is subject to this Policy and any additional terms displayed when an affiliate joins a particular event, product campaign or promotion.
                </p>
            </div>

            <section className="max-w-4xl mx-auto mb-6 px-4">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    1. Becoming a BlacVolta affiliate
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        Users may apply or be invited to become affiliates through the BlacVolta app.
                    </p>
                    <p className="my-2">
                        BlacVolta may require affiliates to provide information necessary to verify their identity, contact information and payment details before commissions can be paid.
                    </p>
                    <p className="my-2">
                        Approval for one affiliate campaign does not automatically guarantee participation in every event or Shop campaign.
                    </p>
                    <p className="my-2">
                        BlacVolta, Event Organizers and eligible Shop Merchants may determine which events or products are available for affiliate promotion.
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto mb-6 px-4">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    2. Event affiliates
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        Event Organizers may enable affiliate marketing for eligible events listed on BlacVolta.
                    </p>
                    <p className="my-2">
                        Where enabled, an affiliate may receive a unique link or code that can be shared with their audience.
                    </p>
                    <p className="my-2">
                        When a customer purchases an eligible ticket through the affiliate&apos;s valid tracking method, the transaction may generate a commission according to the rate established for that event.
                    </p>
                    <p className="my-2">
                        Commission rates may differ between events, ticket categories and campaigns.
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto mb-6 px-4">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    3. Shop affiliates
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        Eligible products sold through the BlacVolta Shop may also participate in the Affiliate Program.
                    </p>
                    <p className="my-2">
                        Affiliates may promote participating products using their assigned affiliate link, code or other tracking mechanism.
                    </p>
                    <p className="my-2">
                        A qualifying completed purchase may generate a commission based on the rate established for that product, merchant or campaign.
                    </p>
                    <p className="my-2">
                        Different products or merchants may offer different commission rates.
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto mb-6 px-4">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    4. Commission rates
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p className="mb-2">Affiliate commissions may be established as either:</p>
                    <ul className="list-disc pl-6 space-y-1.5 my-2">
                        <li>A percentage of an eligible sale;</li>
                        <li>A fixed amount per qualifying transaction; or</li>
                        <li>Another commission structure clearly communicated before participation.</li>
                    </ul>
                    <p className="mt-3 my-2">
                        For example, an Event Organizer may offer 10% commission per eligible ticket sold, while a Shop Merchant may establish a different percentage for its products.
                    </p>
                    <p className="my-2">
                        The applicable commission should be visible to the affiliate before they begin promoting the offer.
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto mb-6 px-4">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    5. What counts as a qualifying transaction
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        A commission is earned only where BlacVolta can successfully attribute an eligible transaction to the affiliate.
                    </p>
                    <p className="mt-3 mb-2 font-medium">A qualifying transaction must generally:</p>
                    <ul className="list-disc pl-6 space-y-1.5 my-2">
                        <li>Be completed through BlacVolta.</li>
                        <li>Use the affiliate&apos;s valid referral link, code or approved tracking method.</li>
                        <li>Be successfully paid.</li>
                        <li>Not subsequently be cancelled, refunded, reversed or charged back.</li>
                        <li>Comply with this Policy and the applicable campaign conditions.</li>
                    </ul>
                    <p className="mt-4">
                        Adding an item to a cart, viewing an event, beginning checkout or clicking an affiliate link does not by itself create an earned commission.
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto mb-6 px-4">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    6. Affiliate attribution
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        BlacVolta will use its platform records to determine which affiliate should receive credit for a transaction.
                    </p>
                    <p className="my-2">
                        Where a customer interacts with multiple affiliate links or codes before purchasing, BlacVolta&apos;s applicable attribution method will determine which affiliate receives the commission.
                    </p>
                    <p className="my-2">
                        For example, BlacVolta may use a last valid referral model, meaning the last eligible affiliate link or code associated with the customer before the completed transaction receives the commission.
                    </p>
                    <p className="my-2">
                        The applicable attribution window and tracking method may vary between campaigns.
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto mb-6 px-4">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    7. Promo codes and affiliate codes
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        An affiliate code may also provide a customer with a discount where the relevant Event Organizer, Shop Merchant or BlacVolta has enabled that functionality.
                    </p>
                    <p className="my-2">
                        A customer discount and an affiliate commission are separate benefits.
                    </p>
                    <p className="my-2">
                        For example, a campaign may offer the customer a discount while paying the affiliate a percentage of the eligible sale.
                    </p>
                    <p className="my-2">
                        The specific discount and commission structure will be displayed for the relevant campaign.
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto mb-6 px-4">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    8. How commissions are calculated
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        Unless otherwise stated, affiliate commissions are calculated on the eligible transaction value after applicable discounts and excluding amounts that are not commissionable.
                    </p>
                    <p className="my-2">
                        Depending on the campaign, non-commissionable amounts may include taxes, delivery charges, payment-processing fees, BlacVolta service fees and other charges not forming part of the eligible ticket or product value.
                    </p>
                    <p className="my-2">
                        The exact commission basis should be communicated for each campaign.
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto mb-6 px-4">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    9. Pending commissions
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        A commission appearing in an affiliate&apos;s BlacVolta account may initially be marked as Pending.
                    </p>
                    <p className="my-2">
                        For event tickets, commissions may remain pending until the event has successfully taken place and the applicable refund or chargeback period has passed.
                    </p>
                    <p className="my-2">
                        For Shop purchases, commissions may remain pending until the order has been successfully fulfilled or delivered and any applicable cancellation, return or refund period has passed.
                    </p>
                    <p className="my-2">
                        A pending commission is not considered available for withdrawal.
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto mb-6 px-4">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    10. Approved commissions
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        Once BlacVolta confirms that the underlying transaction has been successfully completed and is no longer subject to the applicable validation period, the commission may be marked as Approved or Available.
                    </p>
                    <p className="my-2">
                        Approved commissions may then become eligible for payout in accordance with BlacVolta&apos;s payout schedule and minimum withdrawal requirements, where applicable.
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto mb-6 px-4">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    11. Refunds and cancelled transactions
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        Affiliates do not earn commission on transactions that are fully refunded, cancelled, reversed or successfully charged back.
                    </p>
                    <p className="my-2">
                        If a commission has not yet been paid, the commission may simply be cancelled.
                    </p>
                    <p className="my-2">
                        Where a commission has already been paid before the underlying transaction is subsequently refunded or reversed, BlacVolta may deduct the relevant commission from the affiliate&apos;s future earnings or account balance, where permitted by the applicable terms and law.
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto mb-6 px-4">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    12. Cancelled or postponed events
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        If an event is cancelled and ticket holders receive refunds, affiliate commissions associated with those refunded tickets will not be payable.
                    </p>
                    <p className="my-2">
                        If an event is postponed or rescheduled and the customer&apos;s ticket remains valid, the associated commission may remain pending until the event takes place.
                    </p>
                    <p className="my-2">
                        Where a customer receives an approved refund for a rescheduled event, the corresponding affiliate commission will be cancelled.
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto mb-6 px-4">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    13. Shop returns and refunds
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        If a customer returns a product or receives a full refund for a Shop order, the affiliate commission associated with that purchase will ordinarily be cancelled.
                    </p>
                    <p className="my-2">
                        For partially refunded orders, the commission may be recalculated based on the final eligible transaction value.
                    </p>
                    <p className="my-2">
                        Commissions may remain pending while a return, refund or payment dispute is being resolved.
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto mb-6 px-4">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    14. Affiliate payouts
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        Eligible affiliate earnings may be paid through payment methods supported by BlacVolta.
                    </p>
                    <p className="mt-3 mb-2 font-medium">BlacVolta may establish:</p>
                    <ul className="list-disc pl-6 space-y-1.5 my-2">
                        <li>Minimum payout thresholds.</li>
                        <li>Scheduled payout periods.</li>
                        <li>Identity or payment-account verification requirements.</li>
                        <li>Reasonable processing periods.</li>
                        <li>Additional verification for unusually large payouts.</li>
                    </ul>
                    <p className="mt-4 mb-2 font-medium">The affiliate dashboard should clearly distinguish between:</p>
                    <ul className="list-disc pl-6 space-y-1.5 my-2">
                        <li>Total Sales Generated</li>
                        <li>Pending Commission</li>
                        <li>Approved Commission</li>
                        <li>Paid Commission</li>
                        <li>Reversed Commission</li>
                        <li>Available Balance</li>
                    </ul>
                </div>
            </section>

            <section className="max-w-4xl mx-auto mb-6 px-4">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    15. Self-referrals
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        Unless expressly permitted for a particular campaign, affiliates may not use their own affiliate link or code primarily to generate commissions from their own purchases.
                    </p>
                    <p className="my-2">
                        BlacVolta may treat repeated self-referrals, artificial transactions or coordinated purchases designed primarily to generate commission as abuse of the Affiliate Program.
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto mb-6 px-4">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    16. Affiliate fraud and manipulation
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        Affiliates must not attempt to manipulate BlacVolta&apos;s tracking or commission systems.
                    </p>
                    <p className="my-2">
                        Prohibited conduct includes creating fake transactions, using stolen or unauthorized payment methods, creating multiple accounts to generate commissions, manipulating cookies or referral tracking, placing unauthorized orders, generating artificial traffic, abusing refunds or chargebacks, or coordinating transactions primarily for the purpose of earning commissions.
                    </p>
                    <p className="my-2">
                        BlacVolta may investigate suspicious affiliate activity.
                    </p>
                    <p className="my-2">
                        During an investigation, related commissions or payouts may be temporarily held.
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto mb-6 px-4">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    17. Misleading promotion
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        Affiliates must represent events, products and offers accurately.
                    </p>
                    <p className="mt-3 mb-2 font-medium">Affiliates must not:</p>
                    <ul className="list-disc pl-6 space-y-1.5 my-2">
                        <li>Advertise discounts that do not exist.</li>
                        <li>Claim an event includes performers or experiences that have not been announced.</li>
                        <li>Make false claims about products.</li>
                        <li>Present themselves as BlacVolta, an Event Organizer or a Shop Merchant when they are not authorized to do so.</li>
                        <li>Use deceptive advertising or misleading promotional methods.</li>
                    </ul>
                    <p className="mt-4">
                        Affiliates are responsible for clearly identifying sponsored or affiliate content where required by applicable advertising rules.
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto mb-6 px-4">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    18. Brand and intellectual property
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        Participation in the Affiliate Program does not transfer ownership of the BlacVolta name, logo, trademarks, event artwork, merchant brands, product photography or other intellectual property to an affiliate.
                    </p>
                    <p className="my-2">
                        Affiliates may use approved promotional materials solely for the purpose of promoting eligible campaigns.
                    </p>
                    <p className="my-2">
                        BlacVolta, Event Organizers and Shop Merchants may require affiliates to stop using particular campaign materials after a campaign has ended or where those materials are no longer accurate.
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto mb-6 px-4">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    19. Changes to commission rates
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        BlacVolta, an Event Organizer or a Shop Merchant may change the commission offered for future transactions, subject to the applicable campaign terms.
                    </p>
                    <p className="my-2">
                        Where reasonably practicable, material changes will be communicated to participating affiliates.
                    </p>
                    <p className="my-2">
                        A commission rate should not ordinarily be changed retroactively for a valid qualifying transaction that occurred while a different confirmed rate applied.
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto mb-6 px-4">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    20. Campaign suspension or termination
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        An Event Organizer, Shop Merchant or BlacVolta may close an affiliate campaign to new referrals.
                    </p>
                    <p className="my-2">
                        Closing a campaign does not automatically cancel legitimate commissions already earned from qualifying transactions before the campaign ended.
                    </p>
                    <p className="my-2">
                        BlacVolta may, however, invalidate commissions connected to fraudulent, cancelled, refunded or otherwise ineligible transactions.
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto mb-6 px-4">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    21. Affiliate account restrictions
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        BlacVolta may restrict, suspend or terminate an affiliate&apos;s participation where there is reasonable evidence of fraud, abuse, misleading promotion, manipulation of the affiliate system or material violation of this Policy.
                    </p>
                    <p className="my-2">
                        Where an affiliate account is suspended, BlacVolta may temporarily hold outstanding commissions while the matter is reviewed.
                    </p>
                    <p className="my-2">
                        Legitimate approved commissions should remain payable unless they are connected to activity that violates this Policy or are otherwise subject to a lawful deduction.
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto mb-6 px-4">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    22. Event Organizer and Shop Merchant responsibilities
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        Event Organizers and Shop Merchants participating in the Affiliate Program are responsible for accurately establishing the commission terms associated with their campaigns where BlacVolta allows them to do so.
                    </p>
                    <p className="my-2">
                        They remain responsible for fulfilling the underlying transaction—delivering the advertised event or fulfilling the customer&apos;s Shop order.
                    </p>
                    <p className="my-2">
                        An organizer or merchant should not use the Affiliate Program to generate sales for an event or product it knows it cannot reasonably deliver.
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto mb-6 px-4">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    23. Affiliate analytics
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        BlacVolta may provide affiliates with performance information including clicks, ticket sales, Shop orders, conversion rates, gross sales generated and commission earned.
                    </p>
                    <p className="my-2">
                        Analytics displayed before transactions are fully validated may be provisional and may change because of refunds, cancellations, returns, chargebacks, payment failures or fraud reviews.
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto mb-6 px-4">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    24. Taxes
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        Affiliates are responsible for determining and meeting any personal or business tax obligations arising from commissions received through the BlacVolta Affiliate Program.
                    </p>
                    <p className="my-2">
                        Where required by applicable law, BlacVolta may request tax or identification information or make required deductions before processing a payout.
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto mb-6 px-4">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    25. Relationship with BlacVolta
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        Participation in the Affiliate Program does not create an employment relationship, partnership, joint venture or agency relationship between the affiliate and BlacVolta.
                    </p>
                    <p className="my-2">
                        Affiliates participate independently and are responsible for how they promote eligible events and products, subject to this Policy.
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto mb-6 px-4">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    26. Changes to the Affiliate Program
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        BlacVolta may update the Affiliate Program, its functionality or this Policy as the platform develops.
                    </p>
                    <p className="my-2">
                        Material changes affecting existing affiliate earnings or obligations should be communicated where reasonably practicable.
                    </p>
                </div>
            </section>

            <section className="max-w-4xl mx-auto mb-6 px-4">
                <h1 className="text-[28px] text-white font-bold mb-5">
                    27. Related BlacVolta policies
                </h1>
                <div className="text-white font-normal text-sm md:text-base">
                    <p>
                        This Policy should be read together with the applicable BlacVolta Terms &amp; Conditions, Refund &amp; Cancellation Policy, Ticket Revenue &amp; Settlement Policy, Shop Terms, Organizer Terms, Merchant Terms and Privacy Policy.
                    </p>
                    <p className="my-2">
                        Where campaign-specific conditions apply, those conditions will operate alongside this Policy.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
