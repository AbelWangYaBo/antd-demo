import axios from "axios"

interface IItem { code: string, name: string }

// get list
export const getList = () => {
  return axios.get('/masters/master-list/nid');
}

// add new
export const addData = (data: IItem) => {
  return axios.post('/masters/master-list/nid', {
    data
  })
}

// get detail by code/id
export const getData = (code: string) => {
  return axios.get(`/masters/master-list/nid/${code}`);
}

// update data
export const putData = (data: IItem) => {
  return axios.put(`/masters/master-list/nid`, {
    data
  });
}

// del data
export const delData = (code: string) => {
  return axios.delete(`/masters/master-list/nid/${code}`);
}

