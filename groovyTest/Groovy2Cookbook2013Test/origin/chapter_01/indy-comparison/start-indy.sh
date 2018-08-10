#!/bin/sh

SCRIPT="script.groovy"
JAVA_6_HOME="SET JAVA 6 HOME"
JAVA_7_HOME="SET JAVA 7 HOME"
GROOVY_HOME="SET GROOVY HOME"
PATH=$PATH:$GROOVY_HOME/bin

JAVA_HOME=$JAVA_7_HOME
JAVA_VER=$(java -version 2>&1 | grep "java version")

mkdir -p $GROOVY_HOME/noindy


for f in `ls $GROOVY_HOME/lib/groovy*.jar`;do
  mv $f $GROOVY_HOME/noindy
done

for i in `ls $GROOVY_HOME/indy/groovy*.jar`;do
  fbname=`basename "$i" .jar`
  indy=${fbname:0:${#fbname}-5}
  #echo $indy.jar
  mv $i $GROOVY_HOME/lib/$indy.jar
done


echo ":: Running test using indy jars, indy flag and Java 7 {$JAVA_VER}"
groovy --indy $SCRIPT

echo ":: Running test using indy jars, Java 7 {$JAVA_VER} but no indy flag"
groovy $SCRIPT


# moving back indy jars to original location (indy folder)
for f in `ls $GROOVY_HOME/lib/groovy*.jar`;do
  fbname=`basename "$f" .jar`
  mv $f $GROOVY_HOME/indy/$fbname-indy.jar
done

# moving back to /lib non-indy jars
for i in `ls $GROOVY_HOME/noindy/*.*`;do
  fbname=`basename "$f" .jar`
  mv $i $GROOVY_HOME/lib
done

echo ":: Running test using non indy jars and Java 7"
groovy $SCRIPT

JAVA_HOME=$JAVA_6_HOME
JAVA_VER=$(java -version 2>&1 | grep "java version")
echo ":: Running test using non indy jars and Java 6 {$JAVA_VER}"
groovy $SCRIPT

