import http from './httpService';
import config from './config.json';

export const getAllCatelogues = () => {
	return http.get(`${config.api}/catalogues`);
};

