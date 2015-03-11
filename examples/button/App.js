var React = require('react');
var Kudos = require('../../lib/Kudos.js');

var App = React.createClass({

  render: function(){
    return (
      <div>
        <Kudos firebaseHost="https://counter-button.firebaseio.com/" firebaseResourceId='counter4'/>
        <Kudos allowMultiple={true} firebaseHost="https://counter-button.firebaseio.com/" firebaseResourceId='counter6'/>
      </div>
    )
  }
});

React.render(
  <App />,
  document.getElementById('app')
)