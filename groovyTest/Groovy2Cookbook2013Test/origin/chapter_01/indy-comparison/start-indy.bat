@echo off

@set SCRIPT=script.groovy

@set JAVA_HOME=C:\JVMs\jdk1.7.0_25
@set GROOVY_HOME=C:\Applications\groovy-2.1.5
@set CLASSPATH=C:\Applications\groovy-2.1.5\indy\groovy-2.1.5-indy.jar 
@set PATH=%GROOVY_HOME%\bin;%JAVA_HOME%\bin;%PATH%
@call groovy --indy %SCRIPT%

@set CLASSPATH=
@call groovy %SCRIPT%

@set JAVA_HOME=C:\JVMs\jdk1.6.0_45
@set PATH=%GROOVY_HOME%\bin;%JAVA_HOME%\bin;%PATH%
@call groovy %SCRIPT%