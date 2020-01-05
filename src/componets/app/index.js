import React from 'react';
import Header from "../header";
import Nav from "../nav";
import Content from "../content";
import Footer from "../footer";
import './style.scss';

const data = {
    settings: {
        logo: "https://avatars.mds.yandex.net/get-pdb/2492799/0f89bde6-53f4-481f-be54-5d1c2de76aa2/s1200",
        siteName: "My first app",
    },
    nav: [
        { title: 'Новости', link: '/news', active: false},
        { title: 'Главная', link: '/main', active: false},
        { title: 'Статьи' , link: '/text', active: false},
    ],
    copy: "@copyright все права защищены",
};

function App() {

  return (
    <div className="app">
        <Header
            siteLogo={data.settings.logo}
            siteName={data.settings.siteName}
        />
        <Nav nav={data.nav}/>
        <Content/>
        <Footer copy={data.copy}/>
    </div>
  );
}

export default App;
