export interface JobData {
    id: string;
    title: string;
    company: string;
    parent: string;
    location: string;
    type: string;
    overview: string;
    responsibilities: {
      category: string;
      items: string[];
    }[];
    success: string[];
    requirements: string[];
    niceToHave: string[];
  }
  

  export const jobsList: JobData[] = [
    {
      id: "business-development-lead",
      title: "Business Development Lead",
      company: "BV Social",
      parent: "Powered by BlacVolta",
      location: "Ghana / Africa",
      type: "Full-time",
      overview:
        "The Business Development Lead is responsible for driving revenue growth, partnerships, and strategic deals across BV Social's core offerings — branded content, influencer & creator management, PR & media amplification, experiential marketing, social media management, and OOH media buying. This role sits at the intersection of culture, brands, and commerce, translating BV Social's creative capabilities into long-term commercial relationships with corporate brands, hospitality businesses, event platforms, and cultural institutions across Ghana and Africa.",
      responsibilities: [
        {
          category: "Revenue & Growth",
          items: [
            "Own and drive new business acquisition across corporate, hospitality, events, and lifestyle sectors",
            "Identify, pitch, and close retainer-based and campaign-based deals",
            "Build a predictable sales pipeline and track leads from prospecting to close",
            "Collaborate with leadership on pricing models, proposals, and deal structures",
          ],
        },
        {
          category: "Partnerships & Strategic Deals",
          items: [
            "Develop long-term brand partnerships and ambassador programs",
            "Secure collaborations with global and regional brands across tech, FMCG, finance, entertainment, and lifestyle",
            "Lead negotiations, contracting, and commercial discussions",
            "Identify cross-platform opportunities within the BlacVolta ecosystem (media, app, events, creators)",
          ],
        },
        {
          category: "Client Management",
          items: [
            "Serve as the primary commercial contact for key clients",
            "Work closely with creative, content, PR, and production teams to align delivery with client objectives",
            "Ensure client satisfaction, renewals, and upsell opportunities",
          ],
        },
        {
          category: "Market Intelligence & Positioning",
          items: [
            "Track industry trends across media, creator economy, experiential marketing, and OOH",
            "Identify new service lines, verticals, and monetization opportunities",
            "Represent BV Social confidently in meetings, pitches, panels, and industry events",
          ],
        },
      ],
      success: [
        "Consistent monthly and quarterly revenue growth",
        "Strong pipeline of retained clients and repeat business",
        "Strategic brand partnerships secured and expanded",
        "BV Social positioned as a go-to culture-led agency in Ghana and Africa",
      ],
      requirements: [
        "4–7+ years in business development, sales, partnerships, or commercial roles",
        "Experience within media, marketing, advertising, PR, entertainment, or creative industries",
        "Strong negotiation, pitching, and relationship-building skills",
        "Deep understanding of brand marketing, creators, and cultural storytelling",
        "Comfortable working in fast-paced, entrepreneurial environments",
      ],
      niceToHave: [
        "Existing network across brands, agencies, and cultural platforms",
        "Experience selling retainers, sponsorships, or experiential campaigns",
        "Familiarity with influencer marketing and content-led growth strategies",
      ],
    },
  
    {
      id: "lead-partnerships-business-development",
      title: "Lead, Partnerships & Business Development",
      company: "BlacVolta (BV Tech)",
      parent: "",
      location: "Ghana",
      type: "Full-time",
      overview:
        "The Lead, Partnerships & Business Development will drive the growth of the BlacVolta App and Lifestyle Visa Card through merchant acquisition, strategic partnerships, and platform adoption. This role focuses on building a strong network of venues, brands, and service providers that make the BV ecosystem essential to everyday lifestyle in Ghana. You will sit at the intersection of commerce, culture, and technology, helping translate the platform into real-world usage and revenue.",
      responsibilities: [
        {
          category: "Merchant Acquisition & Growth",
          items: [
            "Identify, pitch, and onboard restaurants, nightlife venues, retail, wellness, and service providers onto the BV platform",
            "Build a strong pipeline of high-quality merchants aligned with BV’s lifestyle positioning",
            "Structure offers, perks, and discounts tied to the BV Card",
            "Maintain strong relationships to ensure active participation and performance",
          ],
        },
        {
          category: "Partnerships & Collaborations",
          items: [
            "Support and execute partnerships with brands, fintechs, banks, and lifestyle platforms",
            "Assist in developing co-branded campaigns, offers, and activations",
            "Contribute to negotiations and partnership execution",
            "Identify opportunities for cross-platform collaborations within the BlacVolta ecosystem",
          ],
        },
        {
          category: "Platform Adoption & Growth",
          items: [
            "Drive user growth through merchant and partner channels",
            "Work with marketing and product teams to improve visibility and engagement on the app",
            "Support initiatives that increase transactions, bookings, and card usage",
            "Gather insights from partners and users to improve platform experience",
          ],
        },
        {
          category: "Commercial Execution",
          items: [
            "Build and manage a consistent pipeline of leads and partnerships",
            "Track onboarding, deal progress, and partner performance",
            "Support revenue generation through merchant deals, commissions, and partnerships",
            "Assist in developing proposals and partnership decks",
          ],
        },
        {
          category: "Platform Quality & Experience",
          items: [
            "Ensure merchants listed on the platform meet BV’s quality and brand standards",
            "Monitor partner performance and user feedback",
            "Support improvements to merchant onboarding and platform experience",
          ],
        },
      ],
      success: [
        "Consistent onboarding of high-quality merchants and partners",
        "Growth in active listings, transactions, and card usage",
        "Strong pipeline of new partnerships and opportunities",
        "Positive feedback from both users and merchants",
        "BV App gaining traction as a go-to lifestyle platform",
      ],
      requirements: [
        "3–4 years in business development, partnerships, sales, or account management",
        "Experience in marketing, media, fintech, hospitality, or digital platforms",
        "Strong communication and relationship-building skills",
        "Ability to pitch, negotiate, and close deals",
        "Commercial mindset with attention to execution and detail",
        "Comfortable working in a fast-paced, startup environment",
      ],
      niceToHave: [
        "Existing network across restaurants, nightlife, retail, or lifestyle brands",
        "Experience working with platforms, apps, or marketplaces",
        "Familiarity with payments, fintech, or loyalty programs",
        "Experience in events, activations, or brand partnerships",
      ],
    },
  
    {
      id: "associate-media-production-operations",
      title: "Associate, Media Production & Operations",
      company: "BV Social / BlacVolta",
      parent: "",
      location: "Ghana",
      type: "Full-time",
      overview:
        "The Associate, Media Production & Operations will support and manage the end-to-end execution of BV’s media output — including the BlacVolta Podcast, digital content, and branded productions. This role is responsible for coordinating production, supporting creative development, managing distribution, and ensuring content translates into audience growth and revenue opportunities.",
      responsibilities: [
        {
          category: "Production & Operations",
          items: [
            "Coordinate end-to-end production across podcasts, video shoots, and branded content",
            "Manage production timelines, schedules, and deliverables",
            "Work closely with videographers, editors, sound engineers, and creatives",
            "Ensure all content meets BV’s quality and brand standards",
          ],
        },
        {
          category: "Podcast & Content Management",
          items: [
            "Support the execution of the BlacVolta Podcast (planning, recording, post-production, release)",
            "Manage episode calendars and ensure consistent weekly output",
            "Assist in developing new podcast formats, segments, and show ideas",
            "Coordinate guest bookings, briefs, and recording logistics",
          ],
        },
        {
          category: "Creative Development",
          items: [
            "Contribute to content ideas, formats, and storytelling approaches",
            "Support development of new shows and original series under BV",
            "Work with the team to ensure content stays culturally relevant and engaging",
          ],
        },
        {
          category: "Distribution & Growth",
          items: [
            "Oversee distribution across YouTube, Spotify, Apple Podcasts, and social platforms",
            "Ensure content is properly optimized for reach, engagement, and consistency",
            "Track performance and suggest improvements based on audience insights",
            "Coordinate rollout of snippets, clips, and campaign assets",
          ],
        },
        {
          category: "Client & Commercial Support",
          items: [
            "Assist in managing branded content and client productions",
            "Support execution of campaign deliverables and partnerships",
            "Work with the team to align production with client objectives and timelines",
            "Identify opportunities to monetize content and grow revenue streams",
          ],
        },
      ],
      success: [
        "Consistent, high-quality content output across platforms",
        "Smooth, efficient production workflows",
        "Growth in podcast listeners, views, and engagement",
        "Strong execution of branded content and client projects",
        "Contribution to new shows and content formats",
      ],
      requirements: [
        "1–3 years in media production, content, or creative operations",
        "Experience working on podcasts, video production, or digital content",
        "Strong organizational and project management skills",
        "Good understanding of content distribution and social platforms",
        "Ability to multitask and execute in a fast-paced environment",
        "Strong communication and teamwork skills",
      ],
      niceToHave: [
        "Basic knowledge of editing tools (Premiere Pro, Final Cut, CapCut, etc.)",
        "Experience with podcast platforms (Spotify, Apple Podcasts, YouTube)",
        "Interest in entertainment, culture, and storytelling in Africa",
        "Experience working with brands or client projects",
      ],
    },
    {
      id: "business-operations-associate-blacvolta-lifestyle",
      title: "Business Operations Associate – BlacVolta Lifestyle",
      company: "BlacVolta",
      parent: "",
      location: "Ghana",
      type: "Full-time",
      overview:
        "The Business Operations Associate will serve as the backbone of the BlacVolta Lifestyle ecosystem, supporting the day-to-day operations of the BlacVolta App and Lifestyle Card. This role sits at the intersection of product, operations, content, and customer experience, ensuring that everything users interact with — from events to locations to card benefits — is accurate, seamless, and premium. You will be the first point of contact for users, partners, and internal teams, playing a critical role in delivering a world-class lifestyle platform.",
      responsibilities: [
        {
          category: "Platform Operations & Accuracy",
          items: [
            "Manage and update all content on the BlacVolta App (events, locations, offers, news)",
            "Ensure 100% accuracy and real-time relevance of listings and information",
            "Monitor platform activity daily to identify and resolve inconsistencies or issues",
            "Maintain a clean, premium, and up-to-date user experience across the app",
          ],
        },
        {
          category: "Content Moderation & Publishing",
          items: [
            "Review and approve all content submitted by partners (events, venues, promotions)",
            "Moderate user-generated and partner content to ensure quality and brand alignment",
            "Publish and schedule content in line with BlacVolta’s editorial tone",
            "Flag and escalate any inappropriate, inaccurate, or low-quality content",
          ],
        },
        {
          category: "Customer & Partner Support",
          items: [
            "Act as the first point of contact for all app and Lifestyle Card inquiries",
            "Provide real-time support to users (tickets, RSVPs, bookings, card usage issues)",
            "Support merchants and partners with onboarding, updates, and troubleshooting",
            "Ensure fast response times and high satisfaction across all touchpoints",
          ],
        },
        {
          category: "Card & App Experience Management",
          items: [
            "Monitor usage and performance of the BlacVolta Lifestyle Card",
            "Ensure partner benefits (discounts, priority access, etc.) are correctly applied",
            "Work closely with partners to maintain seamless card integration at locations",
            "Track and report issues affecting user experience",
          ],
        },
        {
          category: "Internal Coordination",
          items: [
            "Serve as the bridge between tech, partnerships, and content teams",
            "Communicate bugs, feature requests, and user feedback to the tech team",
            "Assist in testing new features before release",
            "Support rollout of new product updates and activations",
          ],
        },
        {
          category: "Data Tracking & Insights",
          items: [
            "Track daily metrics (RSVPs, ticket sales, engagement, app activity)",
            "Identify trends, gaps, and opportunities to improve performance",
            "Provide weekly reports and actionable insights to the team",
            "Help optimize what gets featured on the app",
          ],
        },
      ],
      success: [
        "App content is always accurate, fresh, and engaging",
        "Users have a seamless experience across app and card",
        "Response times are fast and support is world-class",
        "Partners are satisfied and actively using the platform",
        "Issues are identified and resolved before they escalate",
      ],
      requirements: [
        "1–3 years experience in operations, customer support, or digital platforms",
        "Strong attention to detail — accuracy is critical",
        "Excellent communication skills (written & verbal)",
        "Ability to multitask in a fast-paced environment",
        "Tech-savvy and comfortable working with dashboards, CMS tools, and apps",
        "Strong understanding of lifestyle, entertainment, and digital culture in Ghana",
        "Problem-solving mindset with a bias for action",
      ],
      niceToHave: [],
    },
  ];