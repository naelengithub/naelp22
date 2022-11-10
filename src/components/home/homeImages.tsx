import * as React from "react";
import Image from "next/image";
import { useWindowSize } from "../../hooks/useWindowSize";
import { MainImages, dataMainImages } from "./featArchitecture/mainImages";
import { PositionMainImages } from "./featArchitecture/positionMainImages";

export interface HomeImagesProps {
  className?: string;
  width: any;
  height: any;
}

/**
 * @name HomeImages
 * @description FAQs feature component.
 */
export const HomeImages = (props: HomeImagesProps) => {
  const { className } = props;

  const size = useWindowSize();
  const screenWidthSize = size.width;
  console.log(JSON.stringify(screenWidthSize));

  const renderImage = (entry: MainImages, index: number) => {
    const { image, title } = entry;
    if (!screenWidthSize) {
      return null;
    } else {
      return (
        <Image
          alt={title}
          key={index}
          src={image}
          width={screenWidthSize / 2}
          height={screenWidthSize / 4}
        />
      );
    }
  };

  return <div>{renderImage(dataMainImages[0], 1)}</div>;
};
