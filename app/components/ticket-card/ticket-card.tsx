import { Ticket, Users, Hash, Calendar, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

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
  eventId:string
  
}

const TicketCard = ({ ticket,eventId }: TicketCardProps) => {
    const availabilityPercentage = (ticket.quantity_available / ticket.quantity_total) * 100;
    const isLowStock = availabilityPercentage <= 20;
    const isOnSale = ticket.status === "On Sale";
    function navigateToApp(){
        window.location.href = `https://blacvolta.com/events/${eventId}`;
    }
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
            <Button 
                onClick={navigateToApp}
                disabled={!isOnSale || ticket.quantity_available === 0}
                className="w-full ticket-gradient hover:opacity-90 text-primary-foreground font-semibold h-12 text-base rounded-xl transition-all duration-300 hover:ticket-shadow"
            >
                {ticket.quantity_available === 0 ? 'Sold Out' : 'Get Ticket'}
            </Button>
            </div>
        </div>
        </div>
    );
};

export default TicketCard;
