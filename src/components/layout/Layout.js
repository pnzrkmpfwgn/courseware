import React from 'react';
import PropTypes from 'prop-types';
import Head from './Header/Head';
import Nav from './Header/Nav';
import Footer from './Footer/Footer';

const Layout =({children})=>{
    return <>
       <Head/>
       <Nav />
       <main>{children}</main>
       <Footer />
    </>
}

Layout.propTypes={
    children:PropTypes.node.isRequired
}

export default Layout;