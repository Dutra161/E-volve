<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Vtr extends CI_Controller {
	public function index()
	{
	    $url = $_SERVER['QUERY_STRING'];
			$target_pos = strpos($url,'@'); 
			$target = substr($url, 0, $target_pos);
 	    $protein1 = substr($url,$target_pos + 1,strpos($url,'_x_')-$target_pos-1).'.pdb';
  	    $pos = strpos($url,'-',$target_pos);
			//echo $protein1;
	    if ($pos === false){
		    $protein2 = substr($url,strpos($url,'_x_')+3).'.pdb';
		    $detail = 'x';
		    $type = '-';
	    }else{
		    $protein2 = substr($url,strpos($url,'_x_')+3,$pos-strpos($url,'_x_')-3).'.pdb';
            $detail = substr($url,$pos+1,1);
  	    	$type = substr($url,$pos);
		}		
		
		$data = array(
			'protein1' => $protein1,
			'protein2' => $protein2,
			'type' => $type,
			'detail' => $detail,
			'query' => $url,
			'first_load' => 0,
			'target' => $target
		);
		//print_r($data);

		$this->template->show('vtr', $data, 'result');
	}
}?>