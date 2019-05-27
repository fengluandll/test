plugins {
    java
}

group = "com.test"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
//    testCompile("junit", "junit", "4.12")
    compile("io.reactivex.rxjava2", "rxjava", "2.2.8")
    compile ("io.projectreactor", "reactor-core", "3.2.9.RELEASE")
}

configure<JavaPluginConvention> {
    sourceCompatibility = JavaVersion.VERSION_1_8
}