<?php

require_once 'OAuth2Client.inc';

class GoogleOAuth2Client extends OAuth2Client {
  public function __construct($config = array()) {
    if (!array_key_exists('authorization_uri')) {
      $config['authorization_uri'] = 'https://accounts.google.com/o/oauth2/auth';
    }
    if (!array_key_exists('access_token_uri')) {
      $config['authorization_uri'] = 'https://accounts.google.com/o/oauth2/token';
    }
    if (!array_key_exists('base_uri')) {
      $config['authorization_uri'] = 'https://accounts.google.com/o/oauth2/';
    }
    parent::__construct($config);
  }
}
