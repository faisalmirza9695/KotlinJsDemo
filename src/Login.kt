import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLInputElement
import kotlin.browser.document

class Login {
    val loginBtn = document.getElementById("login-btn") as HTMLButtonElement
    private val inputEmail = document.getElementById("in-email") as HTMLInputElement
    private val inputPassword = document.getElementById("in-pass") as HTMLInputElement

    fun clickLogin(){
            println("Email : ${inputEmail.value} Password : ${inputPassword.value}" )
    }
}