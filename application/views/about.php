    <div class="ms-site-container">
      <!-- Modal -->
    <div id='download'>
      <header class="bg ms-hero-page ms-hero-bg-dark-light ms-hero-img-airplane mb-4">
        <div class="container">
          <div class="text-center">
            <h1 class="color-primary mb-4 animated fadeInDown animation-delay-4">About Us</h1>
            <p class="lead lead-xl mw-800 center-block color-medium mb-2 animated fadeInDown animation-delay-4"> Evolve is a Webtool designed to 
              <span class="colorStar">model mutations in the input protein complex using Modeller</span>.
              <br> Then, uses VTR to 
              <span class="colorStar animation-delay-10">calculate and compare the protein contacts</span> </p>
          </div>
        </div>
      </header>
      
      <div class="container wow fadeInUp">
        <div class="row">
          <div class="col-lg-6 text-justify">
            <h2 class="color-primary right-line">Modeller mutate.py script</h2>
            <p class="dropcaps"> This modelling way uses the Modeller mutate.py script, available at Modeller's website.
               This script applies punctual replacements,
                has higher precision because doesn't change the protein conformation, but it is slower,
                 since applies one mutation at a time. </p>
          </div>

          <div class="col-lg-6 text-justify">
            <h2 class="color-primary right-line">Modeller standard fast model</h2>
            <p class="dropcaps"> Modeller's mutate.py doesn't apply deletions, then we generate a mutated sequence
               of the input complex, and E-Volve uses the Modeller standard fast model procedure to create a model
               of the mutated protein, using the mutated sequence and the input structure as a template.
            </p>
          </div>

          
        </div>
      </div>
      

      <div class="container wow fadeInUp">
        <div class="row">
          <div class="card-block-big">
            <h2 class="color-primary right-line">Behavior Description</h1>
            <p>The software search for possibles matches between contacts, after,
              <strong>refine and select the bests matches</strong> for this reason, the bigger the input file(in number of atoms), or the bigger the similarity between then
              <strong> more time is taken to find all possible contact</strong> and more time is taken for the refinment.</p>
            <p>The loading page <strong>wait up to 30 minutes</strong> for the match completish, but some times the match process takes longer,
              so a <strong>"Time Out" alert is showed and the user recieves a link</strong> to try to access the alignment in future.</p>
          </div>
        </div>
      </div>
      <div class="container wow fadeInUp">
        <div class="row">
          <div class="card-block-big">
            <h2 class="color-primary right-line">VTR</h1>
            <p>More information about the VTR procedure can be found at: 
            <a href="http://bioinfo.dcc.ufmg.br/vtr/about">VTR</a></p>
          </div>
        </div>
      </div>
      <div class="container wow fadeInUp">
        <div class="row">
          <div class="card-block-big">
            <h2 class="color-primary right-line">References</h1>
            <ul>
              <li>Webb, B. & Sali, A. Comparative Protein Structure Modeling Using MODELLER. Curr Protoc Bioinformatics 54, 5.6.1-5.6.37 (2016).</li>
              <li>Pimentel V, Mariano D, Cantão LXS, Bastos LL, Fischer P, de Lima LHF, et al. VTR: a web tool for identifying analogous contacts on protein structures and their complexes. Front Bioinform. 1AD;0. doi:10.3389/fbinf.2021.730350.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>