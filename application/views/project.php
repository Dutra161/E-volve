<?php 
    $data = file_get_contents('public/projects/'.$project.'/resume.json');
    $data = json_decode($data,true);
    $path_map= 'public/projects/'.$project.'/vtr/map/';
    $path_pdb='public/projects/'.$project.'/pdbs/';
    $directory= str_replace($path_map, "", glob($path_map . "*.html"));
    $DPdb=str_replace($path_pdb,"",glob($path_pdb."*.pdb"));
    $list_Ab=array();
    if(file_exists('public/projects/'.$project.'/vtr/map/')){
        foreach($directory as $d){
            $point =strpos($d,'.');
            
            $chain_name=$point-2;
            $chainName[] = substr($d,$chain_name,2);
            
        }
        $chainName= array_unique($chainName);
        
    
    
        foreach($chainName as $c){
            foreach($directory as $d){
                if($c == substr($d,$chain_name,2)){
                
                    if(strpos($d,'AB-Brazil') !== false ){
                        
                        $list_Ab[]=$d;
                    }
                    else{
                    
                        $list_Ace2[]=$d;
                    }
                }
            }
            if($list_Ab!==[]){
                $biggerAb[]=$list_Ab;
                $biggerAce2[]=$list_Ace2;
                unset($list_Ab);
                unset($list_Ace2);
            }
        }
    }
    foreach($DPdb as $j){
        if((strpos($j,'mut') or strpos($j,'or'))!== false){
            $DPdb_name[]=$j;
        }
    }
?>

