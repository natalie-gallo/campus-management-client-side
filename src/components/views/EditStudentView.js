/*==================================================
EditStudentView.js

This view shows the layout of the edit form of the student
================================================== */
// libaries used
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

// style for the edit form
const useStyles = makeStyles(() => ({
  formContainer: {
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    textDecoration: 'none',
  },
  customizeAppBar: {
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  formTitle: {
    backgroundColor: '#c5c8d6',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px',
  },
}))

const EditStudentView = (props) => {
  const { handleChange, handleSubmit, studentInfo } = props //functions that handles the change sumbission and the stored data
  const student = studentInfo.student
  console.log('view result:', student);
  const classes = useStyles()

  return (
    <>
      <Typography variant="h3">Edit Student Information</Typography><br />
      {/* Edit student form*/}
      <div className={classes.root}>
        <div className={classes.formContainer}>
          <div className={classes.formTitle}>
            <Typography
              style={{
                fontWeight: 'bold',
                fontFamily: 'Courier, sans-serif',
                fontSize: '28px',
                color: '#11153e',
              }}
            >
              {student.firstname + " " + student.lastname}
            </Typography>
          </div>
          <form
            style={{ textAlign: 'center' }}
            onSubmit={(e) => handleSubmit(e)}
          >
            <label style={{ color: '#11153e', fontWeight: 'bold' }}>
              First Name:{' '}
            </label>
            <input
              type="text"
              name="firstname"
              onChange={(e) => handleChange(e)}
              defaultValue={student.firstname}
              autoComplete="off"
              required
            />
            <br />
            <br />
            <label style={{ color: '#11153e', fontWeight: 'bold' }}>
              Last Name:{' '}
            </label>
            <input
              type="text"
              name="lastname"
              onChange={(e) => handleChange(e)}
              defaultValue={student.lastname}
              autoComplete="off"
              required
            />
            <br />
            <br />
            <label style={{ color: '#11153e', fontWeight: 'bold' }}>
              Email:{' '}
            </label>
            <input
              type="email"
              name="email"
              onChange={(e) => handleChange(e)}
              defaultValue={student.email}
              autoComplete="off"
              required
            />
            <br />
            <br />
            <label style={{ color: '#11153e', fontWeight: 'bold' }}>
              Image URL:{' '}
            </label>
            <input
              type="url"
              name="imageUrl"
              defaultValue={student.imageUrl}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <br />
            <label style={{ color: '#11153e', fontWeight: 'bold' }}>
              GPA:{' '}
            </label>
            <input
              type="number"
              step="0.01"
              min="0"
              max="4"
              name="gpa"
              onChange={(e) => handleChange(e)}
              defaultValue={student.gpa}
              autoComplete="off"
            />
            <br />
            <br />
            <label style={{ color: '#11153e', fontWeight: 'bold' }}>
              Campus ID:{' '}
            </label>
            <input
              type="text"
              name="campusId"
              onChange={(e) => handleChange(e)}
              defaultValue={student.campusId}
              autoComplete="off"
            />
            <br />
            <br />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>{' '}
            {/*Submit the form*/}
            <br />
          </form>
          <br />
          <Link to={'/students'}>Back</Link> {/* Go back to the students*/}
        </div>
      </div>
    </>
  )
}

export default EditStudentView