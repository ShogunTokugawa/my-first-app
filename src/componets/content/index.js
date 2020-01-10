import React, { useState } from 'react';
import Alert from "../alerts";
import Button from "../button";
import Card from "../card";
import './style.scss';
import FlexBox from "../flexBox";
import Toasts from "../toasts";
import Input from "../input";
import Rating from "../rating";
import Tags from "../tags";
import Breadcrumbs from "../breadcrumbs";
import Pagination from "../pagination";
import State from "../state";
import Counter from "../counter";
import Slider from "../slider";
import Square from "../square";

function Content() {

    const [count, setCount] = useState(1);
    const contentData = {
        tags: [
            { title: 'Тег №1', href: 'http://link1.ru'},
            { title: 'Тег №2', href: 'http://link2.ru'},
            { title: 'Тег №3', href: 'http://link3.ru'},        
        ],
        breadcrumbs:[
            {title: 'Home', link: '/home'},
            {title: 'Library', link: '/library'},
            {title: 'Data', link: '/data'},
        ],
    };
    const sliderContent = {
        content: [
            { img: 'https://www.nastol.com.ua/download.php?img=201209/1600x1200/nastol.com.ua-32997.jpg', href: '/1' },
            { img: 'https://www.zastavki.com/pictures/2560x1600/2010/Nature_Other_waterfall_019570_.jpg', href: '/2' },
            { img: 'https://www.nastol.com.ua/download.php?img=201702/2560x1440/nastol.com.ua-207106.jpg', href: '/3' },
        ]
    };

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
            <br/>
            <Input type="password" placeholder="Пароль" class="form-control">
                index
            </Input>
            <br/>
            <Rating
                max={5}
                now={2} 
            >
                Рейтинг
            </Rating>
            <Tags 
                class="tag"
                tag={contentData.tags}
            >
            </Tags>
            <Breadcrumbs
                breadcrumbs={contentData.breadcrumbs}
            >
            </Breadcrumbs>
            <Pagination
                countArticles={49}
                limits={10}
                currentPage={5}
            />
            <State/>
            <br/>
            <br/>
            <Counter
                number={5}
            />
            <Slider
                content={sliderContent.content}
            >
            </Slider>
            <br/>
            <br/>
            <Square/>
        </div>
    )
}

export default Content;