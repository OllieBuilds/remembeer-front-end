'use strict';

const app = require('./app-data');

const failure = () => {
  Materialize.toast("Something went wrong. Try again", 3000);
};

const success = (data) => {
  console.log(data);
};

const blankOutSearchArea = () => {
  $('#search-result-holder').html("");
};

const signUpSuccess = () => {
  $('#register input').val('');
  Materialize.toast('You succesfully registered for an account. Have fun!', 3000);
};

const signInSuccess = (data) => {
  Materialize.toast('Successfully signed in.', 3000);
  app.user = data.user;
  $('#login input').val('');
  $('.hide-until-sign-in').css("display", "inline-block");
  $('.side-nav > li').css("display", "list-item");
  $('.show-until-sign-in').hide();
};

const signOutSuccess = () => {
  $('.hide-until-sign-in').hide();
  $('.show-until-sign-in').show();
  app.user = null;
};

const changePassSuccess = () => {
  $('#account input').val('');
  Materialize.toast('Password changed succesfully', 3000);
};

const addBeerToCollection = (bdb_id) => {
  $.ajax({
      method: 'POST',
      dataType: 'json',
      url: app.url + 'add-beer/',
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
      data: {
        beers: {
          id: bdb_id
        }
      }
    })
    .success(() => {
      Materialize.toast(`Remembeered!`, 3000);
    })
    .fail(() => {
      Materialize.toast('You already Remembeered that beer!', 3000);
    });
};

const displaySearchResults = function(beers) {
  let beerListingTemplate = require('./templates/beer-listing.handlebars');
  $('#search-result-holder').html(beerListingTemplate(beers));

  $("#search-result-holder").off("click");
  //
  $("#search-result-holder").on("click", (event) => {
    event.preventDefault();

    let target = $(event.target);
    let beerId = $(event.target).data().beerId;

    if (!app.user && target.is("button")) {
      Materialize.toast('Sign in to remember this beer', 3000);
    } else if (beerId !== undefined) {
      addBeerToCollection(beerId);
    }
  });
};

const removeBeer = function(bdbId, eventTarget) {
  $.ajax({
      method: 'DELETE',
      url: app.url + 'my-beer/' + bdbId,
      headers: {
        Authorization: 'Token token=' + app.user.token,
      }
    })
    .success(() => {
      Materialize.toast(`Beer forgotten!`, 3000);
      $(eventTarget).parents().eq(1).hide();
    });
};

const updateQuantity = (name, quantity) => {
  $.ajax({
      method: 'PATCH',
      url: app.url + 'update-quantity/',
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
      data: {
        card: {
          name: name,
          count: quantity
        }
      },
    })
    .success(() => {
      Materialize.toast(`Set ${name} to ${quantity} cards`, 3000);
    })
    .fail(() => {
      failure();
    });
};

const displayMyBeers = (beers) => {
  beers = beers.beers;
  let myBeersTemplate = require('./templates/my-beers.handlebars');
  console.log(beers);
  $('#search-result-holder').html(myBeersTemplate({
    beers
  }));

  $("#search-result-holder").off("click");
  $("#search-result-holder").on("click", (event) => {
    event.preventDefault();
    let bdbId = ($(event.target).data()).bdbId;
    console.log(bdbId);
    removeBeer(bdbId, event.target);
  //   let quantity = $(event.target).siblings('input').val();
  //   if ($(event.target).is("img")) {
  //     $('#card-display').html(showCardTemplate($(event.target).attr("src")));
  //     $('#card-display').openModal();
  //   } else if (quantity !== undefined && dataId === 'update-button') {
  //     updateQuantity(cardName, quantity);
  //   } else if (cardName !== undefined) {
  //     removeCardFromCollection(cardName, event.target);
  //   }
  });
};

module.exports = {
  success,
  failure,
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePassSuccess,
  displaySearchResults,
  displayMyBeers,
  blankOutSearchArea,
  updateQuantity,
  removeBeer
};
