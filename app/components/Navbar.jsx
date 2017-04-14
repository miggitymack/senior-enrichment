import React from 'react';
import {connect} from 'react-redux';
import {Link, browserHistory} from 'react-router';

/* -----------------    COMPONENT     ------------------ */

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link className="navbar-brand" to="/">
              Main
            </Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/campuses" activeClassName="active">Home</Link>
              </li>
              <li>
                <Link to="/students" activeClassName="active">students</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
