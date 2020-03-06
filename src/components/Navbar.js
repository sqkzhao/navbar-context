import React, { useContext } from 'react'
import Wrapper from './Wrapper'
import '../Navbar.css'

const Navbar = () => {
    const context = useContext(Wrapper)
    return (
        <nav className="navbar">
            <h1 className="greeting">Hi {context.nameState}!</h1>
        </nav>
    )
}
export default Navbar