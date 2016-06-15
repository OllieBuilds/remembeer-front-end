'use strict';

const api = require('./api-calls');
const ui = require('./ui');
const getFormFields = require('../../lib/get-form-fields');

const pageHandlers = () => {
  $('#sign-up').on('submit', function(event) {
    event.preventDefault();
    let data = getFormFields(this);
    api.signUp(data);
  });
  $('#sign-in').on('submit', function(event) {
    event.preventDefault();
    let data = getFormFields(this);
    api.signIn(data);
  });
  $('#sign-out-1').on('click', function(event) {
    event.preventDefault();
    ui.blankOutSearchArea();
    api.signOut();
  });
  $('#sign-out-2').on('click', function(event) {
    event.preventDefault();
    ui.blankOutSearchArea();
    api.signOut();
  });
  $('#change-pass').on('submit', function(event) {
    event.preventDefault();
    let data = getFormFields(this);
    api.changePass(data);
  });
  $('#beer-search').on('submit', function(event) {
    event.preventDefault();
    let data = getFormFields(this);
    console.log(data);
    api.searchBeers(data);
  });
  $('.nav-wrapper').on('click', function(event) {
    event.preventDefault();
    let dataId = $(event.target).data().id;
    if (dataId === 'my-beers') {
      api.getMyBeers();
    } else if (dataId === 'search') {
      ui.blankOutSearchArea();
    }
  });
  $("#open-register-page").on('click', function(event) {
    event.preventDefault();
    $('#login').closeModal();
    $('#register').openModal();
  });
};

module.exports = {
  pageHandlers,
};
