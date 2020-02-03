import React,{ Component } from "react";
import Shelf from './Shelf'
class Book extends Component{

    render(){
    const book = this.props.books; 
    //book.readingModes.image ===
    let bookCover;
    if(book.imageLinks === undefined){
     bookCover =<div className="book-cover" style={{ width: 128,
      height: 193 
    }}></div>
  }
  else{
bookCover=  <div className="book-cover" style={{ width: 128,
  height: 193, 
  backgroundImage:"url('" + encodeURI(book.imageLinks.thumbnail) + "')" }}></div>
  }
    if(book.imageLinks === undefined){
      return(
        <div className="book">
        <div className="book-top">
            {bookCover}
          <div className="book-shelf-changer">
          <select value={book.shelf || "none"}
        onChange={(e) => this.props.onChangeShelf(book, e.target.value)}>
           <option value="moveTo" disabled>Move to...</option>
  {
    Shelf.shelves.map((shelf) => (
        <option key={shelf.id} value={shelf.id}>{shelf.title}</option>
    ))
  }
  <option value="none">None</option>
            </select>
          </div>
        </div>
         <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>

      );
    }
    else{
          return(
            <div className="book">
              <div className="book-top">
                {bookCover}
                <div className="book-shelf-changer">
                <select value={book.shelf || "none"}
              onChange={(e) => this.props.onChangeShelf(book, e.target.value)}>
                 <option value="moveTo" disabled>Move to...</option>
        {
          Shelf.shelves.map((shelf) => (
              <option key={shelf.id} value={shelf.id}>{shelf.title}</option>
          ))
        }
        <option value="none">None</option>
                  </select>
                </div>
              </div>
               <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors}</div>
            </div>
          );
      }
    }
  }
export default Book;