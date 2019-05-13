package c02;

import rx.subjects.PublishSubject;

public class TwitterSubject {
    private final PublishSubject<Status> subject = PublishSubject.create();

    public TwitterSubject() {

    }
}
