import { RiInstagramLine, RiMailLine, RiTwitterLine } from "react-icons/ri";
import NavItem from "@/app/components/navitem/navitem";

export default function DesktopMenu(){
    return(
        <>
            <div className="lg:flex grow hidden items-center gap-x-8 py-5 ">
                <NavItem href="/" >
                    <span>HOME</span>
                </NavItem>
                <NavItem href="#bv-calender" >
                    <span>CALENDAR</span>
                </NavItem>
                <NavItem href="editorials" >
                    <span>EDITORIALS</span>
                </NavItem>
                <NavItem href="/team">
                    <span>TEAM</span>
                </NavItem>
                <NavItem href="/uploadevent">
                    <span>PUBLISH MY EVENT</span>
                </NavItem>
                <NavItem href="/about">
                    <span>ABOUT US</span>
                </NavItem>
            </div>
            <div className="hidden items-center justify-center gap-x-4 lg:flex py-4">
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