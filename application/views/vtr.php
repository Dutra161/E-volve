<?php
$pass = array(
  'ALA'=>'A',
  'ASX'=>'B',
  'CYS'=>'C',
  'ASP'=>'D',
  'GLU'=>'E',
  'PHE'=>'F',
  'GLY'=>'G',
  'HIS'=>'H',
  'ILE'=>'I',
  'LYS'=>'K',
  'LEU'=>'L',
  'MET'=>'M',
  'ASN'=>'N',
  'PRO'=>'P',
  'GLN'=>'Q',
  'ARG'=>'R',
  'SER'=>'S',
  'THR'=>'T',
  'VAL'=>'V',
  'TRP'=>'W',
  'TYR'=>'Y',
  'GLX'=>'Z',
);

function style($type){
  $style = array(
    'Hydrophobic' => "style='background-color: #D9944C'>",
    'Attractive' => "style='background-color: #F06291'>",
    'Repulsive' => "style='background-color: #00E0FF'>",
    'Hydrogen Bonds' => "style='background-color: #6D4ED9'>",
    'Aromatic Stacking' => "style='background-color: #7BFA79'>",
    'Disulfide Bonds' => "style='background-color: #FAF357'>"
  );

  if (array_key_exists($type,$style)){
    return ($style[$type]);
  }else{
    return("style='background-color: #FFFFFF'>");
  }
}   
?>
<!-- 
<div class="card animated fadeInLeftTiny animation-delay-5 mt-4 py-2">
        <nav class="navbar navbar-expand-sm  navbar-static ms-navbar ms-navbar-dark">
            <div class="collapse navbar-collapse" id="ms-navbar">
              <ul class="navbar-nav">
                <li class="nav-item dropdown active">
                  <a href="#tabview" class="nav-link dropdown-toggle animated fadeIn animation-delay-7" ><i class="zmdi zmdi-desktop-mac"></i><pre> </pre>Viewer</a>
                </li>
                <li class="nav-item dropdown active">
                  <a href="#graphs" class="nav-link dropdown-toggle animated fadeIn animation-delay-7" ><i class="fa fa-area-chart"></i><pre> </pre>Graphs</a>
                </li>
              </ul>
            </div>
        </nav> -->
<style>
  .text-sm{
    font-size:11px !important;
  }
</style>        
<div class="container-fluid pb-2">
<div>
  <div class="container mb-5">
    <div class="row p-4 pb-0 pe-lg-0 p-lg-3 align-items-center rounded-3 border shadow-lg">
      <div class="col-lg-3 text-sm">
