const BACKGROUND_IMAGE = `url(${require('@/assets/images/aboutPageTitlePic.png')})`;
const COMPONY_NAME = 'CACG';

export const aboutPageText = {
    RU: {
        title: {
            title: "О компании",
            text: COMPONY_NAME,
            bgImg: BACKGROUND_IMAGE,
        },
        ourPrinciples: {
            title: "Наши принципы:",
            principles: [
                {
                    text: "Мы за новшество, если это удобно <br></br> и совпадает с нашими ценностями"
                },
                {
                    text: "Креативность и инициативность <br></br> всегда приветствуются"
                },
                {
                    text: "Мы – одна большая семья, <br></br> единый организм!"
                },
                {
                    text: "Наша основа – <br></br> взаимопомощь"
                },
            ]
        },
        aboutCompany: {
            text1: "CA Consulting Group создает обучающие цифровые продукты в сфере онлайн-образования на казахском, русском, английском языках, а в случае необходимости и на любом другом. Наши курсы помогают оптимизировать процесс работы и повысить эффективность сотрудников.",
            text2: "Мы продвигаем современный метод обучения, при котором сотрудники могут изучать материалы из любой точки мира через интернет. Информация подается в разных форматах: от текста и аудио до 3D-моделей и VR-технологий."
        },
        aboutMission: {
            title: "Наша миссия:",
            text: "Помогать компаниям обучать, аттестовывать и повышать квалификацию сотрудников, от которых требуются сложные технические навыки и знания.",
        },
        aboutValues: {
            title: "Ценности:",
            list: [
                {
                    svg: "briefcase.svg",
                    description: "Ответственность",
                    descriptionStyle: {fontWeight: 700, marginTop: '30px'}
                },
                {
                    svg: "people2.svg",
                    description: "Командная работа и взаимопомощь",
                    descriptionStyle: {fontWeight: 700, marginTop: '30px'}
                },
                {
                    svg: "checkmark.svg",
                    description: "Постоянное развитие и прогресс",
                    descriptionStyle: {fontWeight: 700, marginTop: '30px'}
                },
                {
                    svg: "errorMessage.svg",
                    description: "Возможность совершать ошибки",
                    descriptionStyle: {fontWeight: 700, marginTop: '30px'}
                },
            ]
        }

    },
    KZ: {
        title: {
            title: "О компании",
            text: COMPONY_NAME,
            bgImg: BACKGROUND_IMAGE,
        },
        ourPrinciples: {
            title: "Наши принципы:",
            trinciples: [
                {
                    text: "Мы за новшество, если это удобно <br></br> и совпадает с нашими ценностями"
                },
                {
                    text: "Креативность и инициативность <br></br> всегда приветствуются"
                },
                {
                    text: "Мы – одна большая семья, <br></br> единый организм!"
                },
                {
                    text: "Наша основа – <br></br> взаимопомощь"
                },
            ]
        },
        aboutCompany: {
            text1: "CA Consulting Group создает обучающие цифровые продукты в сфере онлайн-образования на казахском, русском, английском языках, а в случае необходимости и на любом другом. Наши курсы помогают оптимизировать процесс работы и повысить эффективность сотрудников.",
            text2: "Мы продвигаем современный метод обучения, при котором сотрудники могут изучать материалы из любой точки мира через интернет. Информация подается в разных форматах: от текста и аудио до 3D-моделей и VR-технологий."
        },
        aboutMission: {
            title: "Наша миссия:",
            text: "Помогать компаниям обучать, аттестовывать и повышать квалификацию сотрудников, от которых требуются сложные технические навыки и знания.",
        },
        aboutValues: {
            title: "Ценности:",
            list: [
                {
                    svg: "briefcase.svg",
                    description: "Ответственность",
                },
                {
                    svg: "people2.svg",
                    description: "Командная работа и взаимопомощь",
                },
                {
                    svg: "checkmark.svg",
                    description: "Постоянное развитие и прогресс",
                },
                {
                    svg: "errorMessage.svg",
                    description: "Возможность совершать ошибки",
                },
            ]
        }
    },
    EN: {
        title: {
            title: "About company",
            text: COMPONY_NAME,
            bgImg: BACKGROUND_IMAGE,
        },
        ourPrinciples: {
            title: "Our Principles:",
            principles: [
                {
                    text: "We are for innovation, if it is convenient <br></br> and consistent with our values"
                },
                {
                    text: "Creativity and initiative <br></br> are always welcome"
                },
                {
                    text: "We are one big family, <br></br> one organism!"
                },
                {
                    text: "Our foundation is <br></br> mutual assistance"
                },
            ]
        },
        aboutCompany: {
            text1: "",
            text2: ""
        },
        aboutMission: {
            title: "Our mission:",
            text: "",
        },
        aboutValues: {
            title: "Values:",
            list: [
                {
                    svg: "briefcase.svg",
                    description: "Responsibility",
                },
                {
                    svg: "people2.svg",
                    description: "Teamwork and Mutual Aid",
                },
                {
                    svg: "checkmark.svg",
                    description: "Continuous development and progress",
                },
                {
                    svg: "errorMessage.svg",
                    description: "Ability to make mistakes",
                },
            ]
        }
    },
}