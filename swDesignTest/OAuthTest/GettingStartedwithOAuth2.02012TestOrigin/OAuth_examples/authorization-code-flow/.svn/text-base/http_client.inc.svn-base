<?php
class HttpClient {

  public function __construct() {
  }

  public function getData($url, $headers = array()) {
    $ch = curl_init();
   
    $options = array(
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => TRUE,
        CURLOPT_HTTPHEADER => $headers,
        CURLOPT_POST => FALSE);

    curl_setopt_array($ch, $options);
    $response = curl_exec($ch);
    curl_close($ch);

    return $response;
  }

  public function postData($url, $postData) {
    $ch = curl_init();
   
    $options = array(
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => TRUE,
        CURLOPT_POST => TRUE,
        CURLOPT_POSTFIELDS => $postData);

    curl_setopt_array($ch, $options);
    $response = curl_exec($ch);
    curl_close($ch);

    return $response;
  }

}?>
