/*==================================================
CampusContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import Header from './Header';
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchCampusThunk,
  fetchAllStudentsThunk,
  deleteStudentThunk,
  deleteCampusThunk
 } from "../../store/thunks";

import { CampusView } from "../views";

class CampusContainer extends Component {
  // Get the specific campus data from back-end database
  componentDidMount() {
    // Get campus ID from URL (API link)
    this.props.fetchCampus(this.props.match.params.id);
    this.props.fetchAllStudents(this.props.match.params.id);
  }

   // Function to handle student deletion
   handleDeleteStudent = (studentId) => {
    // Dispatch deleteStudentThunk action
    this.props.deleteStudent(studentId);
    // Refetch campus and all students data after deletion
    this.props.fetchCampus(this.props.match.params.id);
    this.props.fetchAllStudents(this.props.match.params.id);
  };

  handleDeleteCampus = async (campusId) => {
    console.log(this.props.history);
    await this.props.deleteCampus(campusId);
    // Redirect to all campuses view after successful deletion
    this.props.history.push("/campuses");
  };
  
  // Render a Campus view by passing campus data as props to the corresponding View component
  render() {
    return (
      <div>
        <Header />
        <CampusView
          campus={this.props.campus}
          deleteStudent={this.handleDeleteStudent} // Pass the handler function as prop
          deleteCampus={this.handleDeleteCampus} // Pass the handler function as prop
          students={this.props.allStudents}
        />
      </div>
    );
  }
}

// The following 2 input arguments are passed to the "connect" function used by "CampusContainer" component to connect to Redux Store.
// 1. The "mapState" argument specifies the data from Redux Store that the component needs.
// The "mapState" is called when the Store State changes, and it returns a data object of "campus".
const mapState = (state) => {
  return {
    campus: state.campus,  // Get the State object from Reducer "campus"
    allStudents: state.allStudents,
  };
};
// 2. The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    deleteStudent: (studentId) => dispatch(deleteStudentThunk(studentId)),
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
    deleteCampus: (campusId) => dispatch(deleteCampusThunk(campusId)),
  };
};

// Export store-connected container by default
// CampusContainer uses "connect" function to connect to Redux Store and to read values from the Store 
// (and re-read the values when the Store State updates).
export default connect(mapState, mapDispatch)(withRouter(CampusContainer));