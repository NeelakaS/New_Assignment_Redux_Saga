import axios from 'axios';

const getData = (resource: string) => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/${resource}`)
    .then((response) => response.data)
    .catch((error) => console.log('axios Error', error));
};

export default getData;
