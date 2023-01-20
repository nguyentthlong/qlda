import React from 'react';
import { Header } from './Navbar.style';
import { CDBNavbar, CDBInput } from 'cdbreact';
import { Link } from 'react-router-dom';

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
                    <Link extract to="/login" activeClassName="activeClicked">
                        <button className="btn btn-light mx-3" type="submit">
                            Login
                        </button>
                    </Link>
                </div>
            </CDBNavbar>
        </Header>
    );
};

export default Navbar;
