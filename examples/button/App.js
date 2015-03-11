var React = require('react');
var Kudos = require('../../lib/Kudos.js');

var App = React.createClass({

  render: function(){
    return (
      <Kudos firebaseHost="https://counter-button.firebaseio.com/" firebaseResourceId='counter4'/>
    )
  }
});

React.render(
  <App />,
  document.getElementById('app')
)