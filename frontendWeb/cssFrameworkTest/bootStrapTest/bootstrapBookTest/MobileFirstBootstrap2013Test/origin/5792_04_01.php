<?php
require_once('TwitterAPIExchange.php');
require_once('timeago.php');

$settings = array(
    'oauth_access_token' => "YOUR TOKEN HERE",
    'oauth_access_token_secret' => "YOUR TOKEN SECRET HERE",
    'consumer_key' => "YOUR CONSUMER KEY HERE",
    'consumer_secret' => "YOUR CONSUMER SECRET HERE"
);
$query = $_GET['q'];
$latlng = $_GET['latlng'];
$url = 'https://api.twitter.com/1.1/search/tweets.json';
$getfield = '?q='. $query .'&geocode='.$latlng.',50km&result_type=recent&count=10';
$requestMethod = 'GET';

$twitter = new TwitterAPIExchange($settings);
$results = $twitter->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest();
$tweets = json_decode($results, true);
$i = 0;
foreach($tweets as $key => $value) {
	 $tweet['text'] = $tweets['statuses'][$i]['text'];
	 $tweet['created_at'] = $tweets['statuses'][$i]['created_at'];
	 $tweet['screen_name'] = $tweets['statuses'][$i]['user']['screen_name'];
	 $tweet['location'] = $tweets['statuses'][$i]['user']['location'];

	 $timeAgo = new TimeAgo();

	if($tweet) {
		echo '<div class="col-xs-12 col-sm-4 single-message">';
		echo '	<div class="panel">';
		echo '    <p class="text-primary">'.$tweet['text'].'</p>';
		echo	'   <p class="text-muted">';
		echo          $timeAgo->inWords($tweet['created_at']);
		echo '       ago </p>';
		echo '    <p class="text-muted"> ';
		echo '     from <a href="http://www.twitter.com/'.$tweet['screen_name'].'">'. $tweet['screen_name'].'</a>, ' . $tweet['location'];
		echo '    </p>';
		echo '</div>';
		echo '</div>';	
	} else {
		echo '<div class="alert alert-default" id="no-search-message">';
		echo  '<strong>Error</strong> we cannot find your <strong>nearest Tweets.</strong>';
		echo '</div>';
	}
$i++;
}
?>