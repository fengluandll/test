package com.packtpub.mongo.chapter3;
import com.mongodb.BasicDBObject;

/**
 * Created by Allbts-IT on 26/05/2016.
 */
public class SimplePojo2 extends BasicDBObject {
    public String getUpperCaseKey(String key) {
        String value = (String) super.get(key);
        if (value != null)
            return value.toUpperCase();
        else
            return null;
    }
}
