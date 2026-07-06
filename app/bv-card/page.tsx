'use client';
import { useState } from "react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Search, ChevronDown, HelpCircle, MessageCircle,  UtensilsCrossed,
  Martini,
  Hotel,
  Coffee,
  Dumbbell,
  Sparkles,
  Ticket, } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";
import { Button } from "@/app/components/ui/button";
import { RiWhatsappFill } from "react-icons/ri";
import NavBar from "../components/navbar/navbar";
import Link from "next/link";
import { SavingsCards } from "./components/benefits-card/benefits-card.component";
import Partners from "./components/partners/partners.component";
import SavingsCalculator from "./components/savings-calculator/savings-calculator.component";

const growingEveryMonth = [
  {
    name: "Restaurants",
    icon: UtensilsCrossed,
  },
  {
    name: "Bars & Clubs",
    icon: Martini,
  },
  {
    name: "Hotels",
    icon: Hotel,
  },
  {
    name: "Cafés",
    icon: Coffee,
  },
  {
    name: "Fitness",
    icon: Dumbbell,
  },
  {
    name: "Beauty",
    icon: Sparkles,
  },
  {
    name: "Experiences",
    icon: Ticket,
  },
];
const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const faqData = [
    {
      category: "General",
      questions: [
        {
          question: "What is the BlacVolta Lifestyle Card?",
          answer: "The BlacVolta Lifestyle Card is a premium lifestyle and payments card designed for Africans and the diaspora. It gives you access to curated discounts, VIP experiences, and seamless payments across top events, restaurants, lounges, and lifestyle destinations."
        },
        {
          question: "How do I get the BlacVolta Card?",
          answer: "You can apply directly through the BlacVolta App (available on iOS & Android). Beyond that, you'll be able to walk into selected partner banks to apply in person."
        },
        {
          question: "Is it a credit card or a debit card?",
          answer: "The BlacVolta Card functions as a prepaid Visa-powered lifestyle card. You can load money onto it and use it for payments, while also enjoying exclusive lifestyle perks."
        }
      ]
    },
     {
      category: "Payments & Fees",
      questions: [
        {
          question: "How much does the BlacVolta Card cost?",
          answer: `The BlacVolta Card costs ${
            new Intl.NumberFormat("en-GH",{
              style:"currency",
              currency:"GHS",
            }).format(1000)
          }.
          You also earn ${
            new Intl.NumberFormat("en-GH",{
              style:"currency",
              currency:"GHS",
            }).format(200)
          } cashback for every successful referral when someone signs up through your referral link.`
        },
        {
          question: "Do I need a bank account to apply?",
          answer: "No, you don't. You can apply directly via the app, load your card through mobile money, bank transfer, or cash at partner bank branches."
        },
        {
          question: "Are there monthly or annual fees?",
          answer: "There's no monthly maintenance fee. However, certain premium services (like concierge upgrades or exclusive event access) may carry additional costs."
        }
      ]
    },
    {
      category: "Application & Onboarding",
      questions: [
        {
          question: "Who can apply for the BlacVolta Card?",
          answer: "The card is designed for Africans and the diaspora who value premium lifestyle experiences and want access to exclusive perks and VIP services."
        },
        {
          question: "What documents do I need to apply?",
          answer: "You can apply directly via the app without extensive documentation. The process is streamlined to get you started quickly with your lifestyle card."
        },
        {
          question: "How long does approval take?",
          answer: "Approval is typically instant through the BlacVolta App. Once approved, your card will be delivered to you for activation."
        }
      ]
    },
    {
      category: "Usage & Lifestyle Benefits",
      questions: [
        {
          question: "Where can I use the BlacVolta Card?",
          answer: "You can use it everywhere Visa is accepted globally, plus get special perks at partner restaurants, hotels, lounges, bars, gyms, and events across Ghana and Africa."
        },
        {
          question: "What kind of perks do I get?",
          answer: "Cardholders enjoy 15–20% discounts at premium lifestyle locations, free or priority tickets to exclusive events, skip-the-queue access at select venues, VIP table bookings, concierge services (travel, reservations, experiences), and welcome drinks and special offers at partner venues."
        },
        {
          question: "Does it work internationally?",
          answer: "Yes. The BlacVolta Card works anywhere Visa is accepted worldwide, but lifestyle perks are currently concentrated in Africa, starting with Ghana."
        }
      ]
    },
    {
      category: "Security & Support",
      questions: [
        {
          question: "What happens if I lose my BlacVolta Card?",
          answer: "You can immediately freeze or block your card through the BlacVolta App. A replacement card can be ordered and delivered."
        },
        {
          question: "Is my money safe on the BlacVolta Card?",
          answer: "Yes. The card is Visa-powered and issued in partnership with a regulated financial institution, ensuring your funds are secured under international payment standards."
        },
        {
          question: "How do I reach customer support?",
          answer: "You can contact us through the in-app chat support, email support@blacvolta.com, or call our 24/7 helpline."
        }
      ]
    },
    {
      category: "Events & Experiences",
      questions: [
        {
          question: "Do I get VIP access at BlacVolta events?",
          answer: "Yes! Cardholders receive exclusive invites to BlacVolta-curated experiences and VIP access to partner events."
        },
        {
          question: "What kind of tickets are included?",
          answer: "You get free or priority tickets to exclusive events, including premium lifestyle experiences, cultural events, and networking opportunities."
        },
        {
          question: "How do I unlock skip-the-queue perks?",
          answer: "Simply present your BlacVolta Card at partner venues to enjoy skip-the-queue access and other VIP privileges."
        }
      ]
    }
  ];

  const filteredFAQ = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        category.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const popularQuestions = [
    faqData[0].questions[0], // What is BlacVolta Card
    faqData[0].questions[1], // How to get card
    faqData[2].questions[0], // Where
    faqData[4].questions[0]  // Lost card
  ];

  return (
    <main>
      <NavBar />
      <div className="min-h-screen bg-background dark">
        {/* Hero Section */}
        <div className="bg-gradient-premium text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
          <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              {/* <h1 className="text-3xl mt-10 md:mt-0 md:text-4xl lg:text-6xl font-bold mb-6 text-center text-white">
                Frequently Asked Questions
              </h1>
              <p className="text-[16px] md:text-xl text-white/80 mb-8">
                Find everything you need to know about your BlacVolta Lifestyle Card
              </p> */}
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-8 md:gap-x-8">
                   {/*Benefits text*/}
                <div className="order-2 md:order-1 md:text-start px-4 md:px-0 flex flex-col items-start md:gap-y-4 lg:py-24 w-full">
                  <h1 className="text-[32px] sm:text-[36px] md:text-[48px] font-bold text-white leading-[120%] md:leading-tight">More Experiences.</h1>
                  <h1 className="text-[32px] sm:text-[36px] md:text-[48px] font-bold text-blacvolta-gold leading-[120%] md:leading-tight">More Saving</h1>
                  <h1 className="text-[32px] sm:text-[36px] md:text-[48px] font-bold text-white leading-[120%] md:leading-tight mb-4 md:mb-0">All with one card. </h1>
                  <p className="text-sm md:text-base mb-4 md:mb-0 text-white/80 md:max-w-[500px] text-start">The BV Card gives you exclusive access special discounts and VIP treatment at the best places across Ghana.</p>
                  <Link href="/download" className=" rounded-md w-fit px-10 py-3 text-base text-black bg-blacvolta-gold hover:bg-blacvolta-gold/90 transition-all duration-300">Get your card</Link>
                  <div className="flex flex-row items-center gap-3 mt-6">
                    <div className="flex -space-x-2.5">
                      <img
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0a0a0a] object-cover"
                        src="/assets/images/members/member-1.jpg"
                        alt="Member"
                      />
                      <img
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0a0a0a] object-cover"
                        src="/assets/images/members/member-2.jpg"
                        alt="Member"
                      />
                      <img
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0a0a0a] object-cover"
                        src="/assets/images/members/member-3.jpg"
                        alt="Member"
                      />
                      <img
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0a0a0a] object-cover"
                        src="/assets/images/members/member-4.jpg"
                        alt="Member"
                      />
                    </div>
                    <div className="text-sm font-normal text-white/80">
                      <div>10,000+ members</div>
                      <div className="text-gray-500"> and growing</div>
                    </div>
                  </div>
                </div> 
              <div className="order-1 md:order-2 group flex justify-center items-center [perspective:1000px] w-full max-w-[600px] h-[200px] sm:h-[260px] md:h-[300px] mx-auto">
                <div
                  className="relative w-full h-full transition-transform duration-700 animate-flip [transform-style:preserve-3d]"
                >
                  <img 
                    src='/assets/images/bvcardfront.png'
                    alt="BlacVolta Lifestyle Card"
                    className="object-cover h-full w-full transition-all duration-500 absolute rounded-xl [backface-visibility:hidden]"
                    
                  />
                  <img 
                    src='/assets/images/bvcardback.png'
                    alt="BlacVolta Lifestyle Card"
                    className="transition-all duration-500 absolute w-full h-full rounded-xl object-cover [backface-visibility:hidden] [transform:rotateY(180deg)]"
                  />
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <h1 className="text-2xl text-center mb-12 md:text-3xl lg:text-4xl text-blacvolta-gold font-semibold">Your Benefits</h1>
          <SavingsCards />
        </div>
         
        <div className="px-4 md:px-20 mb-12">
          <div className="flex flex-col md:flex-row bg-black px-6 py-8 md:px-10 md:py-6 rounded-xl border border-zinc-900 gap-8 md:gap-0 items-center">
            <div className="border-b border-b-zinc-800 md:border-b-0 md:border-r md:border-r-zinc-800 max-w-none md:max-w-60 w-full pb-6 md:pb-0 md:pr-10 text-left flex flex-col ">
              <div className="text-white text-sm mb-4">
                <h3 className="mb-2 font-semibold text-lg">Growing Every Month</h3>
                <h4 className="mb-0.5 text-zinc-400">New partners, New Benefits</h4>
                <h4 className="text-zinc-400">More reasons to use your card.</h4>
              </div>
              <button className="bg-blacvolta-gold text-xs font-semibold text-black px-4 py-2 rounded-md hover:bg-blacvolta-gold/90 transition-colors duration-300">
                UPDATED THIS MONTH
              </button>
            </div>
            <div className="grid grid-cols-3 md:flex md:justify-between w-full gap-6 md:gap-0 px-2 md:px-14">
              {growingEveryMonth.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.name} className="flex flex-col items-center gap-2 md:gap-4 text-center">
                    <Icon className="h-8 w-8 md:h-10 md:w-10 font-normal text-blacvolta-gold" />
                    <h2 className="text-white text-xs md:text-sm font-normal">{item.name}</h2>
                  </div>
                );
              })}
            </div>                             
          </div>
        </div>
        <Partners />
        <SavingsCalculator />
        <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl mt-10 md:mt-0 md:text-4xl lg:text-6xl font-bold mb-6 text-center text-white">
              Frequently Asked Questions
            </h1>
            <p className="text-[16px] md:text-xl text-white/80 mb-8">
              Find everything you need to know about your BlacVolta Lifestyle Card
            </p>
          </div>
        </div>
        {/* Search Section */}
        <div className="sticky top-16 lg:top-20 z-20 max-w-2xl mx-auto">
          <div className="container mx-auto px-4 -mt-8 relative">
            <Card className="max-w-2xl mx-auto shadow-premium">
              <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search FAQs (fees, lost card, discounts...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-5 text-sm md:text-lg rounded-[24px] outline-0 shadow-premium border-2 border-white focus-visible:ring-white focus-visible:ring-0 focus:ring-1 focus:ring-white"
            />
          </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Popular Questions */}
        {!searchTerm && (
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
              Frequently Asked Questions
              </h2>
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {popularQuestions.map((q, index) => (
                  <Card key={index} className="hover:shadow-card transition-all min-h-[180px] h-auto duration-300 cursor-pointer border-l-4 border-l-blacvolta-gold">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <HelpCircle className="text-blacvolta-gold h-5 w-5 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">{q.question}</h3>
                          <p className="text-muted-foreground text-sm line-clamp-5">{q.answer}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* FAQ Categories */}
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            {filteredFAQ.length === 0 ? (
              <Card className="text-center py-12">
                <CardContent>
                  <HelpCircle className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No results found</h3>
                  <p className="text-muted-foreground">Try searching with different keywords</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                {filteredFAQ.map((category, categoryIndex) => (
                  <Card key={categoryIndex} className="shadow-card">
                    <CardContent className="p-0">
                      <div className="bg-gradient-to-r from-blacvolta-gold/10 to-transparent p-6 border-b">
                        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                          <div className="w-1 h-8 bg-gradient-gold rounded-full"></div>
                          {category.category}
                        </h2>
                      </div>
                      <Accordion type="single" collapsible className="w-full">
                        {category.questions.map((faq, index) => (
                          <AccordionItem key={index} value={`item-${categoryIndex}-${index}`} className="border-b-0">
                            <AccordionTrigger className="px-6 py-4 hover:bg-muted/50 transition-colors text-left">
                              <span className="text-foreground font-medium">{faq.question}</span>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-4">
                              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-gradient-premium text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto text-center">
              <MessageCircle className="mx-auto h-12 w-12 text-blacvolta-gold mb-6" />
              <h2 className="text-3xl font-bold mb-4">Didn&apos;t find your answer?</h2>
              <p className="text-white/80 mb-8 text-lg">
                Our support team is here to help you with any questions about your BlacVolta Lifestyle Card.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="mailto:blacvolta@gmail.com">
                  <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-background">
                    Email Support
                  </Button>
                </Link>
               
                  <button
                    onClick={() => {
                      window.open("https://wa.me/233540973552", "_blank");
                    }}
                    className="bg-[#25D366] text-white rounded-full h-14 w-14 fixed bottom-6 right-6 shadow-[0_4px_20px_rgba(37,211,102,0.3)] flex items-center justify-center z-50 transition-transform duration-300 hover:scale-110 active:scale-95"
                    aria-label="Contact support on WhatsApp"
                  >
                    <RiWhatsappFill size={32} />
                  </button>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FAQ;