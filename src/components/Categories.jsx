import React from "react";
import CardHelper from "./CardHelper";
import { ImageStrings } from "../Strings/ImageStrings";
import { TitleStrings } from "../Strings/TitleStrings";
import { DescriptionStrings } from "../Strings/DescriptionStrings";

const Categories = () => {
  return (
    <div className="w-full mt-10">
      <div className="font-mont text-5xl mt-2 font-bold">Categories</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
        <CardHelper
          imageSrc={ImageStrings.ImageString1}
          title={TitleStrings.TitleString1}
          description={DescriptionStrings.DescriptionString1}
        />

        <CardHelper
          imageSrc={ImageStrings.ImageString2}
          title={TitleStrings.TitleString2}
          description={DescriptionStrings.DescriptionString2}
        />

        <CardHelper
          imageSrc={ImageStrings.ImageString3}
          title={TitleStrings.TitleString3}
          description={DescriptionStrings.DescriptionString3}
        />

        <CardHelper
          title={TitleStrings.TitleString4}
          description={DescriptionStrings.DescriptionString4}
        />

        <CardHelper
          title={TitleStrings.TitleString5}
          description={DescriptionStrings.DescriptionString5}
        />

        <CardHelper
          title={TitleStrings.TitleString6}
          description={DescriptionStrings.DescriptionString6}
        />
      </div>
    </div>
  );
};

export default Categories;
