// import Axios from "axios";

const api = (endpoint, data) => {
    endpoint.data = data; // mutation should be avoided
    switch (endpoint.type) {
        case 'POST':
        case 'post':
        case 'Post':
            return axiosPOST(endpoint);
        case 'GET':
        case 'get':
        case 'Get':
            return axiosGET(endpoint);
        default:
            return;

    }
};

export const axiosPOST = async ({ address: route, data, guarded: isGuarded, testData }) => {
    if (process.env.REACT_APP_API_MODE === 'mock') {
        if (testData) return await mockAPI(testData);
    }
    // TODO
    // implement actual API request
};

export const axiosGET = async ({ address: route, data, guarded: isGuarded, testData }) => {
    if (process.env.REACT_APP_API_MODE === 'mock') {
        console.log("[making mock api call]");
        if (testData) return await mockAPI(testData);
    }
};

const mockAPI = data => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ data });
    }, 1000);
});

export default api;