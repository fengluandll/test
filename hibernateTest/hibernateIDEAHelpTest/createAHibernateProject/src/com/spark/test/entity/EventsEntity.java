package com.spark.test.entity;

import javax.persistence.*;
import java.sql.Timestamp;

/**
 * Created by Yun on 28/09/2015.
 */
@Entity
@Table(name = "events", schema = "", catalog = "test")
public class EventsEntity {
    private long eventId;
    private Timestamp eventDate;
    private String title;

    @Id
    @Column(name = "EVENT_ID")
    public long getEventId() {
        return eventId;
    }

    public void setEventId(long eventId) {
        this.eventId = eventId;
    }

    @Basic
    @Column(name = "EVENT_DATE")
    public Timestamp getEventDate() {
        return eventDate;
    }

    public void setEventDate(Timestamp eventDate) {
        this.eventDate = eventDate;
    }

    @Basic
    @Column(name = "title")
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Override
    public int hashCode() {
        int result = (int) (eventId ^ (eventId >>> 32));
        result = 31 * result + (eventDate != null ? eventDate.hashCode() : 0);
        result = 31 * result + (title != null ? title.hashCode() : 0);
        return result;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        EventsEntity that = (EventsEntity) o;

        if (eventId != that.eventId) return false;
        if (eventDate != null ? !eventDate.equals(that.eventDate) : that.eventDate != null) return false;
        if (title != null ? !title.equals(that.title) : that.title != null) return false;

        return true;
    }


    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("EventsEntity{");
        sb.append("eventId=").append(eventId);
        sb.append(", eventDate=").append(eventDate);
        sb.append(", title='").append(title).append('\'');
        sb.append('}');
        return sb.toString();
    }


}
