import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

/**
 * Created by Allbts-IT on 22/08/2016.
 */

@RestController
class HelloController {

    @RequestMapping("/")
    def hello(){
        return "Hello, IDEA Spring Initializer";
    }

}
