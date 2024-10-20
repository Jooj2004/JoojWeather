"use client"

import { CityInfo } from "@/components/CityInfo"
import { CityInfoLoading } from "@/components/CityInfoLoading"
import { Header } from "@/components/Header"
import { NextDays } from "@/components/NextDays"
import { NextDaysLoading } from "@/components/NextDaysLoading"
import { NextDaysType } from "@/types/nextDaysType"
import axios from "axios"
import { useState } from "react"

const Page = () => {
  const [textKey, setTextKey] = useState<string>()

  const [city, setCity] = useState(false)
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState(false)
  const [erro2, setErro2] = useState(false)
  const[textInput, setTextInput] = useState<string>()

  //States do clima 
  const[cityName, setCityName] = useState<string>('Cidade')
  const[status, setStatus] = useState<string>('Status')
  const[icon, setIcon] = useState<string>('')
  const[tempActual, setTempActual] = useState<number>(0)
  const[tempMax, setTempMax] = useState<number>(0)
  const[tempMin, setTempMin] = useState<number>(0)

  const[nextDays, setNextDays] = useState<NextDaysType[]>([])

  const handleSetCity = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${textInput?.trim()}&appid=${textKey}&lang=pt_br&units=metric`
    const url2 = `https://api.openweathermap.org/data/2.5/forecast?q=${textInput?.trim()}&appid=${textKey}&lang=pt_br&units=metric`
    try{
      setLoading(true)
      const res = await axios.get(url)
      const res2 = await axios.get(url2)

      setCityName(res.data.name)
      setStatus(res.data.weather[0].description)
      setIcon(res.data.weather[0].icon)
      setTempActual(res.data.main.temp)
      setTempMax(res.data.main.temp_max)
      setTempMin(res.data.main.temp_min)

      setNextDays(
      [{
        name: res2.data.list[0].weather[0].description,
        icon: res2.data.list[0].weather[0].icon,
        temp: res2.data.list[0].main.temp,
        prob: res2.data.list[0].pop
      },
      {
        name: res2.data.list[1].weather[0].description,
        icon: res2.data.list[1].weather[0].icon,
        temp: res2.data.list[1].main.temp,
        prob: res2.data.list[1].pop
      },
      {
        name: res2.data.list[2].weather[0].description,
        icon: res2.data.list[2].weather[0].icon,
        temp: res2.data.list[2].main.temp,
        prob: res2.data.list[2].pop
      },
      {
        name: res2.data.list[3].weather[0].description,
        icon: res2.data.list[3].weather[0].icon,
        temp: res2.data.list[3].main.temp,
        prob: res2.data.list[3].pop
      },
      {
        name: res2.data.list[4].weather[0].description,
        icon: res2.data.list[4].weather[0].icon,
        temp: res2.data.list[4].main.temp,
        prob: res2.data.list[4].pop
      }])
      setLoading(false)
      setCity(true)
    }catch{
      setErro(true)
      setLoading(false)
      setTimeout(()=>(setErro(false)),3000)
    }
  }

  return(
    <div className="container mx-auto lg:max-w-[70%]">
      <Header />
      {city && loading === false &&
        <CityInfo
          cityName={cityName}
          status={status}
          icone={icon}
          tempActual={tempActual}
          tempMax={tempMax}
          tempMin={tempMin}
        />
      }
      {loading &&
        <CityInfoLoading />
      }
      <div className="h-64 flex-col pt-8 gap-3 flex items-center"> 
        <div className="flex rounded-md h-14 mx-auto bg-white w-96 ">
          <input 
              type="text" 
              placeholder="Qual a sua cidade?" 
              className="outline-none rounded-md px-3 py-2 w-full" 
              value={textInput}
              onChange={(e)=>(setTextInput(e.target.value))}
              onKeyUp={(e)=>{
                if(e.code === 'Enter'){
                  if(!textInput) return
                  handleSetCity()
                  setTextInput('')
                }
              }}
          />
          <img 
            onClick={()=>{
              if(!textKey){
                setErro2(true)
                setTimeout(()=>(setErro2(false)),3000)
                return
              }
              if(!textInput){
                return
              }
              handleSetCity()
              setTextInput('')
            }} 
            src="/images/lupa.png" 
            alt="lupa" 
            className="w-14 h-full cursor-pointer hover:opacity-80" 
          />
        </div>
        {loading &&
          <div><img className="w-14 h-14 animate-spin" src="/images/carregando.png" alt="carregando" /></div>
        }
        <input 
          className="outline-none rounded-md px-3 py-2 w-96" 
          placeholder="Digite a sua chave:" 
          type="text"
          value={textKey}
          onChange={(e)=>(setTextKey(e.target.value))}
        />
        {erro2 &&
          <div className="bg-slate-300 py-2 px-3 rounded-md text-red-400">Digite a chave!</div>
        }
        {erro &&
          <div className="bg-slate-300 py-2 px-3 rounded-md text-red-400">Ocorreu um erro. Tente novamente mais tarde!</div>
        }
      </div>
      {city && loading === false &&
        <>
          <h1 className="text-sky-800 text-lg lg:text-2xl font-semibold text-center mb-2">Proximas horas</h1>
          <NextDays 
            list={nextDays}
          />  
        </>
      }
      {loading &&
        <NextDaysLoading />
      }
    </div>
  )
}

export default Page