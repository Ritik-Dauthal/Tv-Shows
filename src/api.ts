import axios from "axios"
import { Cast } from "./models/Cast"
import { CastShows } from "./models/CastShows"
import { Show } from "./models/Show"


export const SearchShows = async (query:string) => {
    const response = await axios.get("https://api.tvmaze.com/search/shows?q=" + query)  
    const shows = (response.data)
    const castPromise = []
    for(let i = 0 ; i<shows.length; i++){
    castPromise.push(getCast(shows[i]))
    }
    return Promise.all(castPromise)
}

 const getCast = async (show: Show) =>{
  const CastResponse = await axios.get("https://api.tvmaze.com/shows/" + show.show.id + "/cast")
        const Cast = CastResponse.data.map((item:Cast)=>item.person)
        return { show, Cast }
 }  

 export const ShowDetail = async (showId:number) => {
    const response = await axios.get("https://api.tvmaze.com/shows/" + showId)
    return (response.data)
}

 export const ShowCast = async (showId:number) => {
    const response = await axios.get("https://api.tvmaze.com/shows/" + showId + "/cast")
   return ( response.data)
 }