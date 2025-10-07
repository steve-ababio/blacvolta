import { RiInstagramLine, RiMailLine, RiTwitterLine } from "react-icons/ri";
import NavItem from "@/app/components/navitem/navitem";

export default function DesktopMenu(){
    return(
        <>
            <div className="xl:flex grow hidden items-center gap-x-7 py-5 ">
                <NavItem href="/" >
                    <span>HOME</span>
                </NavItem>
                <NavItem href="/#bv-calender" >
                    <span>EVENT CALENDAR</span>
                </NavItem>
                <NavItem href="/editorials" >
                    <span>EDITORIALS</span>
                </NavItem>
                <NavItem href="/team">
                    <span>TEAM</span>
                </NavItem>
                <NavItem href="/jobs">
                    <span>JOBS</span>
                </NavItem>
                <NavItem href="/dettydecemberguide">
                    <span className="uppercase">Detty December Guide</span>
                </NavItem>
                <NavItem href="/about">
                    <span>ABOUT US</span>
                </NavItem>
                <NavItem href="/faq">
                    <span>BLACVOLTA LIFESTYLE CARD</span>
                </NavItem>
            </div>
            <div className="hidden items-center justify-center gap-x-4 xl:flex py-4">
                <NavItem href="https://twitter.com/blacvolta">
                    <RiTwitterLine size={30} />
                </NavItem>
                <NavItem href="https://instagram.com/blacvolta">
                    <RiInstagramLine size={30} />
                </NavItem>
                <NavItem href="mailto:blacvolta@gmail.com">
                    <RiMailLine size={30} />
                </NavItem>
            </div>
        </>
    )
}