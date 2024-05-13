/*==================================================
HomePageView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

// Define styling for the header
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    fontType: 'bold',
    fontFamily: 'sans-serif', 
    fontSize: '35px', 
    color: 'darkblue'
  },
  appBar:{
    backgroundColor: '#fcb6bb',
    shadows: ['none'],
  },
  greeting:{
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: "50%",
    margin: "auto",
  },
  container:{
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: "60px",
  },
  options:{
    backgroundColor: '#fcb6bb',
    borderRadius: "25px",
    width: "40%",
    height: "400px",
  },
  header:{
    marginTop: "60px",
    fontSize: "20pt",
    fontWeight: "bold",
  },
  links:{
    textDecoration: 'none',
  },
  image:{
    marginTop: "30px",
    objectFit: "contain",
  },
}));

const HomePageView = () => {
  // Render Home page view
  const classes = useStyles();
  return (
    <><div>
      <h1>Home Page</h1>
    </div>
    <div className={classes.container}>
      <div className={classes.options}>
        <p className={classes.header}>View Campuses</p>
        <Link className={classes.links} to={'/campuses'} >
          <Button variant="contained" color="primary">
            Click Here!
          </Button>
        </Link><br></br>
        <img className={classes.image} src="https://picsum.photos/300/150" alt="school"></img>
      </div>
      <div className={classes.options}>
        <p className={classes.header}>View Students</p>
        <Link className={classes.links} to={'/students'} >
          <Button variant="contained" color="primary">
            Click Here!
          </Button>
        </Link><br></br>
        <img className={classes.image} src="https://picsum.photos/250/150" alt="students"></img>
      </div>
    </div>
    </>
  );    
}

export default HomePageView;