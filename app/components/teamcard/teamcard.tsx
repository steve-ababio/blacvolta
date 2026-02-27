// import { motion } from "framer-motion"
// import { Dialog,DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
// import Image from "next/image";

// interface TeamMember {
//   image: string;
//   name: string;
//   role: string;
//   bio: string;
// }


// interface TeamCardProps extends TeamMember {
//   onClick: () => void;
// }

// interface TeamModalProps {
//   member: TeamMember | null;
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
//   setSelectedMember: (member: TeamMember | null) => void;
// }



// // export const TeamCard = ({ image, name, role, bio, onClick }: TeamCardProps) => {
// //   return (
// //     <div
// //       onClick={onClick}
// //       className="flex items-start gap-6 cursor-pointer group"
// //     >
// //       <div className="shrink-0">
// //         <div className="w-40 h-40 rounded-full ring-[3px] ring-accent overflow-hidden transition-all group-hover:ring-4 group-hover:scale-105">
// //           <Image width={400} height={400} src={image} alt={name} className="w-full h-full object-cover" />
// //         </div>
// //       </div>
// //       <div className="flex flex-col">
// //         <h3 className="text-xl font-semibold text-white">{name}</h3>
// //         <p className="text-sm text-[#c9c9c9] mt-0.5">{role}</p>
// //         <div className="w-full h-px bg-border mt-3 mb-3" />
// //         <p className="text-sm text-[#ffffff] leading-relaxed">{bio.slice(0,150)}</p>
// //         <div className="mt-4">
// //           <SocialIcons />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };


// export default function TeamCard(member: TeamCardProps) {
//   return (
    

//         {/* Divider */}
//         <div className="team-divider" />

//         {/* Socials */}
//         {/* <div className="team-socials">
//           {member?.socials.map((s) => {
//             const Icon = socialIcon[s.type];
//             return (
//               <a
//                 key={s.type}
//                 href={s.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="team-social-link"
//                 aria-label={s.type}
//               >
//                 <Icon size={16} />
//               </a>
//             );
//           })}
//         </div> */}
//     //   </div>
//     // </div>
//   );
// }

// export const TeamModal = ({ member, open, onOpenChange }: TeamModalProps) => {
//   if (!member) return null;

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="bg-[black] text-white shadow-xl border-0 sm:max-w-lg">
//         <DialogHeader>
//           <div className="flex flex-col items-center gap-4 pt-2">
//             <div className="w-28 h-28 relative rounded-full ring-[3px] ring-accent overflow-hidden">
//               <Image fill src={member.image} alt={member.name} className="w-full h-full absolute inset-0 object-cover" />
//             </div>
//             <div className="text-center">
//               <DialogTitle className="text-2xl font-bold text-[white]">{member.name}</DialogTitle>
//               <p className="text-[#c4c4c4] mt-1 font-medium">{member.role}</p>
//             </div>
//           </div>
//         </DialogHeader>
//         <div className="space-y-4 mt-2">
//           <div>
//             <h4 className="text-sm font-semibold text-foreground mb-1">About</h4>
//             <p className="text-sm text-[#9b9b9b] leading-relaxed">{member.bio}</p>
//           </div>
//           <div>
//             <h4 className="text-sm font-semibold text-foreground mb-1">Experience</h4>
//             <p className="text-sm text-muted-foreground leading-relaxed">
//               5+ years of industry experience driving innovation and growth at pagedone.
//             </p>
//           </div>
//           <div>
//             <h4 className="text-sm font-semibold text-foreground mb-1">Connect</h4>
//             <SocialIcons />
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };
