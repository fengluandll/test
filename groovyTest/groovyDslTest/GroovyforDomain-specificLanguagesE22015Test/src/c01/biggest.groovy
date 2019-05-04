def biggest = { number1, number2 ->
    number1 < number2 ? number2 : number1
}

def result = biggest.call(7, 1)
println result

result = biggest(3,5)
println result

result = biggest 13, 1
println result