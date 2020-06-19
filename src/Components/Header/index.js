import React from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles((theme) => ({
    root: {
        ...theme.typography.button,
        padding: theme.spacing(1),
        textTransform: 'none',
        fontSize: 16,
    },
    floating: {
        float: "left",
    },
    margin: {
        marginBottom: theme.spacing(1)
    }
}));

export const HeaderTitle = (props) => {
    const classes = useStyles()
    return (
        <Paper className={classes.margin} elevation={1} square>
            <Typography variant="body1" align="center" className={classes.root}>{props.titlePage}</Typography>
        </Paper>
    )
}

export const HeaderWithButton = (props) => {
    const classes = useStyles()
    return (
        <Paper  variant="outlined" elevation={0} square>
            <IconButton className={classes.floating} edge="start"><ArrowBackIosIcon /></IconButton>
            <Typography variant="body1" align="center" className={classes.root}>{props.titlePage}</Typography>
        </Paper>
    )
}