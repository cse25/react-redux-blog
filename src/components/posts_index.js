import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
  // define lifecycle method, componentWillMount
  // is called automatically when component is about to be rendered to DOM for the first time
  // not called on subsequent rerenders
  // place fetchPosts action creator here
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        List of Blog Posts
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(PostsIndex);

// promote from component to container to give it ability to call action creator (mapDispatchToProps)
// this.props.fetchPosts
