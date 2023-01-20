import React from 'react';
import { Header } from './Navbar.style';
import { CDBNavbar, CDBInput } from 'cdbreact';

const Navbar = () => {
    return (
        <Header style={{ background: '#0d6efd', color: '#fff' }}>
            <CDBNavbar dark expand="md" scrolling className="justify-content-start">
                {/* <CDBInput type="search" size="md" hint="Search" className="mb-n4 mt-n3 input-nav" /> */}
                <input class="form-control me-sm-4" type="text" placeholder="Search" />
                <button class="btn btn-dark my-2 my-sm-0" type="submit">
                    Search
                </button>
                <div className="ml-auto">
                    <i className="fas fa-bell mx-5"></i>
                    <i className="fas fa-comment-alt mx-=5"></i>
                    {/* <img alt="" src="" style={{ width: '3rem', height: '3rem' }} /> */}
                    {/* <logout></logout> */}
                </div>
            </CDBNavbar>
        </Header>
    );
};

export default Navbar;
