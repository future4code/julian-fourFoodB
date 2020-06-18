import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import { red } from "@material-ui/core/colors";

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