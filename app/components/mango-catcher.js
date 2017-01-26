import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import connect from 'ember-redux/components/connect';


const { Component } = Ember;


const stateToComputed = state => {
  return {
    posX: state.mangos.mangoPositionX
  };
};


const dispatchToActions = dispatch => {
  return {
    collectMango() {
      dispatch({ type: 'COLLECT_MANGO' });
      dispatch({ type: 'MOVE_MANGO' });
    }
  };
};


const MangoCatcher = Component.extend({

  layout: hbs`

  <img class="big-mango" onclick={{action "collectMango"}} style="left: {{posX}}px" src="/images/mango.png">

  `
});


export default connect(stateToComputed, dispatchToActions)(MangoCatcher);
