package model;

public class Idable {
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Idable idable = (Idable) o;

        return id.equals(idable.id);
    }

    @Override
    public int hashCode() {
        return id.hashCode();
    }
}
