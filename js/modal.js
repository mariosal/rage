$( function() {
  $( 'li' ).click( function() {
    window.prompt( 'Share this meme:', $( this ).find( 'img' )[ 0 ].src );
  } );
} );
