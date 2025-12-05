'use client';
import { useState } from "react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Search, ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";
import { Button } from "@/app/components/ui/button";
import { RiWhatsappFill } from "react-icons/ri";
import NavBar from "../components/navbar/navbar";
import Link from "next/link";

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
      category: "Payments & Fees",
      questions: [
        {
          question: "How much does the BlacVolta Card cost?",
          answer: "The card costs $100. Upon activation, you get an instant cashback of $20 to spend."
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
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl mt-10 md:mt-0 md:text-4xl lg:text-6xl font-bold mb-6 text-center text-white">
                Frequently Asked Questions
              </h1>
              <p className="text-[16px] md:text-xl text-white/80 mb-8">
                Find everything you need to know about your BlacVolta Lifestyle Card
              </p>
              <div className="group flex justify-center items-center [perspective:1000px] w-full max-w-[600px] h-[300px] mx-auto">
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
                  <Card key={index} className="hover:shadow-card transition-all h-[180px] duration-300 cursor-pointer border-l-4 border-l-blacvolta-gold">
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
                    className="bg-transparent block text-background border-4 border-white rounded-full h-[68px] w-[68px] fixed bottom-8 right-8 shadow-xl flex items-center justify-center"
                  >
                  {/* <IoLogoWhatsapp size={30} color="#25D366"/> */}
                  
                    <RiWhatsappFill size={85} color="#25D366" />
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