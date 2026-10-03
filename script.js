const loginPage = document.getElementById("loginPage");
const academyPage = document.getElementById("academyPage");

const phoneInput = document.getElementById("phone");
const sendCodeButton = document.getElementById("sendCode");

const codeBox = document.getElementById("codeBox");
const verificationCodeInput =
  document.getElementById("verificationCode");

const verifyCodeButton =
  document.getElementById("verifyCode");

const message = document.getElementById("message");
const logoutButton = document.getElementById("logout");

let confirmationResult = null;


/* عرض الرسائل */

function showMessage(text, error = true) {
  message.textContent = text;
  message.style.color = error ? "#d33" : "#159447";
}


/* إرسال كود SMS */

sendCodeButton.addEventListener("click", async () => {

  const phone = phoneInput.value.trim();

  if (!phone) {
    showMessage("اكتب رقم الهاتف أولاً.");
    return;
  }

  showMessage("جاري إرسال الكود...", false);

  sendCodeButton.disabled = true;

  try {

    confirmationResult =
      await window.sendLoginCode(phone);

    codeBox.style.display = "block";

    showMessage(
      "تم إرسال كود التحقق إلى هاتفك.",
      false
    );

  } catch (error) {

    console.error(error);

    showMessage(
      "حصل خطأ في إرسال الكود. تأكد من رقم الهاتف."
    );

    sendCodeButton.disabled = false;
  }

});


/* تسجيل الدخول بالكود */

verifyCodeButton.addEventListener("click", async () => {

  const code =
    verificationCodeInput.value.trim();

  if (!code) {
    showMessage("اكتب كود التحقق.");
    return;
  }

  if (!confirmationResult) {
    showMessage("اطلب كود التحقق أولاً.");
    return;
  }

  verifyCodeButton.disabled = true;

  try {

    await confirmationResult.confirm(code);

    showMessage(
      "تم تسجيل الدخول بنجاح.",
      false
    );

  } catch (error) {

    console.error(error);

    showMessage(
      "كود التحقق غير صحيح."
    );

    verifyCodeButton.disabled = false;
  }

});


/* تسجيل الخروج */

logoutButton.addEventListener("click", async () => {

  try {

    await window.logoutUser();

  } catch (error) {

    console.error(error);

  }

});


/* إظهار الصفحة المناسبة */

window.showAcademy = function () {

  loginPage.style.display = "none";
  academyPage.style.display = "block";

};


window.showLogin = function () {

  loginPage.style.display = "flex";
  academyPage.style.display = "none";

  codeBox.style.display = "none";

  verificationCodeInput.value = "";

  sendCodeButton.disabled = false;

};


/* الحالة الابتدائية */

window.showLogin();
