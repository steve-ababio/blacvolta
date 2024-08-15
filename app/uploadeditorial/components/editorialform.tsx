"use client"
import React, { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import BlogFormControl, { BlogFormType } from "@/app/uploadeditorial/components/editorialformcontrol/editorialformcontrol";
import { BsFolderPlus } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import Error from "@/app/uploadeditorial/components/error/error";
import { IoImageOutline } from "react-icons/io5";
import { Slide, toast } from "react-toastify";

type Paragraph = {
    body:string,
    position:string,
    image:File|null,
    imagename:string,
    instagrampostlink:string,
}
export default function EditorialForm(){
    const [paragraphs,setParagraphs] = useState<Paragraph[]>([]);
    const [blogfilename,setBlogFileName] = useState("");
    const blogimage = useRef<File>();
 
    const{
        register,
        handleSubmit,
        formState:{isSubmitting,errors,},
        clearErrors
    } = useForm<BlogFormType>({
        mode:"onChange"
    });

    const submitFormData:SubmitHandler<BlogFormType> = async(data)=>{
        const formdata = new FormData();
        formdata.append("blogtitle",data.blogtitle);
        formdata.append("authorname",data.authorname);
        formdata.append("datewritten",data.datewritten);
        formdata.append("blogimage",blogimage.current!);
        
        for(let i = 0;i < paragraphs.length;i++){
            formdata.append(`paragraphs[${i}]-image`,paragraphs[i].image!)
            formdata.append("paragraph",JSON.stringify(paragraphs[i]));
        }
        try{
            const response = await fetch("/api/createeditorial",{method:"POST",body:formdata});
            const {message} = await response.json();
            toast.success(message,{
                transition:Slide
            });
        }catch(error){
            console.log(error)
        }
    }

    function ObtainBlogImageFile(e:React.ChangeEvent<HTMLInputElement>){
        if(e.target.files && e.target.files.length){
            blogimage.current = e.target.files[0];
            setBlogFileName(e.target.files[0].name);
        }
    }
    function addParagraph(){
        const positionvalue = paragraphs.length + 1;
        const position = positionvalue.toString();
        setParagraphs([...paragraphs,{body:"",position,image:null,imagename:"",instagrampostlink:""}]);
    }
    function updateParagraph(index:number,value:any,key:keyof Paragraph){
        const newparagraphs = [...paragraphs];
        newparagraphs[index][key] = value;
        setParagraphs(newparagraphs);
    }
    function handleParagraphBody(e:React.ChangeEvent<HTMLTextAreaElement>,index:number){
        updateParagraph(index,e.target.value,"body");
    }
    function obtainParagraphImageFile(e:React.ChangeEvent<HTMLInputElement>,index:number){
        if(e.target.files && e.target.files.length){
            const newparagraphs = [...paragraphs];
            newparagraphs[index].image = e.target.files[0];
            newparagraphs[index].imagename = e.target.files[0].name;
            setParagraphs(newparagraphs);
       }
    }
    function handleParagraphInstagraphPostLink(e:React.ChangeEvent<HTMLInputElement>,index:number){
        updateParagraph(index,e.target.value,"instagrampostlink");
    }
    function deleteParagraphRow(e:React.MouseEvent<HTMLButtonElement>,index:number){
        const newparagraphs = [...paragraphs];
        newparagraphs.splice(index,1);
        setParagraphs(newparagraphs);
    }
    return(
        <form onSubmit={handleSubmit(submitFormData)} className="flex flex-col bg-bvprimary gap-y-5">
            <div className="h-fit mt-12">
                <BlogFormControl 
                    register={register}
                    validationrules={{required:"Blog title is required"}}
                    name="blogtitle"
                    onChange={()=>clearErrors("blogtitle")}
                    aria-required="true" type="text" label="Blog Title *"
                    errormessage={errors.blogtitle?.message}
                />
                <BlogFormControl 
                    register={register}
                    validationrules={{required:"Author name is required"}}
                    name="authorname"
                    onChange={()=>clearErrors("authorname")}
                    aria-required="true" type="text" label="Author Name *"
                    errormessage={errors.authorname?.message}
                />
                <BlogFormControl 
                    register={register}
                    validationrules={{required:"Blog date is required"}}
                    onChange={()=>clearErrors("datewritten")}
                    name="datewritten"
                    aria-required="true" type="date" label="Blog date *"
                    errormessage={errors.datewritten?.message}
                />
                <div className="h-fit my-4">
                    <input 
                        {...register("blogimage",{
                            required:"Blog image is required"
                        })}
                        id="blog-image" className="w-0 h-0 peer overflow-hidden"
                        onChange={(e)=>{clearErrors("blogimage");ObtainBlogImageFile(e)}}
                        type="file" aria-required="true"
                        accept="image/*" name="blogimage"
                    />
                    <label htmlFor="blog-image" className="
                        cursor-pointer inline-flex border mb-[6px] hover:ring-2 duration-300
                        border-white shadow-sm peer-focus:ring-white hover:ring-white
                        w-fit peer-focus:ring-2 px-4 py-2 gap-x-3 rounded-[8px] text-white"
                    >
                        <BsFolderPlus size={25} />
                        <span>Select blog image *</span>
                    </label>
                    {( errors.blogimage?.message != undefined) && <Error message={errors.blogimage?.message!} errortype="danger"/>}
                    {blogfilename.length > 0 && <div className="rounded-[5px]  text-white  py-2 gap-x-2 flex items-center"><IoImageOutline  className="text-white" size={25}/>{blogfilename}</div>}
                </div>
                
                {
                    paragraphs.map(({body,imagename},index)=>(
                        <div key={index} className="duration-500 mb-5 mt-8">                                 
                            <div className="flex justify-between border-b border-b-slate-300 py-2 px-2 mb-3 items-center gap-x-5 w-full">
                                <h2 className="text-[20px] text-white ">New paragraph</h2>
                                <button 
                                    type="button" onClick={e=>deleteParagraphRow(e,index)}
                                    className="
                                        duration-300 rounded-[5px] hover:ring-white
                                        border border-white h-6 w-6 px-[2px]
                                        text-xl flex-col-center hover:ring-2 " 
                                        title="delete paragraph duration-300"
                                >
                                    <AiOutlineMinus className="text-white " size={20}  />
                                </button>
                            </div>
                            <div className={`w-full pb-4 mt-8`}>
                                <label className={`text-white`}>Paragraph Instagram Post Link</label>
                                <input 
                                    onChange={e=>handleParagraphInstagraphPostLink(e,index)} 
                                    className="border text-white bg-transparent mb-2 disabled:cursor-not-allowed border-white focus:ring-2 outline-none duration-300 px-4 focus:ring-white rounded-[5px] w-full py-2"
                                    type="text" id="paragraph_instagram_link"
                                />
                            </div>
                            <div className="h-fit mt-6 mb-5">
                                    <input 
                                        data-index={index}
                                        id={`image-${index}`} className="w-0 h-0 peer"
                                        onChange={e=>obtainParagraphImageFile(e,index)} name="image"
                                        type="file" aria-required="false" accept="image/*" 
                                    />
                                    <label htmlFor={`image-${index}`} className="
                                        cursor-pointer inline-flex border
                                        shadow-sm peer-focus:ring-2 text-white
                                        border-white w-fit peer-focus:ring-white
                                        px-4 py-2 gap-x-3 rounded-[8px] mb-[6px] 
                                        hover:ring-2 hover:ring-white duration-300
                                      "
                                    >
                                        <BsFolderPlus size={25} />
                                        <span>Select paragraph image</span>
                                    </label>
                                    {imagename.length > 0 && <div className="rounded-[5px] dark:text-white text-slate-600 flex items-center gap-x-2"><IoImageOutline  className="dark:text-white text-slate-500" size={25}/>{imagename}</div>}
                                </div>

                            <div >
                                <label htmlFor={"paragraphbody"} className="text-white mb-2 block">paragraph body</label>
                                <textarea 
                                    onChange={e=>handleParagraphBody(e,index)}
                                    name="paragraphbody" value={body}
                                    required aria-required="true"
                                    rows={5} id="paragraphbody" className="
                                    py-2 text-white px-4 
                                     bg-transparent block border
                                    border-slate-300/80 focus:ring-2
                                     rounded-[5px] focus:ring-white
                                    outline-none w-full mb-8 "
                                />    
                            </div>                           
                        </div>
                    ))
                }
                <div className="flex justify-center mb-4 sm:justify-between items-center mt-12  flex-wrap ">
                    <button type="button" onClick={addParagraph} className="
                        px-5 border border-white shrink-0 w-full sm:w-auto
                        text-white rounded-[8px] py-2 mb-4 sm:mb-0 before:text-slate-700
                        before:content-['Add_paragraph'] before:flex before:justify-center
                        relative before:bg-white before:absolute overflow-hidden 
                        before:h-full before:invisible hover:before:visible before:w-full 
                        before:inset-0 before:items-center duration-300
                            "
                    >
                        Add a paragraph
                    </button>
                    <button type="submit" disabled={isSubmitting} onClick={handleSubmit(submitFormData)} className={`
                        px-10  shrink-0 sm:w-auto bg-white
                        text-slate-700 rounded-[5px] py-2 w-full sm:mb-0 focus-visible:ring-2
                            dark:text-slate-600 focus-visible:ring-offset-2 hover:scale-[1.01]
                        ${isSubmitting ? 'cursor-not-allowed bg-[rgb(40,40,40)]/30':''}
                        focus-visible:ring-black`}
                    >
                        {isSubmitting ? "...creating blog": "create blog"}
                    </button>
                </div>
            </div>
            </form>
    )
}