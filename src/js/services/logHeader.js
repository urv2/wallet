'use strict';
angular.module('copayApp.services')
  .factory('logHeader', function($log, platformInfo) {
    $log.info('Starting urv2 v' + window.version + ' #' + window.commitHash);
    $log.info('Client: '+ JSON.stringify(platformInfo) );
    return {};
  });
