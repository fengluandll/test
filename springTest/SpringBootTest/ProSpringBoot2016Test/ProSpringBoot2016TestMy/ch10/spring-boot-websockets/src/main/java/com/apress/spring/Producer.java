package com.apress.spring;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by YunZhang on 28/2/17.
 */
@Component
public class Producer {
    private static final SimpleDateFormat dateFormatter =
            new SimpleDateFormat("MM/dd/yyyy HH:mm:ss");

    public static final Logger LOGGER = Logger.getLogger(Producer.class);

    @Autowired
    private SimpMessagingTemplate template;

    public void sendMessageTo(String topic, String message){
        StringBuilder builder = new StringBuilder();
        builder.append("[");
        builder.append(dateFormatter.format(new Date()));
        builder.append("] ")
                .append(message);
        LOGGER.debug("/topic/"+topic + ": " + builder.toString());
        this.template.convertAndSend("/topic/"+topic,builder.toString());
    }

}
