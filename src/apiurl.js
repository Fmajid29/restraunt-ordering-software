import axios from "axios";
import { getToken } from "./localStorage";
import CONFIG from "./config/app";

const baseInstance = axios.create({
  baseURL: CONFIG.BASE_URL,
});

export const postApiWithoutAuth = async (url, body) => {
  try {
    const response = await baseInstance.post(url, {
      ...body,
    });
    return {
      data: response.data,
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      message: error.response,
    };
  }
};

export const getApiWithAuth = async (url) => {
  try {
    console.log(getToken());
    const response = await baseInstance.get(url, {
      headers: {
        "x-access-token": getToken(),
      },
    });
    return {
      data: response.data.items,
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};
