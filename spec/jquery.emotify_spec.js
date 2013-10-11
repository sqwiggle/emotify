describe ('jquery.emotify', function() {
  beforeEach (function() {
    loadFixtures('index.html');
  });

  it ('finds a smile', function() {
    $('#smiles span').each(function(index, span) {
      var $span = $(span);
      $span.emotify();
      expect($span.find('.emoticon-smile').length).toEqual(2);
    });
  });

  it ('does not find a smile', function() {
    $('#no_smiles span').each(function(index, span) {
      var $span = $(span);
      $span.emotify();
      expect($span.find('.emoticon-smile').length).toEqual(0);
    });
  });

  it ('finds a cool', function() {
    $('#cools span').each(function(index, span) {
      var $span = $(span);
      $span.emotify();
      expect($span.find('.emoticon-cool').length).toEqual(2);
    });
  });

  it ('does not find a cool', function() {
    $('#no_cools span').each(function(index, span) {
      var $span = $(span);
      $span.emotify();
      expect($span.find('.emoticon-cool').length).toEqual(0);
    });
  });

  it ('finds a confuseds', function() {
    $('#confuseds span').each(function(index, span) {
      var $span = $(span);
      $span.emotify();
      expect($span.find('.emoticon-confused').length).toEqual(2);
    });
  });

  it ('does not find a confused', function() {
    $('#no_confuseds span').each(function(index, span) {
      var $span = $(span);
      $span.emotify();
      expect($span.find('.emoticon-confused').length).toEqual(0);
    });
  });
});
