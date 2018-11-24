package ui;

import model.Ship;
import repository.AbstractRepository;

public class ShipListPane extends AbstractListPane<Ship>{
    @Override
    protected void setCellValueFactories() {

    }

    @Override
    protected AbstractRepository<Ship> getRepositoryInstance() {
        return null;
    }

    @Override
    protected String getAddModifyPaneFxmlFileName() {
        return null;
    }

    @Override
    protected String getEntityName() {
        return null;
    }
}
