// import Hero from "@/app/components/hero/hero";

// export default function About(){
//     return(
//         <main className="min-h-screen">
//             <Hero headertext="ABOUT US" />
//             <div className="text-white md:px-[10%] lg:px-[20%] px-8 text-[1rem] leading-8 md:text-[1.1rem] py-12">
//                 <p >
//                     BlacVolta is a dynamic digital media platform transforming
//                     the entertainment and tech landscape across Africa.
//                     Founded in October 2022, BlacVolta operates from its
//                     headquarters in Ghana with a presence in East Africa,
//                     the USA, and the UK.
//                 </p>
//                 <p>
//                     We specialize in media, digital marketing, content creation, 
//                     videography, and e-commerce, all with the goal of reshaping
//                     how African nightlife, culture, and technology are perceived
//                     globally. Driven by a passion for showcasing Africa&apos;s vibrancy 
//                     and potential, BlacVolta is committed to celebrating the continent&apos;s 
//                     rich cultural diversity through innovative projects and strategic collaborations.
//                 </p>
//                 <p >
//                     BlacVolta&apos;s impact is felt through initiatives like the
//                     BlacVolta Nightlife Podcast, featuring international guests, 
//                     and our expansion into Uganda with the Creatives & Creator Community Mixer.
//                     We are committed to celebrating Africa&apos;s rich cultural diversity and continuing
//                     to lead innovation in media and entertainment.
//                 </p>
//             </div>
//         </main>
//     )
// }


/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
'use client'
import { motion } from "framer-motion";
import { 
  Palette, 
  Users, 
  Landmark, 
} from "lucide-react";
import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-sm font-medium hover:text-[white] transition-colors">
    {children}
  </a>
);

const PillarCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <motion.div 
    whileHover={{ borderColor: "white" }}
    className="glass-panel p-10 rounded-2xl group transition-all"
  >
    <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
      <Icon className="text-[white] w-8 h-8" />
    </div>
    <h4 className="text-2xl font-bold mb-4 text-white">{title}</h4>
    <p className="text-[#D4CEC4] font-light leading-relaxed">
      {description}
    </p>
  </motion.div>
);

const EcosystemItem = ({ title, description, active = false }: { title: string; description: string; active?: boolean }) => (
  <div className="relative">
    <div className={`absolute -left-[26px] top-2.5 w-2 h-2 bg-[#D49A35] rounded-full border-1 border-[#D49A35] }`}></div>
    <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
    <p className="text-[#D4CEC4] text-[15px] md:text-base  font-light">{description}</p>
  </div>
);

