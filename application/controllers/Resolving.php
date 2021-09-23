<?php

defined('BASEPATH') OR exit('No direct script access allowed');

function mk_project($name, $base_file, $file_name,$mut_array,$sel_array){
	$dir = shell_exec('python3 ./public/evolve/create_directory.py '.$name.' '.$base_file.' '.$file_name);
	//sleep(2);
	//$dir = file_get_contents($name.$ts.'.out');

	if (strlen($dir) > 1){
		//unlink($name.$ts.'.out');

		$json = json_encode($mut_array);
		file_put_contents('./public/projects/'.substr($dir,0,-1).'/mutations_file.json',$json);

		$json = json_encode($sel_array);
		file_put_contents('./public/projects/'.substr($dir,0,-1).'/selected.json',$json);


		$descriptorspec = array(
			0 => array("pipe", "r"),  // stdout is a pipe that the child will write to
			1 => array("pipe", "w"), // stderr is a file to write to
			2 => array("pipe", "w") // stderr is a file to write to
		 );


		#$process = proc_open('./public/evolve/evolve.sh ./public/projects/'.substr($dir,0,-1), $descriptorspec, $pipes);//." > ./public/projects/".substr($dir,0,-1)."/std.out";

		# TESTES DIEGO *********************************
		system("nohup /usr/bin/python3 /var/www/html/evolve/public/evolve/evolve.py /var/www/html/evolve/public/projects/".substr($dir,0,-1)." >/var/www/html/evolve/public/projects/".substr($dir,0,-1)."/console.log 2>&1 &");
		//exit();
		# FIM TESTES DIEGO *****************************

		/*if (is_resource($process)) {
			// $pipes now looks like this:
			// 0 => writeable handle connected to child stdin
			// 1 => readable handle connected to child stdout
			// Any error output will be appended to /tmp/error-output.txt
		
			echo '0:';
			fclose($pipes[0]);
			echo '1:';
			echo stream_get_contents($pipes[1]);
			fclose($pipes[1]);
			echo '1:';
			echo stream_get_contents($pipes[2]);
			fclose($pipes[2]);
		
			// It is important that you close any pipes before calling
			// proc_close in order to avoid a deadlock
			$return_value = proc_close($process);
		
			echo "command returned $return_value\n";
		}*/

		return $dir;
	}
}

function mk_files($mut_array, $sel_array, $dir){
	$json = json_encode($mut_array);
	file_put_contents(substr($dir,0,-1).'/mutations_file.json',$json);

	$json = json_encode($sel_array);
	file_put_contents(substr($dir,0,-1).'/selected.json',$json);
}

function evolve($folder){
	echo 'nohup ./public/evolve/evolve.sh ./public/projects/'.substr($folder,0,-1)." > ./public/projects/".substr($folder,0,-1)."/std.out &";
	echo '----------';
	shell_exec('nohup ./public/evolve/evolve.sh ./public/projects/'.substr($folder,0,-1)." > ./public/projects/".substr($folder,0,-1)."/std.out &");
}

