import http from './httpService';
import config from './config.json';

export const getAllSliders= () => {
	return http.get(`${config.api}/sliders`);
};

