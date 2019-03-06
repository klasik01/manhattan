import React from 'react';
import SwitchLocale from "../intl/SwitchLocale";
import {FormattedMessage} from "react-intl";

class Welcome extends React.Component {

    render() {
        return (
            <div>
                <FormattedMessage id="welcome" defaultMessage="Welcome"/>
                <SwitchLocale/>
            </div>
        );
    }
}

export default Welcome;