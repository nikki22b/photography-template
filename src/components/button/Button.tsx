import React, { PropsWithChildren } from "react";
import cx from "classnames";

import styles from "./Button.module.scss";

type ButtonProps = PropsWithChildren<{
    customClass?: string;
    target?: "_self" | "_blank";
    link: string;
    title?: string;
}>

function Button({ 
    customClass, 
    children, 
    target = "_self", 
    link, 
    title,
}: ButtonProps) {
    const classes = cx(
        styles.Button,
        customClass,
    )

    return (
        <a 
            className={classes}
            target={target}
            href={link}
            title={title}
        >
            {children}
        </a>
    )
}

export default Button;