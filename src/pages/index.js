/* eslint-disable import/no-anonymous-default-export */
import { lazy } from "react";

const HomePage = lazy(() => import("./HomePage/HomePage"));
const Servicespage = lazy(() => import("./Services/Services"));
const Partnerspage = lazy(() => import("./Partners/Partners"));
const ContactUsPage = lazy(() => import("./ContactUs/ContactUs"));
const BlogUpdate = lazy(() => import("./BlogUpdate/BlogUpdate"));
const PrivacyPolicyPage = lazy(() => import("./PrivacyPolicy/PrivacyPolicy"));
const TermsCondtionsPage = lazy(() => import("./TermsConditions/TermsConditions"));
const BlogDetailsPage = lazy(() => import("./BlogUpdate/BlogDetails/BlogDetails"));
const FavouriteBlogPage = lazy(() => import("./BlogUpdate/FavBlog/FavBlog"));
const PlotPriceDetailsPage = lazy(() => import("./HomePage/PlotPriceDetails/PlotPriceDetails"));

export default {
  HomePage,
  Servicespage,
  Partnerspage,
  ContactUsPage,
  BlogUpdate,
  PrivacyPolicyPage,
  TermsCondtionsPage,
  BlogDetailsPage,
  FavouriteBlogPage,
  PlotPriceDetailsPage
};
