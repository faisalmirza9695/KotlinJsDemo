if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'Kotlin JS Demo'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Kotlin JS Demo'.");
}this['Kotlin JS Demo'] = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var throwCCE = Kotlin.throwCCE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Unit = Kotlin.kotlin.Unit;
  function Login() {
    var tmp$, tmp$_0, tmp$_1;
    this.loginBtn = Kotlin.isType(tmp$ = document.getElementById('login-btn'), HTMLButtonElement) ? tmp$ : throwCCE();
    this.inputEmail_0 = Kotlin.isType(tmp$_0 = document.getElementById('in-email'), HTMLInputElement) ? tmp$_0 : throwCCE();
    this.inputPassword_0 = Kotlin.isType(tmp$_1 = document.getElementById('in-pass'), HTMLInputElement) ? tmp$_1 : throwCCE();
  }
  Login.prototype.clickLogin = function () {
    println('Email : ' + this.inputEmail_0.value + ' Password : ' + this.inputPassword_0.value);
  };
  Login.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Login',
    interfaces: []
  };
  function main$lambda(closure$login) {
    return function (it) {
      closure$login.clickLogin();
      return Unit;
    };
  }
  function main(args) {
    var login = new Login();
    login.loginBtn.addEventListener('click', main$lambda(login));
  }
  _.Login = Login;
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('Kotlin JS Demo', _);
  return _;
}(typeof this['Kotlin JS Demo'] === 'undefined' ? {} : this['Kotlin JS Demo'], kotlin);
