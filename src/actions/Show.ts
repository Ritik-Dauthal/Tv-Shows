import { ActionCreator } from "."
import { Cast } from "../models/Cast"
import { Show } from "../models/Show"

export const ShowsLoaded = " ShowsLoaded"

export const ShowsLoadedAction : ActionCreator<Show[]> = (shows:Show[]) => ( {
    type :  ShowsLoaded,
    payload: shows
})

export const QueryChange = " QueryChange"

export const QueryChangeAction : ActionCreator<string> = (query:string) => ( {
    type :  QueryChange,
    payload: query
})


export const ShowDetailLoaded = " ShowDetailLoaded"

export const ShowDetailLoadedAction : ActionCreator<number> = (showId:number) => ( 
    {
    type :  ShowDetailLoaded,
    payload: showId
})

export const DetailLoaded = " DetailLoaded"
export const DetailLoadedAction : ActionCreator<Show> = (show:Show) => ( 
    {
    type :  DetailLoaded,
    payload: show
})

export const CastLoaded = " CastLoaded"

export const CastLoadedAction : ActionCreator<Cast[]> = (cast: Cast[]) => ( {
    type :  CastLoaded,
    payload: cast
})