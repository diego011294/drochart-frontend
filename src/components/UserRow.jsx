import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import { AuthContext } from "../auth/context/AuthContext"
import { Icon } from "@iconify/react/dist/iconify.js"

export const UserRow = ({id, username, email}) => {
    const { handlerUserSelectedForm, handlerRemoveUser } = useContext(UserContext);
    const { login } = useContext(AuthContext);

    return (
        <tr>
            <td className="text-white font-rockSalt text-xl">{username}</td>
            <td className="text-[#ffffffb4] font-semibold">{email}</td>
            {!login.isAdmin || <>
            <td className="text-center">
                <button
                    type="button"
                    onClick={() => handlerUserSelectedForm({
                        id,
                        username,
                        email
                    })}
                >
                    <Icon className="text-[#e2e462] text-2xl text-center" icon="ph:pencil"/>
                </button>
            </td>
            <td className="hidden">
                <NavLink className={'btn btn-secondary btn-sm'}
                    to={'/users/edit/' + id} >
                    update route
                </NavLink>
            </td>
            <td className="text-center">
                <button
                    type="button"
                    onClick={() => handlerRemoveUser(id)}
                >
                    <Icon className="text-[#903434] text-2xl" icon="ph:trash"/>
                </button>
            </td>
            </>}
        </tr>
    )
}