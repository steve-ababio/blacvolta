"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Ticket, Users, Hash, Calendar, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "../ui/dialog";
import { StoreButton } from "@/app/download/components/store-buttons/store-buttons";
import Link from "next/link";

interface TicketData {
    id: string;
    name: string;
    description: string;
    price: number;
    currency: string;
    quantity_total: number;
    quantity_sold: number;
    quantity_available: number;
    status: string;
    sku: string;
    sale_start_date: string | null;
    sale_end_date: string | null;
}

interface TicketCardProps {
    ticket: TicketData;
    eventId: string;
    ticketType: string;
}

const TicketCard = ({ ticket, eventId, ticketType }: TicketCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const appOpenedRef = useRef(false);

    const availabilityPercentage = (ticket.quantity_available / ticket.quantity_total) * 100;
    const isLowStock = availabilityPercentage <= 20;
    const isOnSale = ticket.status === "On Sale";
    const isSoldOut = ticket.quantity_available === 0;

    // useEffect(() => {
    //     const handleVisibilityChange = () => {
    //         if (document.visibilityState === "hidden") {
    //             appOpenedRef.current = true;
    //             console.log("Browser became hidden — app may have opened");
    //         }
    //     };

    //     document.addEventListener("visibilitychange", handleVisibilityChange);
    //     return () => {
    //         document.removeEventListener("visibilitychange", handleVisibilityChange);
    //     };
    // }, []);

    const handleButtonClick = () => {
        appOpenedRef.current = false;
        window.location.href = `https://blacvolta.com/app/events/${eventId}`;

        setTimeout(() => {
            if (!appOpenedRef.current && document.visibilityState !== "hidden") {
                setIsModalOpen(true);
            }
        }, 2000);
    };

    return (
        <div className="relative group max-w-30 w-full shadow-lg">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-black/90 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

            {/* Main ticket container */}
            <div className="relative bg-card rounded-2xl overflow-hidden ticket-shadow">
                {/* Top decorative header */}
                <div className="bg-black/90 px-6 py-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />

                    <div className="relative flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                <Ticket className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <div>
                                <p className="text-primary-foreground/80 text-xs font-medium uppercase tracking-wider">Ticket</p>
                                <h3 className="text-primary-foreground font-bold text-lg font-display">{ticket.name}</h3>
                            </div>
                        </div>

                        <Badge variant={isOnSale ? "default" : "secondary"}
                            className={`${isOnSale ? 'bg-black/40 text-primary-foreground border-white/30 backdrop-blur-sm' : ''} font-semibold`}
                        >
                            {isOnSale && <Sparkles className="w-3 h-3 mr-1" />}
                            {ticket.status}
                        </Badge>
                    </div>
                </div>

                {/* Ticket tear effect */}
                <div className="relative h-3 bg-card">
                    <div className="absolute inset-x-0 top-0 flex justify-between items-center px-2">
                        <div className="w-5 h-5 rounded-full bg-white -mt-2.5" />
                        <div className="flex-1 border-t-2 border-dashed border-border mx-2 mt-0" />
                        <div className="w-5 h-5 rounded-full bg-white -mt-2.5" />
                    </div>
                </div>

                {/* Ticket body */}
                <div className="px-6 pb-4 space-y-3">
                    {/* Description */}
                    <p className="text-muted-foreground text-sm">{ticket.description}</p>

                    {/* Price section */}
                    <div className="flex items-end justify-between">
                        <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Price</p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-3xl font-bold text-foreground font-display">{ticket.currency}</span>
                                <span className="text-4xl font-bold text-foreground font-display">{ticket.price}</span>
                            </div>
                        </div>

                        <div className="text-right">
                            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Available</p>
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-muted-foreground" />
                                <span className={`text-lg font-semibold ${isLowStock ? 'text-destructive' : 'text-foreground'}`}>
                                    {ticket.quantity_available}
                                </span>
                                <span className="text-muted-foreground">/ {ticket.quantity_total}</span>
                            </div>
                        </div>
                    </div>

                    {/* Progress bar */}
                    <div className="space-y-2">
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div
                                className="h-full bg-black rounded-full transition-all duration-500"
                                style={{ width: `${100 - availabilityPercentage}%` }}
                            />
                        </div>
                        {isLowStock && (
                            <p className="text-xs text-destructive font-medium flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-destructive animate-pulse" />
                                Only {ticket.quantity_available} tickets left!
                            </p>
                        )}
                    </div>

                    {/* Meta info */}
                    <div className="flex items-center gap-4 pt-2 border-t border-border">
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Hash className="w-3.5 h-3.5" />
                            <span>SKU: {ticket.sku}</span>
                        </div>
                        {(ticket.sale_start_date || ticket.sale_end_date) && (
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                <Calendar className="w-3.5 h-3.5" />
                                <span>
                                    {ticket.sale_start_date && `From ${ticket.sale_start_date}`}
                                    {ticket.sale_end_date && ` to ${ticket.sale_end_date}`}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Purchase button */}
                    <a href={`https://blacvolta.com/app/events/${eventId}`} className="w-full block">
                       <Button  className="w-full block ticket-gradient hover:opacity-90 disabled:cursor-not-allowed text-primary-foreground font-semibold h-12 text-base rounded-xl transition-all duration-300 hover:ticket-shadow">
                            {isSoldOut ? 'Sold Out' : (ticketType === "RSVP" ? 'Get RSVP Now' : 'Get Ticket Now')}
                        </Button>
                    </a>
                </div>
            </div>

            {/* Download App Modal */}
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="bg-neutral-950 border border-neutral-800 text-white p-6 sm:p-8 rounded-2xl max-w-md w-full shadow-2xl">
                    <DialogHeader className="flex flex-col items-center text-center space-y-3">
                        <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center p-3 shadow-inner">
                            <Image
                                src="/assets/images/logo.png"
                                alt="BlacVolta Logo"
                                width={48}
                                height={48}
                                className="object-contain"
                            />
                        </div>
                        <DialogTitle className="text-2xl font-bold tracking-tight text-white font-display">
                            Get the BlacVolta App
                        </DialogTitle>
                        <DialogDescription className="text-sm text-neutral-400">
                            To {ticketType === "RSVP" ? "RSVP for" : "purchase tickets for"} <span className="text-white font-semibold">{ticket.name}</span>, download the BlacVolta app available on iOS and Android.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="flex flex-col gap-3 mt-4">
                        <StoreButton
                            store="apple"
                            href="https://apps.apple.com/in/app/blacvolta/id6745515524"
                            className="w-full justify-center py-3"
                        />
                        <StoreButton
                            store="google"
                            href="https://play.google.com/store/apps/details?id=com.blacvolta.app&pcampaignid=web_share"
                            className="w-full justify-center py-3"
                        />
                    </div>

                    {/* <div className="mt-4 text-center">
                    <a 
                        href={`https://blacvolta.com/app/events/${eventId}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors underline underline-offset-4"
                    >
                        Continue to Web App
                    </a>
                </div> */}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default TicketCard;

