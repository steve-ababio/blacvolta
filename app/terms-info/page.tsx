"use client";
import { useState } from "react";

import { ArrowLeft, Shield, Lock, Globe, FileText, Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import NavBar from "../components/navbar/navbar";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  const sections = [
    { id: "overview", title: "Overview", icon: Shield },
    { id: "collection", title: "Information We Collect", icon: FileText },
    { id: "usage", title: "How We Use Your Information", icon: Lock },
    { id: "sharing", title: "How We Share Information", icon: Globe },
    { id: "storage", title: "Data Storage and Security", icon: Lock },
    { id: "rights", title: "Your Rights", icon: Shield },
    { id: "contact", title: "Contact Us", icon: Mail },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      {/* <header className="sticky top-0 z-50 border-b border-termsborder bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2 text-white">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-termsaccent" />
               <Image alt="Blacvolta logo" className="aspect-[4/3] object-contain xl:h-auto xl:w-auto" width={60} height={60}  src="/assets/images/logo.png" priority />
              <span className="font-semibold text-white">
                Blacvolta Lifestyle
              </span>
            </div>
          </div>
        </div>
      </header> */}
      <NavBar />

      <div className="container mx-auto mt-24 px-4 py-12 lg:py-16">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Sidebar Navigation */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <Card className="p-4 bg-termscard border-termsborder">
                <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-termsmuted-foreground">
                  Contents
                </h3>
                <nav className="space-y-1">
                  {sections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .getElementById(section.id)
                            ?.scrollIntoView({ behavior: "smooth" });
                          setActiveSection(section.id);
                        }}
                        className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-all ${
                          activeSection === section.id
                            ? "bg-accent text-accent-foreground font-medium"
                            : "text-termsmuted-foreground hover:text-white hover:bg-termsmuted"
                        }`}
                      >
                        <Icon className="h-4 w-4 flex-shrink-0" />
                        <span>{section.title}</span>
                      </a>
                    );
                  })}
                </nav>
              </Card>
            </div>
          </aside>

          {/* Main Content */}
          <main className="max-w-4xl">
            {/* Hero Section */}
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-termsaccent/10 text-termsaccent text-sm font-medium mb-6">
                <Lock className="h-4 w-4" />
                Last Updated: September 23, 2025
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-termsaccent-foreground">
                Privacy Policy
              </h1>
              <p className="text-xl text-termsmuted-foreground leading-relaxed">
                Your privacy matters to us. This policy explains how Blacvolta
                Lifestyle collects, uses, and protects your personal
                information.
              </p>
            </div>

            {/* Overview */}
            <section id="overview" className="mb-12 scroll-mt-24">
              <Card className="p-6 lg:p-8 bg-termscard border border-termsborder">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-termsaccent/10">
                    <Shield className="h-6 w-6 text-termsaccent" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3 text-termsaccent-foreground">
                      About Blacvolta Lifestyle
                    </h2>
                    <p className="text-termsmuted-foreground leading-relaxed">
                      Blacvolta Lifestyle is a lifestyle-fintech platform that
                      merges culture, perks and payments into a single
                      experience that empowers users to live, explore and
                      transact with ease across the lifestyle economy.
                    </p>
                    <p className="text-termsmuted-foreground leading-relaxed mt-4">
                      This Privacy Policy explains how we collect, use, share,
                      and safeguard information when you use the Blacvolta
                      Lifestyle App, Blacvolta Debit Card, and related services.
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            {/* Information We Collect */}
            <section id="collection" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Information We Collect
              </h2>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem
                  value="direct"
                  className=" bg-termscard border border-termsborder rounded-lg px-6"
                >
                  <AccordionTrigger className="text-lg text-white font-semibold hover:no-underline">
                    Information You Provide Directly
                  </AccordionTrigger>
                  <AccordionContent className="text-termsmuted-foreground space-y-3 pt-2">
                    <div>
                      <p className="font-medium text-white mb-2">
                        Personal Identification Information:
                      </p>
                      <p>
                        Name, email, phone number, date of birth, government ID
                        (for KYC)
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-white mb-2">
                        Account Information:
                      </p>
                      <p>
                        Username, password, preferences, lifestyle interests
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-white mb-2">
                        Financial Information:
                      </p>
                      <p>Bank details, debit card details</p>
                    </div>
                    <div>
                      <p className="font-medium text-white mb-2">
                        Merchant & Event Information:
                      </p>
                      <p>Purchases, ticket scans, perks redeemed</p>
                    </div>
                    <div>
                      <p className="font-mediumtext-white mb-2">
                        Location Data:
                      </p>
                      <p>
                        If permitted, to recommend nearby merchants and offers
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="automatic"
                  className=" bg-termscard border border-termsborder rounded-lg px-6"
                >
                  <AccordionTrigger className="text-lg text-white font-semibold hover:no-underline">
                    Information We Collect Automatically
                  </AccordionTrigger>
                  <AccordionContent className="text-termsmuted-foreground space-y-4 pt-2">
                    <div>
                      <p className="font-medium text-white mb-2">
                        Device Information:
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Device type, model, and operating system</li>
                        <li>Unique device identifiers</li>
                        <li>App version and build information</li>
                        <li>Device language and region settings</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-white mb-2">
                        Usage Information:
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>App usage patterns and interactions</li>
                        <li>Features used and time spent in the app</li>
                        <li>Navigation patterns and user behavior</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-white mb-2">
                        Financial Information:
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Transaction history</li>
                        <li>Wallet activity</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-white mb-2">
                        Technical Information:
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>IP address and network information</li>
                        <li>Crash reports and error logs</li>
                        <li>Performance metrics</li>
                        <li>Network connectivity status</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* How We Use Your Information */}
            <section id="usage" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-white">
                How We Use Your Information
              </h2>
              <Card className="p-6 lg:p-8 bg-termscard border-termsborder">
                <ul className="space-y-4 text-termsmuted-foreground">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>
                      Provide and operate the Blacvolta Lifestyle App and Debit
                      Card
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>
                      Verify your identity and comply with KYC/AML regulations
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Process payments, settlements, and refunds</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>
                      Understand app usage patterns and improve functionality
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Identify and fix technical issues</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Optimize app performance and user experience</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>
                      Deliver personalized content, perks, and recommendations
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Communicate updates, offers, and promotions</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>
                      Detect and prevent fraud, security breaches, and illegal
                      activities
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>
                      Comply with legal obligations and regulatory requirements
                    </span>
                  </li>
                </ul>
              </Card>
            </section>

            {/* How We Share Information */}
            <section id="sharing" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-white">
                How We Share Information
              </h2>
              <Card className="p-6 lg:p-8 bg-termscard border-termsborder">
                <p className="text-white font-semibold mb-6">
                  We do not sell your personal data. We may share information
                  with:
                </p>
                <div className="space-y-4 text-termsmuted-foreground">
                  <div>
                    <p className="font-medium text-white mb-2">
                      Service Providers:
                    </p>
                    <p>
                      Banks, payment processors, KYC/AML verification partners
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-white mb-2">
                      Merchants & Partners:
                    </p>
                    <p>
                      To validate transactions, provide perks, or honor bookings
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-white mb-2">
                      Regulatory Authorities:
                    </p>
                    <p>When required by law or financial regulation</p>
                  </div>
                  <div>
                    <p className="font-medium text-white mb-2">
                      Technology Providers:
                    </p>
                    <p>
                      Hosting, analytics, and fraud detection vendors (under
                      strict agreements)
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-white mb-2">
                      Business Transfers:
                    </p>
                    <p>
                      In connection with mergers, acquisitions, or asset sales
                    </p>
                  </div>
                </div>
              </Card>
            </section>

            {/* Data Storage and Security */}
            <section id="storage" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Data Storage and Security
              </h2>

              <div className="space-y-4">
                <Card className="p-6 bg-termscard border-termsborder">
                  <h3 className="font-semibold text-lg mb-4 text-white">
                    Local Storage
                  </h3>
                  <ul className="space-y-2 text-termsmuted-foreground">
                    <li>
                      <strong className="text-white">AsyncStorage:</strong>{" "}
                      User preferences, language settings, and cached data
                    </li>
                    <li>
                      <strong className="text-white">
                        Redux Persist:
                      </strong>{" "}
                      Application state and user session data
                    </li>
                    <li>
                      <strong className="text-white">
                        Keychain/Keystore:
                      </strong>{" "}
                      Secure storage of authentication tokens
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 bg-termscard border-termsborder">
                  <h3 className="font-semibold text-lg mb-4 text-white">
                    Server Storage
                  </h3>
                  <ul className="space-y-2 text-termsmuted-foreground">
                    <li>User account information stored on secure servers</li>
                    <li>Content and posts stored in encrypted databases</li>
                    <li>Backup and recovery systems for data protection</li>
                  </ul>
                </Card>

                <Card className="p-6 bg-termscard border-termsborder">
                  <h3 className="font-semibold text-lg mb-4 text-white">
                    Security Measures
                  </h3>
                  <ul className="space-y-2 text-termsmuted-foreground">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Secure authentication and session management</li>
                    <li>Regular security audits and penetration tests</li>
                    <li>
                      Access controls and monitoring to prevent unauthorized
                      access
                    </li>
                    <li>PCI DSS compliance for payment data</li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* Your Rights */}
            <section id="rights" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Your Rights
              </h2>
              <Card className="p-6 lg:p-8 bg-termscard border-termsborder">
                <p className="text-termsmuted-foreground mb-6">
                  Depending on your jurisdiction, you may have the right to:
                </p>
                <ul className="space-y-4 text-termsmuted-foreground">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Access and request a copy of your data</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Correct or update inaccurate information</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Request deletion of your personal data</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>
                      Restrict or object to certain processing activities
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>
                      Withdraw consent at any time (without affecting prior
                      lawful use)
                    </span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-termsaccent/10 rounded-lg">
                  <p className="text-white">
                    Requests can be made by contacting us at{" "}
                    <a
                      href="mailto:support@blacvolta.com"
                      className="text-termsaccent font-medium hover:underline"
                    >
                      support@blacvolta.com
                    </a>
                  </p>
                </div>
              </Card>
            </section>

            {/* Regional Privacy Rights */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Regional Privacy Rights
              </h2>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem
                  value="africa"
                  className="border border-termsborder rounded-lg px-6 bg-termscard"
                >
                  <AccordionTrigger className="text-lg text-white font-semibold hover:no-underline">
                    Africa (Nigeria, Kenya, South Africa)
                  </AccordionTrigger>
                  <AccordionContent className="text-white text-termsmuted-foreground space-y-4 pt-2">
                    <div>
                      <p className="font-medium text-white mb-2">
                        Nigeria (NDPR):
                      </p>
                      <p>
                        Rights to consent, access, rectification, and deletion.
                        Requires data protection officers and breach reporting.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-white mb-2">
                        Kenya (Data Protection Act, 2019):
                      </p>
                      <p>
                        Explicit consent required. Users can request deletion,
                        correction, or restriction of data.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-white mb-2">
                        South Africa (POPIA):
                      </p>
                      <p>
                        Right to be informed, access and correct data, and
                        withdraw consent. Strong penalties for non-compliance.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="usa"
                  className="border border-termsborder rounded-lg px-6 bg-termscard"
                >
                  <AccordionTrigger className=" text-white text-lg font-semibold hover:no-underline">
                    United States (CCPA & State Laws)
                  </AccordionTrigger>
                  <AccordionContent className="text-termsmuted-foreground space-y-3 pt-2">
                    <p className="font-medium text-white">
                      California Consumer Privacy Act (CCPA):
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Right to know what data is collected and shared</li>
                      <li>Right to delete personal data</li>
                      <li>Right to opt-out of sale of personal data</li>
                      <li>Right to non-discrimination</li>
                    </ul>
                    <p className="mt-3">
                      Similar laws in Virginia, Colorado, Connecticut, and Utah.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="eu"
                  className="border border-termsborder rounded-lg px-6 bg-termscard"
                >
                  <AccordionTrigger className="text-white text-lg font-semibold hover:no-underline">
                    European Union (GDPR)
                  </AccordionTrigger>
                  <AccordionContent className="text-termsmuted-foreground space-y-2 pt-2">
                    <ul className="list-disc list-inside space-y-2 ml-2">
                      <li>
                        <strong className="text-white">
                          Right to Access:
                        </strong>{" "}
                        Request a copy of personal data
                      </li>
                      <li>
                        <strong className="text-white">
                          Right to Rectification:
                        </strong>{" "}
                        Correct inaccurate data
                      </li>
                      <li>
                        <strong className="text-white">
                          Right to Erasure:
                        </strong>{" "}
                        Request deletion of data
                      </li>
                      <li>
                        <strong className="text-white">
                          Right to Restrict Processing:
                        </strong>{" "}
                        Block processing of data
                      </li>
                      <li>
                        <strong className="text-white">
                          Right to Data Portability:
                        </strong>{" "}
                        Transfer data to another provider
                      </li>
                      <li>
                        <strong className="text-white">
                          Right to Object:
                        </strong>{" "}
                        Object to marketing or profiling
                      </li>
                      <li>
                        <strong className="text-white">
                          Consent Requirement:
                        </strong>{" "}
                        Clear opt-in required
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="other"
                  className="border border-termsborder rounded-lg px-6 bg-termscard"
                >
                  <AccordionTrigger className=" text-white text-lg font-semibold hover:no-underline">
                    Other Regions
                  </AccordionTrigger>
                  <AccordionContent className="text-termsmuted-foreground space-y-2 pt-2">
                    <p>
                      <strong className="text-white">UK:</strong>{" "}
                      Post-Brexit GDPR equivalent (UK GDPR)
                    </p>
                    <p>
                      <strong className="text-white">
                        Canada (PIPEDA):
                      </strong>{" "}
                      Rights to access, correct, and withdraw consent
                    </p>
                    <p>
                      <strong className="text-white">Asia:</strong>{" "}
                      Singapore PDPA, India's DPDP Act - varying degrees of
                      GDPR-style protections
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Contact Section */}
            <section id="contact" className="mb-12 scroll-mt-24">
              <Card className="p-8 border-termsborder border bg-termscard">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/20">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-white">
                      Contact Us
                    </h2>
                    <p className="text-termsmuted-foreground mb-6">
                      If you have any questions, requests, or concerns about
                      this Privacy Policy:
                    </p>
                    <div className="space-y-3 text-termsmuted-foreground">
                      <p>
                        <strong className="text-white">Email:</strong>{" "}
                        <a
                          href="mailto:support@blacvolta.com"
                          className="text-accent hover:underline"
                        >
                          support@blacvolta.com
                        </a>
                      </p>
                      <p>
                        <strong className="text-white">Address:</strong>{" "}
                        1st Makunta Street, New Gbawe
                      </p>
                      <p>
                        <strong className="text-white">Phone:</strong> +233
                        54097 3552
                      </p>
                      <p className="mt-4">
                        <strong className="text-white">
                          Data Protection Officer:
                        </strong>{" "}
                        <a
                          href="mailto:support@blacvolta.com"
                          className="text-accent hover:underline"
                        >
                          support@blacvolta.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Footer */}
            <div className="pt-8 border-t border-termsborder">
              <p className="text-sm text-termsmuted-foreground text-center">
                Effective Date: September 23, 2025 • Version 1.0
              </p>
              <p className="text-xs text-termsmuted-foreground text-center mt-2">
                This Privacy Policy is effective as of the date listed above and
                will remain in effect except with respect to any changes in its
                provisions in the future.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
