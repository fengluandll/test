@RestController
class WebApp{
	@RequestMapping("/")
	String greetings(){
		"<h1>Spring Boot Rock and Roll</h1>"
	}
}