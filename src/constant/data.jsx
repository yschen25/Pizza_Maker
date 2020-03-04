import axios from 'axios/index';

// const getNewList = () => {
//     return axios.get('https://my-json-server.typicode.com/yschen25/Pizza_maker/db')
//         .then((response) => response.data)
//         .catch((error) => console.log(error));
// };

const getNewList = {
    "toppings": {
        "bacon": {
            "number": 12,
            "isCheck": "noCheck"
        },
        "mushroom": {
            "number": 8,
            "isCheck": "noCheck"
        },
        "pepperoni": {
            "number": 8,
            "isCheck": "noCheck"
        },
        "onion": {
            "number": 12,
            "isCheck": "noCheck"
        },
        "pineapple": {
            "number": 8,
            "isCheck": "noCheck"
        },
        "pepper": {
            "number": 10,
            "isCheck": "noCheck"
        },
        "basil": {
            "number": 16,
            "isCheck": "noCheck"
        },
        "shrimp": {
            "number": 10,
            "isCheck": "noCheck"
        },
        "tomato": {
            "number": 6,
            "isCheck": "noCheck"
        },
        "cucumber": {
            "number": 8,
            "isCheck": "noCheck"
        },
        "chilli": {
            "number": 6,
            "isCheck": "noCheck"
        },
        "olive": {
            "number": 10,
            "isCheck": "noCheck"
        }
    },
    "selectedToppings": []
};

export default getNewList;