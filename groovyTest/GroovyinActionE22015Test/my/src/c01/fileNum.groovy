package c01

def number = 0
new File('/Users/popese-yun/gitWorkspace/test/groovyTest/GroovyinActionE22015Test/my/src/c01/fileNum.groovy').eachLine { line ->
    number++
    println "$number: $line"
}

