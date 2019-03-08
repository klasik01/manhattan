import React from 'react';
import { FormattedMessage } from 'react-intl';

const NotFoundPage = () => (
    <div>
        <FormattedMessage id="missingPage" defaultMessage="Page not found" />
    </div>
);

export default NotFoundPage;