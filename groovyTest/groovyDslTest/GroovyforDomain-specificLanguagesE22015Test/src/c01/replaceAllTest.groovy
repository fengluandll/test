def lorem =
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
println(lorem)

def matcher = lorem =~ " +"
def removed = matcher.replaceAll("_")
println removed
println lorem
