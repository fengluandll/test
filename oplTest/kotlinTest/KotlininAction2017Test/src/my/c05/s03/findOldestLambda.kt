package my.c05.s03

fun main(args: Array<String>) {
    val people = listOf(Person("Alice", 29),
            Person("Bob", 31))
    println(people.maxBy { it.age })
}

