'use strict';

angular.module('copayApp.controllers').controller('preferencesLogs',
function(historicLog) {
  this.logs = historicLog.get();

  this.sendLogs = function() {
    var body = 'urv2 Session Logs\n Be careful, this could contain sensitive private data\n\n';
    body += '\n\n';
    body += this.logs.map(function(v) {
      return v.msg;
    }).join('\n');

    window.plugins.socialsharing.shareViaEmail(
      body,
      'uv2 Logs',
      null, // TO: must be null or an array
      null, // CC: must be null or an array
      null, // BCC: must be null or an array
      null, // FILES: can be null, a string, or an array
      function() {},
      function() {}
    );
  };
});
