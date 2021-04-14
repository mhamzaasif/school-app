import { apis } from '../../../@services';

export const getStudents = async ({ setStudents }) => {
    const { data } = await apis.getAllStudents();
    setStudents(data.students);
};