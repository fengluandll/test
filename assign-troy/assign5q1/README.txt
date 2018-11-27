1. If there is no MongoDB server installed on your computer. Please install it with the reference documentation at
https://docs.mongodb.com/manual/administration/install-community/
2. If there is not JDK 8+ on your system, Please install it.
3. Start MongoDB
For example:
/Users/popese-yun/program2/db/mongodb-osx-x86_64-4.0.4/bin/mongod --dbpath /Users/popese-yun/gitWorkspace/test/assign-troy/assign5q1/data

Please replace the mongod path part(/Users/popese-yun/program2/db/mongodb-osx-x86_64-4.0.4/bin/) with your path where mongod resides.
Please replace the project parent path /Users/popese-yun/gitWorkspace/test/assign-troy/ with your path where the project resides.

4. Compile and run the program
Please execute the following command in the project root directory

./gradlew run

The alternative way is either open the project using IntelliJ or import the Gradle Project into IDEs, then run the Main class
using the IDE.
