import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";


export const LogoutBtn = () => {
    const { handlerLogout } = useContext(AuthContext);
    return (
        <div className="w-[160px] h-[40px] text-white">
            <div className="flex justify-center items-center w-full h-full border-2 transition-all duration-500 border-white hover:bg-white hover:text-[#DF6969] cursor-pointer">
                <button onClick={handlerLogout} className="text-l font-semibold font-robotoFlex">LOGOUT</button>                
            </div>
        </div>
    )
}

