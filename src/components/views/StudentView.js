/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */

import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, Paper, Typography, Button } from '@mui/material';

const StudentView = (props) => {
  const { student, deleteStudent } = props;

  // Render a single Student view 
  return (
    <div>
      <Typography variant="h3">{student.firstname + " " + student.lastname}</Typography>
      <Grid container spacing={0} direction="column" alignItems="center">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: 550,
            justifyContent: 'center',
          }}
        >
      <Paper elevation={3} sx={{ p: 2, mb: 2, mt: 2, width: 550, background: '#fcb6bb' }}>
        <img src={student.imageUrl} alt="Student Profile"/> {/* need to fix later, display img if url is not null*/}
        <h4>First Name: {student.firstname}</h4>
        <h4>Last Name: {student.lastname}</h4>
        <h4>Email: {student.email}</h4>
        <h4>GPA: {student.gpa}</h4>
        {student.campus == null ? (<h3>Not enrolled at a campus.</h3>
        ) : (<><h3>Attends: </h3><Link to={`/campus/${student.campus.id}`}>
          <h3>{student.campus.name}</h3>
        </Link></>)}
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
        <Link to={`/student/${student.id}/edit`}>
        <Button variant="outlined" style={{ backgroundColor: '#f0f0f5' }}>Edit Student Information</Button>
        </Link>
        <Button
          variant="outlined"
          style={{ backgroundColor: '#f0f0f5' }}
          onClick={() => deleteStudent(student.id)}
        >
        Delete Student
        </Button>
        </div>
      </Paper>
      </Box>
      </Grid>
    </div>
  );

};

export default StudentView;