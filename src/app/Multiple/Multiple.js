import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { List } from '../../MultipleList/index';
import { useGameCollectionRSS } from '../../Hook/index';
// import uploadneon from '../../images/uploadneon.png';
import uploadneon from '../../images/uploadneonlight.png';

import bgvector from '../../images/bgvector.png';


const useStyles = makeStyles(theme => ({
    root: {
        overflow: "scroll",
        width: "100%",
        height: "100%"
    },
    upload: {
        width: 35,
        height: 'auto',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    header: { 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    br: {
        border: '1px solid red'
    },
    bg: {
        width: '100%',
        position: 'absolute',
        zIndex: -1
    },
    filters: {
        display: 'flex',
        alignItems: 'center',
        height: 60
    },
   

}));

function Multiple(props) {

    const classes = useStyles();
    const { root } = classes;

    const { data } = props;
    const { game } = data;

    const collection = useGameCollectionRSS(game);

    

    return (
        <div className={root}>
            <img className={classes.bg} src={bgvector}/>
            <Grid container style={{padding: 40}}>
                <Grid style={{padding:'0 15px', marginBottom:'15px'}} item xs={12}>
                    <Grid container>
                        <Grid item xs={12}>
                            <div className={classes.header} style={{color: '#fff', height: 60}}><img className={classes.upload} src={uploadneon}/></div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                        <List collection={collection} />
                    
                </Grid>
            </Grid>
        </div>
    );
}


export default Multiple;
