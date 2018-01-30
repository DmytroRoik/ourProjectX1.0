import React, { Component } from 'react';
import classes from './App.css';
import Layout from './../containers/Layout/Layout';
import Aux from '../containers/hoc/Aux';
import PostConstructor from '../components/Posts/PostConstructor/PostConstructor';

class App extends Component {  
  render() {
    return (      
      <Layout>
        <PostConstructor />
      </Layout>
    );
  }
}

export default App;
