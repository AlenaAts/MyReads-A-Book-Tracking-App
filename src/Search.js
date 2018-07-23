import React from 'react'
import Book from './Book'
import * as BooksAPI from './BooksAPI'
import escapeRegExp from 'escape-string-regexp'

class Search extends React.Component {
	state = {
		query: '',
		books: []
	}

	updateQuery = (query) => {
		this.setState({
			query: query
		})
		this.updateBooks(query);
	}

	updateBooks = (query) => {
		/*BooksAPI.search(query).then((books) => {
			this.setState({ books: books })
		})*/
		if (query) {
			BooksAPI.search(query).then((books) => {
				if (books.error) {
					this.setState({ books: [] });
				} else {
					this.setState({ books: books });
				}
			})
		} else {
			this.setState({ books: [] })
		}
	}

	render() {
		/*let showingBooks

		if (this.state.query) {
			const match = new RegExp(escapeRegExp(this.state.query), 'i')
			showingBooks = this.state.books.filter((book) => match.test(book))
		} else {
			showingBooks = this.state.books
		}*/
		return(
			<div className="search-books">
	            <div className="search-books-bar">
		            	<a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>

		              	<div className="search-books-input-wrapper">
			                {/*
			                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
			                  You can find these search terms here:
			                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

			                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
			                  you don't find a specific author or title. Every search is limited by search terms.
			                */}
			                <input 
			                type="text"
			                placeholder="Search by title or author"
			                value={this.state.query}
			                onChange={(event) => this.updateQuery(event.target.value)}
			                />
		              	</div>
	            </div>

	            <div className="search-books-results">
	              	<ol className="books-grid">
	              	{this.state.books.map((book) => (
	              			<li key={book.id}>
	              				<Book
	              					book={book}
	              					changeShelf={this.props.changeShelf}
	              				/>
	              			</li>
	              		))}
	              	</ol>
	            </div>
          </div>
		)
	}
}

export default Search