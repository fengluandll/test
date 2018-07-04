funzionevar = lambda x: x + 1
print funzionevar(1)

def passing_example(my_list, my_int):
    my_list.append("new element")
    my_int = 4
    return my_list, my_int
input_my_list = [1,2,3]
input_my_int = 10
print passing_example(input_my_list, input_my_int)

