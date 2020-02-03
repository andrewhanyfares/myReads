import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import Book from '../Components/Book'
import * as BooksAPI from '../BooksAPI';
class SearchBooks extends Component{
  state = {
   Results: [],
  }
  clearallbooks() {
    this.setState({Results: []})
  }

  updateSearchResults(Results) {
    const existingBooksAsMap = new Map(
        this.props.books.map((book) => [book.id, book]))
    for (var i = 0; i <Results.length; ++i) {
      const existingBook = existingBooksAsMap.get(Results[i].id)
      if (existingBook !== undefined) {
       Results[i].shelf = existingBook.shelf;
      }
    }
    this.setState({Results:Results})
    console.log(Results);
  }


  search(query) {
    query = query.trim()
    if (query.length === 0 ){
      this.clearallbooks()
    } else {
      BooksAPI.search(query)  
          .then((Results) => this.updateSearchResults(Results))
    }
  }

    render(){
        return(
            <div className="search-books">
            <div className="search-books-bar">
         
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">  
                <input type="text" placeholder="Search by title or author" 
                onChange={(e) => this.search(e.target.value)} />
              </div>
            </div>  
            <div className="search-books-results">
              <ol className="books-grid">
              {
              this.state.Results.length > 0
              && this.state.Results.map((book) => (
                  <Book key={book.id}
                        books={book}
                        onChangeShelf={this.props.onChangeShelf}
                        />
              ))
            }
              </ol>
            </div>
          </div>
        )
    }
}

export default SearchBooks;