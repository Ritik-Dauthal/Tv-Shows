import produce from "immer";
import { Action } from "../actions";
import { DetailLoaded } from "../actions/Show";
import { Show } from "../models/Show";

 type State = {
    Detail : Partial<Show>
 };
const initialState:State={
  Detail: {}
};
function ShowDetailReducer(currentState = initialState, action : Action):State{
    switch(action.type){  
         case DetailLoaded : 
            return produce (currentState,(draft)=>{
                draft.Detail = action.payload   
            })
    default:
     return currentState;
   }      
}
export default ShowDetailReducer;