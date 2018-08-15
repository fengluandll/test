<?php
session_start();
include 'http_client.inc';

$code = $_GET['code'];
$state = $_GET['state'];

// Verify the 'state' value is the same random value we created
// when initiating the authorization request.
if ((! is_numeric($state)) || ($state != $_SESSION['state'])) {
  throw new Exception('Error validating state.  Possible CSRF.');
} 

$accessTokenExchangeUrl = 'https://accounts.google.com/o/oauth2/token';
$redirectUriPath = '/oauth2callback.php';

// For example only.  Valid values for client_id and client_secret
// need to be obtained for your environment from the Google APIs 
// Console at http://code.google.com/apis/console.  
$accessTokenExchangeParams = array(
  'client_id' => '240195362.apps.googleusercontent.com',
  'client_secret' => 'hBMLD98Zi4wiqmiwmqDq',
  'grant_type' => 'authorization_code',
  'code' => $code,
  'redirect_uri' => (isset($_SERVER['HTTPS'])?'https://':'http://') .
                   $_SERVER['HTTP_HOST'] . $redirectUriPath
);

$httpClient = new HttpClient();
$responseJson = $httpClient->postData(
    $accessTokenExchangeUrl,
    $accessTokenExchangeParams);
$responseArray = json_decode($responseJson, TRUE);

$accessToken = $responseArray['access_token'];
$expiresIn = $responseArray['expires_in'];
$refreshToken = $responseArray['refresh_token'];

$_SESSION['access_token'] = $accessToken;
$_SESSION['refresh_token'] = $refreshToken;

header('Location: /get_data.php');
?>
