package repository;

import common.DateUtil;
import model.Cruise;
import model.Idable;
import model.Port;
import model.Ship;
import org.bson.Document;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


public class CruiseRepository extends AbstractRepository<Cruise> {

    private static final CruiseRepository REPOSITORY = new CruiseRepository();
    private static final String DEPARTURE_PORT_ID = "departurePortId";
    private static final String SHIP_ID = "shipId";
    private static final String SAILING_DATE = "sailingDate";
    private static final String RETURN_DATE = "returnDate";
    private static final String PORT_IDS = "portIds";
    private static final String PASSENGER_IDS = "passengerIds";

    public static CruiseRepository getInstance() {
        return REPOSITORY;
    }

    @Override
    protected String getCollectionName() {
        return "cruise";
    }

    @Override
    protected Cruise createObject() {
        return new Cruise();
    }

    @Override
    protected void setDocumentToObject(Document document, Cruise cruise) {
        Port departurePort = null;
        if (document.getLong(DEPARTURE_PORT_ID) != null) {
            departurePort = PortRepository.getInstance().findById(document.getLong(DEPARTURE_PORT_ID));
        }
        cruise.setDeparturePort(departurePort);

        Ship ship = null;
        if (document.getLong(SHIP_ID) != null) {
            ship = ShipRepository.getInstance().findById(document.getLong(SHIP_ID));
        }
        cruise.setShip(ship);

        cruise.setSailingDate(DateUtil.dateToLocalDate(document.getDate(SAILING_DATE)));
        cruise.setReturnDate(DateUtil.dateToLocalDate(document.getDate(RETURN_DATE)));

        List<Long> portIds = (List<Long>) document.get(PORT_IDS);
        if (portIds != null && !portIds.isEmpty()) {
            final List<Port> ports = PortRepository.getInstance().findByIds(portIds);
            cruise.setPortsOfAll(ports);
        }

        List<Long> passengerIds = (List<Long>)document.get(PASSENGER_IDS);
        if (passengerIds != null && !passengerIds.isEmpty()) {
            cruise.setSailedPassengers(PassengerRepository.getInstance().findByIds(passengerIds));
        }

    }

    @Override
    protected void setObjectToDocument(Cruise cruise, Document document) {
        final Long departurePortId = cruise.getDeparturePort() == null ? null : cruise.getDeparturePort().getId();
        final Long shipId = cruise.getShip() == null ? null : cruise.getShip().getId();
        List<Long> portIds = new ArrayList<>();
        if (cruise.getPortsOfAll() != null) {
            portIds = cruise.getPortsOfAll()
                    .stream()
                    .map(Port::getId)
                    .collect(Collectors.toList());
        }

        List<Long> passengerIds = new ArrayList<>();
        if (cruise.getSailedPassengers() != null) {
            passengerIds = cruise.getSailedPassengers()
                    .stream()
                    .map(Idable::getId)
                    .collect(Collectors.toList());
        }

        document.append(DEPARTURE_PORT_ID, departurePortId)
                .append(SHIP_ID, shipId)
                .append(SAILING_DATE, DateUtil.localDateToDate(cruise.getSailingDate()))
                .append(RETURN_DATE, DateUtil.localDateToDate(cruise.getReturnDate()))
                .append(PORT_IDS, portIds)
                .append(PASSENGER_IDS, passengerIds);
    }

//    @Override
//    public List<Cruise> findAll() {
//        final List<Sailor> sailors = super.findAll();
//        for (Sailor sailor : sailors) {
//            if (sailor.getSupervisorId() != null) {
//                final Sailor supervisor = findObjectById(sailors, sailor.getSupervisorId());
//                sailor.setSupervisor(supervisor);
//            }
//        }
//        return  sailors;
//    }

}
