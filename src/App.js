import React from 'react'

import './App.css';
import SearchBooks from './Components/SearchBooks';
import Header from './Components/Header'; 
import ListofShelves from './Components/ListofShelves';
import {Route} from 'react-router-dom';
import AddBook from './Components/AddBook';
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  render() {

    return (
  
      <div className="app">       
            <Route exact path='/' render={()=>(  
            <div className="list-books">
           <Header></Header> 
            <ListofShelves  books={this.state.books}
            onChangeShelf={(book, shelf) => this.onChangeShelf(book, shelf)} ></ListofShelves>
              <AddBook></AddBook>
            </div>
            )}>
            </Route>
            <Route  path='/SearchBooks' render={()=>
            <SearchBooks          
            books={this.state.books}
            onChangeShelf={(book, shelf) => this.onChangeShelf(book, shelf)}></SearchBooks>
            }>
            </Route>
        
      </div>
    )
  }
  getBooks() {
    BooksAPI.getAll().then((b) => this.setState({
      books: b,
    }))
  }
  componentDidMount(){
    // BooksAPI.getAll().then(b =>this.setState({books:b}));
    this.getBooks();
   
  }
  onChangeShelf(book, shelf) {
    BooksAPI.update(book, shelf).then(() => this.getBooks())
  }
}

export default BooksApp;