<?php
        $contact1_chain = '';
        $contact2_chain = '';
        if (strlen($type) <= 3){
          $contact1_chain = '**';
          $contact2_chain = '**';
        }else{
          $contact1_chain = substr($type,-5,-3);
          $contact2_chain = substr($type,-3,-1);
        }
        chdir('public/projects/'.$target.'/vtr');
        class Protein {
          public $VMD;
          public $residues;
          public $atoms;
          public $contactlist;
          public function set($input){
            $pass = array(
              'ALA'=>'A',
              'ASX'=>'B',
              'CYS'=>'C',
              'ASP'=>'D',
              'GLU'=>'E',
              'PHE'=>'F',
              'GLY'=>'G',
              'HIS'=>'H',
              'ILE'=>'I',
              'LYS'=>'K',
              'LEU'=>'L',
              'MET'=>'M',
              'ASN'=>'N',
              'PRO'=>'P',
              'GLN'=>'Q',
              'ARG'=>'R',
              'SER'=>'S',
              'THR'=>'T',
              'VAL'=>'V',
              'TRP'=>'W',
              'TYR'=>'Y',
              'GLX'=>'Z',
            );
            list($chain11,$res11,$atom11,$numatom11,$chain12,$res12,$atom12,$numatom12,$chain21,$res21,$atom21,$numatom21,$chain22,$res22,$atom22,$numatom22,$distance,$contact1,$contact2)=explode('_',$input);
            $this->chains=array($chain11,$chain12,$chain21,$chain22);
            $this->residues=array($pass[substr($res11,0,3)].substr($res11,3),$pass[substr($res12,0,3)].substr($res12,3),$pass[substr($res21,0,3)].substr($res21,3),$pass[substr($res22,0,3)].substr($res22,3));
            $this->numatoms=array($numatom11,$numatom12,$numatom21,$numatom22);
            $this->atoms=array($atom11,$atom12,$atom21,$atom22);
            $this->contactlist=array($contact1,$contact2);
            $this->VMD=$distance;
          }
          public function style($index){
            if (trim($this->contactlist[$index]) == 'Hydrophobic'){
              return("style='background-color: #D9944C'>");
            }else if (trim($this->contactlist[$index]) == 'Attractive'){
              return("style='background-color: #F06291'>");
            }else if (trim($this->contactlist[$index]) == 'Repulsive'){
              return("style='background-color: #00E0FF'>");
            }else if (trim($this->contactlist[$index]) == 'Hydrogen Bonds'){
              return("style='background-color: #6D4ED9'>");
            }else if (trim($this->contactlist[$index]) == 'Aromatic Stacking'){
              return("style='background-color: #7BFA79'>");
            }else if (trim($this->contactlist[$index]) == 'Disulphide Bonds'){
              return("style='background-color: #FAF357'>");
            }else{
              return("style='background-color: #FFFFFF'>");
            }
          }
          public function reslist($reslist){
            
            $out = array();

          }
        }   
        $lines = file('Logs/'.substr($protein1,0,-4)."x".substr($protein2,0,-4).$type.'Log.txt');
        foreach ($lines as $line_num => $line) {
          if ($line_num == 0){
            echo "        <span data-toggle='tooltip' data-placement='top' title='Conserved hydrophobic contact matches are not shown by default.'>
                            <h5><strong><b>".explode(",",$line)[0]."</b></strong>
                          </span>
                          <a style='font-size: 11px'>(".explode(",",$line)[1].")</a></h5>\n";
          }else if ($line_num < 5){
            echo "        <p>".$line."</p>\n";
          }
          if ($line_num == 5){
            echo '      </div>'."\n";
            echo '      <div class="col-lg-2 text-sm">'."\n";
            echo '        <p class="mt-5"><strong>Parameters</strong></p>'."\n";
            echo "        <p>Chains (".$line."): ";
          }
          if ($line_num == 6){
            echo $line." vs. ";
          }
          if ($line_num == 7){
            echo $line."</p>\n";
          }
          if ($line_num == 8){
            echo "              <p>Chains (".$line.") ";
          }
          if ($line_num == 9){
            echo $line." vs. ";
          }
          if ($line_num == 10){
            echo $line."</p>\n";
          }
          if ($line_num == 11){
            echo "              <p>Cutoff: ".$line." Å</p>\n";
          }
          if ($line_num == 12){
            echo "              <p>".$line."</p>
                          </div>\n";
          }
        }
        echo "
            <div class = 'col-lg-7'>
            <span data-toggle='tooltip' data-placement='top' title='Number of residues and contacts found in each protein.'>
              <table class='table table-no-border table-striped text-sm' style='font-size: 11px;'>
                <thead>
                  <tr>
                    <th>Contacts found</th>
                  ";
        $lines = file('Results/Contacts/'.substr($protein1,0,-4)."_rotate_".$contact1_chain.".csv");
        foreach ($lines as $line_num => $line) {
          echo "
                    <th>".explode(",",$line)[0]."</th>
          ";
        }
        echo "
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th><span class='ysquare' style='background-color:#FEEF10; padding: 5px 7px; margin-right: 3px; border: 1px solid #aaa; border-radius: 2px'>A</span>".substr($protein1,0,-4)."</th>           
        ";
        foreach ($lines as $line_num => $line) {
          echo "
                    <td>".explode(",",$line)[1]."</td>
          ";
        }
        echo "
                  </tr>
                  <tr>
                    <th><span class='psquare' style='color:#999999; background-color:#6E006E; padding: 5px 7px; margin-right: 3px; border: 1px solid #aaa; border-radius: 2px'>B</span>".substr($protein2,0,-4)."</th>
        ";
        $lines = file('Results/Contacts/'.substr($protein2,0,-4)."_".$contact2_chain.".csv");
        foreach ($lines as $line_num => $line) {
          echo "
                    <td>".explode(",",$line)[1]."</td>
          ";
        }
?>                </tr>
                </tbody>
              </table>
            </span>
            </div>
          </div>
        </div>
      </div>

<ul class="nav nav-tabs" >
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#tabview">Viewer</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#graphs">Graphs</a>
  </li>
  <!--
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
  </li>-->
</ul>

<div class="bg-white mb-4">
  <div class="container-fluid">
    
    <div class="row p-4">
      <div class="col-lg-8">
        <div class="row" id='tabview'>
          <div class="col-lg-11">
            <button id="btn" class="btn btn-sm btn-secondary">Hide equal Contact Types</button>
            <button id="unbtn"  class="btn btn-sm btn-secondary">Show everything</button>
            <button id="hidro" class="btn btn-sm btn-secondary">Hide conservative hydrophobic</button>
          </div>
          <div class="col-md-1">
            <span data-toggle='tooltip' data-placement='top' class="ms-icon color-primary ms-icon-inverse ms-icon-circle ms-icon-sm"
              title="This table shows the contact matches that was be found between original and mutated protein.">
              <i class="bi-question-circle" style="font-size: 1rem"></i>
            </span>
          </div>
        </div>
        <div id="warn" class="row p-2">
          <div class="col-lg-12">
            <p style="font-size: 11px; margin: -5px 0 15px 10px">(Conservatives hydrophobic matches are hidden by default)</p>
          </div>
        </div>


