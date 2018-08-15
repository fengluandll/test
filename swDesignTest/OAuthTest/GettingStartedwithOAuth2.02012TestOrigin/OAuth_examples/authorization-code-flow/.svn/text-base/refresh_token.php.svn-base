<?php
include 'http_client.inc';

function getNewAccessToken($refreshToken) {
  $refreshTokenUrl = 'https://accounts.google.com/o/oauth2/token';
  $redirectUriPath = '/oauth2callback.php';

  // For example only.  Valid values for client_id and client_secret
  // need to be obtained for your environment from the Google APIs
  // Console at http://code.google.com/apis/console.
  $refreshTokenParams = array(
    'client_id' => '240195362.apps.googleusercontent.com',
    'client_secret' => 'hBMLD98Zi4wiqmiwmqDq',
    'grant_type' => 'refresh_token',
    'refresh_token' => $refreshToken,
    'redirect_uri' => (isset($_SERVER['HTTPS'])?'https://':'http://') .
                     $_SERVER['HTTP_HOST'] . $redirectUriPath
  );
  
  $httpClient = new HttpClient();
  $responseJson = $httpClient->postData(
      $refreshTokenurl,
      $refreshTokenParams);
  $responseArray = json_decode($responseJson, TRUE);
  return $responseArray;
}
 
$responseArray = getNewAccessToken('adbadsfa12345'); 
$accessToken = $responseArray['access_token'];
$refreshToken = $responseArray['refresh_token'];
$expiresIn = $responseArray['expires_in'];
?>
