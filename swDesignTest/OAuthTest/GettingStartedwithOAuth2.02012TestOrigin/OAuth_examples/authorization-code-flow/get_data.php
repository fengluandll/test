<?php
session_start();
require_once 'http_client.inc';

$tasksUrl = 'https://www.googleapis.com/tasks/v1/lists/@default/tasks';

// The value for $accessToken would typically be stored in a 
// server-side PHP session bound to the active user.  The value of the
// access token can be any string. Google uses values similar to:
// 'ya29.AHES6ZS_2G4-VuL041L0GpFJqH0wGfGSR'.
$accessToken = $_SESSION['access_token'];

// Recommended approach for an OAuth 2 authorized request is to
// use a HTTP Authorization header
$httpClient = new HttpClient();
$headers = array(
  'Authorization: Bearer ' . $accessToken);

// Alternative to using the Authorization header would be appending
// the OAuth token to the URL as a query parameter
// $tasksUrl .= '?access_token=' . $accessToken;

$response = $httpClient->getData($tasksUrl, $headers);
$responseArray = json_decode($response, TRUE);

foreach ($responseArray["items"] as $item) {
  echo '<li>' . $item['title'] . "</li>\n";
}
?>