<?php
      $path = "Data/".substr($protein1,0,-4)."_x_".substr($protein2,0,-4).$type."/";
      $dir = dir($path);
      echo '    <div class="container-fluid">
        <table class="data table table-no-border table-striped" style="font-size: 13px;">
          <thead>
            <tr>
              <th colspan = "2">Chains</th>
              <th colspan = "4">Residues</th>
              <th colspan = "2">Contact types</th>
              <th colspan = "2"></th>
            </tr>                          
            <tr>
              <th title="Protein A ('.substr($protein1,0,-4).') | Chains[1-2]" data-toggle="tooltip" data-placement="top"><span class="ysquare" style="background-color:#FEEF10; padding: 5px 7px; margin-right: 3px; border: 1px solid #aaa; border-radius: 2px">A</span></th>
              <th title="Protein B ('.substr($protein2,0,-4).') | Chains[1-2]" data-toggle="tooltip" data-placement="top"><span class="psquare" style="color:#999999; background-color:#6E006E; padding: 5px 7px; margin-right: 3px; border: 1px solid #aaa; border-radius: 2px">B</span></th>
              <th title="Protein A ('.substr($protein1,0,-4).') | Residue1" data-toggle="tooltip" data-placement="top"><span class="ysquare" style="background-color:#FEEF10; padding: 5px 7px; margin-right: 3px; border: 1px solid #aaa; border-radius: 2px">A</span>1</th>
              <th title="Protein A ('.substr($protein1,0,-4).') | Residue2" data-toggle="tooltip" data-placement="top"><span class="ysquare" style="background-color:#FEEF10; padding: 5px 7px; margin-right: 3px; border: 1px solid #aaa; border-radius: 2px">A</span>2</th>
              <th title="Protein B ('.substr($protein2,0,-4).') | Residue1" data-toggle="tooltip" data-placement="top"><span class="psquare" style="color:#999999; background-color:#6E006E; padding: 5px 7px; margin-right: 3px; border: 1px solid #aaa; border-radius: 2px">B</span>1</th>
              <th title="Protein B ('.substr($protein2,0,-4).') | Residue2" data-toggle="tooltip" data-placement="top"><span class="psquare" style="color:#999999; background-color:#6E006E; padding: 5px 7px; margin-right: 3px; border: 1px solid #aaa; border-radius: 2px">B</span>2</th>
              <th title="Protein A ('.substr($protein1,0,-4).') | Contact type" data-toggle="tooltip" data-placement="top"><span class="ysquare" style="background-color:#FEEF10; padding: 5px 7px; margin-right: 3px; border: 1px solid #aaa; border-radius: 2px">A</span> [1-2]</th>
              <th title="Protein B ('.substr($protein2,0,-4).') | Contact type" data-toggle="tooltip" data-placement="top"><span class="psquare" style="color:#999999; background-color:#6E006E; padding: 5px 7px; margin-right: 3px; border: 1px solid #aaa; border-radius: 2px">B</span> [1-2]</th>
              <th title="Å" data-toggle="tooltip" data-placement="top">AVD</th>
              <th>Contact</th>
            </tr>
            
          </thead>
          <tbody>'."\n";
        while($file = $dir->read()){
          if((".js"==substr($file,-3))&&('header.js' != $file)){
            $cast = new Protein();
            $cast->set($file);
            echo "                  <tr>";
            echo"
                        <td>".$cast->chains[0]."-".$cast->chains[1]."</td>
                        <td>".$cast->chains[2]."-".$cast->chains[3]."</td>
                        <td title='Atom: ".$cast->atoms[0]./*$cast->numatoms[0].*/"' data-toggle='tooltip' data-placement='top'>".$cast->residues[0]."</td>
                        <td title='Atom: ".$cast->atoms[1]./*$cast->numatoms[1].*/"' data-toggle='tooltip' data-placement='top'>".$cast->residues[1]."</td>
                        <td title='Atom: ".$cast->atoms[2]./*$cast->numatoms[2].*/"' data-toggle='tooltip' data-placement='top'>".$cast->residues[2]."</td>
                        <td title='Atom: ".$cast->atoms[3]./*$cast->numatoms[3].*/"' data-toggle='tooltip' data-placement='top'>".$cast->residues[3]."</td>\n";
            echo "                  <td ".$cast->style(0)."<font color='#000000'>".$cast->contactlist[0]."</font></td>\n";
            echo "                  <td ".$cast->style(1)."<font color='#000000'>".$cast->contactlist[1]."</font></td>\n";
            echo "                  <td>".$cast->VMD."</td>\n";
            echo "                  <td><a href='#void' onclick=".'"callplot'.str_replace(array("."),"_",str_replace(array(" "),"",substr($file,0,-4))).'()"'.">View</a></td>\n";
            echo "                </tr>\n"; 
          }
        }
        echo "              </tbody>\n";
        echo "            </table>\n";
        echo '          </div>'."\n";
        $dir -> close();
