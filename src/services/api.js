import axios from "axios";

const BASE_URL = "http://localhost:4000";

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

async function createUser(user) {
  await axios.post(`${BASE_URL}/signup`, user);
}

async function signin(data) {
  const token = await axios.post(`${BASE_URL}/signin`, data);
  return token;
}

async function sendPost(body, token) {
  const config = createConfig(token);
  const promisse = await axios.post(`${BASE_URL}/timeline`, body, config)
  return promisse
}

async function getPost(token){
  const config = createConfig(token);
  const promisse = await axios.get(`${BASE_URL}/timeline`, config);
  
  return promisse
}

async function signout(token) {
  const config = createConfig(token);
  await axios.delete(`${BASE_URL}/signout`, config);
}

async function getUser(token) {
  const config = createConfig(token);
  const user = await axios.get(`${BASE_URL}/users`, config);
  return user;
}

async function deletePost(body, token) {
  const config = createConfig(token);
  const promisse = await axios.post(`${BASE_URL}/timeline`, body, config)
  return promisse
}

const api = {
  createUser,
  signin,
  sendPost,
  getPost,
  signout,
  getUser,
  deletePost,
};

export default api
