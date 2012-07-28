document.getElementsByTagName( 'form' )[ 0 ].onsubmit = function () {
  return false; // No redirect when hitting enter.
};

document.getElementsByTagName( 'input' )[ 0 ].onkeyup = function ( e ) {
  lists = document.getElementsByTagName( 'li' );

  for ( var i = 0; lists[ i ]; ++i ) {
    var alt = lists[ i ].getElementsByTagName( 'img' )[ 0 ].getAttribute( 'alt' );

    if ( alt.match( new RegExp( e.target.value, 'i' ) ) ) {
      lists[ i ].className = 'show';
    }
    else {
      lists[ i ].className = 'hide';
    }
  }
};
