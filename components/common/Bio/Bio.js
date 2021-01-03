import clsx from "clsx";


import { getSiteMetaData } from "@utils/helpers";

export function Bio({ className }) {
  const { author, social } = getSiteMetaData();

  return (
    <div className={clsx(`flex items-center`, className)}>
     

      <p className="text-base leading-7">
        Written by <b className="font-semibold">Emily and Todd Huyett</b>{" "}
        {author.summary}{" "}
        
      </p>
    </div>
  );
}
