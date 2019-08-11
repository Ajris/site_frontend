import {API_BASE_URL} from "../constants/Constants";

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    });

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response => response.json());
};

export function getAllProjects() {
    return request({
        url: API_BASE_URL + "/project",
        method: 'GET'
    });
}

export function getAllTechnologies() {
    return request({
        url: API_BASE_URL + "/technology",
        method: 'GET'
    })
}

export function getImage(url) {
    try{
        return require(`${url}`);
    } catch(error){
        return require(`../assets/projects/site_frontend.png`);
    }
}