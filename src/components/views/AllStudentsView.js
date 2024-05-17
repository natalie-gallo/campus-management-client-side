/*==================================================
AllStudentsView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the all students view page.
================================================== */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Typography } from '@material-ui/core';

const AllStudentsView = (props) => {
  const { students, deleteStudent } = props;

  // If there are no students, display a message
  if (!students.length) {
    return (
      <div>
        <p>There are no students.</p>
        <Link to={`newstudent`}>
          <Button variant="outlined" style={{ backgroundColor: '#ffffff' }}>Add New Student</Button>
        </Link>
      </div>
    );
  }

  // If there is at least one student, render All Students view 
  return (
    <div>
      <Typography variant="h3">All Students</Typography>
      <Grid container spacing={0} direction="column" alignItems="center">
        {students.map((student) => {
          let name = student.firstname + " " + student.lastname;
          return (
            <Box
              key={student.id} // This should be here to avoid key warnings
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: 550,
                justifyContent: 'center',
              }}
            >
              <Paper elevation={3} sx={{ p: 2, mb: 2, mt: 2, width: 550, background: '#fcb6bb' }}>
                <div>
                  <img src={student.imageUrl} alt={name} style={{ maxWidth: '100%', height: 'auto' }} />
                  <Link to={`/student/${student.id}`}>
                    <h2>{name}</h2>
                  </Link>
                  <button onClick={() => deleteStudent(student.id)}>Delete</button>
                  <hr />
                </div>
              </Paper>
            </Box>
          );
        })}
      </Grid>
      <br />
      <Link to={`/newstudent`}>
        <button>Add New Student</button>
      </Link>
      <br /><br />
    </div>
  );
}

AllStudentsView.propTypes = {
  students: PropTypes.array.isRequired, // Changed to match the prop name
  deleteStudent: PropTypes.func.isRequired,
};

export default AllStudentsView;