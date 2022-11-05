import http from './httpService';
import config from './config.json';

export const getAllSets = () => {
	return http.get(`${config.api}/sets`);
};

export const getSetsById= ID => http.get(`${config.api}/sets/${ID}`);
