<?php
defined('BASEPATH') OR exit('No direct script access allowed');

function VTR($protein1, $protein2, $cutoff, $chain11, $chain12, $chain21, $chain22, $detail){
	if (file_exists('public/Logs/1a6mx1dlw-2Log.txt')){
		shell_exec('rm public/Logs/1a6mx1dlw-2Log.txt');
	}
    fopen("public/Logs/1a6mx1dlw-2Log.txt", 'w');
    if (file_exists('public/Logs/1a6m_x_1dlw-2_executionlog.txt')){
      shell_exec('rm public/Logs/1a6m_x_1dlw-2_executionlog.txt');
	}
	chdir('public/source/');
    $protein1 = '../Data/'.$protein1;
    $protein2 = '../Data/'.$protein2;
    shell_exec('nohup ./VTR.sh '.$protein1.' '.$protein2.' '.$cutoff.' '.$chain11.' '.$chain12.' '.$chain21.' '.$chain22.' '.$detail.' > 1a6m_x_1dlw-2_executionlog.txt &');
}

class Exemple extends CI_Controller {
	public function index()
	{
		$protein1='1a6m.pdb';
  		$protein2='1dlw.pdb';
		$type = '-2';
		$data = array(
			'protein1' => $protein1,
			'protein2' => $protein2,
			'cutoff' => 2,
			'chain11' => '/',
			'chain12' => '/',
			'chain21' => '/',
			'chain22' => '/',
			'detail' => 'x',
			'type' => $type,
			'counter' => 1,
			'first_load' => 1,
		);
  		VTR($protein1,$protein2,2,'/','/','/','/','x');
		$this->template->show('process', $data, 'load');
	}
}?>