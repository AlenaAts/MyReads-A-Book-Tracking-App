import React from 'react'
import Bookshelf from './Bookshelf'

class MainPage extends React.Component {
	render() {
		const bookshelfs = [
	{
		name: 'Currently Reading'
	},
	{
		name: 'Want to Read'
	},
	{
		name: 'Read'
	}
	]

		return(
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					
					<Bookshelf bookshelfs={bookshelfs} />
					
				</div>
				<div className="open-search">
					<a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
				</div>
			</div>
        )
	}
}

export default MainPage