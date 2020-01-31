import React, { Component } from 'react';
import Shelf from '../Components/Shelf';

class ListofShelves extends Component {

  render() {

    return (
      <div className="list-books-content">
      <div>
      {
              Shelf.shelves.map((shelf) =>
                <Shelf
                    key={shelf.id}
                    title={shelf.title}
                    books={this.props.books.filter((book) => book.shelf === shelf.id)}
                    onChangeShelf={this.props.onChangeShelf}
                    />
              )
            }
      </div>
    </div>

      )
  }
}

export default ListofShelves;
