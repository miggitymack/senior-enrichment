import React from 'react';
import {connect} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Root from './components/Root';
import Home from './components/Home';
import CampusList from './components/Campus/CampusList';
import CampusDetail from './components/Campus/CampusDetail';
import StudentList from './components/Student/StudentList';
import StudentDetail from './components/Student/StudentDetail';
import {fetchStudents} from './reducers/students';
import {fetchCampuses, fetchCampus} from './reducers/campuses';

/* -----------------    COMPONENT     ------------------ */

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Root} onEnter={fetchInitialData}>
      <IndexRoute component={Home} />
      <Route path="campuses" component={CampusList} />
      <Route path="students" component={StudentList} />
      <Route
        path="campuses/:id"
        component={CampusDetail}
        onEnter={onCampusEnter}
      />
      <Route path="students/:id" component={StudentDetail} />
      <Route path="*" component={Home} />
    </Route>
  </Router>
);

/* -----------------    CONTAINER     ------------------ */

const mapProps = null;

const mapDispatch = dispatch => ({
  fetchInitialData: () => {
    dispatch(fetchStudents());
    dispatch(fetchCampuses());
  },
  onCampusEnter: nextRouterState => {
    const campusId = nextRouterState.params.id;
    dispatch(fetchCampus(campusId));
  },
});

export default connect(mapProps, mapDispatch)(Routes);
