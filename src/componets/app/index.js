import React from 'react';
import Header from "../header";
import Nav from "../nav";
import Footer from "../footer";
import './style.scss';
import '../footer/style.scss';
import '../header/style.scss';
import '../nav/style.scss';


const data = {
    settings: {
        logo: "https://avatars.mds.yandex.net/get-pdb/2492799/0f89bde6-53f4-481f-be54-5d1c2de76aa2/s1200",
        siteName: "my first app",
    },
    nav: [
        { title: 'Новости', link: '/news'},
        { title: 'Главная', link: '/main'},
        { title: 'Статьи' , link: '/text'},
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
        <Footer copy={data.copy}/>
    </div>
  );
}

export default App;
