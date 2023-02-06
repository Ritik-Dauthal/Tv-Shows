import { memo } from "react";

const GenrePill = ({ name }: { name: string | undefined}) => {
  return <p className="font-semibold">{name}</p>;
};

export default memo(GenrePill);
