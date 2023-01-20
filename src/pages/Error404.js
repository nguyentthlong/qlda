import React, { useState } from 'react';
import {
    CDBNavbar,
    CDBNavBrand,
    CDBNavbarNav,
    CDBNavToggle,
    CDBNavItem,
    CDBNavLink,
    CDBBtn,
    CDBIcon,
    CDBCollapse,
} from 'cdbreact';
import './Error404.css';
import { Link } from 'react-router-dom';

export const Error404 = () => {
    const [collapse, setCollapse] = useState(false);

    return (
        <div className="error404">
            <div className="page-container">
                {/* <header className="navigation">
                    <CDBNavbar className="bg-transparent p-0" expand="md" light scrolling>
                        <CDBNavBrand href="/">
                            <img alt="logo" src="/img/pages/logo.png" width="25px" />
                        </CDBNavBrand>
                        <CDBNavToggle
                            onClick={() => {
                                setCollapse(!collapse);
                            }}
                        />
                        <CDBCollapse id="navbarCollapse1" isOpen={collapse} navbar>
                            <CDBNavbarNav left>
                                <CDBNavItem active>
                                    <CDBBtn flat className="p-3 border-0 bg-transparent">
                                        <CDBNavLink to="#">Home</CDBNavLink>
                                    </CDBBtn>
                                </CDBNavItem>
                                <CDBNavItem>
                                    <CDBBtn flat className="p-3 border-0 bg-transparent">
                                        <CDBNavLink to="#">Resources</CDBNavLink>
                                    </CDBBtn>
                                </CDBNavItem>
                                <CDBNavItem>
                                    <CDBBtn flat className="p-3 border-0 bg-transparent">
                                        <CDBNavLink to="#">Blog</CDBNavLink>
                                    </CDBBtn>
                                </CDBNavItem>
                                <CDBNavItem>
                                    <CDBBtn flat className="p-3 border-0 bg-transparent">
                                        <CDBNavLink to="#">Contact</CDBNavLink>
                                    </CDBBtn>
                                </CDBNavItem>
                                <CDBNavItem>
                                    <CDBBtn flat className="p-3 border-0 bg-transparent">
                                        <CDBNavLink to="#">Support</CDBNavLink>
                                    </CDBBtn>
                                </CDBNavItem>
                            </CDBNavbarNav>
                        </CDBCollapse>
                    </CDBNavbar>
                </header> */}

                <header className="navigation">
                    <CDBBtn flat className="p-3 border-0 bg-transparent">
                        <Link to="#"> Support</Link>
                    </CDBBtn>
                </header>
                <section className="page-body">
                    <div className="message404">
                        <h4 className="h1 font-weight-bold">Oops</h4>
                        <h4 className="h3 my-4">Something went wrong</h4>
                        <p>Sorry about that, hmmm... probably a missing page or the link's incorrect.</p>
                        <CDBBtn flat color="white" className="py-2 btn-block">
                            <Link extract to="/" activeClassName="activeClicked">
                                Back Home
                            </Link>
                        </CDBBtn>
                    </div>
                    <img className="image404" alt="404" src="/img/pages/error404.png" />
                </section>
            </div>
        </div>
    );
};
