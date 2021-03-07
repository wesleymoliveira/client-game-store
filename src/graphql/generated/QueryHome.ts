/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGERIBBON_COLOR, ENUM_COMPONENTPAGERIBBON_SIZES, ENUM_COMPONENTPAGEHIGHLIGHT_ALIGMENT } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryHome
// ====================================================

export interface QueryHome_banners_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_banners_button {
  __typename: "ComponentPageButton";
  label: string;
  link: string;
}

export interface QueryHome_banners_ribbon {
  __typename: "ComponentPageRibbon";
  text: string | null;
  color: ENUM_COMPONENTPAGERIBBON_COLOR | null;
  sizes: ENUM_COMPONENTPAGERIBBON_SIZES | null;
}

export interface QueryHome_banners {
  __typename: "Banner";
  image: QueryHome_banners_image | null;
  title: string;
  subtitle: string;
  button: QueryHome_banners_button | null;
  ribbon: QueryHome_banners_ribbon | null;
}

export interface QueryHome_newGames_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_newGames_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryHome_newGames {
  __typename: "Game";
  id: string;
  name: string;
  slug: string;
  cover: QueryHome_newGames_cover | null;
  developers: QueryHome_newGames_developers[];
  price: number;
}

export interface QueryHome_upcommingGames_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_upcommingGames_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryHome_upcommingGames {
  __typename: "Game";
  id: string;
  name: string;
  slug: string;
  cover: QueryHome_upcommingGames_cover | null;
  developers: QueryHome_upcommingGames_developers[];
  price: number;
}

export interface QueryHome_freeGames_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_freeGames_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryHome_freeGames {
  __typename: "Game";
  id: string;
  name: string;
  slug: string;
  cover: QueryHome_freeGames_cover | null;
  developers: QueryHome_freeGames_developers[];
  price: number;
}

export interface QueryHome_sections_newGames_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_newGames_highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_newGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryHome_sections_newGames_highlight_background | null;
  floatImage: QueryHome_sections_newGames_highlight_floatImage | null;
  buttomLabel: string;
  buttonLink: string;
  aligment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGMENT | null;
}

export interface QueryHome_sections_newGames {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: QueryHome_sections_newGames_highlight | null;
}

export interface QueryHome_sections_popularGames_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_popularGames_highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_popularGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryHome_sections_popularGames_highlight_background | null;
  floatImage: QueryHome_sections_popularGames_highlight_floatImage | null;
  buttomLabel: string;
  buttonLink: string;
  aligment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGMENT | null;
}

export interface QueryHome_sections_popularGames_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_popularGames_games_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryHome_sections_popularGames_games {
  __typename: "Game";
  id: string;
  name: string;
  slug: string;
  cover: QueryHome_sections_popularGames_games_cover | null;
  developers: QueryHome_sections_popularGames_games_developers[];
  price: number;
}

export interface QueryHome_sections_popularGames {
  __typename: "ComponentPagePopularGames";
  title: string;
  highlight: QueryHome_sections_popularGames_highlight | null;
  games: QueryHome_sections_popularGames_games[];
}

export interface QueryHome_sections_upComingGames_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_upComingGames_highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_upComingGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryHome_sections_upComingGames_highlight_background | null;
  floatImage: QueryHome_sections_upComingGames_highlight_floatImage | null;
  buttomLabel: string;
  buttonLink: string;
  aligment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGMENT | null;
}

export interface QueryHome_sections_upComingGames {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: QueryHome_sections_upComingGames_highlight | null;
}

export interface QueryHome_sections_freeGames_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_freeGames_highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_freeGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryHome_sections_freeGames_highlight_background | null;
  floatImage: QueryHome_sections_freeGames_highlight_floatImage | null;
  buttomLabel: string;
  buttonLink: string;
  aligment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGMENT | null;
}

export interface QueryHome_sections_freeGames {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: QueryHome_sections_freeGames_highlight | null;
}

export interface QueryHome_sections {
  __typename: "Home";
  newGames: QueryHome_sections_newGames | null;
  popularGames: QueryHome_sections_popularGames | null;
  upComingGames: QueryHome_sections_upComingGames | null;
  freeGames: QueryHome_sections_freeGames | null;
}

export interface QueryHome {
  banners: QueryHome_banners[];
  newGames: QueryHome_newGames[];
  upcommingGames: QueryHome_upcommingGames[];
  freeGames: QueryHome_freeGames[];
  sections: QueryHome_sections | null;
}

export interface QueryHomeVariables {
  date: any;
}
