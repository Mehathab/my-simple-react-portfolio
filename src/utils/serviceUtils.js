import axios from "axios";
const restSvcCalls = {
  get: async (url, params) => {
    try {
      const response = await axios?.get(url, { params });
      return response;
    } catch (error) {
      return error;
    }
  },
};

export const restSvcCalls;
