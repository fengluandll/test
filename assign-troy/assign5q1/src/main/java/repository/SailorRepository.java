package repository;

import common.DateUtil;
import model.Sailor;
import org.bson.Document;

import java.util.List;

public class SailorRepository extends AbstractRepository<Sailor> {

    private static final String NAME = "name";
    private static final String NATIONALITY = "nationality";
    private static final String DATE_OF_BIRTH = "dateOfBirth";
    private static final String SUPERVISOR_ID = "supervisorId";

    private static final SailorRepository SAILOR_REPOSITORY = new SailorRepository();

    public static final SailorRepository getInstance() {
        return SAILOR_REPOSITORY;
    }

    @Override
    protected String getCollectionName() {
        return "sailor";
    }

    @Override
    protected Sailor createObject() {
        return new Sailor();
    }

    @Override
    protected void setDocumentToObject(Document document, Sailor sailor) {
        sailor.setName(document.getString(NAME));
        sailor.setNationality(document.getString(NATIONALITY));
        sailor.setDateOfBirth(DateUtil.dateToLocalDate(document.getDate(DATE_OF_BIRTH)));

        final Long supervisorId = document.getLong(SUPERVISOR_ID);
        sailor.setSupervisorId(supervisorId);
    }

    @Override
    protected void setObjectToDocument(Sailor sailor, Document document) {
        final Long supervisorId = sailor.getSupervisor() != null ? sailor.getSupervisor().getId() : null;
        document.append(NAME, sailor.getName())
                .append(NATIONALITY, sailor.getNationality())
                .append(DATE_OF_BIRTH, sailor.getDateOfBirth())
                .append(SUPERVISOR_ID, supervisorId);
    }

    @Override
    public List<Sailor> findAll() {
        final List<Sailor> sailors = super.findAll();
        for (Sailor sailor : sailors) {
            if (sailor.getSupervisorId() != null) {
                final Sailor supervisor = findObjectById(sailors, sailor.getSupervisorId());
                sailor.setSupervisor(supervisor);
            }
        }
        return  sailors;
    }

    private Sailor findObjectById(List<Sailor> sailors, Long id) {
        for (Sailor sailor : sailors) {
            if (sailor.getId() != null && sailor.getId().equals(id)) {
                return sailor;
            }
        }
        return null;
    }
}
