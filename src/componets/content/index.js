import React from 'react';
import Alert from "../alerts";
import Button from "../button";
import './style.scss';

function Content() {
    return(
        <div className="content">
            <Alert type="primary">
                Это основное уведомление — check it out!
            </Alert>
            <Alert type="secondary">
                Это дополнительное уведомление — check it out!
            </Alert>
            <Button type="submit" color="primary">
                Главный
            </Button>
            <Button type="button" color="secondary">
                Вторичный
            </Button>
            <Button type="link" href="/news">
                Ссылка
            </Button>
        </div>
    )
}

export default Content;