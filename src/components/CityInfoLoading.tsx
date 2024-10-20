import { useState } from "react"

export const CityInfoLoading = () => {
    const [active, setActive] = useState(true)
    setInterval(()=>{
        setActive(!active)
    },500 )
    return(
        <section className="flex justify-center mx-auto lg:max-w-[80%]">
            <div className="flex md:gap-2 text-white font-semibold w-full text-center items-center h-40 justify-around">
                <div className={`w-32 h-32 lg:w-56 ${active ?'bg-slate-600' :'bg-slate-300'} rounded-md transition-colors`}>
                    
                </div>
                <div className={`w-32 h-32 lg:w-56 ${active ?'bg-slate-600' :'bg-slate-300'} rounded-md transition-colors`}>
                    
                </div>
                <div className={`w-32 h-32 lg:w-56 ${active ?'bg-slate-600' :'bg-slate-300'} rounded-md transition-colors`}>
                    
                </div>
            </div>
        </section>
    )
}