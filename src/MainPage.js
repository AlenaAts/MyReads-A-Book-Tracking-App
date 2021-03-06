import React from 'react'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'



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
					<Link
		            	to="/search"
		            	className="close-search"></Link>
				</div>
			</div>
        )
	}
}

export default MainPage