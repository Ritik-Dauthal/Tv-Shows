import { FC ,useState} from "react";
import { Link } from "react-router-dom";
import Avatar from "../Avatar";
import { Cast } from "../models/Cast";
import { CastShows } from "../models/CastShows";
import { GrAddCircle } from "react-icons/gr";
import Dropdown from "./Dropdown";

type ShowCardProps = {
 castShows: CastShows
}
const Image = "https://images.unsplash.com/photo-1616628188550-808682f3926d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBsYWNlaG9sZGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
const ShowCard : FC<ShowCardProps> = ({castShows}) => {
  const [dropdown,setDropdown]= useState(false)
 
  const handleclick =() =>{
    setDropdown(!dropdown)
  }

  return (
    <div className="max-w-xs rounded-md shadow-md p-2 m-1">
      <img
        src={castShows.show.show.image?.medium || Image} 
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{castShows.show.show.name}</h2>
          <p>
           {castShows.show.show.summary}
          </p>
        </div>
        <Link
          to={"/show/" + castShows.show?.show.id }
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md"
        >
          View Details
        </Link>
      </div>
      <div className="flex justify-center">
       {castShows.Cast.length > 0 && castShows.Cast.slice(0,4).map((item:Cast) => <Avatar person={item?.image?.medium} width={"w-8"} height={"h-8"}/>) }
      {castShows.Cast.length > 4 ? <GrAddCircle className="text-4xl" onClick={handleclick}/> : ''}
      </div>
      {dropdown ? castShows.Cast.map((item)=><Dropdown name={item.name} image={item?.image?.medium}/>) : null}
    </div>
  ); 
}

export default ShowCard;
