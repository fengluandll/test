package ch04.my

import ch04.main.Focusable

internal open class TalkativeButton : Focusable {
    private fun yell() = println("Hey!")
    protected fun whisper() = println("Let's talk!")
}

//fun TalkativeButton.giveSpeech() {
//    yell()
//    whisper()
//}