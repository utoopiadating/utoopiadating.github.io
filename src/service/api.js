import { apis } from "service";
//TODO:update with your api
const COMMON_URL = `https://z0f3xz2nwk.execute-api.us-west-2.amazonaws.com/default/`;

const API_URLS = { USER_SIGN_UP_PUT: `${COMMON_URL}userSignUp` };

export const userSignUpPut = (payload) =>
  apis.put(API_URLS.USER_SIGN_UP_PUT, payload);
