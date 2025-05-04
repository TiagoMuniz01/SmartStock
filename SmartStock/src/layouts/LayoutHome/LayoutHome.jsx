import { Outlet } from "react-router-dom"

const LayoutHome = () => {
    return(
        <div className='font-bold'>
            <h1>Barra lateral</h1>
            <Outlet/>
        </div>
    )
}

export { LayoutHome }