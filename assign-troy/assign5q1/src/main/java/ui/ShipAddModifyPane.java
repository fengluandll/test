package ui;

import model.Ship;
import repository.AbstractRepository;
import repository.ShipRepository;

public class ShipAddModifyPane extends AbstractAddModifyPane<Ship> {
    @Override
    protected AbstractRepository<Ship> getRepositoryInstance() {
        return ShipRepository.getInstance();
    }

    @Override
    protected Ship controlsToObject() {
        return null;
    }

    @Override
    protected void objectToControls(Ship intactObject) {

    }
}
