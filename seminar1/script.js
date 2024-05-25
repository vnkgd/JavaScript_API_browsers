// Задание 1
// Работа с BOM
// 1. Определение текущего размера окна браузера:
// ○ Напишите функцию, которая будет выводить текущую
// ширину и высоту окна браузера при его изменении.

// function showWindowSize() {
//     const width = window.innerWidth;
//     const height = window.innerHeight;
//     console.log(`Ширина окна: ${width} пикселей, Высота окна: ${height} пикселей`);
// }

// window.addEventListener('resize', showWindowSize);
// //Ширина окна: 954 пикселей, Высота окна: 818 пикселей

// На семинаре:
// в HTML
// <section class="task">
// <h1>Определение текущего размера окна Браузера</h1i>
//     <р>Ширина окна: <5рап class="window-size" id="width"></span> рх</р>
//     <р>Высота окна: <5рап class="window-size" id="height"></span> px</p>
// </section>

// const updateWindowSize = () => {
//     const widthEl = window.innerWidth;
//     const heightEl = window.innerHeight;

//     const windowSizeElement = document.querySelectorAll('.window-size');

//     width.textContent = widthEl;
//     height.textContent = heightEl;
// }

// window.addEventListener('load', updateWindowSize);
// window.addEventListener('resize', updateWindowSize);




// 2. Подтверждение закрытия страницы:
// Cоздайте всплывающее окно или диалоговое окно,
//     которое появляется при попытке закрыть вкладку
// браузера и спрашивает пользователя, уверен ли он в
// своем решении закрыть страницу.


// window.onbeforeunload = function () {
//     return "Не оставляй меня";
// };
//вроде работло и перестало
//в алерте: Изменения могут не сохраниться а не "Не оставляй меня"


// На семинаре:
// в HTML
// <section class="task">
// <h1>Подтверждение закрытия страницы</h1>
// <p>Это страница с подтверждением закрытия.</p>
// </section>
// window.addEventListener('beforeunload', function (e) {
//     e.preventDefault();
//     e.returnValue = 'Техт';
// });
// не работает, а у препода работает

// // 3. Управление историей переходов:
// Используйте объект history для управления историей
// переходов на веб - странице.Создайте кнопки "Назад" и
// "Вперед" для перемещения по истории.

// goBack.addEventListener('load', function (e) {
//     window.history.back();
// });
// goForward.addEventListener('load', function (е) {
//     window.history.forward();
// });

//в HTML

// <section class="task">
// <h1>Управление историей переходов</h1>
// <button class="history—button" id="goBack">Назад</button>
// <button class="history-button" id="goForward">Вперёд</button>
// </section>

// но нужно ещё создать страницу для проверки, не проверял

// Задание 2
// Вы должны создать веб-страницу, которая позволяет пользователю динамически
// управлять элементами на странице. Ниже приведены основные требования и
// функциональность:
// 1. На странице должны быть кнопки "Добавить элемент", "Удалить элемент" и
// "Клонировать элемент".
// 2. При нажатии на кнопку "Добавить элемент" на страницу добавляется новый
// квадратный элемент (<div>) с размерами 100x100 пикселей. Этот элемент
// должен иметь класс .box и содержать текст, указывающий порядковый номер
// элемента (1, 2, 3 и так далее).
// 3. При нажатии на кнопку "Удалить элемент" удаляется последний добавленный
// элемент, если таковой имеется.
// 4. При нажатии на кнопку "Клонировать элемент" создается копия последнего
// добавленного элемента и добавляется на страницу.
// 5. Все элементы имеют класс .box и стилизованы с помощью CSS (см. пример).
// 6. Элементы могут быть добавлены, удалены и клонированы в любом порядке и в
// любом количестве.


// HTML
// <button id="addButton">Добавить элемент</button>
// <button id="removeButton">Удалить элемент</button>
// <button id="cloneButton">Клонировать элемент</button>
// <div id="container">
//     <div class="box'">1</div>
//     <div class="box">2</div>
//     <div class="box">3</div>
// </div>
// <style>
// .box {
//     width: 100px;
//     height: 100px;
//     background-color: rgb(173, 217, 230);
//     margin: 10px;
//     display: inline-block;
// }
// </style>

