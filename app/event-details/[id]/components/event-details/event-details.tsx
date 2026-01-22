'use client'
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Ticket, Users, Music, TicketIcon } from "lucide-react";
import Link from "next/link";

interface DetailItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  delay?: number;
}
interface EventDetailsProps{
    eventDate:string,
    eventTime:string,
    venue:string,
    ticketLink:string
}
const DetailItem = ({ icon, label, value, delay = 0 }: DetailItemProps) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    className="flex items-start gap-4"
  >
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
      {icon}
    </div>
    <div>
      <p className="text-sm  text-muted-foreground">{label}</p>
      {value.startsWith("https") || value.startsWith("http")? <Link className="underline" href={value} >{value}</Link>: <p className="font-medium text-white">{value}</p>}
    </div>
  </motion.div>
);

const EventDetails = ({eventDate,eventTime,venue,ticketLink}:EventDetailsProps) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="border border-slate-200 rounded-2xl p-6"
  >
    <div className="space-y-5">
      <DetailItem
        icon={<Calendar className="h-5 w-5" />}
        label="Date"
        value={eventDate}
        delay={0.3}
      />
      <DetailItem
        icon={<Clock className="h-5 w-5" />}
        label="Time"
        value={eventTime}
        delay={0.4}
      />
      <DetailItem
        icon={<MapPin className="h-5 w-5" />}
        label="Location"
        value={venue}
        delay={0.5}
      />
      <DetailItem
        icon={<TicketIcon className="h-5 w-5" />}
        label="Ticket Link"
        value={ticketLink}
        delay={0.5}
      />
    </div>
  </motion.div>
  );
};

export default EventDetails;