<div id='download' class="container-fluid">
    <div id='container'>
        <div class="row">
            <div class="col-12">
                <div class="py-2">
                    <div class="card-block">
                        </br>
                        <div class="alert alert-success" role="alert">                       
                        
                            <div class="row text-sm">
                                <div class="col-4">
                                    <p class="mb-0"><b>Execution time:</b> <?php echo round(floatval($data['time']),2)?> seconds</p>
                                </div>
                                <div class="col-4">
                                    <p class="mb-0"><b>Modelling method<span data-toggle='tooltip' data-placement='top' class="ms-icon color-primary ms-icon-inverse ms-icon-circle ms-icon-sm text-primary col-2"
                title="Tells you which style was selected to do the protein modeling: Modeller mutate.py script or Modeller standard fast model.">
                <i class="bi-question-circle" style="font-size: 1rem"></i>
            </span>: </b> <?php echo $data['method']?></p>
                                </div>
                                <div class="col-4">
                                    <p class="mb-0"><b>Download PDB:</b> <?php
                                        echo('<a href="'.$path_pdb.$DPdb_name[0].'" target="_blank" 
                                        class="m-1 alert-link"><i class="zmdi zmdi-download"></i> Mutant</a> | ');
                                        echo('<a href="'.$path_pdb.$DPdb_name[1].'" target="_blank" 
                                        class="m-1 alert-link"><i class="zmdi zmdi-download"></i> Wild</a>');
                                        ?>
                                    </p>
                                </div>                               
                            </div>
                        </div>
                        </br>
                        <div class="row" style="font-size: 15px; line-height: 1.5;">
                            <div class="col-lg-12">
                                <h3>Results</h3>
                            </div>
                        </div>
                        <div class="row" style="font-size: 15px; line-height: 1.5;">
                            <div class="col-lg-12">
                                <table class="data table table-no-border table-striped">
                                    <thead>
                                        <tr>
                                            <th>Matches</th>
                                            <th>VTR</yh>
                                            <th>AVD</th>
                                            <th>Protein</th>
                                            <th>First Chain</th>
                                            <th>Second Chain</th>
                                            <th class='no-sort'>View</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php
                                            $path = 'public/projects/'.$project.'/vtr/Logs/';
                                            $dir = dir($path);
                                            $chains = '';
                                            while($file = $dir->read()){
                                                if((".txt"==substr($file,-4))&&("_executionlog.txt"!=substr($file,-17))&&("_warnings.txt"!=substr($file,-13))){
                                                    $lines = file('public/projects/'.$project.'/vtr/Logs/'.$file);
                                                    
                                                    if (filesize('public/projects/'.$project.'/vtr/Logs/'.$file) != 0){
                                                        if (substr($lines[0],strpos($lines[0],',')+1,1) != '0'){
                                                            echo "<tr>\n";
                                                        }
                                                    }
                                                    foreach ($lines as $x => $line) {
                                                        if (($x == 0)){
                                                            $offset = strpos($line,',')+1;
                                                            echo "<td>".substr($line,$offset,2)."</td>\n";
                                                        }
                                                        if (($x == 3) || ($x == 4)){
                                                            echo "<td>".substr($line,strpos($line,' = ') + 3)."</td>\n";
                                                        }else if (($x == 5) || ($x == 6) || ($x == 7)){
                                                            echo "<td>".$line."</td>\n";
                                                        }
                                                        if ((6 == $x) || (7 == $x) || (9 == $x) || (10 == $x)){
                                                            if ("All" == substr($line,0,-1)){
                                                                $chains = $chains.'*';
                                                            }else{
                                                                $chains = $chains.$line;
                                                            }
                                                        }
                                                        if (5 == $x){
                                                            $protein1 = str_replace('.','',substr($line,0,-5));
                                                        }
                                                        if (8 == $x){
                                                            $protein2 = str_replace('.','',substr($line,0,-5));
                                                        }
                                                        if (11 == $x){
                                                            $cutoff = $line;
                                                        }
                                                        if (12 == $x){
                                                            if (substr($line,-2) == 'ON'){
                                                                $detail = 'd';
                                                                $type = $type.'d';
                                                            }else{
                                                                $detail = '';
                                                            }
                                                        }
                                                        if ($x == 1){
                                                            if ('0' == substr($lines[0],strpos($lines[0],',')+1,1)){
                                                                goto more;				
                                                            }
                                                        }
                                                    }
                                                    if ($chains == '****'){
                                                        $type = $type.$cutoff;
                                                    }else{
                                                        $type = $type.$chains.$cutoff;
                                                    }
                                                }
                                                    
                                                    if (!empty($protein1)){
                                                        echo'<td>
                                <a target="_blank" href="'.base_url().'vtr?'.$project.'@'.$protein1.'_x_'.$protein2.$type.'" class="btn btn-primary btn-danger btn-sm">
                                    <i class="zmdi zmdi-download"></i>Show details</a>
                                </a></td>'."\n";
                                                    echo "</tr>\n";
                                                    }
                                                more:
                                                unset($protein1);
                                                unset($protein2);
                                                $type = '-';
                                                $chains = '';
                                                $cutoff = '';
                                            }
                                        ?>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <br/>
                                <?php
                                    if(file_exists('public/projects/'.$project.'/vtr/map/')){
                                        for($i=0;$i<count($chainName);$i++){
                                            echo(
                                                "  <div class='row bg-white py-4 mt-2' style='font-size: 16px; line-height: 1;'> 
                                                        <div class='row'>
                                                            <h3 class='text-center py-2'>Heatmaps (Chain ".substr($biggerAb[$i][0],$chain_name,1)." x Chain ".substr($biggerAb[$i][0],$chain_name+1,1)."</script>)<span data-toggle='tooltip' data-placement='top' class='ms-icon color-primary ms-icon-inverse ms-icon-circle ms-icon-sm text-primary col-2'
                                                            title='The heatmaps are an overlay of all the spike-antibody and spike-ACE2 contact maps we have built in our Database. In it you can see where the user-supplied mutations stand out, giving a sense of how mutations can affect protein interactions with antibodies or ACE2.'>
                                                            <i class='bi-question-circle' style='font-size: 1rem'></i>
                                                        </span></h3>
                                                            
                                                            <div class='row'>

                                                                <div class='col-6'>
                                                                    <div class='' role='tab' id='codeHead".substr($biggerAb[$i][0],$chain_name,1).substr($biggerAb[$i][0],$chain_name+1,1)."'>
                                                                        <h4 class=''>
                                                                        <a class='collapsed withripple' role='button' data-toggle='collapse' href=#".substr($biggerAb[$i][0],$chain_name,1).substr($biggerAb[$i][0],$chain_name+1,1)." aria-expanded='false' aria-controls=".substr($biggerAb[$i][0],$chain_name,1).substr($biggerAb[$i][0],$chain_name+1,1).">
                                                                            <i class='zmdi zmdi-code'></i> Antibody </a>
                                                                        </h4>
                                                                    </div>

                                                                    <div id='".substr($biggerAb[$i][0],$chain_name,1).substr($biggerAb[$i][0],$chain_name+1,1)."' class='/*card-collapse collapse*/' role='tabpanel' aria-labelledby=codeHead".substr($biggerAb[$i][0],$chain_name,1).substr($biggerAb[$i][0],$chain_name+1,1).">
                                                                        <div class='card-code-block'>
                                                                            <button type='button' class='btn btn-sm btn-primary btn-default animated' onclick='mudando(\"".$biggerAb[$i][2]."\",\"Ab$i\");'>Show all</button>
                                                                            <button type='button' class='btn btn-sm btn-primary btn-default animated' onclick='mudando(\"".$biggerAb[$i][0]."\",\"Ab$i\");'>Attractive</button>
                                                                            <button type='button' class='btn btn-sm btn-primary btn-default animated' onclick='mudando(\"".$biggerAb[$i][5]."\",\"Ab$i\");'>Aromatic</button>
                                                                            <button type='button' class='btn btn-sm btn-primary btn-default animated' onclick='mudando(\"".$biggerAb[$i][4]."\",\"Ab$i\");'>Repulsive</button>
                                                                            <button type='button' class='btn btn-sm btn-primary btn-default animated' onclick='mudando(\"".$biggerAb[$i][3]."\",\"Ab$i\");'>Hydrophobic</button>
                                                                            <button type='button' class='btn btn-sm btn-primary btn-default animated' onclick='mudando(\"".$biggerAb[$i][1]."\",\"Ab$i\");'>Hydrogen Bonds</button>
                                                                            <div class='form-group'>
                                                                                <div class='col-md-12' style='display: flex;justify-content: center;' >
                                                                                    <th><iframe id=Ab$i src='public/projects/$project/vtr/map/".$biggerAb[$i][2]."' style='height:700px;width:800px;'></iframe></th>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            
                                                                <div class='col-6'>
                                                                    <div class='' role='tab' id=codeHead1".substr($biggerAb[$i][0],$chain_name,1).substr($biggerAb[$i][0],$chain_name+1,1).">
                                                                        <h4 class=''>
                                                                        <a class='collapsed withripple' role='button' data-toggle='collapse' href=#1".substr($biggerAb[$i][0],$chain_name,1).substr($biggerAb[$i][0],$chain_name+1,1)." aria-expanded='false' aria-controls=1".substr($biggerAb[$i][0],$chain_name,1).substr($biggerAb[$i][0],$chain_name+1,1).">
                                                                            <i class='zmdi zmdi-code'></i> ACE2 </a>
                                                                        </h4>
                                                                    </div>
                                                                    <div id=1".substr($biggerAb[$i][0],$chain_name,1).substr($biggerAb[$i][0],$chain_name+1,1)." class='' role='tabpanel' aria-labelledby=codeHead1".substr($biggerAb[$i][0],$chain_name,1).substr($biggerAb[$i][0],$chain_name+1,1).">
                                                                        <div class='card-code-block'>
                                                                        <button type='button' class='btn btn-sm btn-primary btn-default animated' onclick='mudando(\"".$biggerAce2[$i][2]."\",\"A2$i\");'>Show all</button>
                                                                        <button type='button' class='btn btn-sm btn-primary btn-default animated' onclick='mudando(\"".$biggerAce2[$i][0]."\",\"A2$i\");'>Attractive</button>
                                                                        <button type='button' class='btn btn-sm btn-primary btn-default animated' onclick='mudando(\"".$biggerAce2[$i][5]."\",\"A2$i\");'>Aromatic</button>
                                                                        <button type='button' class='btn btn-sm btn-primary btn-default animated' onclick='mudando(\"".$biggerAce2[$i][4]."\",\"A2$i\");'>Repulsive</button>
                                                                        <button type='button' class='btn btn-sm btn-primary btn-default animated' onclick='mudando(\"".$biggerAce2[$i][3]."\",\"A2$i\");'>Hydrophobic</button>
                                                                        <button type='button' class='btn btn-sm btn-primary btn-default animated' onclick='mudando(\"".$biggerAce2[$i][1]."\",\"A2$i\");'>Hydrogen Bonds</button>
                                                                            <div class='form-group'>
                                                                                <div class='col-md-12' style='display: flex;justify-content: center;' >
                                                                                    <th><iframe id=A2$i src='public/projects/$project/vtr/map/".$biggerAce2[$i][2]."' style='height:700px;width:800px;'></iframe></th>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                "
                                                );
                                        }
                                    }
                                ?>
                        </div>
                        <div class="row py-4 mt-1" style="font-size: 13px; line-height: 1.5;">
                            <div class="col-lg-12">
                                <h3>Mutations</h3>
                            </div>
                        </div>
                        <div class="row" style="font-size: 13px; line-height: 1.5;">
                            <div class="col-lg-12">
                                <table class="data table table-no-border table-striped">
                                    <thead>
                                        <tr>
                                            <th>Chain</th>
                                            <th>Mutation</th>
                                            <th>Applied</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php
                                        foreach ($data['mutations'] as $mutation){
                                            echo "
                                        <tr>
                                            <td>".$mutation[0]."</td>
                                            <td>".$mutation[1]."</td>
                                            <td>".$mutation[2]."</td>
                                        </tr>
                                        ";
                                        }
                                        ?>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                        <?php
                        if ($data['interactions'] != array()){
                        
                            echo '
                        <div class="alert alert-danger text-sm mt-4">
                            <div class="col-lg-12">
                                <span"><b>Warnings</b></span>
                                <span> | Chain pairs: ';
                            foreach ($data['interactions'] as $pair){
                                echo $pair[0].' - '.$pair[1].', ';
                            } 
                            echo'
                               | E-Volve did not find relevant matches or they do not exist.</span>
                            </div>
                        </div>';
                        }
                        ?>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

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
      //$.fn.dataTable.ext.classes.sPageButton = 'btn-circle btn-circle-primary';
      //$.fn.dataTable.ext.classes.sPageButtonActive = 'btn-circle-raised';
      //$.fn.dataTable.ext.classes.sFilterInput = "form-control";
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
    
      oTable.draw();
  } );
</script>

<script type="text/javascript">
    var teste='General';
    function mudando(h,j){
        window.teste = h;
        console.log(window.teste);
        console.log(j);

        var iframe = document.getElementById(j);
        iframe.src = 'public/projects/<?php echo $project ?>/vtr/map/'+h;
    }
</script>

<script src="<?php echo base_url(); ?>public/bootstrap/jquery.min.js" type="text/javascript"></script>
<script src="<?php echo base_url(); ?>public/bootstrap/js/bootstrap.bundle.min.js" type="text/javascript"></script>
<script src="<?php echo base_url(); ?>public/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>

<script type='text/javascript'>
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
</script>