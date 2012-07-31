$( 'form' ).submit( function() {
  return false; // No redirect when hitting enter.
} );

$( $( 'input' )[ 0 ] ).keyup( function ( e ) {
  $( 'li' ).each( function() {
    var alt = $( this ).find( 'img' ).attr( 'alt' );

    if ( alt.match( new RegExp( e.target.value, 'i' ) ) ) {
      $( this ).show();
    }
    else {
      $( this ).hide();
    }
  } );
} );
