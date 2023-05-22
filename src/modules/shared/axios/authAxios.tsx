import { AuthToken } from '../../../modules/auth/authToken';
import Axios from 'axios';
import config from '../../..';
import { getLanguageCode } from '../../../i18n';
import Qs from 'qs';
import moment from 'moment';

const authAxios = Axios.create({
  // baseURL: 'http://139.162.254.55:8080/api',
  baseURL: 'http://192.168.40.30:8080/api',
  // baseURL: 'https://serverhongkong.onrender.com/api',
  paramsSerializer: function (params) {
    return Qs.stringify(params, {
      arrayFormat: 'brackets',
      filter: (prefix, value) => {
        if (
          moment.isMoment(value) ||
          value instanceof Date
        ) {
          return value.toISOString();
        }
        return value;
      },
    });
  },
});

authAxios.interceptors.request.use(
  async function (options) {
    const token = AuthToken.get();

    if (token) {
      options.headers['Authorization'] = `Bearer ${token}`;
    }

    options.headers['Accept-Language'] = getLanguageCode();

    return options;
  },
  function (error) {
    console.log('Request error: ', error);
    return Promise.reject(error);
  },
);

export default authAxios;
