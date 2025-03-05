import Link from "next/link";
import { twMerge } from "tailwind-merge";


interface CtaButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement>{
    href:string,
    label:string,
}
export default function CtaButton({href,label,className}:CtaButtonProps) {
    return(
        <Link className={twMerge(`
            block w-[90%] max-w-[12rem]  sm:max-w-[15rem] text-center h-full
          bg-white sm:text-[0.88rem] py-3 px-4 text-[12px]
          text-slate-700 rounded-[40px] font-bold focus-visible:outline-2
         focus:outline-white focus:outline-offset-[4px]
            duration-300 hover:bg-[#bdbdbd]`,className)} href={href}>
            {label}
        </Link>
    )
}