import { FC, useState } from "react";

type AvatarProps ={
  person: string
  width : string
  height : string
}

const Avatar: FC< AvatarProps > = ({person,width,height}) =>{
    const [imageSrc, setImageSrc] = useState(person)
    return (
      <>
      <img className={  width + " flex -space-x-2 rounded-full " + height}
      src={imageSrc}
      onError={()=> setImageSrc('https://cdn.pixabay.com/photo/2018/11/13/22/01/avatar-3814081_960_720.png')}
      /> 
      </>
    )
}
export default Avatar