'use strict';

var UriHandler = function() {};

UriHandler.prototype.register = function() {
  var base = window.location.origin + '/';
  var url = base + '#/uri-payment/%s';

/*  if(navigator.registerProtocolHandler) {
    navigator.registerProtocolHandler('bitcoin', url, 'urv2');
  }*/
};

angular.module('copayApp.services').value('uriHandler', new UriHandler());
