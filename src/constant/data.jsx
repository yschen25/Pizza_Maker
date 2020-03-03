import axios from 'axios/index';

const getNewList = () => {
    return axios.get('https://my-json-server.typicode.com/yschen25/Pizza_maker/db')
        .then((response) => response.data)
        .catch((error) => console.log(error));
};

export default getNewList;