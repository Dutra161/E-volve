</main>

<footer class="ms-footer mt-4 text-center py-2">
  <div class="container">
    <p style="font-size: 10px;">&copy; 2022 LBS | Created by <a href="http://bioinfo.dcc.ufmg.br/" target = "_blank">LBS team</a> | Template
    Material Style 2017 | <a href="https://br.freepik.com/fotos-vetores-gratis/logotipo" target = "_blank">Logotipo vetor criado por freepik - br.freepik.com</a>.</p>
  </div>
  <div class="btn-back-top">
    <a href="#" data-scroll id="back-top" class="btn-circle btn-circle-primary btn-circle-sm btn-circle-raised ">
      <i class="zmdi zmdi-long-arrow-up"></i>
    </a>
  </div>
</footer>

<script>
  var counter = 0;
  function add_pair(){
    window.counter ++;
    var row = document.createElement("div");
    row.classList.add("form-group");
    row.classList.add("row");
    row.classList.add("m-1");
    row.id="pair"+window.counter.toString();

    var offset = document.createElement("div");
    offset.classList.add("col-md-2");

    var column = document.createElement("div");
    column.classList.add("col-md-5");

    var input = document.createElement("input");
    input.type="text";
    input.name="chain1"+window.counter.toString();
    input.classList.add("form-control");
 
    input.placeholder="ex. A...";

    column.appendChild(input);
    row.appendChild(offset);
    row.appendChild(column);

    var column = document.createElement("div");
    column.classList.add("col-md-4");

    var offset = document.createElement("div");
    column.classList.add("col-md-1");

    var input = document.createElement("input");
    input.type="text";
    input.name="chain2"+window.counter.toString();
    input.classList.add("form-control");
    input.placeholder="ex. B...";

    column.appendChild(input);
    row.appendChild(column);
    row.appendChild(offset);

    var div = document.getElementById("pairs");
    div.appendChild(row)
  }

  function clear_pairs(){
    for(var i = 0; window.counter > 0; window.counter--){
      console.log(window.counter)
      var entry = document.getElementById("pair"+window.counter.toString());
      entry.remove();
    }
  }

  function set_example(){
    clear_pairs();
    document.getElementById('idpdb').value = "6m0j";
    document.getElementById('mutations').value = "E:138Y,E:614G,E:484K,E:655Y,E:417T,E:18F,E:501Y,E:26S,E:190S,E:20N,E:1027I,E:1176F";
    document.getElementById('pair01').value = "E";
    document.getElementById('pair02').value = "A";
    document.getElementById('name').value = "6m0J_484K";

    // rola a página até a posição do formulário
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#try").offset().top
    }, 500);

  }

  $(()=>{
    $('#pair01').mouseover(function() {
      $('#fig_home').attr('src', 'public/img/a.jpg');
    })
    .mouseout(function(){
      $('#fig_home').attr('src', 'public/img/n.jpg');
    });

    $('#pair02').mouseover(function() {
      $('#fig_home').attr('src', 'public/img/b.jpg');
    }).mouseout(function(){
      $('#fig_home').attr('src', 'public/img/n.jpg');
    });

    $('#idpdb').on('change', function(){
      if($('#idpdb').val().length == 4){
        $('#idpdb').removeClass('is-invalid')
        $('#idpdb').addClass('is-valid')
      } 
      else if($('#idpdb').val().length == 0){
        $('#idpdb').removeClass('is-valid')
        $('#idpdb').removeClass('is-invalid')
        console.log('Send a file')
      }
      else{
        $('#idpdb').addClass('is-invalid')
        $('#idpdb').removeClass('is-valid')
      }
    })

  });
</script>