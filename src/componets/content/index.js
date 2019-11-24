import React, { useState } from 'react';
import Alert from "../alerts";
import Button from "../button";
import './style.scss';

function Content() {

    const [count, setCount] = useState(1);

    return(
        <div className="content">
            <Alert type="secondary">
                Счетчик равен = {count}
                {count > 5 && ' Счетчик стал равен больше 5 ! И если он будет больше 10, то увидишь хуй '}
                {count > 10 && (
                    <img src="https://img-hw.xvideos.com/videos/profiles/profthumb/61/a0/f3/xcadrek/profile_1_big.jpg" alt=""/>
                )}
            </Alert>
            <Button
                onPress={() => setCount(count + 1)}
                color="primary"
            >
                Прибавить + 1
            </Button>
            <hr/>
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