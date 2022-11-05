import http from './httpService';
import config from './config.json';

export const getAllCalendars = () => {
	return http.get(`${config.api}/calendars`);
};

export const getCalendarsById= ID => http.get(`${config.api}/calendars/${ID}`);
