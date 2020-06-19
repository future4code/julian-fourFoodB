import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export const PrincipalInput = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    logo: {
        height: "30vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    formWrapper: {
        height: "70vh",
    },
    register: {
        "&:hover": {
            cursor: "pointer",
            fontStyle: "italic",
        },
    },
}));

export const PrincipalButton = withStyles({
    root: {
        backgroundColor: "#e8222e",
        color: "#000",
        fontSize: 18,
        "&:hover": {
            backgroundColor: red[700],
        },
        textTransform: "none"
    }
})(Button)