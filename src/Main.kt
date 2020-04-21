
fun main(args: Array<String>) {
    val login = Login()
    login.loginBtn.addEventListener("click", {
        login.clickLogin()
    })
}