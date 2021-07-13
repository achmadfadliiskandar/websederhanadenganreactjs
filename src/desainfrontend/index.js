import React from 'react'
import NavbarComponent from './NavbarComponent';
import Jumbotron from './Jumbotron';
import Abouts from './Abouts';
import Progress from './Progress';
import Contacts from './Contacts';
import Footers from './Footers';

const index = () => {
    return (
        <div>
        <NavbarComponent />
        <Jumbotron />
        <Abouts />
        <Progress />
        <Contacts />
        <Footers />
        </div>
    )
}

export default index
