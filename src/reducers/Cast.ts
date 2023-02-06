import produce from "immer";
import { normalize, schema } from "normalizr";
import { AnyAction } from "redux";
import { CastLoaded } from "../actions/Show";
import { Cast } from "../models/Cast";

 type State = {
    cast : Cast[]
 };
const initialState:State={
    cast : []
};
function CastReducer(currentState = initialState, action : AnyAction):State{
    switch(action.type){  
         case CastLoaded : 
                return produce (currentState,(draft)=>{
                    draft.cast = action.payload                   
                })
    default:
     return currentState;
   }      
}
export default CastReducer;