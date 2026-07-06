import { Medal, Wallet2, ChartLine, CreditCard, Star, Check } from "lucide-react";


interface SavingsCard {
  icon: React.ReactNode;
  title: string;
  description: string[];
}

const cards: SavingsCard[] = [
  {
    icon: <Wallet2 className="h-6 w-6" />,
    title: "Save Money",
    description: [
      "Discounts at top restaurants",
      "Saving at bars & lounges",
      "Hotel & staycation offers",
      "Reduced event ticket ticket prices",
    ]
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: "VIP Access",
    description: [
      "Skip selected queues",
      "Priority reservations",
      "Exclusive guest lists",
      "Early event access",
    ]
  },
  {
    icon: <Medal className="h-6 w-6" />,
    title: "Exclusive Rewards",
    description: [
      "Monthly partner offers",
      "Birthday rewards",
      "Surprise member perks",
      "Limited-time experiences"
    ]
  },
  {
    icon: <ChartLine className="h-6 w-6" />,
    title: "Always Getting Better",
    description: [
      "New partner venues every month",
      "Fresh discounts and experiences",
      "Exclusive campaigns",
      "Expanding across Ghana and Africa"
    ]
  },
  {
    icon: <CreditCard className="h-6 w-6" />,
    title: "One Card, One Lifestyle",
    description: [
      "Pay anywhere Visa is accepted",
      "Access premium venues",
      "Discover events through the app",
      "Built for Africa's creators, professionals & diaspora"
    ]
  },
];

function SavingsCardItem({ card, index }: { card: SavingsCard; index: number }) {
  return (
    <div
      className="group relative flex flex-col rounded-xl border border-blacvolta-gold bg-surface px-8 py-6 transition-all duration-50 ease-out hover:border-blacvolta-gold-muted hover:bg-surface-raised"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Subtle top sheen */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Icon */}
      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-surface-raised text-blacvolta-gold transition-colors duration-500 group-hover:border-gold/20 group-hover:text-gold">
        {card.icon}
      </div>

      {/* Content */}
      <h3 className="mb-2 text-lg font-medium tracking-tight text-foreground">
        {card.title}
      </h3>
      {/* <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
        {card.description}
      </p> */}
      <ul>
        {card.description.map((item, i) => (
          <li key={i} className="flex items-start gap-2 mb-2 text-sm leading-relaxed text-muted-foreground">
            <Check className="h-4 w-4 text-blacvolta-gold shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      {/* <div className="mt-auto flex items-center gap-1.5 text-sm font-medium text-gold opacity-60 transition-opacity duration-300 group-hover:opacity-100">
        <span>Explore offers</span>
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div> */}
    </div>
  );
}

export function SavingsCards() {
  return (
    <section className="w-full px-6 pb-24 md:px-12 lg:px-20">
      <div>
        {/* Cards Grid */}
        <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          {cards.map((card, i) => (
            <SavingsCardItem key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
