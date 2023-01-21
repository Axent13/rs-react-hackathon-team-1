function createRandomAvatar() {
    return `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
        .toString(36)
        .substring(7)}.svg`;
}

const users = [
    {
        _id: "1",
        name: "Михаил Силаев",
        age: "31",
        aboutMe: "Информация о Михаиле",
        photoUrl: createRandomAvatar(),
        socials: "Список социальных сетей Михаила",
        tasks: "Перечень задач Михаила",
        skills: "Навыки Михаила (прогресс-бар)",
        badges: "Статусы Михаила (Badges)",
        portfolio: "Портфолио Михаила",
        bookmark: false
    },
    {
        _id: "2",
        name: "Константин Мухин",
        age: "??",
        aboutMe: "Информация о Константине",
        photoUrl: createRandomAvatar(),
        socials: "Список социальных сетей Константина",
        tasks: "Перечень задач Константина",
        skills: "Навыки Константина (прогресс-бар)",
        badges: "Статусы Константина (Badges)",
        portfolio: "Портфолио Константина",
        bookmark: false
    },
    {
        _id: "3",
        name: "Андрей Перепелкин",
        age: "??",
        aboutMe: "Информация об Андрее",
        photoUrl: createRandomAvatar(),
        socials: "Список социальных сетей Андрея",
        tasks: "Перечень задач Андрея (прогресс-бар)",
        skills: "Навыки Андрея",
        badges: "Статусы Андрея (Badges)",
        portfolio: "Портфолио Константина",
        bookmark: false
    },
    {
        _id: "4",
        name: "Голодов Максим",
        age: "??",
        aboutMe: "Информация о Максиме",
        photoUrl: createRandomAvatar(),
        socials: "Список социальных сетей Максима",
        tasks: "Перечень задач Максима (прогресс-бар)",
        skills: "Навыки Максима",
        badges: "Статусы Максима (Badges)",
        portfolio: "Портфолио Константина",
        bookmark: false
    },
    {
        _id: "5",
        name: "Павел Зеленский",
        age: "??",
        aboutMe: "Информация о Павле",
        photoUrl: createRandomAvatar(),
        socials: "Список социальных сетей Павла",
        tasks: "Перечень задач Павла (прогресс-бар)",
        skills: "Навыки Павла",
        badges: "Статусы Павла (Badges)",
        portfolio: "Портфолио Константина",
        bookmark: false
    },
    {
        _id: "6",
        name: "Смирнов Артем",
        age: "??",
        aboutMe: "Информация об Артеме",
        photoUrl: createRandomAvatar(),
        socials: "Список социальных сетей Артема",
        tasks: "Перечень задач Артема (прогресс-бар)",
        skills: "Навыки Артема",
        badges: "Статусы Артема (Badges)",
        portfolio: "Портфолио Константина",
        bookmark: false
    }
];

if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(users));
}

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("users")));
        }, 1000);
    });

const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                JSON.parse(localStorage.getItem("users")).find(
                    (user) => user._id === id
                )
            );
        }, 500);
    });

export default {
    fetchAll,
    getById
};
