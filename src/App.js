import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import mainpage from './projectcomponents/views/mainpage';
import searchpage from './projectcomponents/views/searchpage';


class BooksApp extends React.Component {
    render() {
    return (
      <div>
        <Route exact path="/" component= { mainpage } />
        <Route exact path="/search" component= { searchpage } />
      </div>
    );
  }
}

export default BooksApp
