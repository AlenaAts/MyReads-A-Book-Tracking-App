import React from 'react'
import Book from './Book'

class Bookshelf extends React.Component {

	render() {
		return(
			<div>
				{this.props.bookshelves.map((bookshelf) => (
						<div key={bookshelf.name} className="bookshelf">
							<h2 className="bookshelf-title">{bookshelf.name}</h2>
							<div className="bookshelf-books">
								<ol className="books-grid">
									{this.props.books
										.filter(book => book.shelf === bookshelf.shelf)
										.map(book => (
											<li key={book.id}>
												<Book />
											</li>
											)
										)}
								</ol>
							</div>
						</div>
					)
				)}
			</div>
		)
	}
}

export default Bookshelf