import { Link } from "react-router-dom"


const Home = () => {
    return(
        <div>
            <h1>INICIAL</h1>
            <span>
                <Link to='/login'>Login</Link>
            </span>
        </div>
    )
}

export { Home }