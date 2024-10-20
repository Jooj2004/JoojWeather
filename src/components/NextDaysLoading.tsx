import { useState } from "react"

export const NextDaysLoading = () => {
    const [active, setActive] = useState(true)
    setInterval(()=>{
        setActive(!active)
    },500 )
    return(
        <section className="flex gap-1 justify-around lg:text-2xl lg:max-w-[80%] mx-auto">
            <div className={`w-32 h-32 lg:w-56 ${active ?'bg-slate-600' :'bg-slate-300'} rounded-md transition-colors`}>
                
            </div>
            <div className={`w-32 h-32 lg:w-56 ${active ?'bg-slate-600' :'bg-slate-300'} rounded-md transition-colors`}>
                
            </div>
            <div className={`w-32 h-32 lg:w-56 ${active ?'bg-slate-600' :'bg-slate-300'} rounded-md transition-colors`}>
                
            </div>
            <div className={`w-32 h-32 lg:w-56 ${active ?'bg-slate-600' :'bg-slate-300'} rounded-md transition-colors`}>
                
            </div>
            <div className={`w-32 h-32 lg:w-56 ${active ?'bg-slate-600' :'bg-slate-300'} rounded-md transition-colors`}>
                
            </div>
        </section>
    )
}