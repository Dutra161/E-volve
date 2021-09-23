<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>E-Volve</title>

    <link rel="shortcut icon" href="<?php echo base_url(); ?>public/Styles/favicon.png">

    <!-- <meta http-equiv="X-UA-Compatible" content="IE=edge"> -->    
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="theme-color" content="#333"> -->    
    <!-- <meta name="description" content="Material Style Theme"> -->
    <!-- <link rel="stylesheet" href="<?php echo base_url(); ?>public/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?php echo base_url(); ?>public/bootstrap/css/bootstrap-grid.min.css">
    <link rel="stylesheet" href="<?php echo base_url(); ?>public/bootstrap/css/bootstrap-reboot.min.css"> 

    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.10.20/datatables.min.css"/>
    <link rel="stylesheet" href="<?php echo base_url(); ?>public/assets/css/preload.min.css">
    <link rel="stylesheet" href="<?php echo base_url(); ?>public/assets/css/plugins.min.css">
    <link rel="stylesheet" href="<?php echo base_url(); ?>public/assets/css/style.blue-grey-500.min.css">
    <link rel="stylesheet" href="<?php echo base_url(); ?>public/Styles/backgrounds.css">
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"> -->

     <!-- atualização bootstrap 5 -->
     <link rel="stylesheet" href="<?php echo base_url(); ?>public/css/datatables.min.css">
     <link rel="stylesheet" href="<?php echo base_url(); ?>public/css/bootstrap.min.css">
     <link rel="stylesheet" href="<?php echo base_url(); ?>public/icons/bootstrap.icons.css">

     <!-- / atualização bootstrap 5 -->

     <script src="<?php echo base_url(); ?>public/js/jquery.js"></script>
     <script src="<?php echo base_url(); ?>public/js/bootstrap.bundle.min.js"></script>
     <script src="<?php echo base_url(); ?>public/js/datatables.js"></script>


  </head>
<body>

  <header>
    <div class="px-3 py-2 bg-dark text-white">
      <div class="container-fluid">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

          <!-- LOGO -->
          <a href="<?php echo base_url(); ?>" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
            <img src="<?php echo base_url(); ?>public/Styles/logo_com_texto.svg" style="max-height:40px">
          </a>
          <!-- / LOGO -->

          <style>li a:hover{ background-color: dodgerblue }</style>
          <!-- MENU SUPERIOR -->
          <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <a href="<?php echo base_url(); ?>" class="nav-link text-secondary">

                <span class="bi d-block mx-auto mb-1 text-center">
                  <i class="bi-house-fill" style="font-size: 1.5rem"></i>
                </span>

                Home
              </a>
            </li>
            <li>
              <a href="<?php echo base_url(); ?>about" class="nav-link text-white">
                <span class="bi d-block mx-auto mb-1 text-center">
                  <i class="bi-chat-square-text" style="font-size: 1.5rem"></i>
                </span>

                About
              </a>
            </li>
            <li>
              <a href="<?php echo base_url(); ?>recent" class="nav-link text-white">
                <span class="bi d-block mx-auto mb-1 text-center">
                  <i class="bi-clock-history" style="font-size: 1.5rem"></i>
                </span>
                
                Projects
              </a>
            </li>
            <li>
              <a href="<?php echo base_url(); ?>project?6m0J_484K_1692141414" class="nav-link text-white">
                <span class="bi d-block mx-auto mb-1 text-center">
                  <i class="bi-clipboard-data" style="font-size: 1.5rem"></i>
                </span>
                Example
              </a>
            </li>
            <li>
              <a href="<?php echo base_url(); ?>documentation" class="nav-link text-white">

                <span class="bi d-block mx-auto mb-1 text-center">
                  <i class="bi-question-circle" style="font-size: 1.5rem"></i>
                </span>

                Help
              </a>
            </li>
          </ul>
          <!-- / MENU SUPERIOR -->
        </div>
      </div>
    </div>
  </header>

  <main class="container-fluid bg-light pt-4">

    <!-- <div class="ms-site-container"> -->

      <!-- Modal -->
      <!-- <div class="modal modal-primary" id="ms-account-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog animated zoomIn animated-3x" role="document">
          <div class="modal-content">
            <div class="modal-header d-block shadow-2dp no-pb">
              <button type="button" class="close d-inline pull-right mt-2" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">
                  <i class="zmdi zmdi-close"></i>
                </span>
              </button>
              <div class="modal-title text-center">
                <img src="<?php echo base_url(); ?>public/Styles/logo_com_texto.svg" style="width:180px;">
                <h3 class="no-m ms-site-title"></h3>
              </div>
            </div>
          </div>
        </div>
      </div> -->

      <!-- <header class="ms-header ms-header-dark" style="min-height:80px !important"> -->
        <!--ms-header-dark-->
        <!-- <div class="container container-full">
          <div class="ms-title">
            <a href="index.php">
              <img src="<?php echo base_url(); ?>public/Styles/logo_com_texto.svg" style="width:180px">
              <h1 class="animated fadeInRight"></h1>
            </a>
          </div>

        </div>
      </header> -->

      <style>
        .ms-hero-img-team {
          background-image: url(public/Styles/home.jpg) !important;
        }
        </style>
      <!-- <nav class="navbar navbar-expand-md  navbar-static ms-navbar ms-navbar-dark">
        <div class="container container-full">
          <div class="navbar-header">
            <a class="navbar-brand" href="index.php"> -->

              <!-- <img src="assets/img/demo/logo-navbar.png" alt=""> -->
              <!-- <img src="<?php echo base_url(); ?>public/Styles/evolve_logo.svg" style="max-height:70%;>
              <span class="ms-title"></a>
          </div>
          <div class="collapse navbar-collapse" id="ms-navbar">
            <ul class="navbar-nav">
             
              <li class="nav-item dropdown">
                <a href="<?php echo base_url(); ?>about" >About </a>
              </li>
              <li class="nav-item dropdown">
                <a href="<?php echo base_url(); ?>recent" >Projects</a>
              </li>
              <li class="nav-item dropdown">
                <a href="<?php echo base_url(); ?>project?6m0J_484K_11821173557" >Example </a>
              </li>
              <li class="nav-item dropdown">
                <a href="<?php echo base_url(); ?>documentation">Help</a>
              </li>
            </ul>
          </div>
        </div> -->
        <!-- container -->
      <!-- </nav> -->