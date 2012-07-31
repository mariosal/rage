<!DOCTYPE html>
<html>
  <head>
    <meta charset='UTF-8' />
    <title>Rage</title>
    <meta name='description' content='Web collection of rage faces' />

    <link href='css/style.css' rel='stylesheet' type='text/css' />
    <link href='css/modal.css' rel='stylesheet' type='text/css' />

    <link rel="icon" type="image/jpeg" href="favicon.jpg" />
  </head>

  <body>
    <header>
      <form>
        <div>
          <input type='text' placeholder='Type to search' autofocus='autofocus' />
        </div>
      </form>
    </header>

    <ul>
      <?php
        $imgs = scandir( 'faces' );
        foreach ( $imgs as $img ) {
          if ( $img == '.' || $img == '..' ) {
            continue;
          }

          $exploded = explode( '.', $img, 2 );
          $alt = ucfirst( str_replace( '_', ' ', $exploded[ 0 ] ) );
      ?>
      <li>
        <h2><?= ucwords( $alt ) ?></h2>
        <img src='faces/<?= $img ?>' alt='<?= $alt ?>' />
      </li>
      <?php
        }
      ?>
    </ul>

    <div class='overlay'></div>
    <div class='fruitless'>
      <p>We can't find any memes with that name.</p>
      <p>Try <a href=''>searching memebase for '<span id='q'>term</span>'</a>.</p>
    </div>

    <div class='modalcontainer'>
        <div class='modal'>
            <h2>Cereal guy</h2>

            <img src='faces/cereal_guy.svg' alt='Cereal guy' />

            Share this meme:

            <input type='text' value='url' />
        </div>
    </div>

    <script src='js/jquery-1.7.2.min.js'></script>
    <script src='js/modal.js'></script>
    <script src='js/search.js'></script>
    <script src='js/ui.js'></script>
  </body>
</html>
