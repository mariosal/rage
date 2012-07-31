$( function() {
  $( 'img' ).click( function() {
    window.prompt( 'Share this meme:', this.src );
  } );
} );
