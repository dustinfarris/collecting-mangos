import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import connect from 'ember-redux/components/connect';

import _ from 'lodash';


const { Component } = Ember;


const stateToComputed = state => {
  return {
    mangos: _.range(state.mangos.numCollectedMangos)
  };
};


const CollectedMangos = Component.extend({

  layout: hbs`

  <h2>Your Mangos</h2>

  {{#each mangos}}
    <img class="small-mango" src="/images/mango.png">
  {{else}}
    <p>You have no mangos.  Go catch some!</p>
  {{/each}}

  `
});


export default connect(stateToComputed)(CollectedMangos);
