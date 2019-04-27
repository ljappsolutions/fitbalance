import environmentHelper from "./environmentHelper";

const apiConfig = {
  apiUrl: environmentHelper.getHost(),
  contentType: 'application/json',
  env: environmentHelper.getEnv()
};

export default apiConfig;
