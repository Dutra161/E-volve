<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
 
class Template {
 
		function show($view, $data=array(), $type=''){
 
			$CI = & get_instance();
 
			// Load header
			$CI->load->view('template/header',$data);

			// Load content
			// if( $type == 'result'){
			// 	$CI->load->view('template/resultheader',$data);
			// }
			$CI->load->view($view,$data);
			
			// Load footer and scripts
			/*switch ($type){
				case 'result':
					$CI->load->view('template/footer',$data);
					$CI->load->view('template/resultscripts',$data);
					$CI->load->view('template/commonscripts',$data);
					break;
				case 'load':
					$CI->load->view('template/animationscripts',$data);
					break;
				case 'recent':
					$CI->load->view('template/footer',$data);
					$CI->load->view('template/commonscripts',$data);
					break;
				default:
					$CI->load->view('template/footer',$data);
					$CI->load->view('template/animationscripts',$data);
					//$CI->load->view('template/commonscripts',$data);
					break;
			}		*/
			$CI->load->view('template/footer',$data);
		}
}
 
/* End of file Template.php */
/* Location: ./system/application/libraries/Template.php */