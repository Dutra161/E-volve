<?php
    $project_folder = 'public/projects/';

?>

<div id='download' class="container-fluid">
    <div id ='container'>
        <div class="row">
            <div class="col-md-12">
                <div class="card card-primary animated fadeInLeftTiny animation-delay-5 container-fluid mt-4 py-2">
                    <div class="card-block">
                        <table class="data table table-no-border table-striped">
                            <thead>
                                <tr>
                                    <th>Project name</th>
                                    <th>Modelling Method</th>
                                    <th class='no-sort'>View</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php
                                    if ($handle = opendir($project_folder)) {
                                        while (false !== ($f = readdir($handle))) {
                                            if ('.' === $f) continue;
                                            if ('..' === $f) continue;

                                            $file = $project_folder.$f.'/';
                                            
                                            if (file_exists($file.'started') &&
                                                file_exists($file.'done') &&
                                                !file_exists($file.'log')){

                                                $data = file_get_contents($file.'resume.json');
                                                $data = json_decode($data,true);
                                                
                                                echo '
                                <tr>
                                    <td>'.$f.'</td>
                                    <td>'.$data['method'].'</td>
                                    <td>
                                        <a target="_blank" href="'.base_url().'project?'.$f.'" class="btn btn-raised btn-primary btn-block btn-sm">
                                            <i class="zmdi zmdi-download"></i>View
                                        </a>
                                    </td>
                                </tr>';
                                            }
                                            //echo $file;
                                        }
                                        closedir($handle);
                                    }
                                ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>

<script type='text/javascript'>
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
</script>

<script src="<?php echo base_url(); ?>public/bootstrap/jquery.min.js" type="text/javascript"></script>
<script type="text/javascript" src="https://cdn.datatables.net/v/dt/dt-1.10.20/datatables.min.js"></script>
<script src="<?php echo base_url(); ?>public/bootstrap/js/bootstrap.bundle.min.js" type="text/javascript"></script>
<script src="<?php echo base_url(); ?>public/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>

<script type='text/javascript'>
  $(document).ready(function() {
      var eventFired = function ( type ) {
          var n = $('.data')[0];
          n.innerHTML += '<div>'+type+' event - '+new Date().getTime()+'</div>';
          n.scrollTop = n.scrollHeight;      
      }
      $.fn.dataTable.ext.classes.sPageButton = 'btn-circle btn-circle-primary';
      $.fn.dataTable.ext.classes.sPageButtonActive = 'btn-circle-raised';
      $.fn.dataTable.ext.classes.sFilterInput = "form-control";
      var oTable = $('.data').DataTable({ 
          language: { search: "" ,
            searchPlaceholder: "Search",
          },
          "columnDefs": [ {
            "targets": 'no-sort',
            "orderable": false,
          } ],
          "pagingType": "first_last_numbers",
      });
      $.fn.dataTable.ext.search.push(
        function( settings, data, dataIndex ) {
          if (data.length < 8){
            return true;
          }

          var min = data[6];
          var max = data[7];

          if (!(min === undefined))  {
            if (( min.trim() == max.trim())&&( min.trim() == 'Hydrophobic')){
              return false;
            }
              return true;
          }
        }
      );
      oTable.draw();

        
      $('#btn').on('click', function () {
        $.fn.dataTable.ext.search.pop();
        $.fn.dataTable.ext.search.push(
          function( settings, data, dataIndex ) {
            var min = data[6];
            var max = data[7];

            if ( min != max){
              return true;
            }
              return false;
          }
        );
        oTable.draw();
      } );

      $('#unbtn').on('click', function () {
        $.fn.dataTable.ext.search.pop();
        oTable.draw();
        var div = document.getElementById('warn');
        div.style.display="none";
      } );

      $('#hidro').on('click', function () {
        $.fn.dataTable.ext.search.pop();
        $.fn.dataTable.ext.search.push(
          function( settings, data, dataIndex ) {
            var min = data[6];
            var max = data[7];

            if (!(min === undefined))  {
              if (( min.trim() == max.trim())&&( min.trim() == 'Hydrophobic')){
                return false;
              }
                return true;
            }
          }
        );
        oTable.draw();
      } );



      
  } );
</script>