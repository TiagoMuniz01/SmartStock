import { Route, Routes } from 'react-router-dom'
import { Home, Login } from './pages'
import { LayoutHome } from './layouts'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<LayoutHome/>}>
                <Route path='/' element={<Home />}/>
                <Route path='/login' element={<Login />}/>
            </Route>
        </Routes>
    )
}

export { Router }