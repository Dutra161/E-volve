<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Recent extends CI_Controller {
	public function index()
	{
		$data = array();
		$this->template->show('recent', $data, 'recent');
	}
}
