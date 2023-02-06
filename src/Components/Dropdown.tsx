import { FC } from "react";
import Avatar from "../Avatar";

type DropdownProps ={
        name : string,
        image : string
 }
  

const Dropdown: FC< DropdownProps > = ({name,image}) =>{
    return(
   <div>
   <div className="flex"><Avatar person={image} width={"w-6"} height={"h-6"}  /><div className="text-xs">{name}</div></div>
   </div>
    );
};
export default Dropdown