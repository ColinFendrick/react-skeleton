import http from "../http-common";

export const get = () => http.get("/");
export const getItems = () => http.get("/items");
export const getUsers = () => http.get("/users");

const service = { get, getItems, getUsers };

export default service;
