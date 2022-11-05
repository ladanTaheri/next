import http from './httpService';
import config from './config.json';

export const getAllPens = () => {
	return http.get(`${config.api}/pens`);
};

export const getPensById= ID => http.get(`${config.api}/pens/${ID}`);
