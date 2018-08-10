// http://stackoverflow.com/questions/16511983/groovy-invokedynamic-performance

class A{
    def n(){
        return 1
    }
}
class B{
    def n(){
        return 2
    }
}
class C{
    def n(){
        return 3
    }
}
class D{
    def n(){
        return 4
    }
}

def bench(loops){
    def a = new A()
    def b = new B()
    def c = new C()
    def d = new D()
    def ret=0
    for(i=0; i<loops; i++){
      ret = ret + getN(a) + getN(b) + getN(c) + getN(d)
      // ret = ret + a.n() + b.n() + c.n() + d.n()
    }
    return ret
}

def getN(clazz){
    return clazz.n()
}


bench(50)

def ITER = 100000
def start = System.nanoTime()
bench(ITER)
def end = System.nanoTime()
println "Time per iteration = " + ((end - start)/(ITER * 1000)) + " microseconds"
