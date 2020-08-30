<?php
$theHost = $_SERVER['HTTP_HOST'];
$theUrl = isset($_SERVER['REQUEST_URI'])? $_SERVER['REQUEST_URI']:'';
$theUrl = strtolower($theUrl);
if($theUrl == '/index.php')
{
  $theUrl = '';
}
if($theHost != 'blog.kawashiros.club')
{
  header('HTTP/1.1 301 Moved Permanently');
  header('Location:http://blog.imxiaoanag.club/'.$the_url);
}
?>