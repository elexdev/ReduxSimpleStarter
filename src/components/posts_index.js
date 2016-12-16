import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {

    // React Lifecycle Method
    // Function on a React Component Class, that is automatically called by React
    componentWillMount() {
        // Whenever Component is about to be rendered to the DOM for the first time
        // console.log('this would be a good time to call an action creator to fetch posts');
        this.props.fetchPosts();
    }

    renderPosts() {
        return this.props.posts.map((post) => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={`posts/${post.id}`}>
                        <span className="pull-xs-right">{post.categories}</span>
                        <strong>{post.title}</strong>
                    </Link>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {posts: state.posts.all};
}

// SHORTHAND for mapDispatchToProps
export default connect(mapStateToProps, {fetchPosts})(PostsIndex);

// recall: when component needs the ability to call an action creator, we need
// to promote it from a component to a container
// in this project there is no special folder for containers

// 1. import connect at the top
// 2. import action creator
// 3. define mapDispatchToProps function
// 4. connect to component
