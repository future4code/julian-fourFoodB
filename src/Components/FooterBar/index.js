import React from 'react'
import {useHistory} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles((theme) => ({
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    grow: {
        flexGrow: 1,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
}))



const FooterBar = (props) => {
    const classes = useStyles()

    const history = useHistory()

    const goToHomePage = () => {
        history.push('/')
    }

    const goToCart = () => {
        history.push('/carrinho')
    }

    const goToProfile = () => {
        history.push('/perfil')
    }

    return(
        <div>
            <Divider/>
            <AppBar position="fixed" color="none" className={classes.appBar}>
                <Toolbar>
                    <IconButton onClick={goToHomePage} className={classes.grow} color={props.activeHomePage}>
                        <HomeOutlinedIcon  />
                    </IconButton>
                    <IconButton onClick={goToCart} className={classes.grow} color={props.activeCart}>
                        <ShoppingCartOutlinedIcon />
                    </IconButton>
                    <IconButton onClick={goToProfile} className={classes.grow} color={props.activeProfile}>
                        <PersonOutlineOutlinedIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default FooterBar