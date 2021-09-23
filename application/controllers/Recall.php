<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Recall extends CI_Controller {
	public function index()
	{
		echo '<meta http-equiv="refresh" content="1; url='.base_url().'vtr?'.$_POST['protein1'].'_x_'.$_POST['protein2'].$_POST['type'].'">';
	}
}	
?>