// type JobType = {
//     id:string,
//     name:string,
//     location:string,
//     department:string
// }
// export const jobs:JobType[] = [
//     {
//         id:"0",
//         name:"Social media account manager",
//         location:"Accra",
//         department:"Social Media",
//     }
// ]

// export const jobinfo = [
//     {
//         id:"0",
//         jobtitle:"Social Media Account Manager",
//         responsibilities:[
//             "Managing our social media accounts.",
//             "Creating engaging content, and enhancing our online presence to drive traffic and increase customer engagement for our clients",
//         ],
//         qualifications:[
//             "Bachelor's degree in Marketing, Communication, Hospitality Management, or related field.",
//             "Proven experience in social media management and content creation, preferably in the nightlife, hospitality, or entertainment industry.",
//             "Strong photography and/or videography skills, with the ability to capture and edit high-quality visual content that aligns with brand aesthetics.",
//             "Excellent written and verbal communication skills, with a creative flair for storytelling and engaging copywriting.",
//             "Proficiency in social media management tools and analytics platforms (e.g Hootsuite, Buffer, Sprout Social, Google Analytics).",
//             "Familiarity with graphic design softwares (e.g. Adobe Photoshop, Canva) and video editing tools(e.g. Adobe Premiere Pro, Final cut Pro) is a plus.",
//             "Knowledge of local nightlife trends, influencers and event marketing strategies.",
//             "Ability to work flexible hours, including evenings and weekends, to cover live events and promotions.",
//             "Passion for the nightlife and entertainment industry, with a strong understanding of the target audience and market dynamics."
//         ]
//     },{
//         id:"1",
//         jobtitle:"Business Developemnt Lead BV Social (Powered b Blackvolta",
//         responsibilities:[

//         ]
//     }
// ]

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
  ];
  
  // Helper for backward compatibility
  export const jobData = jobsList[0];
  