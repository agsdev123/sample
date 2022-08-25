
import API_URL_CONSTANTS from "../constants/apiEndpoints";
import Axiosinstance from "./../config";

const common = {
  userSignup: (data) => Axiosinstance.post(API_URL_CONSTANTS.LOGIN_API_URL, data),
  userAuth: (data) => Axiosinstance.post(API_URL_CONSTANTS.SIGN_IN_API_URL, data),
  propertyFilters: (data) => Axiosinstance.post(API_URL_CONSTANTS.PROPERTY_URL_API_URL, data),
  EsatimationFilters: (data) => Axiosinstance.post(API_URL_CONSTANTS.Estimation_API_URL, data),
};
export { common };
