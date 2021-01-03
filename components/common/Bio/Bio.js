import clsx from "clsx";


import { getSiteMetaData } from "@utils/helpers";

export function Bio({ className }) {
  const { author, social } = getSiteMetaData();

  return (
    <div className={clsx(`flex items-center`, className)}>
     

      <p className="text-base leading-7">
        All bloggers played by Todd and Emily Huyett.
        
      </p>
    </div>
  );
}
