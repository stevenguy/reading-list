const React = require('react')
const Form = require('./form')
const Navigation = require('./navigation')
const Head = require('./head')
const Scripts = require('./scripts')

const Page = () =>
  <html lang='en'>
    <Head />
    <body>
      <div className="container">
        <Navigation />
        <br></br>
        <Form />
      </div>
      <script src='/js/index.js' type='application/javascript' />
      <Scripts />
    </body>
  </html>

module.exports = Page
