import { AnyAction } from "redux"
import {call, put} from "redux-saga/effects"
import { CastLoadedAction, DetailLoadedAction } from "../actions/Show"
import { ShowCast, ShowDetail } from "../api"

export function* fetchShowDetail (action:AnyAction):Generator<any,any,any>{
    const Detail = yield call (ShowDetail,action.payload)
    yield put(DetailLoadedAction(Detail))
      const Cast = yield call(ShowCast,action.payload)
    yield put(CastLoadedAction(Cast))
}