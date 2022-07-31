$(function() {
  $.get('/buildinfo', function( data ) {
    $('#build').html( data );
  });
});
