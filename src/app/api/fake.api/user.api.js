const users = [
    {
        _id: "48d5f821-6151-4474-b475-49f80ecc1395",
        name: "Михаил Силаев",
        age: "31",
        aboutMe:
            "Привет! :-) Меня зовут Михаил! Занимаюсь изучением Frontend-разработки. В свободное от учебы и работы время люблю изучать иностранные языки (английский и немного пробую японский и корейский). На данный момент живу и работаю в г. Томск.",
        photoUrl: "assets/images/user-48d5f821-6151-4474-b475-49f80ecc1395.jpg",
        socials: [
            {
                name: "Github",
                iconUrl: "assets/images/github.png",
                link: "https://github.com/Axent13"
            },
            {
                name: "Telegram",
                iconUrl: "assets/images/telegram.png",
                link: "https://t.me/Axent1398"
            },
            {
                name: "Vk",
                iconUrl: "assets/images/vk.png",
                link: "https://vk.com/id492859142"
            }
        ],
        tasks: ["Тимлид", "Основа проекта", "Структура fake.api"],
        skills: ["HTML", "CSS", "JavaScript", "React"],
        badges: [
            {
                text: "Ученики",
                color: "bg-green-600"
            },
            {
                text: "36 группа (Премиум)",
                color: "bg-teal-500"
            },
            {
                text: "Хакатон React team 1",
                color: "bg-orange-600"
            }
        ],
        bookmark: false
    },
    {
        _id: "669e86f6-729f-41ee-8a9d-cfaa5c16400a",
        name: "Константин Мухин",
        age: "27",
        aboutMe:
            "Учусь Frontend-программированию. Играю в футбол. В свободное время читаю книги по саморазвитию",
        photoUrl: "assets/images/NSjmoC9xb3Y.jpg",
        socials: [
            {
                name: "Github",
                iconUrl: "assets/images/github.png",
                link: "https://github.com/Im-Myxa"
            },
            {
                name: "Telegram",
                iconUrl: "assets/images/telegram.png",
                link: "https://t.me/Iam_Myxa"
            },
            {
                name: "Vk",
                iconUrl: "assets/images/vk.png",
                link: "https://vk.com/id95259245"
            }
        ],
        tasks: ["NavBar", "Breadcrumbs", "Wrapper"],
        skills: ["HTML", "CSS", "JavaScript", "React"],
        badges: [
            {
                text: "Ученики",
                color: "bg-green-600"
            },
            {
                text: "35 группа (Премиум)",
                color: "bg-teal-500"
            },
            {
                text: "Хакатон React team 1",
                color: "bg-orange-600"
            }
        ],
        bookmark: false
    },
    {
        _id: "38565819-0122-4359-98b8-44c28575758d",
        name: "Андрей Перепелкин",
        age: "36",
        aboutMe:
            "Начинающий Frontend-разработчик из Санкт-Петербурга. Помимо программирования увлекаюсь горными походами, люблю длинные пробежки и активный отдых на природе",
        photoUrl: "assets/images/38565819-0122-4359-98b8-44c28575758d.jpg",
        socials: [
            {
                name: "Github",
                iconUrl: "assets/images/github.png",
                link: "https://github.com/AndrewPerepelkin"
            },
            {
                name: "Telegram",
                iconUrl: "assets/images/telegram.png",
                link: "https://t.me/AndrewVsP"
            },
            {
                name: "Vk",
                iconUrl: "assets/images/vk.png",
                link: "https://vk.com/id3821286"
            }
        ],
        tasks: ["Компонент Button", "Loader", "Favorites"],
        skills: ["HTML", "CSS", "JavaScript", "React"],
        badges: [
            {
                text: "Ученики",
                color: "bg-green-600"
            },
            {
                text: "36 группа (Премиум)",
                color: "bg-teal-500"
            },
            {
                text: "Хакатон React team 1",
                color: "bg-orange-600"
            }
        ],
        bookmark: false
    },
    {
        _id: "48edb443-9c0d-4423-9f1f-dfd163559236",
        name: "Голодов Максим",
        age: "38",
        aboutMe: `Руководитель проектов в компании АО "Моделирование и цифровые двойники". Основновной вид работы разработка web-интерфейсов и логики цифровыхдвойников технологического оборудования и тех. процессов.
        Участвую в задачах по интеграция моделями и системами математического моделировния. Увлекаюсь футболом и горными лыжами.`,
        photoUrl: "assets/images/48edb443-9c0d-4423-9f1f-dfd163559236_foto.jpg",
        socials: [
            {
                name: "Github",
                iconUrl: "assets/images/github.png",
                link: "https://github.com/MaxSUD84"
            },
            {
                name: "Telegram",
                iconUrl: "assets/images/telegram.png",
                link: "https://t.me/Max_SUD_84"
            }
        ],
        tasks: ["ProgressBar", "Структура fake.api"],
        skills: ["HTML", "CSS", "JavaScript", "React"],
        badges: [
            {
                text: "Ученики",
                color: "bg-green-600"
            },
            {
                text: "36 группа (Премиум)",
                color: "bg-teal-500"
            },
            {
                text: "Хакатон React team 1",
                color: "bg-orange-600"
            }
        ],
        bookmark: false
    },
    {
        _id: "a510048c-b12e-4af8-af73-5eac70af21e2",
        name: "Павел Зеленский",
        age: "33",
        aboutMe:
            "Привет. Я Павел. Учусь на разработчика. Люблю спорт и отдых на природе. Занимаюсь военно-тактическими играми и хожу в походы.",
        photoUrl: "assets/images/user-a510048c-b12e-4af8-af73-5eac70af21e2.jpg",
        socials: [
            {
                name: "Github",
                iconUrl: "assets/images/github.png",
                link: "https://github.com/PavelZelenskiy"
            },
            {
                name: "Telegram",
                iconUrl: "assets/images/telegram.png",
                link: "https://t.me/PavelZelensky"
            }
        ],
        tasks: ["Slider"],
        skills: ["HTML", "CSS", "JavaScript", "React"],
        badges: [
            {
                text: "Ученики",
                color: "bg-green-600"
            },
            {
                text: "36 группа (Премиум)",
                color: "bg-teal-500"
            },
            {
                text: "Хакатон React team 1",
                color: "bg-orange-600"
            }
        ],
        bookmark: false
    },
    {
        _id: "313f94a7-90e9-4ac0-ac16-ee65579615c4",
        name: "Смирнов Артем",
        age: "28",
        aboutMe:
            "Привет. На потоке в RS.school изучаю Frontend. Преподаю ангийский язык разным возрастным группам. Увлекаюсь сноубордом и танцами.",
        photoUrl: "assets/images/313f94a7-90e9-4ac0-ac16-ee65579615c4.jpg",
        socials: [
            {
                name: "Github",
                iconUrl: "assets/images/github.png",
                link: "https://github.com/GawainTolle"
            },
            {
                name: "Telegram",
                iconUrl: "assets/images/telegram.png",
                link: "https://t.me/percher"
            },
            {
                name: "Vk",
                iconUrl: "assets/images/vk.png",
                link: "https://vk.com/glutsoffunky"
            }
        ],
        tasks: ["Badge/значки"],
        skills: ["HTML", "CSS", "JavaScript", "React"],
        badges: [
            {
                text: "Ученики",
                color: "bg-green-600"
            },
            {
                text: "38 группа",
                color: "bg-teal-500"
            },
            {
                text: "Хакатон React team 1",
                color: "bg-orange-600"
            }
        ],
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

const toggleUserBookmarkById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            const users = JSON.parse(localStorage.getItem("users"));
            const userIndex = users.findIndex((u) => u._id === id);
            users[userIndex] = {
                ...users[userIndex],
                bookmark: !users[userIndex].bookmark
            };
            localStorage.setItem("users", JSON.stringify(users));
            resolve(users);
        }, 500);
    });

export default {
    fetchAll,
    getById,
    toggleUserBookmarkById
};
