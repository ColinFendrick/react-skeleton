import http from "../http-common";

export const get = () => http.get("/");
export const getItems = () => http.get("/items");
export const postItems = (item) => http.post("/items", item);
export const deleteItem = (id) => http.delete(`/items/${id}`);
export const getUsers = () => http.get("/users");

const service = { get, getItems, postItems, deleteItem, getUsers };

export default service;
