import { createSelector } from "reselect";
import { State } from "../store";

export const showStateSelector = (state:State) => state.shows

export const loadingSelector = createSelector(showStateSelector,(showState)=>showState.loading)

export const showsQuerySelector = createSelector(showStateSelector,(showState)=>showState.query)

export const showMapSelector = createSelector(showStateSelector,(showState)=>showState.shows)


export const LatestQuerySelector = createSelector(showStateSelector,(showState)=>showState.queryShows)

export const showSelector = createSelector(showMapSelector,LatestQuerySelector,showsQuerySelector,(showMap,showsQuery,query)=>showsQuery[query]?.map((showId) => showMap[showId]))