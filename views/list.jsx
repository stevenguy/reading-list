const React = require('react')
const Book = require('./book')
const Navigation = require('./navigation')
const Head = require('./head')

const List = props =>
  <html lang='en'>
    <Head />
    <body>
      <div className="container">
        <Navigation />
        <br></br>
        <ul>
          {props.list.map(book =>
            <Book title={book.title} author={book.author} pages={book.pages} currentPage={book.currentPage} isRead={book.isRead} />
          )}
        </ul>
      </div>
      <script src='/js/list.js' type='application/javascript' />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js" />
    </body>
  </html>

module.exports = List