const WorkCard = ({ image, title, description }: { image: string; title: string; description: string }) => (
  <div className="glass-panel rounded-2xl overflow-hidden group">
    <div className="aspect-video overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="p-8">
      <h4 className="text-xl text-white font-bold mb-3">{title}</h4>
      <p className="text-[#D4CEC4] text-sm leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-primary selection:bg-primary selection:text-white">
      <NavBar />

      <main>
        {/* Hero Section */}
        <section className="relative h-[70dvh] md:h-screen flex items-center justify-center overflow-hidden">
          {/* <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f]/80 via-[#0f0f0f]/40 to-[#0f0f0f] z-10"></div>
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_GZRJbQNmZm3Z0hqCw9Ngamo8oH9WhkPYPrr5ACQ5SqB4pKHmV-TX7D3qF_oqLcbh9iKlStmGSZJFOX3d9D4K6udogxZoFtMcN4MoSxYiJN4tSi7OtjfJg-5sEe4GI_ed8nXXVp9ul0FwQENOelu2lQWOHHAfJUMmNFFrQDYaitjvRvzQ1f3BTS8ZiI7fu7CpIJUuDdMDsJ1enAVYtLPH2I-3Lc6vf3sFhVy-ugGSpKf0__i3rRKKi2xA07hfGkbh_l0GAO_Lb2sC" 
              alt="African Creativity Hero" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div> */}
           <div className="absolute inset-0">
                <img
                    src="/assets/images/about-hero-bg.jpg"
                    alt=""
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-transparent" />
        </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 max-w-5xl px-2 md:px-4 lg:px-6 text-center"
          >
            <span className="inline-block px-4 py-1 rounded-full border border-[#f47b25]/50 text-white text-xs font-bold tracking-widest uppercase mb-6 bg-primary/5">
              Africa&apos;s Infrastructure for Culture
            </span>
            <h1 className="text-center text-5xl md:text-8xl md:text-left text-white font-black tracking-tight leading-tight mb-8">
              <div className="flex justify-center">The Engine of Africa&apos;s </div> 
              <div className="text-[white] flex justify-center ">Creative Renaissance.</div>
            </h1>
            <p className="text-base md:text-2xl text-[#D4CEC4] max-w-3xl mx-auto font-light leading-relaxed">
              Building the backbone of Africa&apos;s creative and lifestyle economy. Not just to document culture — but to organize it.
            </p>
            {/* <div className="mt-12 flex flex-wrap justify-center gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform cursor-pointer">
                Explore Our Vision
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all cursor-pointer">
                View Ecosystem
              </button>
            </div> */}
          </motion.div>
        </section>

        {/* Introduction Section */}
        <section className="py-10 lg:py-16 bg-[#0f0f0f] bg-radial-gold">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="flex justify-center">
              <div className="w-1 h-20 bg-gradient-to-b from-[#D4CEC4] to-transparent"></div>
            </div>
            <h2 className="text-xl md:text-2xl text-left font-normal leading-snug italic text-[#D4CEC4]">
              &apos;Across Africa, a quiet revolution is underway. From Accra to Lagos, Nairobi to Johannesburg, a new economy is rising — driven by culture, creativity, and connection.&apos;
               {/* <p className="text-white text-left mt-5 font-medium not-italic">
                Yet despite its vibrancy, Africa’s creative ecosystem remains under-structured and under-capitalized. Creators operate in fragmented markets. Brands struggle to engage culture authentically. Businesses lack unified digital infrastructure.
                </p> */}
            </h2>
          </div>
        </section>
        <section className="py-10 lg:py-16 relative bg-radial-gold">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-7 md:grid-cols-2 md:gap-24">
            <div data-animate>
              <p className="text-sm tracking-[0.3em] uppercase text-[#D49A35] font-body mb-6">
                The Challenge
              </p>
              <h2 className="font-display text-3xl md:text-[2.75rem] leading-snug text-white font-medium">
                Africa&apos;s creative ecosystem remains under-structured and
                under-capitalized.
              </h2>
            </div>
            <div data-animate className="flex flex-col justify-end">
              <div className="space-y-6 text-[#D4CEC4] font-body font-light leading-[1.8] text-[15px]">
                <p>
                  Creators operate in fragmented markets. Brands struggle to
                  engage culture authentically. Businesses lack unified digital
                  infrastructure.
                </p>
                <p className="text-[#D4CEC4]">
                  BlacVolta was founded at this inflection point — not just to
                  document culture, but to <span className="text-[#D49A35]">organize it</span>.
                  Not just to amplify creativity, but to <span className="text-[#D49A35]">monetize it</span>.
                  Not just to inspire communities, but to <span className="text-[#D49A35]">turn them into economies</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* The Three Pillars */}
        <section className="py-10 lg:py-16 relative px-6 bg-radial-gold">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
              <p className="text-sm tracking-[0.3em] uppercase text-[#D49A35] font-body mb-6">Our Foundation</p>
                <h2 className="text-4xl md:text-5xl text-white text-left md:text-left font-black">The Three Timeless Pillars</h2>
              </div>
              <p className="text-[#D4CEC4] text-[15px] md:text-base font-light max-w-md">Our approach is designed to transform the inherent energy of African culture into a sustainable, structured economic powerhouse.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PillarCard 
                icon={Palette}
                title="Culture"
                description="We document and shape Africa’s creative pulse — from nightlife and music to fashion, media, and urban experiences."
              />
              <PillarCard 
                icon={Users}
                title="Community"
                description="We connect creators, entrepreneurs, brands, and cities into one shared ecosystem across the continent and diaspora."
              />
              <PillarCard 
                icon={Landmark}
                title="Commerce"
                description="We build the infrastructure that transforms visibility into revenue and creativity into capital."
              />
            </div>
          </div>
        </section>
        <section className="py-10 lg:py-16 px-6 bg-radial-gold">
          <div className="max-w-7xl mx-auto">
            <div>
              {/* <h3 className="text-white font-bold tracking-widest uppercase text-sm mb-4">Portfolio</h3> */}
                <p className="text-sm tracking-[0.3em] uppercase text-[#D49A35] font-body mb-6">The Opportunity</p>
                <p className="text-[#D4CEC4] font-light max-w-2xl text-base lg:text-lg">
                The global creative economy exceeds $2 trillion in value, yet Africa’s share remains disproportionately small.</p>
                <p className="text-[#D4CEC4] font-light mt-3 max-w-2xl text-base lg:text-lg">
                With a rapidly growing youth population, accelerating digital payments infrastructure, and expanding urban centers, the continent stands at the edge of exponential scale.
                </p>
                <p className="text-[#D4CEC4] font-light mt-3 max-w-2xl text-base lg:text-lg">
                The next decade will belong to institutions capable of unifying culture with commerce.
                </p>
                <p className="text-[#D4CEC4] font-light mt-3 max-w-2xl text-base lg:text-lg">
                BlacVolta is building that institution.
                </p>
            </div>
        </div>
        </section>
        {/* The Ecosystem Section */}
        <section className="py-10 lg:py-16 relative bg-radial-gold">
          <div className="max-w-7xl mx-auto px-6">
            <div>
              <div>
              <p className="text-sm tracking-[0.3em] uppercase text-[#D49A35] font-body mb-6">Our Ecosystem</p>
                <h2 className="text-4xl md:text-6xl text-white font-black mb-8 leading-tight">A Unified <br/> Ecosystem</h2>
                <p className="text-lg font-light text-[#D4CEC4] mb-12 max-w-lg">
                    BlacVolta operates as a multi-vertical creative infrastructure company powering Africa’s lifestyle economy at scale.
                </p>
                <div className="space-y-8 border-l-2 border-primary/20 pl-8">
                  <EcosystemItem 
                    title="BlacVolta Lifestyle Program"
                    description="A unified digital and payments ecosystem combining lifestyle discovery, cultural storytelling, and prepaid card infrastructure — enabling seamless experiences across cities."
                    active
                  />
                  <EcosystemItem 
                    title="BV Social"
                    description="Our digital marketing and brand strategy arm — partnering with corporate, hospitality, entertainment, lifestyle, and real estate brands to drive visibility, engagement, and cultural relevance."
                  />
                  <EcosystemItem 
                    title="FIA Talent Agency"
                    description="A next-generation talent management company representing creatives, influencers, and cultural leaders — building sustainable personal brands, strategic partnerships, and long-term commercial growth."
                  />
                  <EcosystemItem 
                    title="BlacVolta Merch & E-Commerce"
                    description="A merchandise and digital commerce division enabling creators and brands to build products, launch collections, and distribute at scale."
                  />
                   <p className="text-base font-light text-[#D4CEC4] mb-12 max-w-lg">
                   Together, these businesses form a vertically integrated engine for Africa’s creative economy.
                   </p>
                </div>
              </div>
              <div className="relative">
                {/* <div className="aspect-square glass-panel rounded-3xl overflow-hidden relative">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB50M9c7NWsqs84Bvg8lKCJvAoZbAQfkLBxwxN1bFwjvuWNviYMEoNGvEX0zhAt4k83E7VNCT0V1EW3AzD7pw5xfg2l3rbhfoH6IjfXf9Hyoz7Ub9HtMihOLSR0mg3lixa4CWz4tACMJ6sk9e70S3HDZKePvOOQSH3j0tcRS1NRAKHsx5r64aXLJD6xcJ1X7aIYQ2bjivJwY0MuAPSx-a-uFAUfB9eSyyxBkBFJafKaQYCXPTLBXo76O2yAJh_cC4ZeQjaKACEME6p5" 
                    alt="Ecosystem Visual" 
                    className="w-full h-full object-cover opacity-60"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="p-12 glass-panel rounded-full border-primary/30"
                    >
                      <Network className="text-primary w-16 h-16" />
                    </motion.div>
                  </div>
                </div> */}
                {/* Decorative floating elements */}
                {/* <div className="absolute -top-6 -right-6 p-4 md:p-6 glass-panel rounded-2xl">
                  <TrendingUp className="text-primary w-6 h-6" />
                </div>
                <div className="absolute -bottom-6 -left-6 p-4 md:p-6 glass-panel rounded-2xl">
                  <CreditCard className="text-primary w-6 h-6" />
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* Our Work Section */}
        <section className="py-10 lg:py-16 px-6 bg-radial-gold">
          <div className="max-w-7xl mx-auto">
            <div>
              {/* <h3 className="text-white font-bold tracking-widest uppercase text-sm mb-4">Portfolio</h3> */}
                <p className="text-sm tracking-[0.3em] uppercase text-[#D49A35] font-body mb-6">Our Work</p>
                <p className="text-[#D4CEC4] font-light max-w-2xl text-base lg:text-lg">
                    BlacVolta has documented and amplified some of culture’s most defining moments — including coverage of the Grammys and major global platforms such as AfroFuture.
                </p>
                <p className="text-[#D4CEC4] font-light mt-3 max-w-2xl text-base lg:text-lg">
                    We work with leading brands and organizations across corporate, hospitality, entertainment, lifestyle, and real estate sectors — bridging global platforms with
                    African creativity.We work with leading brands and organizations across corporate, hospitality, entertainment, lifestyle, and real estate sectors — bridging global platforms with African creativity.
                </p>
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <WorkCard 
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuDndXp0uH5S8z3p7Z8t4kS9v8l7m6n5o4p3q2r1s0t9u8v7w6x5y4z3a2b1c0d"
                title="Grammy Awards Coverage"
                description="Comprehensive media coverage and exclusive behind-the-scenes content showcasing African talent on the world's biggest musical stage."
              />
              <WorkCard 
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuDndXp0uH5S8z3p7Z8t4kS9v8l7m6n5o4p3q2r1s0t9u8v7w6x5y4z3a2b1c0d"
                title="AfroFuture Festival"
                description="Strategic partnership and digital documentation of Africa's premier celebration of music, art, and fashion in Accra."
              />
              <WorkCard 
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuDndXp0uH5S8z3p7Z8t4kS9v8l7m6n5o4p3q2r1s0t9u8v7w6x5y4z3a2b1c0d"
                title="Global Brand Partnerships"
                description="Bridging the gap between international brands and the African creative economy through authentic lifestyle integration campaigns."
              />
            </div> */}
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-10 lg:py-16 bg-primary/5 bg-radial-gold">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <img 
                    src="/assets/images/bvteam/joseph.jpg" 
                    alt="Joseph Adjei" 
                    className="w-full aspect-[4/4] object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
              <p className="text-sm tracking-[0.3em] uppercase text-[#D49A35] font-body mb-6">Leadership</p>
                <h2 className="text-xl md:text-2xl lg:text-4xl text-white font-semibold mb-6">Joseph Adjei</h2>
                <p className="text-[15px] md:text-base font-light text-white mb-4">BlacVolta was founded by Joseph Adjei, a strategic operator with over 15 years of experience across multinational organizations in oil and gas, financial services, and corporate leadership environments.</p>
                <p className="text-[15px] md:text-base font-light text-white mb-4">His background in structured enterprise systems, commercial architecture, and organizational scaling anchors BlacVolta’s growth in discipline, sustainability, and long-term vision.  </p>
                <p className="text-[15px] md:text-base font-light text-white ">BlacVolta combines creative instinct with institutional rigor. </p>
                {/* <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="bg-primary/20 p-2 rounded-lg">
                      <Globe className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="font-bold text-white text-lg">Global Coverage</h5>
                      <p className="text-[#D4CEC4]">Leading the narrative at world-class events including the Grammys and AfroFuture festivals.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 font-light items-start">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Building2 className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h5 className="font-bold text-white text-lg">Institutional Rigor</h5>
                      <p className="text-[#D4CEC4]">Bridging the gap between the informal creative sector and formal global business structures.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-12 flex gap-8 items-center text-white grayscale opacity-50">
                  <span className="font-bold text-xs uppercase tracking-widest">Featured At:</span>
                  <div className="h-6 w-px bg-white/20"></div>
                  <span className="font-black text-xl italic">Grammys</span>
                  <span className="font-black text-xl italic">AfroFuture</span>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        {/* <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto glass-panel rounded-3xl p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 -z-10"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <h2 className="text-4xl md:text-7xl font-black mb-8">Join the Renaissance</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-16">
              Whether you are building the next big brand, creating world-class art, or looking for institutional investment opportunities, we have a seat at the table for you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['Creators', 'Brands', 'Investors'].map((item) => (
                <button 
                  key={item}
                  className="flex items-center justify-between bg-white/5 hover:bg-primary hover:text-[#0f0f0f] border border-white/10 p-6 rounded-2xl transition-all group cursor-pointer"
                >
                  <div className="text-left">
                    <p className="text-xs uppercase tracking-widest font-bold opacity-60">For</p>
                    <h5 className="text-xl font-bold">{item}</h5>
                  </div>
                  <ArrowUpRight className="w-6 h-6" />
                </button>
              ))}
            </div>
          </div>
        </section> */}
        <section className="py-10 lg:py-16 bg-primary/5 bg-radial-gold">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-1 lg:order-2">
                <p className="text-sm tracking-[0.3em] uppercase text-[#D49A35] font-body mb-6">Beyond Commerce </p>
                <h2 className="font-display text-3xl text-white md:text-5xl lg:text-6xl leading-snug font-medium mb-8">
                    Africa does not lack talent.
                <br />
                <span className="text-[#D49A35] italic font-normal">
                    It lacks structured infrastructure.
                </span>
                </h2>
                <p className="text-[#D4CEC4] font-body font-light leading-[1.8] text-[15px] max-w-2xl mx-auto">
                Our long-term ambition extends beyond media, marketing, or
                payments. We are building an integrated ecosystem for digital
                ownership, financial inclusion, and scalable creative enterprise.
                </p>
              </div>
              </div>
            </div>
        </section>

        <section className="py-10 lg:py-16 bg-primary/5">
        <div className="mx-auto max-w-7xl px-6 md:px-10 text-center">
          <div data-animate>
            <div className="inline-flex items-center gap-3 mb-10 px-4 py-2 rounded-full border border-[#D4CEC4] glass-card">
              <div className="h-1.5 w-1.5 rounded-full bg-[#D49A35] animate-pulse " />
              <span className="text-xs font-body tracking-[0.3em] uppercase text-white">
                Join the Renaissance
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-white font-medium mb-10 leading-tight">
              The creative renaissance
              <br />
              <span className="text-gradient-gold italic font-normal">
                is here.
              </span>
            </h2>

            <div className="flex flex-wrap w-full md:justify-center gap-3 text-sm text-muted-foreground font-body">
              {["Creators", "Brands", "Cities", "Investors"].map((item) => (
                <div
                  key={item}
                  className="glass-card rounded-full px-5 py-2.5 text-[#D4CEC4] border border-gray/30 transition-colors cursor-default"
                >
                  To {item}
                </div>
              ))}
            </div>

            <p className="mt-10 text-[#D4CEC4] font-body font-light text-[15px]">
              BlacVolta is building the engine behind it.
            </p>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
