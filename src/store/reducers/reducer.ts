import {combineReducers} from "@reduxjs/toolkit";
import newsSLice from "./news.reducer";
import newsDetailSLice from "./news.details.reducer";
import provSlice from "./get.prov.reducer";
import staticSlice from "./get.static.table";
import publicationSlice from "./get.publication";
import PressReleaseSlice from "./get.press.reducer";
import authSlice from "./auth.reducer";
import authLoginSlice from "./loginSlice";
import getSuggestSlice from "./suggest.reduecr";
import newProvSlice from "./new.prov.reducer";
import regencSlice from "./kab.reducer";
import subDistSlice from "./kec.reducer";
import distSlice from "./kel.reducer";
import guestSlice from "./guest.reducer";
import {RegisterAction} from "../actions/register.action";
import {postSuggestAction} from "../actions/suggest.action";

const rootReducer = combineReducers({
  news: newsSLice,
  newDetails: newsDetailSLice,
  prov: provSlice,
  statics: staticSlice,
  publication: publicationSlice,
  press: PressReleaseSlice,
  user: authSlice,
  auth: authLoginSlice,
  suggest: getSuggestSlice,
  prov2: newProvSlice,
  kab: regencSlice,
  kec: subDistSlice,
  kel: distSlice,
  guest: guestSlice,
});

export const AsyncAction = {
  RegisterAction,
  postSuggestAction,
};

export default rootReducer;
