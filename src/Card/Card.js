import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core";
import { useCard } from '../Hook/index';

const useStyles = makeStyles(theme => ({
    item: {
        color: "white",
        font: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        background: "black",
        display: "flex",
        flexDirection: "column",
        maxWidth: "240px",
        position: "relative",
        border: "5px solid black",
        "& > img": {
            width: "100%",
            height: "100%",
        },
    },
    header: {
        background: "radial-gradient(transparent 0%, black 100%)",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "0",
        left: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    }
}));

const Card = props => {
    const classes = useStyles();
    const { item, image, header } = classes;

    const { data } = props;
    const card = useCard(data);

    const [url, setUrl] = useState(null);
    const [title, setTitle] = useState(null);

    useEffect(() => {
        const {url,header} = card;
        setUrl(url);
        setTitle(header);
    }, [card]);

    return (
        <div className={item} >
            <img className={image} src={url} />
            <div className={header}>
                <h4>{title}</h4>
            </div>
        </div>
    )
}

export default Card;