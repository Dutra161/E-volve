</head>
  <body>
  <?php setcookie('counter', 1); ?>
    <div class="bg-full-page bg-primary back-fixed">
      <div class="mw-500 absolute-center">
        <div class="card animated zoomInUp animation-delay-7 color-primary withripple">
          <div class="card-block">
            <div class="text-center color-dark">
              <img src="<?php echo base_url(); ?>public/Styles/logo.svg">

              <h1 class="color-primary text-big">Time Out!</h1>
              <h2>The Matching was taken a lot of time</h2>
              <p class="lead lead-sm">Try to access <a href='<?php 
              echo base_url().'project?'.$query;
              ?>' class="btn btn-sm btn-primary btn-raised">This link</a> we will keep working on it, save this link and after a while try to see the result.</p>
              <a href="index.php" class="btn btn-sm btn-primary btn-raised">
                <i class="zmdi zmdi-home"></i> Go Home</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>

