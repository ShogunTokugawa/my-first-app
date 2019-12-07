import React, { useState } from 'react';
import Alert from "../alerts";
import Button from "../button";
import Card from "../card";
import './style.scss';
import FlexBox from "../flexBox";
import Toasts from "../toasts";

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
            <FlexBox>
                <Card
                    img="https://img2.akspic.ru/image/146213-tigr-hishhnik-zivotnoe-bengalskij_tigr-bakenbardy-3840x2160.jpg"
                    btnText="Переход куда-нибудь"
                >
                    <h3>
                        Название карточки
                    </h3>
                    <p>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                </Card>
                <Card
                    img="https://www.nastol.com.ua/download.php?img=201410/1920x1080/nastol.com.ua-116413.jpg"
                    btnText="Ето яга"
                >
                    <h3>
                        Яжку хочеш?
                    </h3>
                    <p>
                        bjkhjk hgjkg bvg kllkh kl hoh kjhkjkjhjklh bp;lqm.n
                    </p>
                </Card>
            </FlexBox>
            <Toasts header="Bootstrap" time="11 mins ago">
                Hello, world! This is a toast message.
            </Toasts>
            <Toasts header="Bootstrap" time="11 mins ago">
                Hello, world! This is a toast message.
            </Toasts>
        </div>
    )
}

export default Content;