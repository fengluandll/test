fun main() {
    var list: List<Any> = listOf("One", 2, "Three",
        "Four", 4.5, "Five", 6.0f)
    var iterator = list.iterator()

    while (iterator.hasNext()) {
        println(iterator.next())
    }
}

