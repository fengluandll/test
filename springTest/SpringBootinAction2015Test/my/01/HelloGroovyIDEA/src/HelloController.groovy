/**
 * Created by Allbts-IT on 22/08/2016.
 */

@RestController
class HelloController {
    @RequestMapping("/")
    def hello(){
        return "Hello, IDEA"
    }
}
