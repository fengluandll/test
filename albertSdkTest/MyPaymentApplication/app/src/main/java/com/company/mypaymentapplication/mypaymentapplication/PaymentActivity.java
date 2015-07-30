package com.company.mypaymentapplication.mypaymentapplication;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.ActionBarActivity;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Toast;

import com.aevi.authentication.AuthenticationRequest;
import com.aevi.authentication.AuthenticationResult;
import com.aevi.authentication.Role;
import com.aevi.helpers.services.AeviServiceConnectionCallback;
import com.aevi.mail.MailMessage;
import com.aevi.mail.MailService;
import com.aevi.mail.MailServiceProvider;
import com.aevi.payment.PaymentRequest;
import com.aevi.payment.TransactionResult;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.Currency;


public class PaymentActivity extends ActionBarActivity {

    private static final String TAG = "com.company.mypaymentapplication.mypaymentapplication.PaymentActivity";

    private MailServiceProvider serviceProvider = new MailServiceProvider(PaymentActivity.this);

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_payment);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_payment, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    public void onButtonClick(View view){
        PaymentRequest payment = new PaymentRequest(new BigDecimal("20.00"));
        payment.setCurrency(Currency.getInstance("USD"));
        //1 payment
        startActivityForResult(payment.createIntent(), 1);
    }

    public void onBtnEmailClick(View view){
        serviceProvider.connect(new AeviServiceConnectionCallback<MailService>() {
            @Override
            public void onConnect(MailService service) {
                MailMessage mailMessage = new MailMessage()
                        .addTo("jslgdxzy@gmail.com")
                        .setSubject("Good morning,mate")
                        .setPlainContent("This is a plain text mail message.\n \n Greetings \n \n The Spark Team");
                service.send(mailMessage);
            }
        });
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == 1){
            // Obtain the transaction result from the returned data.
            TransactionResult result = TransactionResult.fromIntent(data);
            // Use a toast to show the transaction result.
            Toast.makeText(this, "Transaction result: " + result.getTransactionStatus(), Toast.LENGTH_LONG).show();
        }else if (requestCode == 2) { //authenticate
            if (resultCode != Activity.RESULT_OK) {
                Toast.makeText(this, "Authentication failed" , Toast.LENGTH_LONG).show();
                return;
            }else{
                // read the authentication result
                AuthenticationResult authenticationResult = AuthenticationResult.fromIntent(data);
                // read the role from the authentication result
                Role role = authenticationResult.getRole();
                Toast.makeText(this, "Authentication succeed: " + role.name() , Toast.LENGTH_LONG).show();
            }
        }
    }

    public void authenticationRequestClick(View view) {
        // send the AuthenticationRequest to the AEVI platform
        startActivityForResult(new AuthenticationRequest(Role.MANAGER).createIntent(), 2);

    }

}
