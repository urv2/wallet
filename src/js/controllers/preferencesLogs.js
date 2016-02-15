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

    var properties = {
      subject: 'urv2 Logs',
      body: body,
      isHtml: false
    };
    window.plugin.email.open(properties);
  };
});
