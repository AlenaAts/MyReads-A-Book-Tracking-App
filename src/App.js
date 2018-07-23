import React from 'react'
import Search from './Search'
import MainPage from './MainPage'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  /*state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    /*showSearchPage: false
  }*/ // TODO: delete the state



  state = {books: []}

  loadPage = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    });
  }
  
  componentDidMount() {
    this.loadPage();
  }

  changeShelf = (book, val) => {
    book.shelf = val;
    BooksAPI.update(book, book.shelf).then((data) => {
      let result = this.state.books.filter((filtered) => filtered.id !== book.id)
      this.setState({ books: result.concat(book) })
    });
    /*BooksAPI.update(book, shelf);
    this.loadPage();*/
  }

  render() {
    return (
      <div className="app">
        <MainPage 
          books={this.state.books}
          changeShelf={this.changeShelf}
        />
        <Search 
          changeShelf={this.changeShelf}
        />
      </div>
     
    )
  }
}

export default BooksApp
