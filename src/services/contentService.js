import serviceUtils from "../utils/serviceUtils";

const contentServiceURL = "https://api.mocki.io/v1/ce5f60e2";

const contentService = {
  getContent: () => serviceUtils.get(contentServiceURL),
};
