<?php
session_start();

// Generate random value for use as the 'state'.  Mitigates
// risk of CSRF attacks when this value is verified against the
// value returned from the OAuth provider with the authorization
// code.
$_SESSION['state'] = rand(0,999999999);

$authorizationUrlBase = 'https://accounts.google.com/o/oauth2/auth';
$redirectUriPath = '/oauth2callback.php';

// For example only.  A valid value for client_id needs to be obtained 
// for your environment from the Google APIs Console at 
// http://code.google.com/apis/console.
$queryParams = array(
  'client_id' => '240195362.apps.googleusercontent.com',
  'redirect_uri' => (isset($_SERVER['HTTPS'])?'https://':'http://') .
                   $_SERVER['HTTP_HOST'] . $redirectUriPath,
  'scope' => 'https://www.googleapis.com/auth/tasks',
  'response_type' => 'code',
  'state' => $_SESSION['state'],
  'approval_prompt' => 'force', // always request user consent
  'access_type' => 'offline' // obtain a refresh token
);

$goToUrl = $authorizationUrlBase . '?' . http_build_query($queryParams);

// Output a webpage directing users to the $goToUrl after 
// they click a "Let's Go" button
include 'access_request_template.php';
