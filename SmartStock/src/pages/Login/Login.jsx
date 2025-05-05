import { Link } from "react-router-dom"

import style from './Login.module.css'

import { CardLogin } from '../../components'

const Login = () => {
    return(
        <div className=" h-screen
        bg-linear-150 from-primaria-70 from-50% via-primaria-50 via-80% to-secundaria to-100%
        flex 
        justify-around
        items-center">
            <div className=" 
            border-4 
            w-40
            h-40">
                Logo
            </div>
                <CardLogin/>
        </div>
    )
}

export { Login }