class Resolving extends CI_Controller {
	public function index()
	{
		$aminoacids = array('A','B','C','D','E','F','G','H','I','K','L','M','N','P','Q','R','S','T','V','W','Y','Z','*');
		$json = array();
		$json['status'] = 1;
		$json['error_list'] = array();
		$pname = '';
		//$protected = explode("\n", file_get_contents('public/protected.txt'));

		/*Verify if the 'Run' button was pressed*/
		if (isset($_POST['submit'])){ 
			/*Verify project name*/
			if (""==$_POST['project']){
				$project = 'project';
			}else{
				$project = str_replace(' ','',$_POST['project']);
			}

			/* Move protein files ou set the error list*/
			if (""!=$_FILES['protein']['name']){
				$pname = str_replace(array("-","_"," ",".","*","(",")"),"",substr($_FILES['protein']['name'],0,-4));

				$tmp = str_replace(array('\\'),'/',$_FILES['protein']['tmp_name']);
				$tmp = 'public/temp/'.substr($tmp,strrpos($tmp,'/')+1);

				$test = move_uploaded_file($_FILES['protein']['tmp_name'], $tmp);

				if (!$test){
					$json['status'] = 0;
					$json['error_list']["Protein"] = "Invalid input file";
				}
			}else{
				if ((""!=$_POST['proteinpdb']) && (strlen($_POST['proteinpdb'])) == 4){
					$protein = file_get_contents('http://files.rcsb.org/view/'.strtoupper($_POST['proteinpdb']).'.pdb');
					if (substr($protein,0,6) == "HEADER"){
						$pname = $_POST['proteinpdb'];

						$tmp = "public/temp/".$pname.'.pdb';

						$myfile = fopen($tmp,'w');
						fwrite($myfile, $protein);
						fclose($myfile);

					}else{
						$json['status'] = 0;
						$json['error_list']["Protein"] = "Invalid PDB ID";
					}
				}else{
					$json['status'] = 0;
					$json['error_list']["Protein"] = "Invalid PDB ID";
				}
			}
			
			/*verify and set the mutations*/
			$mutations = array();
			if (""==$_POST['mutations']){
				$json['status'] = 0;
				$json['error_list']["Mutations"] = "You need to indicate some mutation...";
			}else{
				$mut = explode(',',str_replace('*','del',str_replace(array(' ',':'),'',$_POST['mutations'])));

				foreach($mut as $key => $value){
					if (strtolower(substr($value,-3)) == 'del'){
						if (!(is_numeric(substr($value,1,-3)))){
							$json['status'] = 0;
							$json['error_list']["Mutations"] = "Invalid Mutation (".$value."), Must be chain, position and mutation only";
						}else if ((is_numeric(substr($value,0,1)))){
							$json['status'] = 0;
							$json['error_list']["Mutations"] = "Invalid Mutation (".$value."), Chain must be a character";
						}else{
							if (array_key_exists(strtoupper(substr($value,0,1)), $mutations)){
								array_push($mutations[strtoupper(substr($value,0,1))],substr($value,1,-3).'del');
							}else{
								$mutations[strtoupper(substr($value,0,1))] = array(substr($value,1,-3).'del');
							}
						}
					}else if ((is_numeric(substr($value,0,1)))){
						$json['status'] = 0;
						$json['error_list']["Mutations"] = "Invalid Mutation (".$value."), Chain must be a character";
					}else{
						if (!(is_numeric(substr($value,1,-1)))){
							$json['status'] = 0;
							$json['error_list']["Mutations"] = "Invalid Mutation (".$value."), Must be Position and mutation only";
						}else if(!(in_array(strtoupper(substr($value,-1)),$aminoacids))){
							$json['status'] = 0;
							$json['error_list']["Mutations"] = "Invalid Mutation (".$value."), Select a valid aminoacid";		
						}else{
							if (array_key_exists(strtoupper(substr($value,0,1)), $mutations)){
								array_push($mutations[strtoupper(substr($value,0,1))],substr($value,1,-1).strtoupper(substr($value,-1)));
							}else{
								$mutations[strtoupper(substr($value,0,1))] = array(substr($value,1,-1).strtoupper(substr($value,-1)));
							}
						}
					}
				}
			}
			
			$counter = 0;
			$selection = array($pname.'.pdb' => array());
			while(array_key_exists('chain1'.strval($counter),$_POST)){
				$chain1 = $_POST['chain1'.strval($counter)];
				$chain2 = $_POST['chain2'.strval($counter)];

				if ((strlen($chain1) > 1) || (is_numeric($chain2))){
					$json['status'] = 0;
					$json['error_list']["Chain1".strval($counter)] = "Invalid Chain (".$chain1."), Select a single character";
				} 
				if ((strlen($chain2) > 1) || (is_numeric($chain2))){
					$json['status'] = 0;
					$json['error_list']["Chain2".strval($counter)] = "Invalid Chain (".$chain2."), Select a single character";
				} 

				if (("" == $chain1)&&("" == $chain2)){
					$counter ++;
					continue;
				}else if (("" != $chain1)&&("" != $chain2)){
					array_push($selection[$pname.'.pdb'],array(strtoupper($chain1),strtoupper($chain2)));
				}else if (("" == $chain1) xor ("" == $chain2)){
					$json['status'] = 0;
					$json['error_list']["Chains".strval($counter)] = "Invalid Chain (".$chain2.'-'.$chain2."), Select one character for each field";
				}
				$counter ++;
			}
			if ($selection[$pname.'.pdb'] == array()){
				$json['status'] = 0;
				$json['error_list']["Chains"] = "You must specify at least one chain pair";
			}

		}
		
		if (1 == $json['status']){
			$target = mk_project($project,$tmp,$pname,$mutations,$selection);
			$data = array(
				'protein' => $pname,
				'project' => $target,
				'first_load' => 1,
			);
			//mk_files($mutations,$selection,'public/projects/'.$target);
			//evolve($target);
			$this->template->show('resolving', $data);
		}else{
			$data = array(
				'json' => $json
			);
			$this->template->show('invalid', $data, 'load');
		}
	}
}