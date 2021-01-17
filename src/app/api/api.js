const engrenagem = require('../images/icons/engrenagem.svg')
const nuvem = require('../images/icons/nuvem.svg')
const escudo = require('../images/icons/escudo.svg')
const mao = require('../images/icons/mao.svg')
const falante = require('../images/icons/falante.svg')
const pincel = require('../images/icons/pincel.svg')
const database = require('../images/icons/database.svg')
const analytics = require('../images/icons/analytics.svg')
const intuitive = require('../images/icons/intuitive.svg')

exports.itemSolution =
    [
        {
            type: 1,
            title: "Professional tools",
            subtitle: "Ipsum pendisse ultrices gravida accumsan lacus.",
            icon: pincel.default

        },
        {
            type: 2,
            title: "Fully customizable",
            subtitle: "Ipsum pendisse ultrices eyso gravida accumsan lacus.",
            icon: engrenagem.default
        },
        {
            type: 1,
            title: "Saved to the cloud",
            subtitle: "Quis ipsum pendisse ultrices gravida accumsan lacus.",
            icon: nuvem.default
        },
        {
            type: 2,
            title: "App integration",
            subtitle: "Ipsum pendisse ultrices gravida accumsan lacus.",
            icon: escudo.default
        },
        {
            type: 1,
            title: "Eassy to use",
            subtitle: "Ipsum pendisse ultrices gravida accumsan lacus.",
            icon: mao.default
        },
        {
            type: 2,
            title: "Maketing",
            subtitle: "Ipsum pendisse ultrices gravida accumsan lacus.",
            icon: falante.default
        },

    ];


exports.itemList = [
    {
        text: "The text should be more aligned and in a small",
    },
    {
        text: "Contrary to popular belief, Lorem Ipsum is not simply",
    },
    {
        text: "All the Lorem Ipsum generators on the Internet tend",
    },
    {
        text: "Sed ut perspiciatis unde omnis iste natus error sit",
    },
    {
        text: "All the Lorem Ipsum generators on the Internet tend",
    }
];


exports.card = [
    {
        type: 2,
        title: "Analyze Your Data",
        subtitle: "Click edit button to change this text lorem ipsum dolor sit amet tellus.",
        icon: database.default
    },
    {
        type: 1,
        title: "Embedded Analytics",
        subtitle: "Click edit button to change this text lorem ipsum dolor sit amet tellus.",
        icon: analytics.default
    },
    {
        type: 2,
        title: "Easy and Intuitive",
        subtitle: "Click edit button to change this text lorem ipsum dolor sit amet tellus.",
        icon: intuitive.default
    },

];


exports.pricing = [
    {
        titlePlan: "Personal",
        price: "$35",
        month: "Per month",
        storage: "5GB Storage",
        users: "500 Users",
        domains: "15 Domains",
        time: "1 Year Support",
        typeButton: 3
    },
    {
        titlePlan: "Team",
        price: "$95",
        month: "Per month",
        storage: "10GB Storage",
        users: "Unlimited Users",
        domains: "50 Domains",
        time: "Lifetime Support",
        typeButton: 1
    },
    {
        titlePlan: "Company",
        price: "$49",
        month: "Per month",
        storage: "100GB Storage",
        users: "Unlimited Users",
        domains: "20 Domains",
        time: "Lifetime Support",
        typeButton: 3
    }
]


