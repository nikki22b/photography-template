import React, { PropsWithChildren } from "react";

import Button from "../../components/Button/Button";


import styles from "./Stage.module.scss";

type StageProps = PropsWithChildren<{
    large: string;
    small: string;
}>

function Stage({
large, small
}: StageProps) {
    return (
        <div className={styles.Stage}>
            <picture>
                <source media="(min-width:768px)" srcSet={process.env.PUBLIC_URL + large} />
                <img 
                    src={process.env.PUBLIC_URL + small} 
                    alt="Flowers" 
                    className={styles.Stage__bg}
                />
            </picture>
            <Button 
                tag="a"
                href="#">
                Schreib mir
            </Button>
        </div>
    )
}

export default Stage;