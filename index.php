<!DOCTYPE html>
<html>
  <head>
    <meta charset='UTF-8' />
    <title>Rage</title>
    <meta name='description' content='Web collection of rage faces' />

    <link href='style.css' rel='stylesheet' type='text/css' />

    <link rel="icon" type="image/jpeg" href="favicon.jpg" />
  </head>

  <body>
    <form>
      <div>
        <input type='text' placeholder='Search' autofocus='autofocus' />
      </div>
    </form>

    <ul>
      <?php
        $imgs = scandir( 'faces' );
        foreach ( $imgs as $img ) {
          if ( $img == '.' || $img == '..' ) {
            continue;
          }

          $exploded = explode( '.', $img, 2 );
          $alt = ucfirst( str_replace( '_', ' ', $exploded[ 0 ] ) );

          // imagecreatefromstring( file
      ?>
      <li>
        <img src='faces/<?= $img ?>' alt='<?= $alt ?>' />
      </li>
      <?php
        }
      ?>
    </ul>

    <script src='search.js'></script>
  </body>
</html>
