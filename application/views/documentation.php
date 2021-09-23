<div class="ms-site-container">
      <!-- Modal -->
    <div id='download'>
      <header class="bg ms-hero-page ms-hero-bg-dark-light ms-hero-img-airplane mb-4">
        <div class="container">
          <div class="text-center">
            <h1 class="color-primary mb-4 animated fadeInDown animation-delay-4">How to use E-volve</h1>
            <p class="lead lead-xl mw-800 center-block color-medium mb-2 animated fadeInDown animation-delay-4"> A fast tutorial for new users
            </p>
            
          </div>
        </div>
      </header>
      
      <div class="container wow fadeInUp">
        <div class="row">
          <div class="col-lg-12 text-justify">
            <p class="dropcaps"><h4 class="color-primary right-line">How to use</h4>
              E-Volve recieves as entries some protein complex in PDB format, a list of mutations and pairs of chains to be analyzed.
              These entries are detailed below.
            </p>
            <!-- <p> Link for paper executions:
              <a href="<?php echo base_url()?>exemple" target=_blank>Myoglobin and hemoglobin</a> | 
              <a href="<?php echo base_url()?>vtr?6m0j_x_2ajf-dAEAE2" target=_blank>Receptor recognition by SARS-CoV-2 and SARS-CoV</a> | 
              <a href="<?php echo base_url()?>vtr?bgl1a_x_bgl1b-2" target=_blank>Glucose-tolerant β-glucosidases</a>
            </p> -->
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 text-justify">
            <h2 class="color-primary right-line">Input Data</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 text-justify" style="padding-top: 5%;">
            <div class="col-md-12">
              <a href="javascript:void(0)" class="img-thumbnail withripple">
                <div>
                  <img class='img-fluid' alt="..." src='<?php echo base_url(); ?>public/Styles/input.png'>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-6 text-justify">
            <div class="row">
              <div class="col-lg-12 text-justify">
                <p class="dropcaps"><h4 class="color-primary right-line">Protein PDB</h4>
                The first field is to upload the PDB file from your computer, while the second entry is for insert the PDB ID of the protein complex you want to mutate, and we will fetch the file from ​PDB.
                </p>
              </div>
            </div>
        </div>
        <div class="row">
          <div class="col-lg-6 text-justify" style="padding-top: 5%;">
            <div class="col-md-12">
              <a href="javascript:void(0)" class="img-thumbnail withripple">
                <div>
                  <img class='img-fluid' alt="..." src='<?php echo base_url(); ?>public/Styles/mutations.png'>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-6 text-justify">
            <div class="row">
              <div class="col-lg-12 text-justify">
                <p class="dropcaps"><h4 class="color-primary right-line">Mutation</h4>
                Here you can choose the mutations you want to apply to the protein complex, and you can either mutate or delete.
                You must follow the format Chain: Residue Position Residue Name. For example, E:484K, where the residue 484 from the E chain will be changed for a K(Lysine).
                </p>
              </div>
              <div class="col-lg-12 text-justify">
                <p class="dropcaps"><h4 class="color-primary right-line">Chain Pairs</h4>
                  In this field, you must select the chain pairs of some region of interest from the protein complex, for the contact calculation.
                  You must write the name of the chain exactly as in the PDB file (capital letter and only one letter). If you want to select more chain pairs you have to click on the add pairs button.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container wow fadeInUp">
        <div class="row">
          <div class="col-lg-12 text-justify">
            <h2 class="color-primary right-line">Output Info</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 text-justify">
            <h3 class="color-primary right-line">Download</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 text-justify">
            <a href="javascript:void(0)" class="img-thumbnail withripple">
              <div>
                <img class='img-fluid' alt="..." src='<?php echo base_url(); ?>public/Styles/execution.png'>
              </div>
            </a>
          </div>
          <div class="col-md-6 text-justify">
            <p>
            Shows the time it took to execute E-Volve contacts and allows the user to download the original and mutated PDB files.
            
            Also shows what was the modeling way used: Modeller standard fast model or Modeller mutate.py script.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 text-justify">
            <h3 class="color-primary right-line">Analysis</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 text-justify">
            <a href="javascript:void(0)" class="img-thumbnail withripple">
              <div>
                <img class='img-fluid' alt="..." src='<?php echo base_url(); ?>public/Styles/result.png'>
              </div>
            </a>
          </div>
          <div class="col-md-6 text-justify">
            <p>
            A table that contains general information about the contact match. The user can click on the "View" button to access the contact analysis of each chain pair.
            </p>
          </div>
        </div>
        

        <div class="row">
          <div class="col-lg-12 text-justify">
            <h3 class="color-primary right-line">Heatmaps</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 text-justify">
            <a href="javascript:void(0)" class="img-thumbnail withripple">
              <div>
                <img class='img-fluid' alt="..." src='<?php echo base_url(); ?>public/Styles/heatmaps.png'>
              </div>
            </a>
          </div>
          <div class="col-md-6 text-justify">
            <p>
            The heatmaps are a superposition of all contact maps of spike-antibody and spike-ACE2 that we built in our 
            <a href='http://bioinfo.dcc.ufmg.br/vtr/covid_home' targer='_blank'>Database</a>,
            the gradient of colors varies from red to blue, representing a small number of contacts and a numerous number of
            contacts, respectively, between that pair of residues. E-Volve also highlights the mutations provided by the user, giving a notion of how the
            mutations can affect the protein interactions with antibodies or ACE2.
            </p>
          </div>
        </div>
        

        <div class="row">
          <div class="col-lg-12 text-justify">
            <h3 class="color-primary right-line">Mutations</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 text-justify">
            <a href="javascript:void(0)" class="img-thumbnail withripple">
              <div>
                <img class='img-fluid' alt="..." src='<?php echo base_url(); ?>public/Styles/mut.png'>
              </div>
            </a>
          </div>
          <div class="col-md-6 text-justify">
            <p>
            Here, is shown which mutations were actually applied, and which were not, due to some requested residue or chain not existing.
            </p>
          </div>
        </div>
      </div>

      <div class="container wow fadeInUp">
        <div class="row">
          <div class="col-lg-12 text-justify">
            <h2 class="color-primary right-line">Example</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 text-justify">
            <a href="javascript:void(0)" class="img-thumbnail withripple">
              <div>
                <img class='img-fluid' alt="..." src='<?php echo base_url(); ?>public/Styles/example.png'>
              </div>
            </a>
          </div>
          <div class="col-md-6 text-justify">
            <p>
            When you select the example icon you will be redirected to a page with a project already created by our robots, this way you can understand about the OUTPUT we put just above and see some analysis before making your project
            </p>
          </div>
        </div>

      </div>

      <div class="container wow fadeInUp">
        <div class="row">
          <div class="col-lg-12 text-justify">
            <h2 class="color-primary right-line">Projects</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 text-justify">
            <a href="javascript:void(0)" class="img-thumbnail withripple">
              <div>
                <img class='img-fluid' alt="..." src='<?php echo base_url(); ?>public/Styles/projects.png'>
              </div>
            </a>
          </div>
          <div class="col-md-6 text-justify">
            <p>
            When you select the projects icon you will be redirected to a page which has all the projects generated, within a month, by the E-volve program. In them you can see the name of the project, which modeling method was used and you can see the project data by clicking on view.
            </p>
          </div>
        </div>

      </div>

    </div>
</div>