type Props = {
    cityName: string
    status: string
    icone: string
    tempActual: number
    tempMax: number
    tempMin: number
}

export const CityInfo = ( {cityName, status, icone, tempActual, tempMax, tempMin}:Props ) => {
    const d = new Date()
    const dataFormatada = d.toLocaleDateString('pt-BR', {
        day:  '2-digit',
        month: '2-digit',
        year: 'numeric',
    })

    const urlIcone = `https://openweathermap.org/img/wn/${icone}@2x.png`
    
    return(
        <section className="flex justify-center my-8 mx-auto lg:max-w-[80%]">
            <div className="flex md:gap-2 text-white font-semibold w-full text-center pt-8 h-40 justify-around">
                <div className="text-gray-500 text-lg lg:text-2xl">
                    <h1>{cityName}</h1>
                    <p>{dataFormatada}</p>
                </div>
                <div className="w-32 flex flex-col justify-center lg:w-48">
                    <p className="text-lg mt-8 uppercase lg:text-3xl">{status}</p>
                    <img className="w-full h-full lg:max-h-48 mt-2" src={urlIcone} alt="Clima" />
                </div>
                <div className="text-5xl gap-2 grid grid-cols-2 grid-rows-2 lg:text-7xl">
                    <p className="col-start-1 col-end-3">{tempActual.toFixed(0)}°C</p>
                    <p className="text-sm">max <br/> {tempMax.toFixed(0)}°C</p>
                    <p className="text-sm">min <br/> {tempMin.toFixed(0)}°C</p>
                </div>
            </div>
        </section>
    )
}