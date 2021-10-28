import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    marginTop: "20px",
    marginBottom: "20px",
    backgroundColor: "#1E1E1D",
    
    
  },
  media: {
    height: '260px',
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardPrice: {
    display: "flex",
    justifyContent: "space-between",
  },
  cartActions: {
    justifyContent: 'center',

  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "21px",
    lineHeight: "170%",
    color: "#FFFFFF",
  },
  price: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "21px",
    lineHeight: "170%",
    color: "#FFFFFF",
  },
  desc1: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "170%",
    color: "#BDBDBD",
    height: '150px'
  },
  order: {
    border: "1px solid #FFD644",
    boxSizing: "borderBox",
    borderRadius: "5px",
    width: "100%",
    height: '40px',
    backgroundColor: '#1E1E1D',
    color: '#FFD644'
  },

  
  
}));
