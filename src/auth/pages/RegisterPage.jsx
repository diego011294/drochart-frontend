// src/auth/pages/RegisterPage.jsx
import { useState } from "react";
import Swal from "sweetalert2";
import { Icon } from "@iconify/react";
import { RegisterBtn } from "../../util/RegisterBtn";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialRegisterForm = {
    username: '',
    password: '',
    email: '',
};

export const RegisterPage = () => {
    const [registerForm, setRegisterForm] = useState(initialRegisterForm);
    const { username, password, email } = registerForm;
    const navigate = useNavigate();

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setRegisterForm({
            ...registerForm,
            [name]: value,
        });
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        if (!username || !password || !email) {
            Swal.fire('Error de validacion', 'Todos los campos son requeridos', 'error');
            return;
        }

        try {
            const response = await axios.post('http://roundhouse.proxy.rlwy.net:47292/users', registerForm);
            Swal.fire({
                title: 'Registro Exitoso',
                text: 'Tu cuenta ha sido creada correctamente.',
                iconHtml: `<div class="custom-icon-container"><img src="/img/Imagen usuario provi.svg" alt="Img user" /></div>`,
                confirmButtonColor: '#000000',
                confirmButtonText: 'Vale',
                customClass: {
                    popup: 'custom-popup',
                }
            });
            setRegisterForm(initialRegisterForm);
            navigate("/login");
            
        } catch (error) {
            Swal.fire('Error', 'Ocurrió un error al registrar el usuario', 'error');
        }
    };

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
                            <Icon className="text-[#F05858] text-2xl z-10" icon="material-symbols:person-add" />
                            <h3 className="text-xl font-black font-robotoFlex text-[#F05858] z-10">
                                REGISTRO
                            </h3>
                        </div>
                    </div>
                    <form onSubmit={onSubmit} className="flex flex-col items-center gap-4 p-3">
                        <div className="flex items-center flex-col gap-4">
                            <input
                                className="w-64 md:w-96 p-2 bg-[#595458] border border-opacity-25 border-white"
                                placeholder="Username"
                                name="username"
                                value={username}
                                onChange={onInputChange}
                            />
                            <input
                                className="w-64 md:w-96 p-2 bg-[#595458] border border-opacity-25 border-white"
                                placeholder="Email"
                                name="email"
                                type="email"
                                value={email}
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

                            <button type="submit" className="bg-[#F05858] text-white py-2 px-4 rounded w-[150px]">
                                Registrar
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};
