import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin'

const DashBoard = () => {
    const [user] = useAuthState(auth);
    // const [admin]=useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content text-left">
                <h2 className='text-purple-500 py-5 text-3xl text-center font-bold'>Welcome to Your DashBoard</h2>
                <Outlet></Outlet>
                {/* <!-- Page content here --> */}
            </div>
            <div class="drawer-side">
                <label for="sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>MyOrder</Link></li>
                    <li><Link to='/dashboard/review'>MyReview</Link></li>
                    <li><Link to='/dashboard/addItem'>AddItem</Link></li>
                    <li><Link to='/dashboard/manage'>Manage Items</Link></li>
                    {<li><Link to='/dashboard/users'>All Users</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;