import { useState } from 'preact/hooks'
import { Link } from 'preact-router/match';
import './navbar.scss'

export function NavBar() {

    return (
        <>
            <div id='NavBar_Warper'>
                <nav>
                    <NavTab name='Home' path='/'/>
                    {/* <NavTab name='Posts' path='/posts'/> */}
                    <NavTab name='About' path='/about'/>
                </nav>
            </div>
        </>
    )
}

type NavTabType = {
    path: string;
    name: string
}

function NavTab({path, name}: NavTabType) {
    return (
        <>
            <Link activeClassName='active' class='NavTab' href={path}>
                {name}
            </Link>
        </>
    )
}