const middleware = () => {
    return function (next) {
        return async function (action) {
            const requestUrl = 'https://api.thecatapi.com/v1';
            const result = await fetch(requestUrl + action.payload.url)
                .then(res => res.json())
            action.payload = result
            return next(action)
        }
    }
};

export default middleware;
