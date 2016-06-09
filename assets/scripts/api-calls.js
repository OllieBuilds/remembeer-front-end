'use strict';

const app = require('./app-data');
const ui = require('./ui');

// sign in with an existing account
const signIn = (data) => {
  console.log(data);
  $.ajax({
      method: 'POST',
      url: app.url + 'sign-in',
      header: 'Content-Type: application/json',
      data: data,
    })
    .success((data) => ui.signInSuccess(data))
    .fail((fail) => ui.failure(fail));
};

// create account
const signUp = (data) => {
  console.log(data.credentials);
  $.ajax({
      method: 'POST',
      url: app.url + 'sign-up',
      header: 'Content-Type: application/json',
      data: data,
    })
    .done(() => {
      ui.signUpSuccess();
      delete data.credentials.password_confirmation;
      signIn(data);
    })
    .fail((fail) => ui.failure(fail));
};

// sign out if signed in
const signOut = () => {
  console.log('Start request.');
  $.ajax({
      method: 'DELETE',
      url: app.url + 'sign-out/' + app.user.id,
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
    })
    .done(() => ui.signOutSuccess())
    .fail((error) => ui.failure(error));
};

// change password by sending current password and new password
const changePass = (data) => {
  console.log('Start request.');
  $.ajax({
      method: 'PATCH',
      url: app.url + 'change-password/' + app.user.id,
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
      data: data,
    })
    .done((data) => ui.changePassSuccess(data))
    .fail((error) => ui.failure(error));
};

const getMyCollection = () => {
  console.log('Start request.');
  $.ajax({
      method: 'GET',
      url: app.url + 'collection/',
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
    })
    .done((data) => ui.displayMyCollection(data))
    .fail((error) => ui.failure(error));
};

const searchCards = function(data) {
  let requestUrl = 'https://api.magicthegathering.io/v1/cards?set=ori,bfz,ogw';
  requestUrl += ($('#name').is(':checked')) ? '&name=' + data.query : '';
  requestUrl += ($('#text').is(':checked')) ? '&text=' + data.query : '';
  requestUrl += ($('#type').is(':checked')) ? '&type=' + data.query : '';
  if ($('#boolean-or').is(':checked') && data.colors) {
    requestUrl += `&colors=[${data.colors}]`;
  } else if (data.colors) {
    requestUrl += '&colors=' + data.colors;
  }
  $.ajax({
      url: requestUrl,
    })
    .success((cards) => ui.displaySearchResults(cards))
    .fail((error) => ui.failure(error));
};


module.exports = {
  signUp,
  signIn,
  signOut,
  changePass,
  searchCards,
  getMyCollection,
};