?>
      </div>
      <div class="col-lg-4 justify-content-md-center">
        <div class='btnguard row'>
          <p class='text-right w-100'>Colorscheme: <a href='#void' onclick="changecolor('purpllow')">Purple/Yellow</a> | <a href='#void' onclick="changecolor('cyareen')">Cyan/Green</a></p>
        </div>
        <div id="plotcase">
        </div>

        <?php

      echo "<div class='row justify-content-md-center'>
<div class='col-lg-12 text-right'>\n";
      echo("<b>Contacts: </b>
      <a href='".base_url()."public/projects/".$target."/vtr/Results/Contacts/".substr($protein1,0,-4)."_rotate_".$contact1_chain."_Contacts.txt' target=_blank>".substr($protein1,0,-4)."</a>\n");
      echo(" | <a href='".base_url()."public/projects/".$target."/vtr/Results/Contacts/".substr($protein2,0,-4)."_".$contact2_chain."_Contacts.txt' target=_blank>".substr($protein2,0,-4)."</a>\n");
      echo(" | <a href='".base_url()."public/projects/".$target."/vtr/Results/Matches/".substr($protein1,0,-4)."x".substr($protein2,0,-4).$type.".txt' target=_blank>All matches</a>\n");
      echo(" | <a href='".base_url()."public/projects/".$target."/vtr/Results/Dismatches/".substr($protein1,0,-4)."x".substr($protein2,0,-4).$type.".txt' target=_blank>Unmatched</a></br>\n");
      echo('<a href="'.base_url().'public/projects/'.$target.'/vtr/Plots/'.substr($protein1,0,-4)."_x_".substr($protein2,0,-4).$type.'/gift.zip" download="gift.zip" target="_blank" 
      class="btn btn-sm btn-raised btn-primary animated zoomInUp animation-delay-17"><i class="zmdi zmdi-download"></i> Download Pymol files</a>');
      echo "</div>
      </div>";
      if (file_exists("Logs/".substr($protein1,0,-4)."_x_".substr($protein2,0,-4).$type."_warnings.txt")){
        if (filesize("Logs/".substr($protein1,0,-4)."_x_".substr($protein2,0,-4).$type."_warnings.txt") != 0){
          echo '
          <div class="row justify-content-md-center">
          <div class="col-lg-12">
          <div class="card card-dark">
            <div class="card-header card-code-header" role="tab" id="codeHead0">
              <h4 class="panel-title card-code-title">
                <a class="collapsed withripple" role="button" data-toggle="collapse" href="#code0" aria-expanded="false" aria-controls="code0">
                  <i class="zmdi zmdi-code"></i> Warnings </a>
              </h4>
            </div>        
            <div id="code0" class="card-collapse collapse" role="tabpanel" aria-labelledby="codeHead0">
              <div class="card-code-block">
  ';
          $lines = file('Logs/'.substr($protein1,0,-4)."_x_".substr($protein2,0,-4).$type.'_warnings.txt');
          foreach ($lines as $line_num => $line) {
            echo '<p>'.$line."</p>\n";
          }
          echo '</div>';
          echo '</div>';
        }
      }
    ?>
    </div>
    </div>
      </div>
    </div>
    </div>
  </div>
</div>


<div class="container-fluid my-4">
  <div class="card-block">
<?php
  //echo base_url()."public/covid/".$target."/Results/Dismatches/".substr($protein1,0,-4)."x".substr($protein2,0,-4).$type.".txt";
  $unmatches = file_get_contents("Results/Dismatches/".substr($protein1,0,-4)."x".substr($protein2,0,-4).$type.".txt");

  $lines = explode("\n",$unmatches);
  $unmatched = array();

 // print_r($lines);
  foreach($lines as $n=>$line){
    
    if (strlen($line) < 10){
      continue;
    }
    if ($pos = strpos($line,'Unmatched Contacts')){
      $prot = substr($line,0,$pos-1);

      if ($prot.'.pdb' == $protein1){
        $file_name = 'public/projects/'.$target.'/vtr/Data/'.substr($protein1,0,-4)."x".substr($protein2,0,-4)."_align/".$prot.'_rotate.pdb';
      }else if($prot.'.pdb' == $protein2){
        $file_name = 'public/projects/'.$target.'/vtr/Data/'.$prot.'.pdb';
      }
      

      if (!array_key_exists($prot,$unmatched)){
        $unmatched[$prot] = array();
      }
     
    }else if (substr($line,0,9) == 'Distance:'){
      $data = explode(' - ',substr($line,9));
      
      $distance = substr($data[0],0,5);
      $types = substr($data[1],0,-2);

      array_push($unmatched[$prot],array(
        'distance' => $distance,
        'types' => $types,
        'cnt1' => $cnt1,
        'cnt2' => $cnt2,
        'file' => $file_name));
    }else{
      
      $p = strpos($line,' - ');
      $data = explode(' VS ',substr($line,$p+3));
      $cnt1 = explode(' ',$data[0]);
      $cnt2 = explode(' ',$data[1]);
    }
    
  }

?>    
    <div class="row my-2">
      

      <div class="col-lg-8">

        <div class='row'>
          <div class="col-md-11">
            <h2>Unmatched Contacts</h2>
          </div>
          <div class="col-md-1">
            <span data-toggle='tooltip' data-placement='top' class="ms-icon color-primary ms-icon-inverse ms-icon-circle ms-icon-sm"
              title="This table shows contacts that emerged or disappeared when the protein mutated.">
              <i class="bi-question-circle" style="font-size: 1rem"></i>
            </span>
          </div>
        </div>

        <table class="data table table-no-border table-striped">
          <thead>
            <tr>
              <th>Protein</th>
              <th>Chains</th>
              <th>Residue1</th>
              <th>Residue2</th>
              <th>Contact types</th>
              <th>Distance</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
<?php
  foreach($unmatched as $protein=>$contacts){
    foreach($contacts as $n=>$data){
      echo '
            <tr>
              <td>'.$protein.'</td>
              <td>'.$data['cnt1'][0].'-'.$data['cnt2'][0].'</td>
              <td title="Atom: '.$data['cnt1'][3].'" data-toggle="tooltip" data-placement="top">
                '.$pass[$data['cnt1'][1]].$data['cnt1'][2].'
              </td>
              <td title="Atom: '.$data['cnt2'][3].'" data-toggle="tooltip" data-placement="top">
                '.$pass[$data['cnt2'][1]].$data['cnt2'][2].'
              </td>
              <td '.style($data['types']).'<font color="#000000">'.$data['types'].'</font></td>
              <td>'.$data['distance'].'</td>
              <td><a href="#void" onclick='.'"plot_unique('."'".
              $data['file']."','".$data['cnt1'][0]."','".$data['cnt2'][0]."','".
              $data['cnt1'][1]."',".$data['cnt1'][2].",'".$data['cnt2'][1]."',".
              $data['cnt2'][2].",'".substr($data['cnt1'][3],0,3)."','".substr($data['cnt2'][3],0,3)."',".
              '0,0,';
              if ($pos = strpos($data['types'],'Stacking')){
                echo '1,1)">View</a></td>';
              }else{
                echo '0,0)">View</a></td>';
              }
            echo '
            </tr>
    ';
    }
  }

?>
          </tbody>
        </table>
      </div>
      <div class="col-lg-4 justify-content-md-center">
        <div id="plotcase-unmatched">
        </div>
      </div>
    </div>
  </div>
</div>





<div class = "container-fluid my-4">
  <div id='graphs'  class="row conteiner-fluid animated fadeInLeftTiny animation-delay-5">
    <div class="col-lg-12">
    <h2>Contact Maps </h2>
      <?php
        $path = "Graphs/".substr($protein1,0,-4)."_x_".substr($protein2,0,-4).$type;
        $dir = dir($path);
        $pairs = array();
        while($file = $dir->read()){
          if((".js"==substr($file,-3)) && ("_cmap"==substr($file,-8,5))){
            if (array_key_exists(substr($file, -11, 3), $pairs)){
              if (substr($file,0,-11) == substr($protein1,0,-4)){
                $pairs[substr($file, -11, 3)]['protein1'] = $file;
              }else if(substr($file,0,-11) == substr($protein2,0,-4)){
                $pairs[substr($file, -11, 3)]['protein2'] = $file;
              }
            }else{
              if (substr($file,0,-11) == substr($protein1,0,-4)){
                $pairs[substr($file, -11, 3)] = array('protein1' => $file);
              }else if(substr($file,0,-11) == substr($protein2,0,-4)){
                $pairs[substr($file, -11, 3)] = array('protein2' => $file);
              }
            }
          }
        }
        $index = 1;
        $siz = 6;
        if ($protein1 == $protein2){
          $siz = 12;
        }
        foreach ($pairs as $key => $pair){
          echo '
      <div class = "row justify-content-md-center">';
          echo'
        <div class="col-md-6">
          <div class="card card-dark">
            <div class="card-header bg-dark" role="tab" id="codeHead'.$index.'">
              <h3 class="panel-title card-code-title">
                <a style="color: white" class="collapsed withripple" role="button" data-toggle="collapse" href="#code'.$index.'" aria-expanded="false" aria-controls="code'.$index.'">
                <i class="zmdi zmdi-code"></i> <i class="fa fa-area-chart"></i>'.substr($protein1,0,-4).' '.$key.' 
                </a>
              </h3>
            </div>
            <div id="code'.$index.'" class="card-collapse collapse show" role="tabpanel" aria-labelledby="codeHead'.$index.'">
              <div class="card-block">';
            if (array_key_exists('protein1', $pair)){
              echo '
                <div class="row justify-content-md-center">
                  <div class="col-md-12">
                    <div class="row justify-content-md-center">
                      <div class="col-md-9">
                        <canvas id="'.substr($pair['protein1'],0,-8).'" width="400" height="400"></canvas>
                      </div>
                    </div>
                    <div class="row justify-content-md-center">
                      <button id="btn01'.str_replace(array('-'),"_", substr($pair['protein1'],0,-8)).'" onclick="draw01('."'".str_replace(array('-'),"_", substr($pair['protein1'],0,-8))."'".'); draw'.str_replace(array('-'),"_", substr($pair['protein1'],0,-8)).'matched()"
                      class="btn btn-sm btn-secondary">
                        Hide Unmatched
                      </button>
                      <button id="btn00'.str_replace(array('-'),"_", substr($pair['protein1'],0,-8)).'" onclick="draw00('."'".str_replace(array('-'),"_", substr($pair['protein1'],0,-8))."'".'); draw'.str_replace(array('-'),"_", substr($pair['protein1'],0,-8)).'all()"
                      class="btn btn-sm btn-secondary" style="display: none">
                        Show All
                      </button>
                      <button id="btn10'.str_replace(array('-'),"_", substr($pair['protein1'],0,-8)).'" onclick="draw10('."'".str_replace(array('-'),"_", substr($pair['protein1'],0,-8))."'".'); draw'.str_replace(array('-'),"_", substr($pair['protein1'],0,-8)).'nocon()"
                      class="btn btn-sm btn-secondary" style="display: none">
                        Hide equal contact types
                      </button>
                      <button id="btn11'.str_replace(array('-'),"_", substr($pair['protein1'],0,-8)).'" onclick="draw11('."'".str_replace(array('-'),"_", substr($pair['protein1'],0,-8))."'".'); draw'.str_replace(array('-'),"_", substr($pair['protein1'],0,-8)).'matched()"
                      class="btn btn-secondary" style="display: none">
                        Show equal contact types
                      </button>
                    </div>
                  </div>
              ';
            }else{
              echo'
                <div  class="row justify-content-md-center" style="height: 560 px;">
                  <div class="col-md-6">
                    <h1 class="color-primary text-big">One of this chains does not exist in some input protein</h1>
                  </div>
              ';
            }
            $index ++;
            echo'
                </div>
              </div>
            </div>
          </div>
        </div>';
        if ($siz == 12){
          echo '
      </div>';
          goto endd;
        }
        echo'
        <div class="col-md-6">
          <div class="card">
            <div class="card-header bg-dark" role="tab" id="codeHead'.$index.'">
              <h3 class="panel-title card-code-title">
                <a style="color: white" class="collapsed withripple" role="button" data-toggle="collapse" href="#code'.$index.'" aria-expanded="false" aria-controls="code'.$index.'">
                <i class="zmdi zmdi-code"></i><i class="fa fa-area-chart"></i>'.substr($protein2,0,-4).' '.$key.' 
                </a>
              </h3>
            </div>
            <div id="code'.$index.'" class="card-collapse collapse show" role="tabpanel" aria-labelledby="codeHead'.$index.'">
              <div class="card-block">';
              if (array_key_exists('protein2', $pair)){
                echo '
                <div class="row justify-content-md-center">
                  <div class="col-md-12">
                    <div class="row justify-content-md-center">
                      <div class="col-md-9">
                        <canvas id="'.substr($pair['protein2'],0,-8).'" width="400" height="400"></canvas>
                      </div>
                    </div>
                    <div class="row justify-content-md-center">
                      <button id="btn01'.str_replace(array('-'),"_", substr($pair['protein2'],0,-8)).'" onclick="draw01('."'".str_replace(array('-'),"_", substr($pair['protein2'],0,-8))."'".'); draw'.str_replace(array('-'),"_", substr($pair['protein2'],0,-8)).'matched()"
                      class="btn btn-sm btn-secondary">
                        Hide Unmatched
                      </button>
                      <button id="btn00'.str_replace(array('-'),"_", substr($pair['protein2'],0,-8)).'" onclick="draw00('."'".str_replace(array('-'),"_", substr($pair['protein2'],0,-8))."'".'); draw'.str_replace(array('-'),"_", substr($pair['protein2'],0,-8)).'all()"
                      class="btn btn-sm btn-secondary" style="display: none">
                        Show All
                      </button>
                      <button id="btn10'.str_replace(array('-'),"_", substr($pair['protein2'],0,-8)).'" onclick="draw10('."'".str_replace(array('-'),"_", substr($pair['protein2'],0,-8))."'".'); draw'.str_replace(array('-'),"_", substr($pair['protein2'],0,-8)).'nocon()"
                      class="btn btn-sm btn-secondary" style="display: none">
                        Hide equal contact types
                      </button>
                      <button id="btn11'.str_replace(array('-'),"_", substr($pair['protein2'],0,-8)).'" onclick="draw11('."'".str_replace(array('-'),"_", substr($pair['protein2'],0,-8))."'".'); draw'.str_replace(array('-'),"_", substr($pair['protein2'],0,-8)).'matched()"
                      class="btn btn-sm btn-secondary" style="display: none">
                        Show equal contact types
                      </button>
                    </div>
                  </div>';
              }else{
                echo'
                  <div  class="row justify-content-md-center" style="height: 560px;">
                    <div class="col-md-6">
                      <h1 class="color-primary text-big">One of this chains does not exist in some input protein</h1>
                    </div>';
              }echo'
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>';
        $index ++;
        endd:
        }
        

      ?>
    </div>
  </div>
    <!-- <span data-toggle='tooltip' data-placement='top' title="Linear graph of the frequency of the rounded AVD values of the matches.">
      <div class="card card-dark">
        <div class="card-header">
          <h3 class="card-title"><i class="fa fa-area-chart"></i>AVD Frequency</h3>
        </div>
        <div class="card-block row justify-content-md-center">
          <?php
            echo "
            <div class='col-md-8'>
              <canvas id='mychartline' height=350></canvas>
            </div>";
          ?>
        </div>
      </div>
    </span> -->
  <?php
  echo '
  <div class="row mt-4">
    <div class="col-lg-3">
      <div class="card card-dark">
        <div class="card-header">
          <h3 class="card-title"><i class="fa fa-table"></i>Detailed Graphs</h3>
        </div>
        <div class="card-block" style="overflow: auto; height: 400px">
          <table class="table table-no-border table-striped" id="data">
            <thead>
              <tr>
                <th>Residue Match Frequency</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>';
              $path = "Graphs/".substr($protein1,0,-4)."_x_".substr($protein2,0,-4).$type;
              $dir = dir($path);
              while($file = $dir->read()){
                if((".js"==substr($file,-3)) && (strlen(substr($file,0,-3)) == 3)){
                  echo "<tr>\n";
                  echo "<td>".substr($file,0,3)."</td>\n";
                  echo "<td><button class='btn btn-primary btn-sm' onclick=".'"draw'.substr($file,0,3)."()".'" name="'.substr($file,0,3).'">View</button></td>'."\n";
                  echo "</tr>\n";
                }
              }
            echo '
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="col-lg-9" >
    <span data-toggle="tooltip" data-placement="top" title="Frequency of each residue contacts in the matches">
      <div class="card card-dark">
        <div class="card-header">
          <h3 class="card-title"><i class="fa fa-bar-chart"></i>Graph</h3>
        </div>
        <div class="card-block row justify-content-md-center">
          <div class="col-md-9">
            <canvas id="mychartbar" class="graphcase" height=300></canvas>
          </div>
        </div>
      </span>
      </div>';
    ?>
    </div>
  </div>
</div>
</div>
</div>
</body>    

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js" type="text/javascript"></script>
<script src="<?php echo base_url();?>/public/3Dmol.js" type="text/javascript"></script>
<script src="<?php echo base_url();?>/public/viewer.js"></script>
<script src="<?php echo base_url();?>/public/viewer_unmatched.js"></script>
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>

<?php
$path = "Data/".substr($protein1,0,-4)."_x_".substr($protein2,0,-4).$type."/";
$dir = dir($path);
while($file = $dir->read()){
  if(".js"==substr($file,-3)){
    echo '<script src="'.base_url().'public/projects/'.$target.'/vtr/Data/'.substr($protein1,0,-4)."_x_".substr($protein2,0,-4).$type."/".$file.'" type="text/javascript"></script>';
  }
}
?>

<script type='text/javascript'>
    function squares(){
        if (window.colorscheme == "cyareen"){
            var mcolor1 = "#00FFFF";
            var mcolor2 = "#00FF00";
            var ecolor1 = "#000068";
            var ecolor2 = "#006800";
        } else {
            var mcolor1 = "#F9F900";
            var mcolor2 = "#6E006E"
            var ecolor1 = "#989700";
            var ecolor2 = "#320071";
        }

        var span = document.getElementsByClassName("ysquare");
        console.log(span)
        for (var i = 0; i < span.length; i++) {
            span[i].style.backgroundColor = mcolor1;
        }
    
        var span = document.getElementsByClassName("psquare");
        for (var i = 0; i < span.length; i++) {
            span[i].style.backgroundColor = mcolor2;
        }
    }
    squares();
</script>

<script type="text/javascript">
  window.colorscheme = "purpllow";
  callheader(window.colorscheme);
  header_unmatched(<?php echo '"public/projects/'.$target.'/vtr/Data/'.substr($protein1,0,-4)."x".substr($protein2,0,-4)."_align/".
    substr($protein1,0,-4).'_rotate.pdb"'.','.'"public/projects/'.$target."/vtr/Data/".$protein2.'"';
    ?>,window.colorscheme);
  function changecolor(scheme){
    if (scheme == "cyareen"){
      window.colorscheme = "cyareen";

    } else {
      window.colorscheme = "purpllow";

    }
    callheader(window.colorscheme);
    squares();

    header_unmatched(<?php echo '"public/covid/'.$target.'Data/'.substr($protein1,0,-4)."x".substr($protein2,0,-4)."_align/".
    substr($protein1,0,-4).'_rotate.pdb"'.','.'"public/covid/'.$target."Data/".$protein2.'"';
    ?>,window.colorscheme);
  }
</script>

<?php
$path = "Graphs/".substr($protein1,0,-4)."_x_".substr($protein2,0,-4).$type;
$dir = dir($path);
while($file = $dir->read()){
  if (substr($file, -3) == '.js'){
    echo '<script src="'.base_url().'public/projects/'.$target.'/vtr/Graphs/'.substr($protein1,0,-4)."_x_".substr($protein2,0,-4).$type.'/'.$file.'" type="text/javascript"></script>';
    if (substr($file, -8) == '_cmap.js'){
      echo '<script type="text/javascript">
  draw'.str_replace(array('-'), '_', substr($file,0,-8)).'all();
</script>';
    }
  }
}
?>

<script type='text/javascript'>
    function draw01(funct){
        var btn = document.getElementById("btn00".concat(funct));
        btn.style.display="";
        var btn = document.getElementById("btn01".concat(funct));
        btn.style.display="none";
        var btn = document.getElementById("btn10".concat(funct));
        btn.style.display="";
        var btn = document.getElementById("btn11".concat(funct));
        btn.style.display="none";
    }
    function draw00(funct){
        var btn = document.getElementById("btn00".concat(funct));
        btn.style.display="none";
        var btn = document.getElementById("btn01".concat(funct));
        btn.style.display="";
        var btn = document.getElementById("btn10".concat(funct));
        btn.style.display="none";
        var btn = document.getElementById("btn11".concat(funct));
        btn.style.display="none";
    }
    function draw10(funct){
        var btn = document.getElementById("btn00".concat(funct));
        btn.style.display="";
        var btn = document.getElementById("btn01".concat(funct));
        btn.style.display="none";
        var btn = document.getElementById("btn10".concat(funct));
        btn.style.display="none";
        var btn = document.getElementById("btn11".concat(funct));
        btn.style.display="";
    }
    function draw11(funct){
        var btn = document.getElementById("btn00".concat(funct));
        btn.style.display="";
        var btn = document.getElementById("btn01".concat(funct));
        btn.style.display="none";
        var btn = document.getElementById("btn10".concat(funct));
        btn.style.display="";
        var btn = document.getElementById("btn11".concat(funct));
        btn.style.display="none";
    }
</script>

<script type='text/javascript'>
  drawALA();
  drawvmdfreq();
</script>

<script type='text/javascript'>
  function plot_unique(model,chain1,chain2,resname1,resnum1,resname2,resnum2,atom1,atom2,serial1,serial2,centroid1,centroid2){
    contact = new Contact(model,chain1,chain2,resnum1,resname1,resnum2,resname2,atom1,atom2,serial1,serial2,centroid1,centroid2);
    plot_contact(contact);
  }
</script>

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