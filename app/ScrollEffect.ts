
type scrollProps = {
    styleClass: string,
    effectClass : string
}


export function ScrollEffect(props: scrollProps){
   
    const styleClass = document.querySelectorAll(`.${props.styleClass}`)
    if (!styleClass) return;

    if (props.effectClass === "") return;

    const observer = new IntersectionObserver(entries=>{
        entries.forEach(entry =>{
            if(entry.isIntersecting)
                entry.target.classList.add(props.effectClass)
            else
                entry.target.classList.remove(props.effectClass)
        })
    }, 
    { threshold: 0.2, }
)

    styleClass.forEach((el)=>observer.observe(el))

    return ()=>observer.disconnect()
     
}