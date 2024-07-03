import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import { LoginBtn } from "../../util/LoginBtn";
import { RegisterBtn } from "../../util/RegisterBtn";

const initialLoginForm = {
    username: '',
    password: '',
}
export const LoginPage = () => {

    const { handlerLogin } = useContext(AuthContext);

    const [loginForm, setLoginForm] = useState(initialLoginForm);
    const { username, password } = loginForm;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setLoginForm({
            ...loginForm,
            [name]: value,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (!username || !password) {
            Swal.fire('Error de validacion', 'Username y password requeridos', 'error');
        }

        handlerLogin({ username, password });

        setLoginForm(initialLoginForm);
    }
    return (
        <div className="flex flex-col md:flex-row justify-end bg-no-repeat bg-cover md:bg-contain"
        style={{ backgroundImage: "url('/img/Oso + logo.png')" }}>
            <div className="p-10 md:p-[100px]">
                <div className="bg-custom-gradient border-t-4 border-[#F05858] flex flex-col">
                    <div className="p-2">
                        <div className="absolute">
                            <h1 className="hidden md:block text-5xl font-black font-robotoFlex italic opacity-40"
                                style={{
                                    color: 'transparent',
                                    WebkitTextStrokeWidth: '0.5px',
                                    WebkitTextStrokeColor: '#FFFFFF',
                                }}
                            >BIENVENIDOS</h1>
                        </div>
                        <div className="flex gap-2 items-center pt-[20px] pl-2">
                            <Icon className="text-[#F05858] text-2xl z-10" icon="material-symbols:login" />
                            <h3 className="text-xl font-black font-robotoFlex text-[#F05858] z-10">
                                LOGIN
                            </h3>
                        </div>
                    </div>
                    <form onSubmit={onSubmit} className="flex flex-col items-center gap-4 p-3" >
                        <div className=" flex items-center flex-col gap-4">
                            <input
                                className="w-64 md:w-96 p-2 bg-[#595458] border border-opacity-25 border-white"
                                placeholder="Username"
                                name="username"
                                value={username}
                                onChange={onInputChange}
                            />

                            <input
                                className="w-64 md:w-96 p-2 bg-[#595458] border border-opacity-25 border-white"
                                placeholder="Password"
                                type="password"
                                name="password"
                                value={password}
                                onChange={onInputChange}
                            />
                        </div>
                        <div>
                            <LoginBtn />
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <p className="text-white text-sm text-center md:w-72">
                                Si aún no estás registrado, puedes hacerlo utilizando tu correo electrónico
                            </p>
                            <div>                               
                                <RegisterBtn />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );

}