<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Project extends CI_Controller {
	public function index(){
		$total = explode('$',$_SERVER['QUERY_STRING']);
	    $url = $total[0];

		$target = $url;
	
		$filename = 'public/projects/'.$target.'/done';
		$existence = 'public/projects/'.$target.'/started';
		$logerror = 'public/projects/'.$target.'/log';
		$no_mut = 'public/projects/'.$target.'/no_mut.log';
		$invalid_c = 'public/projects/'.$target.'Invalid_chains.csv';
		
		$invalid_chains = array();
		if (file_exists($invalid_c)){
			$row = 1;
			if (($handle = fopen($invalid_c, "r")) !== FALSE) {
				
				

				while (($data = fgetcsv($handle, 5, ",")) !== FALSE) {
					$num = count($data);

					for ($c=0; $c < $num; $c++) {
						$aux = array();
						array_push($aux, $data[$c]);
						array_push($invalid_chains, $aux);
					}
				}
				fclose($handle);
			}
		}
		
		if (isset($total[1])){
			$counter = time() - $total[1];
			$time = $total[1];
		}else{
			$counter = 0;
			$time = time();
		}

		$data = array(
			'project' => $url,
			'first_load' => 0,
			'time' => $time,
			'invalid_chains' => $invalid_chains
		);

		/*Verify if the requisition is valid*/
		if (!(file_exists($existence))){
			$this->template->show('error404', $data, 'load');
			goto end;
		}

		/* Show Alignment*/
		if (file_exists($filename)){
			$this->template->show('project', $data, 'result');
		/* Timeout Alert*/
		}else if($counter >= 60*30){
			$this->template->show('timeout', $data, 'load');
		}else if(file_exists($logerror)){
			$this->template->show('execution_error', $data, 'load');
		}else if(file_exists($no_mut)){
			$this->template->show('no_mut.php', $data, 'load');
		}else{
			$this->template->show('resolving', $data, 'load');
		}
		end:
	}
}
