import React, { Component, Fragment } from 'react';
import Footer from '../common/footer/Footer';
import Navig from '../common/nav/Nav';
class MainLayout extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <Navig/>
                {this.props.children}
                <Footer/>
            </Fragment>
        );
    }
}

export default MainLayout;
