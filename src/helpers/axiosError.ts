export default err => {
    const error = err || {};
    const response = error.response || {};
    throw {
        request: error.config.url,
        data: response.data,
        status: response.status,
        headers: response.headers,
        config: error.config,
    };
};
