</head>
  <body>
    <div class="bg-full-page bg-primary back-fixed">
      <div class="mw-500 absolute-center">
        <div class="card animated zoomInUp animation-delay-7 color-primary withripple">
          <div class="card-block">
            <div class="text-center color-dark">
              <img src="<?php echo base_url(); ?>public/Styles/logo.svg">
              <h1 class="color-primary text-big">OOPPSS</h1>
              <h2>Incorrect Requisistion</h2>
              <p class="lead lead-sm">Your requisiton have the following problems: </br>
              <?php foreach ($json['error_list'] as $index => $element){
                  echo $index.' : '.$element.'</br>';
              }
              ?>
              </p>
              <a href="<?php echo base_url(); ?>" class="btn btn-sm btn-primary btn-raised">
                <i class="zmdi zmdi-home"></i> Go Home and fix</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>