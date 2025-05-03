import { Outlet } from "react-router-dom"

const LayoutHome = () => {
    return(
        <div>
            <h1>Barra lateral</h1>
            <Outlet/>
        </div>
    )
}

export { LayoutHome }