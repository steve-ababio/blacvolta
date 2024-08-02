type ParagraphType = {
    id:string
    body:string,
    blogID:number,
    position:number
}
function sortParagraphs(paragraphs:ParagraphType[]){
    return paragraphs.sort((paragraph1,paragraph2)=>paragraph1.position - paragraph2.position);
}
export default function Paragraphs({paragraphs}:{paragraphs:ParagraphType[]}){
    const sortedparagraphs = sortParagraphs(paragraphs);
    return(
        <div >
            {
                sortedparagraphs.map(paragraph =>(
                    <div className="mt-2" key={paragraph.id}>
                        {/* {
                            paragraph.imagepath.length > 0 && 
                            <>
                                <img src={paragraph.imagepath} className="max-w-full h-auto text-white" alt="paragraph image" />
                            </>
                        } */}
                        {/* {paragraph.title.length > 0 && <h2 className="pb-3 text-white font-bold kamerik text-[30px]">{paragraph.title}</h2>} */}
                        {
                            <p className="ibmsans pb-2 w-full leading-8 text-white font-normal text-[16px]">{paragraph.body}</p>
                        }
                    </div>
                ))
            }
        </div>
    )
}