

let xAxisData=[
    {
        "name": "Jan",
        "Sale":112_000
    },
    {
        "name": "Feb",
        "Sale":99_000
    },
    {
        "name": "Mar",
        "Sale":12_090
    },
    {
        "name": "Apr",
        "Sale":99_000
    },
    {
        "name": "May",
        "Sale":54_000
    },
    {
        "name": "Jun",
        "Sale":85_000
    },
    {
        "name": "Jul",
        "Sale":34_000
    },
    {
        "name": "Agu",
        "Sale":18_598
    },
    {
        "name": "Sep",
        "Sale":0
    },
    {
        "name": "Oct",
        "Sale":73_078
    },
    {
        "name": "Nov",
        "Sale":12_900
    },
    {
        "name": "Dec",
        "Sale":97_000
    },
]

const newMembers=[
    {
        id:1,
        username:'shahryar',
        title:'frontend developer',
        img:'images/profile.jfif',
    },
    {
        id:2,
        username:'danyal',
        title:'product manager',
        img:'images/profile.jfif',
    },
    {
        id:3,
        username:'alireza',
        title:'designer',
        img:'images/profile.jfif',
    },
    {
        id:4,
        username:'amirali',
        title:'product designer',
        img:'images/profile.jfif',
    },
]


const transactions=[
    {
        id:1,
        customer:'vahid',
        img:'images/profile.jfif',
        date:'12 Jun 2022',
        amount:123,
        status:'Declined',
    },
    {
        id:2,
        customer:'reza',
        img:'images/profile.jfif',
        date:'20 Sep 2024',
        amount:123,
        status:'Pending',
    },
    {
        id:3,
        customer:'farhad',
        img:'images/profile.jfif',
        date:'14 May 2023',
        amount:123,
        status:'Declined',
    },
    {
        id:4,
        customer:'mohammad',
        img:'images/profile.jfif',
        date:'12 Feb 2024',
        amount:123,
        status:'Approved',
    },
]


let userRows=[
    {
        id:1,
        username:'zahra bahrami',
        avatar:'images/profile.jfif',
        status:'active',
        transactions:'45.78',
        email:'zahra@gamil.com'
    },
    {
        id:2,
        username:'qadir rezaei',
        avatar:'images/qadir.jpg',
        status:'active',
        transactions:'32.25',
        email:'negar@gamil.com'
    },
    {
        id:3,
        username:'sasan moghadas',
        avatar:'images/sasan.jpg',
        status:'active',
        transactions:'400.52',
        email:'javad@gamil.com'
    },
    {
        id:4,
        username:'amir moradi',
        avatar:'images/amir.jpg',
        status:'active',
        transactions:'200.14',
        email:'vahid@gamil.com'
    },
    {
        id:5,
        username:'amin kazemi',
        avatar:'images/amin.jpg',
        status:'active',
        transactions:'50.00',
        email:'mostafa@gamil.com'
    },
]
export  {xAxisData,newMembers,transactions,userRows}