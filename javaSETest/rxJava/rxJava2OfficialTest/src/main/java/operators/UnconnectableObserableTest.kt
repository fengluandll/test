package operators

import io.reactivex.Observable
import java.util.concurrent.TimeUnit

fun main() {
    val firstMillion  = Observable
            .range( 1, 1000000 )
            .sample(7, TimeUnit.MILLISECONDS)

    firstMillion.subscribe(
            { println("Subscriber #1:" + it); },       // onNext
            { println("Error: " + it.message); }, // onError
            { println("Sequence #1 complete"); }       // onCompleted
    )

    firstMillion.subscribe(
            { println("Subscriber #2:" + it); },       // onNext
            { println("Error: " + it.message); }, // onError
            { println("Sequence #2 complete"); }       // onCompleted
    )
}


