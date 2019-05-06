package ch04.my

import ch04.Button1.Button
import ch04.Button1.State
import ch04.Button1.View

class Button: View {
    override fun getCurrentState(): State = Button.ButtonState()

    override fun restoreState(state: State) {
        super.restoreState(state)
    }
}