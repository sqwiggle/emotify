(function ($) {
  // Setup emoticons array
  var emoticons = {
    ':) :-)'            : 'smile',
    ':p :P :-p :-P'     : 'tongue',
    ';) ;-)'            : 'wink',
    ':o :0 :-o :-0 :O'  : 'surprised',
    '(k) (K)'           : 'kiss',
    '(y) (Y)'           : 'yes',
    '(n) (N)'           : 'no',
    ':@ :-@'            : 'angry',
    '0:) 0:-)'          : 'angel',
    '8) 8-)'            : 'cool',
    ':D :-D'            : 'happy',
    ':| :-|'            : 'expressionless',
    ':s :S :-s :-S'     : 'silly',
    ':( :-('            : 'sad',
    'I-) i-) |-)'       : 'sleepy',
    ":'("               : 'cry',
    ':/ :-/'            : 'confused'
  },
  patterns = [],
  single_emoticons = {},
  metachars = /[[\]{}()*+?.\\|^$\-,&#\s]/gi;

  var matchAndReplace = function (elm) {
    $(elm)
      .html($(elm)
        .html()
        .replace(re, function (match) {
          match = $.trim(match);
          return (typeof single_emoticons[match] !== 'undefined') ? '<div class="emoticon emoticon-' + single_emoticons[match] + '"></div>' : match;
        }));
  };

  // Build a regex pattern for each defined emoticon
  for (var i in emoticons) {
    if (emoticons.hasOwnProperty(i)) {
      var parts = i.split(" ");
      for (var x = 0; x < parts.length; x++) {
        single_emoticons[parts[x]] = emoticons[i];

        // escape metacharacters
        var escaped = parts[x].replace(metachars, "\\$&");

        patterns.push('((^|\\s)(' + escaped + ')(?=\\s|$))');
      }
    }
  }
  var re = new RegExp(patterns.join('|'), 'g');

  $.fn.emotify = function (options) {
    matchAndReplace($(this));
  };
})(jQuery);
