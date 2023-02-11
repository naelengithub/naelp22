import * as React from "react";
import { GamesImage } from "../featSoftware/games/GameImage";
import styles from "./fader.module.css";

export interface FaderProps {
  className?: string;
  src: any;
  alt: any;
  layout: any;
}

/**
 * @name Fader
 * @description Fade in/out logic.
 */

export const Fader = (props: FaderProps) => {
  const { className, src, alt, layout } = props;

  // Hooks
  const [fadeProp, setFadeProp] = React.useState({
    fade: true,
  });

  React.useEffect(() => {
    const timeout = setInterval(() => {
      if (fadeProp.fade === true) {
        setFadeProp({
          fade: false,
        });
      } else {
        setFadeProp({
          fade: true,
        });
      }
    }, 4000);
    return () => clearInterval(timeout);
  }, [fadeProp]);

  return (
    <div className={fadeProp.fade ? styles.fadeOut : styles.fadeIn}>
      <GamesImage src={src} alt={alt} layout={layout} />
      <h1>hi</h1>
    </div>
  );
};
