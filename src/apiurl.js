import axios from "axios";

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
