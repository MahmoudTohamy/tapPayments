/** @format */

import axios from "axios";

let baseUrl = "http:localhost:8000/api/";
export async function getAPI(url: string) {
  try {
    let response = await axios.get(`${baseUrl}${url}`);
    return response.data;
  } catch (error) {}
}
export async function postAPI(url, params) {
  try {
    let response = await axios.post(`${baseUrl}${url}`, params);
    return response;
  } catch (error) {}
}
