type ParagraphType = {
    id:string
    title:string,
    imagepath:string,
    body:string,
    blogID:number
}
export default function Paragraphs({paragraphs}:{paragraphs:ParagraphType[]}){
    return(
        <div >
            {
                paragraphs.map(paragraph =>(
                    <div className="mt-7" key={paragraph.id}>
                        {
                            paragraph.imagepath.length > 0 && 
                            <>
                                <img src={paragraph.imagepath} className="max-w-full h-auto text-white" alt="paragraph image" />
                            </>
                        }
                        {paragraph.title.length > 0 && <h2 className="pb-3 text-white font-bold kamerik text-[30px]">{paragraph.title}</h2>}
                        {
                            <p className="ibmsans pb-4 w-full leading-8 text-white font-normal text-[16px]">{paragraph.body}</p>
                        }
                    </div>
                ))
            }
        </div>
    )
}