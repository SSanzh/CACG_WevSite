const BACKGROUND_IMAGE = `url(${require('@/assets/images/aboutPageTitlePic.png')})`;
const INFO_BLOCK_IMAGE = `url(${require('@/assets/images/imagePlaceHolder.png')})`;

export const vacancyPageText = {
    RU: {
        title: {
            title: "О компании",
            text: "Развивайся с нами",
            bgImg: BACKGROUND_IMAGE,
        },
        infoBlock: {
            img: INFO_BLOCK_IMAGE,
            text: ['CACG – место, где ценят развитие и прогресс. Мы помогаем не только компаниям и сотрудникам с их потребностями, но и следим за развитием собственных кадров.', 'У тебя есть все шансы стать частью команды и расти вместе с нами, получая бесценный опыт и возможность сотрудничать с международными компаниями.']
        },
        formBlock: {
            step1: {
                step: "Шаг 1",
                title: "Контактная информация",
                description: "Заполните данные поля, чтобы у нас была возможность связаться с Вами.",
            },
            step2: {
                step: "Шаг 2",
                title: "Резюме",
                description: "Прикрепите свое резюме и оставьте сообщение при необходимости.",
            },
            name: "Имя",
            email: "Email",
            position: "Должность",
            phone: "Номер",
            resume: "Резюме",
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
            choose: "Выберите файл",
            buttonText: "Отправить",
            error: ['Заполните все поля корректно', 'Мы приняли вашу заявку']
        }
    },
    KZ: {
        title: {
            title: "О компании", 
            text: "Развивайся с нами",
            bgImg: BACKGROUND_IMAGE,  
        },
        formBlock: {
            step1: {
                step: "Шаг 1",
                title: "Контактная информация",
                description: "Заполните данные поля, чтобы у нас была возможность связаться с Вами.",
            },
            step2: {
                step: "Шаг 2",
                title: "Резюме",
                description: "Прикрепите свое резюме и оставьте сообщение при необходимости.",
            },
            name: "Имя",
            email: "Email",
            position: "Должность",
            phone: "Номер",
            resume: "Резюме",
            message: "Сообщение",
            choose: "Выберите файл",
            buttonText: "Отправить",
        }
    },
    EN: {
        title: {
            title: "About company",
            text: "Развивайся с нами",
            bgImg: BACKGROUND_IMAGE,
        },
        formBlock: {
            step1: {
                step: "Шаг 1",
                title: "Контактная информация",
                description: "Заполните данные поля, чтобы у нас была возможность связаться с Вами.",
            },
            step2: {
                step: "Шаг 2",
                title: "Резюме",
                description: "Прикрепите свое резюме и оставьте сообщение при необходимости.",
            },
            name: "Имя",
            email: "Email",
            position: "Должность",
            phone: "Номер",
            resume: "Резюме",
            message: "Сообщение",
            choose: "Выберите файл",
            buttonText: "Отправить",
        }
    },
  }