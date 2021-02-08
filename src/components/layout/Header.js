import React from 'react'
import {Link }from 'react-router-dom';

function Header() {
    return (

        <header style={headerStyle}>
            <h1>TodoTasks</h1>
            <Link to ="/">
                Home</Link> | <Link to="/Info">Info</Link>
        </header>
    )

}
const headerStyle ={
    background: '#696969',
    color: '#F8F8FF',
    textAlign: 'center',
    padding: '10px'
}
export default Header;
