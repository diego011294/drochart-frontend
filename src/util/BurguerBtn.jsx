import { Icon } from "@iconify/react/dist/iconify.js"
export const BurguerBtn = (props) => {
    return (
        <div onClick={props.handleClick} className="text-white text-3xl cursor-pointer">
            {props.clicked ? (
                <Icon icon="material-symbols:close" /> // Icono de 'X' cuando el menú está desplegado
            ) : (
                <Icon icon="material-symbols:menu" /> // Icono de hamburguesa cuando el menú está cerrado
            )}
        </div>
    )
}

