import http from './httpService';
import config from './config.json';

export const getAllWoodenArtifact = () => {
	return http.get(`${config.api}/woodens`);
};

export const getWoodenArtifactById= ID => http.get(`${config.api}/woodens/${ID}`);
