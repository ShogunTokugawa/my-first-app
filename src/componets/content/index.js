import React from 'react';
import Alert from "../alerts";
import './style.scss';

function Content(props) {
    return(
        <div>
            <Alert type="primary">
                Это основное уведомление — check it out!
            </Alert>
            <Alert type="secondary">
                Это дополнительное уведомление — check it out!
            </Alert>
        </div>
    )
}

export default Content;