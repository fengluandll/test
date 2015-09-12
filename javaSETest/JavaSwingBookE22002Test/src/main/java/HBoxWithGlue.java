
// HBoxWithGlue.java
// A quick test of the box layout manager using the Box utility class.
//
import java.awt.Button;

import javax.swing.Box;
import javax.swing.JFrame;

public class HBoxWithGlue extends JFrame {

	private static final long serialVersionUID = -479663885641904996L;

	public HBoxWithGlue() {
		super("Box & Glue Frame");
		setSize(350, 100);
		Box box = Box.createHorizontalBox();
		setContentPane(box);
		box.add(Box.createHorizontalGlue());
		for (int i = 0; i < 3; i++) {
			Button b = new Button("B" + i);
			box.add(b);
		}
		box.add(Box.createHorizontalGlue());
		setDefaultCloseOperation(EXIT_ON_CLOSE);
	}

	public static void main(String args[]) {
		HBoxWithGlue bt = new HBoxWithGlue();
		bt.setVisible(true);
	}
}
