import { useEffect, useState, useContext } from "react";
import { BurguerBtn } from "../../util/BurguerBtn";
import { LogoutBtn } from "../../util/LogoutBtn";
import { AuthContext } from "../../auth/context/AuthContext";
import { NavLink } from "react-router-dom";
import { LoginNav } from "../../util/LoginNav";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

export const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const [showFirst, setShowFirst] = useState(true);
    const { login } = useContext(AuthContext);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowFirst((prevShowFirst) => !prevShowFirst);
        }, 4200);
        return () => clearInterval(interval);
    }, []);

    const handleClick = () => {
        setClicked(!clicked);
    };

    const handleLinkClick = () => {
        setClicked(false);
    };

    const menuVariants = {
        open: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        },
        closed: {
            x: "-100%",
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    };

    return (
        <>
            <div className="flex flex-col sticky top-0 z-50">
                <div className="flex justify-center gap-5 items-center max-w-full h-[30px] bg-[#242324]">
                    <div className="text-white">
                        {showFirst ? (
                            <p className="text-[14px]">
                                Explora nuestra <span className="text-[#F05858]">galería</span>{" "}
                                <a href="/gallery" className="text-[12px] border-b border-white"> Ver más</a>
                            </p>
                        ) : (
                            <p className="text-[14px]">
                                Sube un nuevo <span className="text-[#F05858]">diseño</span>{" "}
                                <a href="/nueva" className="text-[12px] border-b border-white"> Subir</a>
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex items-center gap-10 justify-between max-w-full bg-gradient-to-r from-[#CC4141] to-[#DF6969] h-[90px] pr-5 pl-5 border-b border-[rgb(255,255,255,0.10)] shadow-md z-30">
                    <NavLink to={"/home"}>
                        <img src="/img/Logo SVG.svg" alt="Logo DROCH.ART" />
                    </NavLink>
                    <div className="text-white hidden lg:flex font-robotoFlex">
                        <NavLink to="/home">
                            <button className="inline-block p-[33px] hover:bg-[rgb(73,57,68,0.25)]">INICIO</button>
                        </NavLink>
                        <NavLink to="/gallery">
                            <button className="inline-block p-[33px] hover:bg-[rgb(73,57,68,0.25)]">GALERÍA</button>
                        </NavLink>
                        <NavLink to="/nueva">
                            <button className="inline-block p-[33px] hover:bg-[rgb(73,57,68,0.25)]">NUEVA</button>
                        </NavLink>
                        <NavLink to="/users">
                            <button className="inline-block p-[33px] hover:bg-[rgb(73,57,68,0.25)]">USUARIOS</button>
                        </NavLink>
                    </div>
                    <div className="flex items-center gap-4">
                        <div>
                            {login.isAuth && (
                                <a className="hidden lg:block bg-[#0000006a] hover:bg-black transition-all duration-500 rounded-full p-2" href="/show">
                                    <Icon className="text-white text-2xl" icon="ph:images-fill" />
                                </a>
                            )}
                        </div>
                        <div className="hidden lg:block">
                            {login.isAuth ? <LogoutBtn /> : <LoginNav />}
                        </div>
                    </div>
                    <div className="lg:hidden">
                        <BurguerBtn clicked={clicked} handleClick={handleClick} />
                    </div>
                </div>
                <motion.div
                    initial="closed"
                    animate={clicked ? "open" : "closed"}
                    variants={menuVariants}
                    className="fixed top-0 left-0 w-full h-full z-40 bg-[#CC4141] text-white flex flex-col pt-[90px] pb-[50px] lg:hidden"
                >
                    <button
                        className="absolute top-5 right-5 text-white"
                        onClick={handleClick}
                    >
                        <Icon icon="mdi:close" className="text-3xl" />
                    </button>
                    <NavLink to="/home">
                        <a className="inline-block p-[33px]" onClick={handleLinkClick} href="#">INICIO</a>
                    </NavLink>
                    <NavLink to="/gallery">
                        <a className="inline-block p-[33px]" onClick={handleLinkClick} href="#">GALERÍA</a>
                    </NavLink>
                    <NavLink to="/nueva">
                        <a className="inline-block p-[33px]" onClick={handleLinkClick} href="#">NUEVA</a>
                    </NavLink>
                    <NavLink to="/users">
                        <a className="inline-block p-[33px]" onClick={handleLinkClick} href="#">USUARIOS</a>
                    </NavLink>
                    <div className="flex justify-center items-center gap-4 pt-5">
                        <div className="flex">
                            <a onClick={handleLinkClick}>{login.isAuth ? <LogoutBtn /> : <LoginNav />}</a>
                        </div>
                        {login.isAuth && (
                            <div className="bg-[#0000006a] hover:bg-black transition-all duration-500 rounded-full p-2 flex items-center">
                                <a className="" href="/show">
                                    <Icon className="text-white text-2xl" onClick={handleLinkClick} icon="ph:images-fill" />
                                </a>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </>
    );
};
