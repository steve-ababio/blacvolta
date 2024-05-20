import { RiInstagramLine, RiTwitterXLine } from "react-icons/ri";
import NavItem from "../navitem/navitem";
import { FiMail } from "react-icons/fi";

interface MobileMenuProps {
    closeMobileMenu:()=>void;
}
export default function MobileMenu({closeMobileMenu}:MobileMenuProps){
    return(
        <div className={`flex h-[calc(100%-60px)] flex-col duration-300 origin-top  fixed inset-0 top-[60px] items-center bg-black`}>
            <div className="grow flex flex-col items-center gap-y-20 py-10 ">
                <NavItem href="/" >
                    <div onClick={closeMobileMenu}>HOME</div>
                </NavItem>
                <NavItem href="/blogs" >
                    <span>BLOGS</span>
                </NavItem>
                <NavItem href="#bv-calender" >
                    <div onClick={closeMobileMenu}>CALENDAR</div>
                </NavItem>
            </div>
            <div className="text-center before:content-[''] before:mb-3 before:block w-[85%] mx-auto before:h-[1px] before:w-full before:bg-[#707070]">
                <div className="flex w-full gap-x-4 justify-center py-4">
                    <NavItem href="https://x.com/blacvolta">
                        <RiTwitterXLine size={25} />
                    </NavItem>
                    <NavItem href="https://instagram.com/blacvolta">
                        <RiInstagramLine size={25} />
                    </NavItem>
                    <NavItem href="/mail">
                    <FiMail  size={25} />
                    </NavItem>
                </div>
            </div>
        </div>
    )
}