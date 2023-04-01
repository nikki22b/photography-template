import React, { ImgHTMLAttributes } from "react";

import styles from "./FlipImage.module.scss";

type flipImageProps = ImgHTMLAttributes<HTMLImageElement> & {
    text: string;
  }

function FlipImage(props: flipImageProps) {
    const { text, ...imgProps } = props;

    return (
        <div className={styles.FlipImage}>
            <img {...imgProps} />
        </div>
    )
}


export default FlipImage;