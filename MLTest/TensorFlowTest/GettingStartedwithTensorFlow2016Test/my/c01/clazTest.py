class MyClass:
    common = 10

    def __init__(self):
        self.myvariable = 3

    def myfunc(self, arg1, arg2):
        return self.myvariable


instance = MyClass()
print instance.myfunc(1, 2)
instance2 = MyClass()
print instance2.common
print instance.common

MyClass.common = 30
print instance2.common
print instance.common

instance.common = 10
print instance.common
print instance2.common

MyClass.common = 50
print instance.common
print instance2.common


class AnotherClass(MyClass):

    def __init__(self, arg1):
        self.myvariable = 3
        print arg1


instance = AnotherClass("hello")
instance.test = 10
print instance.test
