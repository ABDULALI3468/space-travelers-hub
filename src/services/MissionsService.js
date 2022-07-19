import http from '../http-common';

const getMissions = () => http.get('/missions');

const MisionsService = { getMissions };

export default MisionsService;