import React, {useState, useEffect } from "react";
import FlipImage from "../../components/FlipImage/FlipImage";

import styles from "./ImageWall.module.scss";

type ImageWallProps = {
    images: {src: string, text: string, buttonText: string}[];
    screenWidth: number;
}

function ImageWall({images, screenWidth}: ImageWallProps) {

    const [columnCount, setColumnCount] = useState<number>(1);

    useEffect(() => {
        if (screenWidth >= 1024 ) {

        } else if (screenWidth >= 640) {

        } else {

        }
    }, [])

    return (
        <div className={styles.ImageWall}>
            {images.map((image) => (
                <FlipImage
                    src={image.src}
                    text={image.text}
                    alt={image.text}
                    buttonText={image.buttonText}
                />
            ))}
        </div>
    )
}

export default ImageWall;