import { apis } from "service";
//TODO:update with your api
const COMMON_URL = ``; //TODO add api

const API_URLS = { USER_SIGN_UP_PUT: `${COMMON_URL}xxxx` };

export const userSignUpPut = (payload) =>
  apis.put(API_URLS.USER_SIGN_UP_PUT, payload);
