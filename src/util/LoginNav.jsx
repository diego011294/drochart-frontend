import { NavLink } from "react-router-dom"

export const LoginNav = () => {
    return (
        <div>
            <NavLink to={"/login"}>
            <button className="w-[150px] h-[40px]  text-white">
                <div className="flex justify-center items-center w-full h-full border-2 transition-all duration-500 border-white hover:bg-white hover:text-[#DF6969] cursor-pointer">
                    <p type="submit" className="text-l font-semibold font-robotoFlex">LOGIN</p>
                </div>
            </button>
            </NavLink>
        </div>
    )
}

