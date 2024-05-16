import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, Paper, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { deleteStudent } from '../../store/actions/actionCreators';

const useStyles = makeStyles({
  table: {
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  th: {
    backgroundColor: '#f0f0f5',
    color: '#111',
    fontWeight: 'bold',
    padding: '8px',
  },
  td: {
    border: '1px solid #ddd',
    padding: '8px',
  },
});

const CampusView = ({ campus, deleteCampus }) => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h3">Campus Details</Typography>
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
        <h2>{campus.name}</h2>
        <h4>campus id: {campus.id}</h4>
        <p>{campus.address}</p>
        <p>{campus.description}</p>
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
        <Button
          variant="outlined"
          style={{ backgroundColor: '#f0f0f5' }}
          onClick={() => deleteCampus(campus.id)}
        >
        Remove
        </Button>
        <Link to={`/campus/${campus.id}/edit`}>
        <Button variant="outlined" style={{ backgroundColor: '#f0f0f5' }}>Edit</Button>
        </Link>
        </div>
        {campus.students.length === 0 ? (<h3>No students</h3>
        ) : (
        <table className={classes.table}>
          <thead>
            <tr>
              <th className={classes.th}>Name</th>
              <th className={classes.th}>Unenroll?</th>
            </tr>
          </thead>
          <tbody>
            {campus.students.map(student => (
              <tr key={student.id}>
                <td className={classes.td}>
                  <Link to={`/student/${student.id}`}>{student.firstname} {student.lastname}</Link>
                </td>
                <td className={classes.td}>
                  <Button variant="outlined" style={{ backgroundColor: '#f0f0f5' }} onClick={() => deleteStudent(student.id)}>
                    Unenroll
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      </Paper>
      </Box>
      </Grid>
    </div>
  );
};

export default CampusView;