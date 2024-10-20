import { useState } from "react"

export const Header = () => {
    const[showMenu, setShowMenu] = useState(false)
    const[active, setActive] = useState(false)
    return(
        <header className="flex p-3 relative justify-center lg:justify-between">
            {showMenu === false &&
                <div 
                    onClick={()=>{
                        setShowMenu(!showMenu)
                        setTimeout(()=>{
                            setActive(!active)
                        }, 100)
                    }} 
                    className="flex md:hidden flex-col gap-1 absolute left-4 top-5 rounded-full p-2 justify-evenly bg-white hover:opacity-80 cursor-pointer"
                >
                    <div className="w-8 h-1.5 bg-black"></div>
                    <div className="w-8 h-1.5 bg-black"></div>
                    <div className="w-8 h-1.5 bg-black"></div>
                </div>
            }
            {showMenu &&
                <div className={` ${active ? 'open_menu' : 'close_menu'} left-0 top-0 p-5 absolute bg-slate-400 rounded-lg w-0 h-96`}>
                    <div 
                        onClick={()=>{
                            setActive(!active)
                            setTimeout(()=>(setShowMenu(!showMenu)), 300)
                        }} 
                        className="text-lg absolute text-white cursor-pointer hover:opacity-50 p-2 top-2 left-2"
                    >X</div>
                    <ul className="flex h-full items-center justify-around flex-col">
                        <li className="border hidden px-3 py-2 cursor-pointer rounded-md text-white font-semibold hover:opacity-50">Home</li>
                        <li className="border hidden px-3 py-2 cursor-pointer rounded-md text-white font-semibold hover:opacity-50">Contatos</li>
                        <li className="border hidden px-3 py-2 cursor-pointer rounded-md text-white font-semibold hover:opacity-50">Sobre Nós</li>
                        <li className="border hidden px-3 py-2 cursor-pointer rounded-md text-white font-semibold hover:opacity-50">Créditos</li>
                    </ul>
                </div>
            }
            <div className="h-20 w-20 items-center flex flex-col">
                <img className="w-full h-full" src="/images/nuvens.png" alt="Logo" />
                <p className="text-xl font-bold text-zinc-700">Jooj<span className="text-sky-500">weather</span></p>
            </div>
            <div className="hidden md:block lg:text-lg">
                    <ul className="flex h-full gap-4 mx-4 items-center justify-around">
                        <li className="border px-3 py-2 cursor-pointer rounded-md text-white font-semibold hover:opacity-50">Home</li>
                        <li className="border px-3 py-2 cursor-pointer rounded-md text-white font-semibold hover:opacity-50">Contatos</li>
                        <li className="border px-3 py-2 cursor-pointer rounded-md text-white font-semibold hover:opacity-50">Sobre Nós</li>
                        <li className="border px-3 py-2 cursor-pointer rounded-md text-white font-semibold hover:opacity-50">Créditos</li>
                    </ul>
            </div>
        </header>
    )
}