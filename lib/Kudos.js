var React = require('react');
var Firebase = require('firebase');

var Kudos = React.createClass({

  getInitialState:  function () {
    var voted = !!localStorage.getItem('counterVoted');
    return {
      counterValue: 0,
      voted: voted
    }
  },

  componentWillMount: function () {
    var url = this.props.firebaseHost + this.props.firebaseResourceId;
    this.firebase = new Firebase(url);
    window.firebase = this.firebase;
  },

  componentDidMount: function () {
    firebase.on('value', function (snapshot) {
      var newValue = snapshot.val();
      console.log('value changed');
      if (newValue == null) {
        newValue = 0;
        this.firebase.set(newValue);
      }
      this.setState({counterValue: newValue});
    }.bind(this));
  },

  handleClick: function () {
    // if (this.state.voted) {
    //   return;
    // }
    var newValue = this.state.counterValue + 1;
    this.firebase.set(newValue);
    this.setState({voted: true});
    localStorage.setItem('counterVoted', true);
  },

  render: function () {
    return (
      <button onClick={this.handleClick}>{this.state.counterValue}</button>
    )
  }

});

module.exports = Kudos;