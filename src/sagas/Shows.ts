import { AnyAction } from "redux"
import {call, put} from "redux-saga/effects"
import { ShowsLoadedAction } from "../actions/Show"
import {SearchShows} from "../api"

export function* fetchShows (action:AnyAction):Generator<any,any,any>{
    const result = yield call (SearchShows,action.payload)
    yield put(ShowsLoadedAction(result))
}
