<?php
/** 
 * Simple script that fetches bank user accounts
 * Chapter 4
 * Luis Atencio
 * Paul Daniels
 * Usage: $>php -S localhost:8000 -t /rxjs-in-action/samples/ch04/users
 */
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

if (preg_match('/\.(?:png|jpg|jpeg|gif)$/', $_SERVER["REQUEST_URI"])) {
    return false;    // serve the requested resource as-is.
}
else {    
	$result = [];

	// Return a set of mock objects
	$my = new \stdClass();
	$my->accountNum = 4111111111111111;
	$my->name = 'Joe Doe';
	$my->openedOn = '';
	$my->type = 'checking';
	$result[] = $my;

	$spouse = new \stdClass();
	$spouse->accountNum = 5105105105105100;
	$spouse->name = 'Sussane Doe';
	$spouse->openedOn = '';
	$spouse->type = 'checking';
	$result[] = $spouse;

	$savings = new \stdClass();
	$savings->accountNum = 4342561111111118;
	$savings->name = 'Joe Doe Savings';
	$savings->openedOn = '';
	$savings->type = 'savings';
	$result[] = $savings;


	$cd = new \stdClass();
	$cd->accountNum = 6500000000000002;
	$cd->name = 'Joe Doe CD';
	$cd->openedOn = '';
	$savings->type = 'savings';
	$result[] = $cd;

    echo json_encode($result);
}
