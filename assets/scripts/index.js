'use strict';
const handlers = require('./load-handlers');

$(() => {
  $(".button-collapse").sideNav();
  $('.modal-trigger').leanModal();
  handlers.pageHandlers();
});
