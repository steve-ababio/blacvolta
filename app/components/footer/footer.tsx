'use client'

import Image from "next/image";
import Link from "next/link";
import { RiInstagramLine, RiMailLine, RiTwitterLine, RiArrowRightLine, RiTwitterXLine, RiYoutubeLine, RiTiktokLine, RiPhoneLine } from "react-icons/ri";
import { motion } from "framer-motion";

export default function Footer() {
    const currentyear = new Date().getFullYear();

    const socialLinks = [
        {
            icon: <RiTwitterXLine className="w-5 h-5 text-white" />,
            href: "https://x.com/blacvolta",
            label: "X"
        },
        {
            icon: <RiYoutubeLine className="w-5 h-5 text-white" />,
            href: "https://youtube.com/blacvolta",
            label: "Youtube"
        },
        {
            icon: <RiTiktokLine className="w-5 h-5 text-white" />,
            href: "https://tiktok.com/blacvolta",
            label: "Tiktok"
        },
        {
            icon: <RiInstagramLine className="w-5 h-5 text-white" />,
            href: "https://instagram.com/blacvolta",
            label: "Instagram"
        },
        {
            icon: <RiMailLine className="w-5 h-5 text-white" />,
            href: "mailto:blacvolta@gmail.com",
            label: "Email"
        },
        {
            icon: <RiPhoneLine className="w-5 h-5 text-white" />,
            href: "tel:+233540973552",
            label: "Telephone"
        }
    ];

    const exploreLinks = [
        { label: "Home", href: "/" },
        { label: "BV Lifestyle Card", href: "/bv-card" },
        { label: "BV Social", href: "/bv-social" },
        { label: "Event Calendar", href: "/#bv-calender" },
        { label: "Editorials", href: "/editorials" }
    ];

    const companyLinks = [
        { label: "Merchandise", href: "/merchandise" },
        { label: "Jobs", href: "/jobs" },
        { label: "Team", href: "/team" },
        { label: "About Us", href: "/about" }
    ];

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        // Custom subscription toast or endpoint could be added here
    };

    return (
        <footer className="relative overflow-hidden border-t border-neutral-800 bg-black text-neutral-400 font-kamerik">
            {/* Background image with abstract Starlink-style curves */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none opacity-10">
                <Image
                    src="/assets/images/footer-bg.png"
                    alt="Abstract curves background"
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                    priority
                />
                {/* Gradient overlay to fade top and bottom smoothly */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#141416] via-transparent to-black" />
            </div>

            {/* Top glowing line accent */}
            {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#f47b25]/25 to-transparent z-10" /> */}

            {/* Subtle center-top radial glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[100px] bg-[#f47b25] opacity-[0.03] blur-[80px] rounded-full pointer-events-none z-10" />

            <div className=" mx-8 px-6 md:px-12 pt-16 pb-8 relative z-10">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">

                    {/* Brand Info (5 columns) */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <Link href="/" className="inline-block transition-transform duration-200 hover:scale-[1.02]">
                            <Image
                                src="/assets/images/logo.png"
                                width={65}
                                height={75}
                                alt="Blacvolta logo"
                                className="object-contain filter drop-shadow-[0_0_12px_rgba(244,123,37,0.1)]"
                            />
                        </Link>
                        <p className="text-sm leading-relaxed text-neutral-400 max-w-sm">
                            The Platform Behind Africa's Creative Economy. We curate, connect, and elevate African culture, nightlife, and lifestyle experiences.
                        </p>
                        {/* Social Icons */}
                        <div className="flex items-center gap-3 mt-2">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    whileHover={{ scale: 1.08, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-10 h-10 rounded-full bg-neutral-900/80 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-[#f47b25]/50 transition-colors duration-200"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Explore Links (2 columns) */}
                    <div className="lg:col-span-2 flex flex-col gap-4">
                        <h4 className="text-white text-sm font-semibold tracking-wider uppercase">Explore</h4>
                        <ul className="flex flex-col gap-2.5">
                            {exploreLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm transition-all duration-200 hover:text-white hover:translate-x-1 inline-block"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links (2 columns) */}
                    <div className="lg:col-span-2 flex flex-col gap-4">
                        <h4 className="text-white text-sm font-semibold tracking-wider uppercase">Company</h4>
                        <ul className="flex flex-col gap-2.5">
                            {companyLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm transition-all duration-200 hover:text-white hover:translate-x-1 inline-block"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter Subscription (3 columns) */}
                    {/* <div className="lg:col-span-3 flex flex-col gap-4">
                        <h4 className="text-white text-sm font-semibold tracking-wider uppercase">Stay Tuned</h4>
                        <p className="text-sm text-neutral-400 leading-relaxed">
                            Subscribe to receive weekly updates on Africa's creative scene and exclusive events.
                        </p>
                        <form onSubmit={handleSubscribe} className="flex gap-2 mt-2">
                            <input 
                                type="email" 
                                placeholder="Your email address" 
                                required
                                className="flex-grow bg-black/50 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-[#f47b25]/50 focus:border-[#f47b25]/50 transition-all duration-200"
                            />
                            <motion.button 
                                type="submit"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="bg-[#f47b25] hover:bg-[#ff8f3d] text-white rounded-lg px-4 flex items-center justify-center transition-colors duration-200"
                            >
                                <RiArrowRightLine className="w-5 h-5" />
                            </motion.button>
                        </form>
                    </div> */}
                    <div className="lg:col-span-3 flex flex-col gap-4">
                        <h4 className="text-white text-sm font-semibold tracking-wider uppercase">Stay Tuned</h4>
                        <div className="flex flex-col gap-4">
                        <Link href="/terms-and-privacy" className="hover:text-white text-sm transition-colors duration-200">
                            Privacy Policy
                        </Link>
                        <Link href="/regulatory-and-disclosure" className="hover:text-white text-sm transition-colors duration-200">
                            Regulatory & Disclosure
                        </Link>
                    </div>
                    </div>

                </div>

                {/* Bottom Bar Divider */}
                <div className="border-t border-neutral-900/60 my-6" />

                {/* Bottom Meta Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
                    <p>
                        &copy; {currentyear} BLACVOLTA. All rights reserved.
                    </p>
                    
                </div>

            </div>
        </footer>
    );
}