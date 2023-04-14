import React, { ImgHTMLAttributes, useState } from "react";
import cx from "classnames";

import styles from "./FlipImage.module.scss";
import Button from "../Button/Button";

type flipImageProps = ImgHTMLAttributes<HTMLImageElement> & {
    text: string;
    buttonText: string;
}

function FlipImage(props: flipImageProps) {

    const [clicked, setClicked] = useState<boolean>(false);

    const { text, buttonText, ...imgProps } = props;

    const flipperClasses = cx(
        styles.FlipImage__flipper,
        clicked? styles["FlipImage__flipper--clicked"] : null,
    )

    function toggleClasses() {
        setClicked(!clicked)
    }

    return (
        <div className={styles.FlipImage} onClick={toggleClasses}>
            <div className={flipperClasses}>
                <div className={styles.FlipImage__front}>
                    <img {...imgProps} className={styles.FlipImage__image} />
                </div>
                <div className={styles.FlipImage__back}>
                    <p className={styles.FlipImage__text}>
                        {text}
                    </p>
                    <Button
                        tag="button"
                    >
                        {buttonText}
                    </Button>
                </div>
            </div>
        </div>
    )
}


export default FlipImage;