package com.insightfullogic.java8.my.ch02;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

/**
 * Created by Allbts-IT on 21/09/2016.
 */
public class ButtonListenerLambda extends JFrame{

    private JButton jButton = new JButton("Test");

    public ButtonListenerLambda() throws HeadlessException {
        super();
        add(jButton);
        jButton.addActionListener(event -> System.out.println("button clicked lambda"));
        pack();
    }

    public static void main(String[] args) {
        ButtonListenerLambda buttonListener = new ButtonListenerLambda();
        buttonListener.setVisible(true);
    }
}
