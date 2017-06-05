import {Alert} from 'react-bootstrap';
import React from 'react';
import PropTypes from 'prop-types'

export default class Notification extends React.Component {
    render() {
        const {alertType, message, onDismiss} = this.props;
        if (message) {
            return (
                <div className="container">
                    <Alert bsStyle={alertType} onDismiss={onDismiss}>
                        <p>{message}</p>
                    </Alert>
                </div>
            );
        }
        return null;
    }
}

Notification.propTypes = {
    dismissNotification: PropTypes.func,
    message: PropTypes.string,
    alertType: PropTypes.string,
    onDismiss: PropTypes.func
};
