import Link from "next/link"

type NavItemProps = {
    href?:string,
    children:React.ReactNode
}
export default function NavItem({href, children}:NavItemProps){
    return(
        <>
            <Link className="
                h-fit px-3 rounded-[4px] after:transition-transform
                text-[1rem] after:content-[''] overflow-hidden
                after:h-[2px] after:rounded-[3px] after:bg-white after:block
                after:w-full hover:after:translate-x-0 lg:mr-4 xl:mr-8  font-kamerik font-normal
                after:duration-200 after:-translate-x-[calc(100%+12px)]" 
                href={href||""}>
                {children}
            </Link>
        </>
    )
}