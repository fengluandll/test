rangeList = range(10)
print rangeList

for number in rangeList:
    if number in (3, 4, 7, 9):
        # "Break" ends the for instruction without the else clause
        print str(number) + " is (3, 4, 7, 9)"
        break
    else:
        continue
else:
    pass

if rangeList[1] == 2:
    print "the second element (lists are 0-based) is 2"
elif rangeList[1] == 3:
    print "the second element is 3"
else:
    print "I don't know"

while rangeList[1] == 1:
    print 1
    pass