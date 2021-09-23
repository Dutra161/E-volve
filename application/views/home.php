<div class="px-4 pt-5 mb-5 text-center border-bottom">
  <h1 class="display-4 fw-bold">E-Volve</h1>
  <div class="col-lg-6 mx-auto">
    <p class="lead mb-4">E-Volve is a Web-Tool for Protein mutations analysis.</p>
    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">

    
      <button class="btn btn-primary btn-raised animated zoomInUp animation-delay-15" onClick="set_example()">
            Try now!</button>
      <a href="http://bioinfo.dcc.ufmg.br/vtr/covid_home" class="btn btn-outline-danger">Explore Sars-CoV-2 database</a> 
    
  </div>
  <div class="overflow-hidden" style="max-height: 30vh;">
    <div class="container px-5">
      <img src="<?php echo base_url(); ?>public/Styles/home.jpg" class="img-fluid border rounded-3 shadow-lg mb-4" alt="main image evolve" width="700" height="500" loading="lazy">
    </div>
  </div>
</div>

<!-- 
<div class="ms-hero-page-override ms-hero-img-team ms-hero-bg-primary">
  <div class="container">
    <div class="text-center">
      <h1 class="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">E-Volve</h1>
      <p class="lead lead-lg color-light text-center center-block mt-2 mw-800 text-uppercase fw-300 animated fadeInUp animation-delay-7">
        <br>E-Volve is a Web-Tool for Protein mutations analysis.</p>
        <button class="btn btn-sm btn-raised btn-white color-primary animated zoomInUp animation-delay-15" onClick="set_example()">
          Explore an Example<div class="ripple-container"></div></button>
    </div>
  </div>
  </div> -->


  <div class="container mb-5" id="try">
    
    <div class="card card-hero animated fadeInUp animation-delay-7">
    <div class="card-block">
    <form class="form-horizontal container mb-4" method="POST" action="<?php echo base_url(); ?>resolving" enctype="multipart/form-data">

        <h1 class="text-center p-4">Try now!</h1>


        <div class="mb-3 row">
          <div class="col-sm-10 input-group">
            <label for="inputFile" class="col-sm-2 col-form-label text-right"><strong>Input (protein)*</strong></label>
            <input type="file" name="protein" accept=".pdb" class="form-control" id="inputFile">
            <input type="text" name="proteinpdb" id="idpdb" class="form-control" placeholder="or type a PDB ID...">
            <span data-toggle='tooltip' data-placement='top' class="ms-icon color-primary ms-icon-inverse ms-icon-circle ms-icon-sm text-primary col-2"
                title="Format: PDB | four characteres">
                <i class="bi-question-circle" style="font-size: 1rem"></i>
            </span>
          </div>
        </div>

        <div class="mb-3 row">
          <label class="col-2 col-form-label text-right"><strong>Mutations*</strong></label>

            <div class="col-8">
              <input class="form-control" name="mutations" rows="3" id="mutations" placeholder="Mutations, chain: position and mutation (or del in case of deletion); eg.: A:501Y, B:502del"></input>
            </div>

            <span data-toggle='tooltip' data-placement='top' class="text-left ms-icon color-primary ms-icon-inverse ms-icon-circle ms-icon-sm text-primary col-2"
                title="Select what mutations you want to apply, type: Chain:Residue_positionTarget_residue, example: E:484K.">
                <i class="bi-question-circle" style="font-size: 1rem"></i>
            </span>

        </div>


        <div class="mb-3 row" id="pairs">
          <img src="<?=base_url()?>public/img/n.jpg" style="max-width:300px" class="mx-auto d-block" id="fig_home">
          <div class="input-group" id='pair0'>
            <label class="col-2 text-right"><strong>Chain pairs</strong><span class="badge bg-secondary">leave blank for all</span></label>
            
              <input type="text" name="chain10" id='pair01' class="form-control" placeholder="eg. A">
              <input type="text" name="chain20" id='pair02' class="form-control" placeholder="eg. B">

              <span class=" text-left bi d-block mx-auto mb-1 col-2 text-primary text-center" data-toggle='tooltip' data-placement='top'
                  title="Select chain pairs to be used in contact calculation, example: E A, A K...">
                <i class="bi-question-circle" style="font-size: 1rem"></i>
              </span>

          </div>
        </div>

        <div class="mb-3 row">
          <label  class="col-sm-2 col-form-label text-right"><strong>Set more chains</strong></label>
          <div class="col-sm-10 text-right">
            <button type="button" onclick="add_pair()" class="btn btn-raised btn-outline-primary w-100">Add Pairs</button>
          </div>
        </div>

        <div class="mb-3 row">
          <label  class="col-sm-2 col-form-label text-right"><strong>Project Name</strong> <span class="badge bg-secondary">optional</span></label>
          <div class="col-sm-10">
            <input type="text" name="project" id="name" class="form-control col-10" placeholder="ex. ProjectCovid123...">
          </div>
        </div>

        <div class="mb-3 row">
          <label  class="col-sm-2 col-form-label"><strong>Terms of use</strong> <span class="badge bg-danger">* obligatory</label></label>
          <div class="col-sm-10">

            <input class="p-4 text-sm" id='ml' type="checkbox" onchange="modeller_license(this)"> 
                    I claim that I have an academic MODELLER license. If you don't, you can get a free license at:<br>
            <a href="https://salilab.org/modeller/nonacademic.html" target="_blank"> get MODELLER Academic License</a>

          </div>
        </div>

        <div class="mb-3 row">
          <div class="d-grid gap-2">
            <button class="btn btn-primary btn-lg" name="submit" id="submit_button" disabled>Start
                <i class="zmdi zmdi-long-arrow-right no-mr ml-1"></i>
            </button>
          </div>
        </div>



