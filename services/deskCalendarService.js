import http from './httpService';
import config from './config.json';

export const getAllDeskCalendars = () => {
	return http.get(`${config.api}/desctop-calendars`);
};

export const getDeskCalendarsById= ID => http.get(`${config.api}/desctop-calendars/${ID}`);
