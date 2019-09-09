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

export function getAllBlogs() {
    return request({
        url: API_BASE_URL + "/blog",
        method: 'GET'
    });
}

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

export function getImage(itemName) {
    try{
        return require(`../assets/projects/${itemName}.png`);
    } catch(error){
        return require(`../assets/projects/site_frontend.png`);
    }
}