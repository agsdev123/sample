import Common from "../Common";
import Pages from "../pages";

import {

  //private routes constants
  HOME_PAGE_PATH,
  SERVICES_PAGE_PATH,
  PARTNERS_PAGE_PATH,
  CONTACT_US_PAGE_PATH,
  BLOG_UPDATE_PAGE_PATH,
  PRIVAC_POLICY_PAGE_PATH,
  TERMS_CONDITIONS_PATH,
  BLOG_DETAIS_PAGE_PATH,
  FAV_BLOG_DETAILS_PATH,
  PLOT_PRICING_DETAILS_PATH
} from "./PathConstants";


//Private pages route objects

export const HOME_PAGE = {
  element: <Pages.HomePage />,
  path: HOME_PAGE_PATH,
  isPrivate: true,
  isPublic: false,
  exact: true,
};

export const SERVICES_PAGE = {
  element: <Pages.Servicespage />,
  path: SERVICES_PAGE_PATH,
  isPrivate: true,
  isPublic: false,
  exact: true,
};

export const PARTNERS_PAGE = {
  element: <Pages.Partnerspage />,
  path: PARTNERS_PAGE_PATH,
  isPrivate: true,
  isPublic: false,
  exact: true,
};

export const CONTACT_US_PAGE = {
  element: <Pages.ContactUsPage />,
  path: CONTACT_US_PAGE_PATH,
  isPrivate: true,
  isPublic: false,
  exact: true,
};

export const BLOG_UPDATE_PAGE = {
  element: <Pages.BlogUpdate />,
  path: BLOG_UPDATE_PAGE_PATH,
  isPrivate: true,
  isPublic: false,
  exact: true,
};

export const PRIVAC_POLICY_PAGE = {
  element: <Pages.PrivacyPolicyPage />,
  path: PRIVAC_POLICY_PAGE_PATH,
  isPrivate: true,
  isPublic: false,
  exact: true,
};

export const TERMS_CONDITIONS_PAGE = {
  element: <Pages.TermsCondtionsPage />,
  path: TERMS_CONDITIONS_PATH,
  isPrivate: true,
  isPublic: false,
  exact: true,
};

export const BLOG_DETAIS_PAGE = {
  element: <Pages.BlogDetailsPage />,
  path: BLOG_DETAIS_PAGE_PATH,
  isPrivate: true,
  isPublic: false,
  exact: true,
};

export const FAV_BLOG_DETAILS = {
  element: <Pages.FavouriteBlogPage />,
  path: FAV_BLOG_DETAILS_PATH,
  isPrivate: true,
  isPublic: false,
  exact: true,
};

export const PLOT_PRICE_DETAILS_PAGE = {
  element: <Pages.PlotPriceDetailsPage />,
  path: PLOT_PRICING_DETAILS_PATH,
  isPrivate: true,
  isPublic: false,
  exact: true,
};

export default [
  HOME_PAGE,
  SERVICES_PAGE,
  CONTACT_US_PAGE,
  PARTNERS_PAGE,
  BLOG_UPDATE_PAGE,
  PRIVAC_POLICY_PAGE,
  TERMS_CONDITIONS_PAGE,
  BLOG_DETAIS_PAGE,
  FAV_BLOG_DETAILS,
  PLOT_PRICE_DETAILS_PAGE

  // LOGIN_PAGE,
  // SIGNUP_PAGE,
];
