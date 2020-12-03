const Request = (type, url, dispatch) => {
    fetch(url).then(result => {
        return result.json();
    }).then(data => {
        dispatch({type: type, result:data});
    });
};

export default Request;

