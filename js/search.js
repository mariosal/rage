var numMemes = $( 'li' ).length;

$( 'form' ).submit( function() {
  return false; // No redirect when hitting enter.
} );

$( $( 'input' )[ 0 ] ).keyup( function ( e ) {
  if ( e.keyCode == 27 ) { // esc
    this.value = '';
  }

  numMemes = 0;
  $( 'li' ).each( function() {
    var alt = $( this ).find( 'img' ).attr( 'alt' );

    if ( alt.match( new RegExp( e.target.value, 'i' ) ) ) {
      $( this ).show();
      ++numMemes;
    }
    else {
      $( this ).hide();
    }
  } );
  resize();
  $( '.fruitless' ).hide();
  if ( numMemes == 1 ) {
    $( 'li' ).addClass( 'selected' );
  }
  else {
    if ( numMemes == 0 ) {
      $( '.fruitless' ).show();
      $( '.fruitless span' ).text( this.value );
      $( '.fruitless a' ).attr( 'href', 'http://knowyourmeme.com/search?q=' + encodeURIComponent( this.value ) );
      hideOverlay();
    }
    $( 'li' ).removeClass( 'selected' );
  }
} );
