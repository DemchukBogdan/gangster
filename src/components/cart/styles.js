import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    color: "#FFFFFF",
    paddingBottom: "20px",
  },
  emptyButton: {
    maxWidth: "150px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "5px",
    },
    [theme.breakpoints.up("xs")]: {
      marginLeft: "50px",
    },
  },
  checkoutButton: {
    textAlign: 'center',
    maxWidth: "150px",
    backgroundColor: "#FFD644;",
    color: "#000",
    [theme.breakpoints.up("xs")]: {
      marginLeft: "50px",
    },
  },
  link: {
    textDecoration: "none",
  },
  cardDetails: {
    paddingBottom: "50px",
    display: "flex",
    marginTop: "20px",
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "yelow",
  },
  bg1: {
    backgroundColor: "#1E1E1D",
    backgroundImage: "url(../../../image)",
    minHeight: '80vh'
  },
  bg2: {
    backgroundColor: "#ffffff",
    borderRadius: "5px",
  },
  noThing: {
    height: "60vh",
    color: "#fff",
    fontSize: "32px",
    marginTop: "40px",
  },
  cost: {
    color: "#fff",
  },

  buttons: {
    maxWidth: "150px",
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    justifyContent: "flex-end",
    border: "yellow solid 1px",
    "&:hover": {
      color: "red",
    },
  },
  pos: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  media: {
    height: 100,
  },
}));
