import { NavLink } from "react-router-dom"
import { GaleriaBtn } from "../util/GaleriaBtn"
import { RegisterBtn } from "../util/RegisterBtn"

export const Header = () => {

    return (
        <div className="bg-no-repeat bg-cover bg-center md:pb-20 md:w-full md:pt-5"
            style={{ backgroundImage: "url('/public/img/FondoHeader.png')" }}>
            <div className="flex flex-col justify-center items-center pb-3">
                <div className="md:pr-[500px] absolute z-10">
                    <img className="hidden md:block w-[550px]" src="/public/img/Keko principal.png" alt="Imagen keko" />
                </div>
                <div className="md:w-[800px]">
                    <div className="flex flex-col items-center font-robotoFlex font-black p-4 text-[#ffffff55] md:items-end">
                        <h1 className="relative text-[25px] text-end md:text-[60px]">
                            EL <span className="image-text text-[90px] md:text-[150px]">ARTE</span>
                        </h1>
                        <h2 className="text-[40px] text-end md:text-[100px]">EMPIEZA</h2>
                        <h3 className="text-[30px] text-end md:text-[80px]">AQUÍ</h3>
                        <p className="text-sm text-end text-[#ffffffd3] font-semibold pt-5 md:text-lg">Registrate para empezar a subir todos tus diseños</p>

                    </div>
                </div>
                <div className="flex justify-end md:w-[800px] md:pr-6 z-20">
                    <div className="flex justify-center gap-4 md:justify-end">
                        <NavLink to="/gallery">
                            <GaleriaBtn />
                        </NavLink>
                        <RegisterBtn />
                    </div>
                </div>
                <div className="hidden lg:flex items-center gap-4 absolute transform translate-x-[-600px] translate-y-[100px] -rotate-90 scale-x-[1]">
                    <h2 className=" text-gradient font-robotoFlex italic font-black text-2xl">
                        SCROLL
                    </h2>
                    <img src="/public/img/Line 4.png" alt="Scroll" />
                </div>
            </div>

        </div>
    )
}


