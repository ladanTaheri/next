import http from './httpService';
import config from './config.json';

export const getAllNews = () => {
	return http.get(`${config.api}/blogs`);
};

export const getNewsById= ID => http.get(`${config.api}/blogs/${ID}`);
