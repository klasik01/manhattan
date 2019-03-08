import React from 'react';
import {FormattedMessage} from "react-intl";

class Welcome extends React.Component {

    render() {
        return (
            <div>
                <FormattedMessage id="welcome" defaultMessage="Welcome"/>
            </div>
        );
    }
}

export default Welcome;