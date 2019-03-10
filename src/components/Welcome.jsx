import React from 'react';
import {FormattedMessage} from "react-intl";

class Welcome extends React.Component {

    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <FormattedMessage id="welcome" defaultMessage="Welcome"/>
            </div>
        );
    }
}

export default Welcome;