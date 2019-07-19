import java.util.*

data class Todo(
    val description: String,
    val name: String,
    val targetDate: Date
)

fun main(args: Array<String>) {
    var todo = Todo(
        "Learn Spring Boot",
        "Jack", Date()
    )
    println(todo)
    //Todo(description=Learn Spring Boot, name=Jack,
    //targetDate=Mon May 22 04:26:22 UTC 2017)
    var todo2 = todo.copy(name = "Jill")
    println(todo2)
    //Todo(description=Learn Spring Boot, name=Jill,
    //targetDate=Mon May 22 04:26:22 UTC 2017)
    var todo3 = todo.copy()
    println(todo3.equals(todo)) //true

    val arrayList = arrayListOf("Item1", "Item2", "Item3")
    // Type is ArrayList

    var todo4 = Todo(
        description = "Learn Spring Boot",
        name = "Jack", targetDate = Date()
    )

    var first3TodosOfJack = students
        .filter { it.name == "Jack" }
        .take(3)
}
