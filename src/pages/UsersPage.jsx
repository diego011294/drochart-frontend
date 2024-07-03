import { useContext, useEffect } from "react";
import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList";
import { UserContext } from "../context/UserContext";
import { AuthContext } from "../auth/context/AuthContext";
import { Icon } from "@iconify/react/dist/iconify.js";

export const UsersPage = () => {

    const {
        users,
        visibleForm,
        handlerOpenForm,
        getUsers,
    } = useContext(UserContext);

    const {login} = useContext(AuthContext);

    useEffect(() => {
        getUsers();
    }, []);
    
    return (
        <div
        style={{ backgroundImage: "url('/img/Fondo2Stats.png')" }}
        className="flex justify-center p-10 bg-no-repeat bg-cover">

            {!visibleForm ||
                <UserModalForm />}
            <div 
                style={{ backgroundImage: "url('/img/Fondo usuarios.png')" }}
                className="bg-no-repeat bg-cover md:w-[780px] md:p-10">
                <div className="p-2">
                        <div className="absolute">
                            <h1 className="hidden md:block text-5xl font-black font-robotoFlex italic opacity-40"
                                style={{
                                    color: 'transparent',
                                    WebkitTextStrokeWidth: '0.5px',
                                    WebkitTextStrokeColor: '#FFFFFF',
                                }}
                            >USUARIOS</h1>
                        </div>
                        <div className="flex gap-2 items-center pt-[20px] pl-2">
                            <Icon className="text-[#FFFFFF] text-2xl z-10" icon="ph:users" />
                            <h3 className="text-xl font-black font-robotoFlex text-[#FFFFFF] z-10">
                                USUARIOS
                            </h3>
                        </div>
                    </div>
                <div className="row rounded overflow-y-scroll h-[400px] barra p-3">
                    <div className="col">
                        {(visibleForm || !login.isAdmin) || <button
                            className="btn btn-dark my-2"
                            onClick={handlerOpenForm}>
                            Nuevo usuario
                        </button>}

                        {
                            users.length === 0
                                ? <div className="alert alert-warning">No hay usuarios en el sistema!</div>
                                : <UsersList />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}