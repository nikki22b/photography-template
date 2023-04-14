import React, { DetailedHTMLProps, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import cx from "classnames";

import styles from "./Button.module.scss";

type ButtonProps = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLButtonElement & HTMLAnchorElement
> & {
    tag: "a" | "button";
    customClass?: string;
};

function Button({tag, children, customClass, ...restProps}: ButtonProps) {
    const Tag = tag === "a" ? "a" : "button";
    const classes = cx(styles.Button, customClass);

    return (
        <Tag
            {...restProps}
            className={classes}
        >
        {children}
        </Tag>
    );
}

export default Button;
