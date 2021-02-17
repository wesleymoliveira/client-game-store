/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGMENT } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryUpcoming
// ====================================================

export interface QueryUpcoming_upcommingGames_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryUpcoming_upcommingGames_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryUpcoming_upcommingGames {
  __typename: "Game";
  name: string;
  slug: string;
  cover: QueryUpcoming_upcommingGames_cover | null;
  developers: QueryUpcoming_upcommingGames_developers[];
  price: number;
}

export interface QueryUpcoming_showcase_upComingGames_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface QueryUpcoming_showcase_upComingGames_highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface QueryUpcoming_showcase_upComingGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryUpcoming_showcase_upComingGames_highlight_background | null;
  floatImage: QueryUpcoming_showcase_upComingGames_highlight_floatImage | null;
  buttomLabel: string;
  buttonLink: string;
  aligment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGMENT | null;
}

export interface QueryUpcoming_showcase_upComingGames {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: QueryUpcoming_showcase_upComingGames_highlight | null;
}

export interface QueryUpcoming_showcase {
  __typename: "Home";
  upComingGames: QueryUpcoming_showcase_upComingGames | null;
}

export interface QueryUpcoming {
  upcommingGames: QueryUpcoming_upcommingGames[];
  showcase: QueryUpcoming_showcase | null;
}

export interface QueryUpcomingVariables {
  date: any;
}
