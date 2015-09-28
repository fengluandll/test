package soundsystem;

import org.springframework.beans.factory.annotation.Autowired;

/**
 * implementation
 * Created by Yun on 28/09/2015.
 */
public class CDPlayer implements MediaPlayer {
    private CompactDisc cd;

    @Autowired
    public CDPlayer(CompactDisc cd) {
        this.cd = cd;
    }

    @Override
    public void play() {
        cd.play();
    }
}
