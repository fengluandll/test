package c01
def customers = new XmlSlurper().parse(new File('/Users/popese-yun/gitWorkspace/test/groovyTest/GroovyinActionE22015Test/data/customers.xml'))
for (customer in customers.corporate.customer) {
    println "${customer.@name} works for ${customer.@company}"
}