// addButton.addEventListener('click', function (е) {
//     const newBox = document.createElement('div');
//     newBox.classList.add('box');
//     newBox.textContent = container.children.length + 1;
//     container.append(newBox);
// });

// removeButton.addEventListener('click', function (e) {
//     if (container.children.length > 0) {
//         const lastBox = container.lastChild;
//         container.removeChild(lastBox);
//     }
// });

// cloneButton.addEventListener('click', function (e) {
//     if (container.children.length > 0) {
//         const lastBox = container.lastChild;
//         const clone = lastBox.cloneNode(true);
//         container.append(clone);
//     }
// });

// Задание 3
// Вы создаете веб-страницу для отображения списка статей. Каждая статья состоит из заголовка и
// текста. Вам необходимо использовать Bootstrap для стилизации элементов.
// 2. Используйте Bootstrap, чтобы стилизовать элементы:
// a. Заголовок статьи (<h2>)
// b. Текст статьи (<p>)
// c. Кнопки "Добавить статью", "Удалить" и "Редактировать".
// 3. Создайте начальный список статей, который будет загружаться при загрузке страницы. Используйте
// JSON-данные для определения заголовков и текстов статей.
// 4. Позвольте пользователю добавлять новые статьи. При нажатии на кнопку "Добавить статью" должна
// появиться новая статья с заголовком "Новая статья" и текстом "Введите содержание статьи...".
// 5. Реализуйте функциональность удаления статей. При нажатии на кнопку "Удалить" соответствующая
// статья должна быть удалена из списка.
// 6. Реализуйте функциональность редактирования статей. При нажатии на кнопку "Редактировать"
// пользователь должен иметь возможность изменить заголовок и текст статьи. Используйте
// всплывающее окно или prompt для ввода новых данных.
// 7. Все изменения (добавление, удаление, редактирование) должны быть сохранены в локальное
// хранилище браузера, чтобы они сохранялись после перезагрузки страницы.



// JSON-данные со списком статей
const articlesData = [
    {
        title: 'Заголовок статьи 1',
        content: 'Содержание статьи 1'
    },
    {
        title: 'Заголовок статьи 2',
        content: 'Содержание статьи 2'
    }
];


function createArticle(title, content) {
    const articleItem = document.createElement('li');
    articleItem.classList.add('list-group—item');

    const articleTitle = document.createElement('h2');
    articleTitle.classList.add('mb-3');
    articleTitle.textContent = title;

    const articleContent = document.createElement('p');
    articleContent.textContent = content;

    const editButton = document.createElement('button');
    editButton.textContent = 'Редактировать';
    editButton.classList.add('btn', 'btn-warning');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    deleteButton.classList.add('btn', 'btn-danger');

    articleItem.append(articleTitle);
    articleItem.append(articleContent);
    articleItem.append(editButton);
    articleItem.append(deleteButton);
    return articleItem;
}

addArticleButton.addEventListener('click', function (e) {
    const newArticle = {
        title: 'Новая статья',
        content: 'Введите новый текст статьи'
    }
    const articleItem = createArticle(newArticle.title, newArticle.content);
    articleList.append(articleItem);
});

articleList.addEventListener('click', function (e) {
    if (e.target.textContent == 'Удалить') {
        const articleItem = e.target.closest('li');
        articleItem.remove();
    }

    if (e.target.textContent == 'Редактировать') {
        const articleItem = e.target.closest('li');
        const articleTitle = articleItem.querySelector('h2');
        const articleContent = articleItem.querySelector('p');

        const newTitle = prompt('Введите новый заголовок', articleTitle.textContent);
        const newContent = prompt('Введите новое содержимое', articleContent.textContent);
        if (newTitle !== null && newContent !== null) {
            articleTitle.textContent = newTitle;
            articleContent.textContent = newContent;
        }
    }
});