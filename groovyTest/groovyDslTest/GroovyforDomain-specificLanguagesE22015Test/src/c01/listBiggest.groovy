def listbiggest = { list ->
    def biggest = list[0]

    for (i in list)
        if(i > biggest)
            biggest = i
    return biggest
}

def numberList = [8, 6, 7, 5, 3, 9]

println listbiggest(numberList)