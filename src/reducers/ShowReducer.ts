import produce from "immer";
import { normalize, schema } from "normalizr";
import { Action } from "../actions";
import { QueryChange, ShowsLoaded } from "../actions/Show";
import { Cast } from "../models/Cast";
import { CastShows } from "../models/CastShows";
import { Show } from "../models/Show";

 type State = {
    shows:{[showId:number]:CastShows}
    query: string
    queryShows : {[query:string]: number[]}
    loading : boolean

 };
const initialState:State={
    shows : {},
    query: "",
    queryShows : {},
    loading : false,

    
};

const normaliseData = (data: any) => {
    let obj: any = {}
    let result: number[]  = []
    data.map((item: any, index: number) => {
        obj[item.show.show.id] = item
        result.push(item.show.show.id)
    })
    return {obj, result}
}

function ShowReducer(currentState = initialState, action : Action):State{
    switch(action.type){  
         case  ShowsLoaded: 
                    
                return produce (currentState,(draft)=>{
                    const show = action.payload as CastShows[] 
                    const normalisedData = normaliseData(show)
                    draft.loading = false
                    draft.queryShows[draft.query] = normalisedData.result
                    draft.shows = {...draft.shows , ...normalisedData.obj || {}}
                 

                })
                 case QueryChange : 
                        return produce (currentState,(draft)=>{
                            draft.query = action.payload    
                            draft.loading = true
                        })
    default:
     return currentState;
   }      
}
export default ShowReducer;