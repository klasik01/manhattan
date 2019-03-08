import React, { Component } from 'react';
import HeaderMenu from './HeaderMenu';
import menuJson from './navbarMenuData';

class MainMenu extends Component {

    render() {
        return (
            <div>
                <HeaderMenu items={menuJson} />
            </div>
        );
    }
}

export default MainMenu;