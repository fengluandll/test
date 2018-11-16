package c03;

public interface SessionStorage {
  void storeTop(Item top);
  Item readTop();
}