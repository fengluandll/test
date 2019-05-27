package operators.errormgr

import io.reactivex.Observable
import java.io.IOException

fun main() {
    Observable.error<Any>(IOException("Something went wrong"))
            .doOnError { error ->
                System.err.println("The error message is: $error.message") }
            .subscribe(
                    { println("onNext should never be printed!") },
                    { it.printStackTrace() },
                    { println("onComplete should never be printed!") })
}

