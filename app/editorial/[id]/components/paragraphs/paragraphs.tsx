type ParagraphType = {
    id:string
    body:string,
    blogID:number,
    position:number,
    imagepath:string,
    instagrampostlink:string,
}
type ParagraphsProps = {
    paragraphs:ParagraphType[],
    isdettydecember:boolean,
}
function sortParagraphs(paragraphs:ParagraphType[]){
    return paragraphs.sort((paragraph1,paragraph2)=>paragraph1.position - paragraph2.position);
}
export default function Paragraphs({paragraphs,isdettydecember}:ParagraphsProps){
    const sortedparagraphs = sortParagraphs(paragraphs);
    return(
        <div >
            {
                sortedparagraphs.map(paragraph=>(
                    <div className={`mt-2 flex ${isdettydecember ? 'flex-col-reverse':'flex-col'}`}key={paragraph.id}>
                        <div>
                            {
                                paragraph.imagepath.length > 0 && 
                                <>
                                    <img src={paragraph.imagepath} className="max-w-full h-auto text-white" alt="paragraph image" />
                                </>
                            } 
                            {/* {paragraph.title.length > 0 && <h2 className="pb-3 text-white font-bold kamerik text-[30px]">{paragraph.title}</h2>} */}
                            {
                                paragraph.instagrampostlink.includes("instagram") && 
                                <div className="w-full mx-auto my-6">
                                    <iframe width="100%" height="450" src={paragraph.instagrampostlink}></iframe>
                                </div> 
                            }
                        </div>
                        {
                            <p className="ibmsans pb-2 w-full leading-8 text-white font-normal text-[16px]">{paragraph.body}</p>
                        }
                    </div>
                ))
            }
        </div>
    )
}