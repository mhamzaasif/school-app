// import Axios from "axios";

const api = (endpoint, data) => {
    endpoint.data = data;
    switch (endpoint.type) {
        case 'POST':
        case 'post':
        case 'Post':
            return axiosPOST(endpoint);
        default:
            return;

    }
};

export const axiosPOST = async ({ address: route, data, guarded: isGuarded, testData }) => {
    console.log("axiosPOST");
    console.log(process.env);
    if (process.env.REACT_APP_API_MODE === 'mock') {
        console.log("inside if", testData);
        if (testData) return await mockAPI(testData);
    }
    // TODO
    // implement actual API request
};

const mockAPI = data => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("[resolving data from mock API]", data);
        resolve({ data });
    }, 1000);
});

export default api;