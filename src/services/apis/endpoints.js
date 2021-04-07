import { User } from "../mocks";

function endPoint(address, type, guarded, testData) {
    this.address = address;
    this.type = type;
    this.guarded = guarded;
    this.testData = testData;
};

const endPoints = {
    login: new endPoint("/login", 'POST', false, User),
};

export default endPoints;