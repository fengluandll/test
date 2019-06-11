import io.reactivex.subjects.PublishSubject
import io.reactivex.subjects.Subject

fun main() {
    var subject: Subject<Int> = PublishSubject.create()
    subject
        .map { isEven(it) }
        .subscribe {
            println("The number is ${ if(it) "Event" else "Odd" }")
        }

    subject.onNext(4)
    subject.onNext(9)
}

fun isEven(num: Int) = num % 2 == 0
