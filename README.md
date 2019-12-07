Дока по реакту официальные
https://ru.reactjs.org/docs/getting-started.html

Быстрое создание приложения create-react-app
https://github.com/facebook/create-react-app

Заметки по реакту
https://daruse.ru/react/

#Задание.
###По пропсам
* Написать компонент для создания заголовков Title, где мы передаем 
текст заголовка, размер и цвет (черный по дефолту, красный или синий)

* Написать компонент для простых Input, который принимает type (text, password...),
placeholder, value. (Оформи как и Bootstrap инпуты)

* http://prntscr.com/q7m7vd Написать компонент по рейтингу, он принимает два пропса, 
1 - максимальное количество звезд, 2 - сколько выбрано звезд. На скрине максмум 4 звезды, 
а выбрано 3

* http://prntscr.com/q7m028 Сделать компонент для тегов, теги 
мы отправляем в таком формате: (и выводим через map)
```
tags = [ 'Тег №1', 'Тег №2' 'Тег №3']
``` 

* Переписать компонент и теперь теги в таком формате (у них есть ссылка)
```
tags = [
    { title: 'Тег №1', href='http://link1.ru'},
    { title: 'Тег №2', href='http://link2.ru'},
    { title: 'Тег №3', href='http://link3.ru'},
]
``` 

* [Breadcrumb](https://bootstrap-4.ru/docs/4.3.1/components/breadcrumb/) 
принимает массив такого же типа как и nav компонент

* [Pagination](https://bootstrap-4.ru/docs/4.3.1/components/pagination/) 
Принимает два пропса, 1 - countArticles(Число (якобы материалов)), 2 - limit 
(Сколько Выводить на страницу). 
Например если мы передали countArticles=49, limits=10, то у нас будут кнопки =
Previous 1 2 3 4 5 Next (То есть якобы на каждую страницу по 10 материалов, поэтому
страниц 5 всего, так как мы указали, что выводить по 10 на страницу)

### Состояния

* Создать любой компонент и выполнить в нем код по этой [ссылке](https://learn-reactjs.ru/core/hooks/state-hook) 
 (3.12.3 Хук состояния
), надо примерно понять как это работает

* Можно же в этом же компонент создать новые состояния, например:
```
const [countSecond, setCountSecond] = useState(0);
```
Также добавь кнопку, которая будет увеличивать countSecond на 1, 
но ниже выводите ещё текст в параграфе
"Count меньше 10" или "count больше 10" (для этого нужно использовать
 тернарный оператор, примеры [тут](https://ru.react.js.org/docs/conditional-rendering.html)) 

* Создать новое состояние countThird, и две кнопки, одна прибавляет значение на 1, а другая уменьшает на 1,
примерно [так](http://prntscr.com/q7mgu2), только можно попроще.

* Создать новое состояние countFourth, и три кнопки, одна увеличивает на 1,
другая на 5, третья на 10, четверная умнажается сама на себя

* Добавить кнопку и параграф с текстом, по умолчанию на кнопке текст "Скрыть" и блок с текстом виден.
Когда мы нажимаем на кнопку, текст меняется на показать и текст ниже пропадает.

Этапы по реакту
---

1. Создание приложения и запуск
2. Компоненты и пропсы
3. Компоненты и состояния
4. Хуки или LifeCycle методы
5. Redux - хранилищи данных

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