<!--
        <fieldset class="container">

          <div class="form-group row gap-2">
            
            <label for="inputFile" class="col-lg-2 control-label"><strong>Protein File</strong></label>

            <div class="input-group col-10">
              <input type="file" name="protein" accept=".pdb" class="form-control" id="inputFile">
              <input type="text" name="proteinpdb" id="idpdb" class="form-control" placeholder="or type a PDB ID...">
            </div>
          </div>

          <div class="form-group row gap-2">
            <label for="textArea" class="col-lg-2 control-label"><strong>Mutations</strong></label>
            <div class="col-lg-9">
              <input class="form-control" name="mutations" rows="3" id="mutations" placeholder="Mutations, chain: position and mutation(or del in case of deletion)...(ex. A:501Y, B:502del)"></input>
            </div>
            <div class="col-md-1">
              <span data-toggle='tooltip' data-placement='top' class="ms-icon color-primary ms-icon-inverse ms-icon-circle ms-icon-sm text-primary"
                title="Select what mutations you want to apply, type: Chain:Residue_positionTarget_residue, example: E:484K.">
                <i class="bi-question-circle" style="font-size: 1rem"></i>
              </span>
            </div>
          </div>

          <div id="pairs">
            <div class="form-group row gap-2" id='pair0'>
              <label for="inputEmail" class="col-md-2 control-label"><strong>Chain pairs</strong></label>

              <div class="input-group col-md-9">
                <input type="text" name="chain10" id='pair01' class="form-control" placeholder="eg. A">
                <input type="text" name="chain20" id='pair02' class="form-control" placeholder="eg. B">
              </div>

              <div class="col-md-1">
                <span class="bi d-block mx-auto mb-1 text-primary text-center" data-toggle='tooltip' data-placement='top'
                  title="Select chain pairs to be used in contact calculation, example: E A, A K...">
                  <i class="bi-question-circle" style="font-size: 1rem"></i>
                </span>
              </div>
            </div>
          </div>

          <div class="form-group row justify-content-end gap-2">
            <div class="d-grid">
              <button type="button" onclick="add_pair()" class="btn btn-raised btn-outline-primary">Add Pairs</button>
            </div>
          </div>

          <div class="form-group row">
            <label for="inputEmail" class="col-md-2 control-label">Project Name</label>
            <div class="col-md-10">
              <input type="text" name="project" id="name" class="form-control" placeholder="ex. ProjectCovid123...">
            </div>
          </div>

          <div class="form-group row justify-content-center gap-2">
           <label for="inputEmail" class="col-md-2 control-label"></label>
            <div class="col-md-10">
              <div class="form-group mt-1">
                <label>
                  <input id='ml' type="checkbox" onchange="modeller_license(this)"> 
                    I claim that I have an academic Modeller license (if you don't, you can get a free license at:
                      <a href="https://salilab.org/modeller/nonacademic.html" target="_blank"> Get Modeller Academic License)</a>
                </label>
              </div>
            </div>
          </div>

          <div class="form-group row justify-content-end mb-4 p-2">
            <div class="d-grid gap-2">
              <button class="btn btn-primary" name="submit" id="submit_button" disabled>Start
                <i class="zmdi zmdi-long-arrow-right no-mr ml-1"></i>
              </button>
            </div>
          </div>
        </fieldset> -->
      </form>
    </div>
  </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>


<script src="<?php echo base_url(); ?>public/bootstrap/jquery.min.js" type="text/javascript"></script>
<script src="<?php echo base_url(); ?>public/bootstrap/js/bootstrap.bundle.min.js" type="text/javascript"></script>
<script src="<?php echo base_url(); ?>public/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>

<script type='text/javascript'>
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
</script>

<script>
  function modeller_license(element){
    var button = document.getElementById("submit_button");
    button.disabled = !element.checked;
  }
</script>