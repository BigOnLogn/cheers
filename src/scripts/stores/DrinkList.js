/*global Parse*/

var Drink = require('./Drink');

var DrinkList = Parse.Collection.extend({

  model: Drink

});

module.exports = DrinkList;