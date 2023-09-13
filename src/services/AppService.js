import http from "../http-common";

export const get = () => http.get("/");
export const getItems = () => http.get("/items");

const service = { get, getItems };

export default service;
