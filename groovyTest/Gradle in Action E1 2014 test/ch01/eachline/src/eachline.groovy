/**
 * Created by Yun on 26/09/2015.
 */
def number=0
new File('eachline.groovy').eachLine { line->
    number++
    println "** $number: $line"
}