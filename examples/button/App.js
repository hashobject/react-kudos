var React = require('react');
var Kudos = require('../../lib/Kudos.js');

var App = React.createClass({

  render: function(){
    return (
      <div>
        <Kudos isButton={true} firebaseHost="https://counter-button.firebaseio.com/" firebaseResourceId='counter4'/>
        <Kudos isButton={true} allowMultiple={true} firebaseHost="https://counter-button.firebaseio.com/" firebaseResourceId='counter6'/>
        <Kudos isButton={true} firebaseHost="https://counter-button.firebaseio.com/" firebaseResourceId='counter7'/>
      </div>
    )
  }
});

React.render(
  <App />,
  document.getElementById('app')
)