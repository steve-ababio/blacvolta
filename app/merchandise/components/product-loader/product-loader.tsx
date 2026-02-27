import { IoImageOutline } from "react-icons/io5";

export default function ProductLoader({size}:{size:number}){
    let newarray = new Array(size);
    let blogs = [...newarray];
    return(
        <div className="pt-[2rem] w-full">
            <div className="justify-center items-center flex flex-col w-full md:grid md:grid-cols-[repeat(auto-fit,350px)] gap-7">
            {
                blogs.map((_,index)=>(
                    <div className="border h-auto pb-10 border-slate-300/40 rounded-[8px] w-full hover:scale-[1.02] duration-200" key={index}>
                        <div id="card-image" className="animate-card-loading bg-cardloading bg-[length:200%] bg-[100%_0] flex flex-1 justify-center items-center mb-4 h-[200px]">
                            <IoImageOutline className="text-zinc-500" size={70}/>
                        </div>
                        <div className="px-3 grow">
                            <div className="mb-4 rounded-md animate-card-loading h-4 bg-cardloading bg-[length:200%] bg-[100%_0] w-[80%]"></div>
                            <div>
                                <div className="mb-2 rounded-md animate-card-loading h-3 bg-cardloading bg-[length:200%] bg-[100%_0]  w-[80%]"></div>
                                <div className="mb-2 rounded-md animate-card-loading h-3 bg-cardloading bg-[length:200%] bg-[100%_0]  w-[80%]"></div>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}