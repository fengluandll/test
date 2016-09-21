package com.insightfullogic.java8.my.ch02;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

/**
 * Created by Allbts-IT on 21/09/2016.
 */
public class ButtonListener extends JFrame{

    private JButton jButton = new JButton("Test");

    public ButtonListener() throws HeadlessException {
        super();
        add(jButton);
        jButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                System.out.println("button clicked");
            }
        });
        pack();
    }

    public static void main(String[] args) {
        ButtonListener buttonListener = new ButtonListener();
        buttonListener.setVisible(true);
    }
}
