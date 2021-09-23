</head>
  <body>
    <div class="bg-full-page bg-primary back-fixed">
      <div class="mw-500 absolute-center">
      <?php
        if(1 == $first_load){
          echo '<div class="card animated zoomInUp animation-delay-7 color-primary withripple">';
        }else{
          echo '<div class="card animated color-primary withripple">';
        }
      ?>
          <div class="card-block">
            <div class="text-center color-dark">
              <img src="<?php echo base_url(); ?>public/Styles/logo.svg">
              <h1 class="color-primary text-big">LOADING</h1>
              <p class="lead lead-sm">We have put our robots to work.</p>
              <p class="lead lead-sm">(Characters like "-", "_", and " " are removed from the names of the files)</p>
              <div class="progress">
                  <div class="progress-bar progress-bar-primary progress-bar-striped progress-bar-animated progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 100%">
        	  </div>
    	      </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <?php
    if (!(isset($time))){
      $time = time();
    }
  ?>
    <meta http-equiv="refresh" content="10; url='<?php echo base_url(); ?>project?<?php echo $project.'$'.$time;?>'">
    </body>
</html>
