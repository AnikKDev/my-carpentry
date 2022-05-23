import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../src/firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const menuOptions = <>
        <li className="mx-2"><NavLink to="/home">Home</NavLink></li>
        <li className="mx-2"><NavLink to="/blogs">Blogs</NavLink></li>
        <li className="mx-2"><NavLink to="/myportfolio">My Portfolio</NavLink></li>
        {user && <li className="mx-2"><NavLink to="/dashboard">Dashboard</NavLink></li>}
    </>;

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }

    return (
        <div class="navbar bg-base-100 lg:px-6">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuOptions}
                    </ul>
                </div>
                <Link to="/" class="btn btn-ghost normal-case text-xl">MyCarpentry</Link>
            </div>
            <div class="navbar-center hidden lg:flex ">
                <ul class="menu menu-horizontal p-0">
                    {menuOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <label for="dashboard-sidebar" tabindex="1" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
            <div class="navbar-end">
                {user ? <button onClick={logout} class="btn btn-outline btn-primary">Logout</button> : <Link to="/login" class="btn btn-outline btn-primary">Login</Link>}
            </div>
        </div>
    );
};

export default Header;