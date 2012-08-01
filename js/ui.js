function resize() {
  $( 'ul' ).css( {
    'line-height': $( document ).height() - 200 + 'px'
  } );

  var MEME_WIDTH = 150;
  var memesPerPage = Math.min( numMemes, Math.floor( $( document ).width() / ( MEME_WIDTH + 50 ) ) );

  $( 'li' ).css( {
    'width': Math.floor( $( document ).width() / memesPerPage ) - 2 * memesPerPage + 'px'
  } );
}
$( resize );
$( window ).resize( resize );

var hideOverlayTimer = 0;

function hideOverlay() {
  $( '.overlay' ).hide();
}

$( 'li' ).mouseover( function() {
  clearTimeout( hideOverlayTimer );
  $( '.overlay' ).show();
} );
$( 'li' ).mouseout( function() {
  clearTimeout( hideOverlayTimer );
  hideOverlayTimer = setTimeout( hideOverlay, 50 );
} );
