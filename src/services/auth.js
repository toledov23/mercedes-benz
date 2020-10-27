import Axios from 'axios';
import to from 'await-to-js';

const axios = Axios.create({
  baseURL: `${process.env.VUE_APP_URL}`,
});

const getHeaders = () => (
  {
    authorization: `Bearer ${localStorage.token}`,
  }
);

export default {
  async login(credentials) {
    const [error, data] = await to(axios.post('/login', credentials));
    if (error) return [error];
    localStorage.token = data.data.access_token;
    console.log(getHeaders());
    return [null];
  },

  async register(user) {
    const [error, data] = await to(axios.post('/register', user));
    if (error) return [error];
    localStorage.token = data.data.access_token;
    return [null, data];
  },

  async contact(contact) {
    const [error, data] = await to(axios.post('/contact', contact));
    if (error) return [error];
    return [null, data];
  },
};
