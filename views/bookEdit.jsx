const React = require('react')
const Form = require('./form')
const Navigation = require('./navigation')

const Book = props =>
  <html lang='en'>
    <head>
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
      <title>Reading List</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
    </head>
    <body>
      <div className="container">
        <Navigation />
        <Form title={props.title} author={props.author} pages={props.pages} currentPage={props.currentPage} isRead={props.isRead} />
      </div>
      <script src='/js/edit.js' type='application/javascript' />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js" />
    </body>
  </html>

module.exports = Book

