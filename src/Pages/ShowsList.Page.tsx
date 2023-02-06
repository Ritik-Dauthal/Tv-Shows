import { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { QueryChangeAction} from "../actions/Show";
import Avatar from "../Avatar";
import LoadingSpinner from "../Components/LoadingSpinner";
import SearchBar from "../Components/SearchBar";
import ShowCard from "../Components/ShowCard";
import { Cast } from "../models/Cast";
import { loadingSelector, showSelector, showsQuerySelector } from "../selectors/Shows";
import { State } from "../store";

type ShowListPageProps = ReduxProps
const ShowListPage: FC<ShowListPageProps> = ({query,shows,queryChange,loading}) => {
  console.log("showsinList", shows)
  return (
    <div className="mt-2">
     <div className="flex"> <SearchBar value={query} onChange={(event)=>{queryChange(event.target.value)}} />{loading && <LoadingSpinner/>}</div>
      <div className="flex flex-wrap justify-center">
        {shows ? shows.map((s,index) => <ShowCard key={"ShowCard" + index} castShows={s}/>): <div className="text-xl font-semibold text-green-800 animate-bounce ">Watch Your Fav. Tv shows here</div>}
      </div>
    </div>
  );
}
const mapStateToProps = (state:State) => {
 return {query: showsQuerySelector(state),shows:showSelector(state),
  loading : loadingSelector(state)
}
}
const mapdispatchToProps = {
  queryChange : QueryChangeAction
}
const connector = connect(mapStateToProps,mapdispatchToProps)

type ReduxProps = ConnectedProps<typeof connector>

export default connector(ShowListPage);
