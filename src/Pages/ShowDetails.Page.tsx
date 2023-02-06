
import { FC, useEffect } from "react";
import { connect, ConnectedProps, } from "react-redux";
import { useParams } from "react-router-dom";
import { ShowDetailLoadedAction } from "../actions/Show";
import CastCard from "../Components/CastCard";
import GenrePill from "../Components/GenrePill";
import withRouter, { WithRouterProps } from "../hocs/withRouter";
import { Cast } from "../models/Cast";
import { CastSelector } from "../selectors/Cast";
import { ShowDetailSelector } from "../selectors/ShowDetail";
import { State } from "../store";

type OwnProps = WithRouterProps

type ShowDetailPageProps = ReduxProps & OwnProps

const ShowDetailPage: FC<ShowDetailPageProps> = ({params,showDetail,showDetailLoaded, casts}) => {
  console.log("casts",casts)

 useEffect(()=>{showDetailLoaded(params.showId)},[])
  return (
    <div className="mt-2">
      <h2 className="text-4xl font-semibold tracking-wide">{showDetail?.genres?.map((i:string)=>i)}</h2>
      <div className="flex space-x-3 my-2 bg-gray-300 p-2 rounded-sm">
        <GenrePill name={showDetail?.name}/>
       
      </div>
      <div className="mt-2 flex">
        <img
          src={showDetail.image?.medium}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72"
        />
        <div className="ml-2">
          <p>
           {showDetail?.summary}
          </p>
          <p className="mt-2 text-lg font-bold border border-gray-700 rounded-md px-2 py-1 max-w-max">
            Rating: <span className="text-gray-700">{showDetail?.rating?.average}</span>
          </p>
        </div>
      </div>

      <div className="mt-2">
        <h4 className="text-2xl font-semibold tracking-wide">Cast</h4>
        <div className="flex flex-wrap">
          {casts.cast.map((i:Cast,index:number)=> <CastCard key={index}
            avatarLink={i?.person?.image?.medium}
            name={i?.person?.name}
          />)}
         
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state:State) => {
 return {showDetail:ShowDetailSelector(state),
    casts: CastSelector(state)}
}
const mapdispatchToProps = {
  showDetailLoaded : ShowDetailLoadedAction,
}
const connector = connect(mapStateToProps,mapdispatchToProps)

type ReduxProps = ConnectedProps<typeof connector>

export default withRouter(connector(ShowDetailPage));
