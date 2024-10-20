import { NextDaysType } from "@/types/nextDaysType"
type Props = {
    list: NextDaysType[]
}

export const NextDays = ({list}:Props) => {

    return(
        <section className="flex flex-wrap justify-around lg:text-2xl lg:max-w-[80%] mx-auto">
        {list.map((day, index) => (
            <div key={index} className="flex flex-col gap-3 items-center">
                <div className="w-14 h-14">
                    <img src="/images/nuvem.png" alt="nuvem" />
                </div>
                <div className="p-3 min-h-40 min-w-24 bg-gradient-to-b text-white font-semibold from-sky-300 to-slate-400  rounded-lg flex flex-col items-center text-center">
                    <h2>{day.name}</h2>
                    <img className="w-9 h-9" src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`} alt="icone" /> {/* Exibe o ícone do clima */}
                    <p>{day.temp.toFixed(0)}°C</p> 
                    <p className="text-sm md:text-lg">
                        Probabilidade: <br/>
                        {(day.prob * 100).toFixed(0)}%</p>
                </div>
            </div>
        ))}
    </section>
    )
}