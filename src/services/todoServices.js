import axios from "axios";
const baseUrl = "http://localhost:3001/todos";
const getTodos = async () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newTodo) => {
  const request = axios.post(baseUrl, newTodo);
  return request.then((response) => response.data);
};

const update = (id, newTodo) => {
  const request = axios.put(`${baseUrl}/${id}`, newTodo);
  return request.then((response) => response.data);
};

const remove = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getTodos,
  create,
  update,
  remove,
};
