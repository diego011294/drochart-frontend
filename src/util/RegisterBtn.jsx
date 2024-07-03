import { NavLink } from "react-router-dom"

export const RegisterBtn = () => {
    return (
        <div>
                <NavLink to={"/register"}>
                <button type="submit" className="w-[150px] h-[40px]">
                    <div className="flex justify-center items-center w-full h-full border-2 transition-all duration-500 text-[#DF6969] border-[#DF6969] hover:text-white hover:border-white hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 cursor-pointer">
                        <div className=" text-l font-semibold font-robotoFlex">REGISTRATE</div>
                    </div>
                </button>
                </NavLink>
        </div>
    )
}


