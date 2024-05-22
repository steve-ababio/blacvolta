import { RiInstagramLine, RiMailLine, RiTwitterLine } from "react-icons/ri";
import NavItem from "../navitem/navitem";

export default function DesktopMenu(){
    return(
        <>
            <div className=" md:flex grow hidden items-center gap-y-10 py-5 ">
                <NavItem href="/" >
                    <span>HOME</span>
                </NavItem>
                <NavItem href="#bv-calender" >
                    <span>CALENDAR</span>
                </NavItem>
                <NavItem href="/blogs" >
                    <span>EDITORIALS</span>
                </NavItem>
            </div>
            <div className="hidden items-center md:flex py-4">
                <NavItem href="https://twitter.com/blacvolta">
                    <RiTwitterLine size={30} />
                </NavItem>
                <NavItem href="https://instagram.com/blacvolta">
                    <RiInstagramLine size={30} />
                </NavItem>
                <NavItem href="/mail">
                    <RiMailLine size={30} />
                </NavItem>
            </div>
        </>
    )
}