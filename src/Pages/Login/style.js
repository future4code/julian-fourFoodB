import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
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
