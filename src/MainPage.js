import React from 'react'
import Bookshelf from './Bookshelf'


class MainPage extends React.Component {
	render() {

		const bookshelves = [
		{
			name: 'Currently Reading',
			shelf: 'currentlyReading'
		},
		{
			name: 'Want to Read',
			shelf: 'wantToRead'
		},
		{
			name: 'Read',
			shelf: 'read'
		}
		]

		return(
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<Bookshelf 
					bookshelves={bookshelves} 
        			books={this.props.books}
        			changeShelf={this.props.changeShelf}
        			/>
				</div>
				<div className="open-search">
					<a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
				</div>
			</div>
        )
	}
}

export default MainPage