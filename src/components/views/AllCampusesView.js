/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import { Typography } from '@material-ui/core'

const AllCampusesView = (props) => {
  // If there is no campus, display a message.
  const { allCampuses } = props

  if (!props.allCampuses.length) {
    return <div>
      <h2>There are no campuses.</h2>
      <Link to={`/newcampus`}>
        <Button variant="outlined" style={{ backgroundColor: '#ffffff' }}>Add New Campus</Button>
      </Link>
      </div>
  }

  // If there is at least one campus, render All Campuses view
  return (
    <div>
      <Typography variant="h3">All Campuses</Typography>
      <Grid container spacing={0} direction="column" alignItems="center">
        {allCampuses.map((campus) => (
          <>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: 550,
                justifyContent: 'center',
              }}
            >
              <Paper elevation={3} sx={{ p: 2, mb: 2, mt: 2, width: 550, background: '#fcb6bb' }}>
                <div key={campus.id}>
                  <Link to={`/campus/${campus.id}`}>
                    <h2>{campus.name}</h2>
                  </Link>
                  <h4>Campus ID: {campus.id}</h4>
                  <p>{campus.address}</p>
                  <p>{campus.description}</p>
                  <img src={campus.imageUrl} alt={campus.name} style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
              </Paper>
            </Box>
          </>
        ))}
      </Grid>
      <br />
      <Link to={`/newcampus`}>
        <Button variant="outlined" style={{ backgroundColor: '#ffffff' }}>Add New Campus</Button>
      </Link>
      <br />
      <br />
    </div>
  )
}

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
}

export default AllCampusesView