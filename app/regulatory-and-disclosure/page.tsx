import { Building2, Info, Shield } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/seperator";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaCcVisa } from "react-icons/fa";
import { PiShieldCheckFill } from "react-icons/pi";
import NavBar from "../components/navbar/navbar";
const partners = [
    {
      icon:FaCcVisa ,
      title: "VISA® Prepaid Card",
      provider: "First Atlantic Bank Ghana Ltd",
      description: "The Blacvolta VISA® Prepaid Card is powered by VISA and issued by First Atlantic Bank Ghana Ltd, a licensed financial institution.",
    },
    {
      icon: PiShieldCheckFill,
      title: "EventShield Micro-Insurance",
      provider: "Metropolitan Life Insurance Ghana Ltd",
      description: "Blacvolta EventShield micro-insurance products are underwritten by Metropolitan Life Insurance Ghana Ltd.",
    },
    {
      icon: RiSecurePaymentLine,
      title: "Payment Processing",
      provider: "Paystack & Onafriq",
      description: "All payments and transaction processing services are facilitated by Paystack and Onafriq under their respective regulatory approvals.",
    },
  ];
  
export default function RegulatoryAndDisclosure(){
    
    return(
    <main className="flex-1 pt-16">
        <NavBar />
      <div className="min-h-screen bg-black via-background to-muted/20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-14 lg:pt-28">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--gold)/0.08),transparent_50%)]" />
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full text-termsaccent   bg-termsaccent/10 px-4 py-2 text-sm text-gold">
                {/* <Shield className="h-4 w-4" /> */}
                Transparency & Compliance
              </div>
              <h1 className="mb-6 font-display text-white text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl animate-fade-in">
                Regulatory <span className="text-white">Disclosure</span>
              </h1>
              <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Understanding our regulatory framework and licensed partnerships
              </p>
            </div>
          </div>
        </section>

        {/* Main Disclosure Statement */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Card className="mx-auto max-w-4xl border-termsborder bg-termscard shadow-elevated animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-8 lg:p-10">
                <div className="flex items-start gap-4">
                  <div className="space-y-4">
                    <h2 className="font-display flex items-center text-white text-2xl font-semibold">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-gold shadow-gold">
                            <Building2 className="h-6 w-6 text-primary-foreground" />
                        </div>
                        Important Notice
                    </h2>
                    <p className="text-termsmuted-foreground leading-relaxed">
                      Blacvolta is a technology platform and does not operate as a licensed bank, insurer, or financial institution. Financial products and services accessible through the Blacvolta App are provided by duly licensed third-party partners.
                    </p>
                    <div className="flex flex-col items-start gap-3 rounded-lg border border-termsborder  bg-termscard p-4">
                        <div className="flex items-center gap-2">
                            <Info className="text-[18px] font-boldmt-0.5 h-5 w-5 shrink-0 text-white" />
                            <span className="text-white">Important</span>
                        </div>
                      
                      <p className="text-sm text-termsmuted-foreground">
                        Blacvolta does not hold customer funds, provide regulated banking services, or underwrite insurance products. All regulated services are delivered and supervised by the respective licensed partners.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-10 text-center text-white font-display text-3xl font-semibold">
                Our Licensed <span className="text-white">Partners</span>
              </h2>
              
              <div className="space-y-6">
                {partners.map((partner, index) => (
                  <Card 
                    key={partner.title} 
                    className="border-termsborder bg-termscard transition-all animate-fade-in-up"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <CardContent className="p-6 lg:p-8">
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-muted">
                          <partner.icon className="h-7 w-7 text-gold" />
                        </div>
                        <div className="space-y-4">
                          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-3">
                            <h3 className="text-xl text-white font-semibold">{partner.title}</h3>
                            <span className="w-fit rounded-full  bg-termsaccent/10 px-3 py-0.5 text-xs font-medium text-termsaccent">
                              {partner.provider}
                            </span>
                          </div>
                          <p className="text-termsmuted-foreground leading-relaxed">{partner.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Summary */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Separator className="mb-12 bg-border/50" />
            <div className="mx-auto max-w-3xl space-y-4">
                <Card className="mx-auto max-w-4xl border-termsborder bg-termscard shadow-elevated animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <CardContent className="p-8 lg:p-10">
                <p className="text-base leading-relaxed text-white mb-3">
                    For inquiries regarding specific financial products and services, please contact the respective licensed partner directly. Blacvolta is committed to maintaining the highest standards of transparency and regulatory compliance in all its operations.
                </p>
                </CardContent>
                </Card>
                <Card className="mx-auto max-w-4xl border-termsborder bg-termscard shadow-elevated animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                    <CardContent className="p-8 lg:p-10">
                    <p className="text-base leading-relaxed text-white">
                        <div className="flex items-center gap-2 mb-3">
                            <Info className="mt-0.5 h-5 w-5 shrink-0 text-white" />
                            <span className="text-white text-[18px] font-bold">Important</span>
                        </div>
                        Blacvolta is not a licensed financial institution. All financial products and services are provided by licensed partners. Card issued by First Atlantic Bank Ghana Ltd. Insurance underwritten by Metropolitan Life Insurance Ghana Ltd. Payments powered by Paystack & Onafriq.
                    </p>
                  
                    </CardContent>
                </Card>
                <p className="mt-6 text-center text-xs text-white">
                    © 2025 BLACVOLTA. All rights reserved.
                </p>
            </div>
          </div>
        </section>
      </div>
     
    </main>
  );

}