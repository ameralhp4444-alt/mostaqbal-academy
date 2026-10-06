* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: #f5f7fb;
    color: #172033;
    direction: rtl;
}

header {
    background: linear-gradient(135deg, #0b1f3a, #163f70);
    color: white;
    padding: 18px 7%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.12);
}

.logo {
    font-size: 25px;
    font-weight: bold;
}

.logo span {
    color: #d4af37;
}

nav {
    display: flex;
    gap: 20px;
}

nav a {
    color: white;
    text-decoration: none;
    font-size: 16px;
    transition: 0.3s;
}

nav a:hover {
    color: #d4af37;
}

/* Login */
.login-section {
    min-height: 75vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
    background:
        linear-gradient(rgba(11, 31, 58, 0.88), rgba(22, 63, 112, 0.88)),
        url("https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=80");
    background-size: cover;
    background-position: center;
}

.login-box {
    width: 100%;
    max-width: 430px;
    background: white;
    padding: 35px;
    border-radius: 18px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
    text-align: center;
}

.login-box h1 {
    color: #0b1f3a;
    margin-bottom: 10px;
}

.login-box p {
    color: #687386;
    margin-bottom: 25px;
}

.input-group {
    margin-bottom: 15px;
}

.input-group input {
    width: 100%;
    padding: 14px;
    border: 1px solid #d9dee8;
    border-radius: 10px;
    outline: none;
    font-size: 16px;
    direction: ltr;
}

.input-group input:focus {
    border-color: #163f70;
}

button {
    width: 100%;
    padding: 14px;
    border: none;
    border-radius: 10px;
    background: #0b1f3a;
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
}

button:hover {
    background: #d4af37;
    color: #0b1f3a;
}

/* Courses */
.courses-section {
    padding: 60px 7%;
}

.section-title {
    text-align: center;
    margin-bottom: 35px;
}

.section-title h2 {
    color: #0b1f3a;
    font-size: 30px;
}

.section-title p {
    color: #687386;
    margin-top: 8px;
}

.courses-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
}

.course-card {
    background: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
    transition: 0.3s;
}

.course-card:hover {
    transform: translateY(-7px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.14);
}

.course-card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
}

.course-content {
    padding: 20px;
}

.course-content h3 {
    color: #0b1f3a;
    margin-bottom: 10px;
}

.course-content p {
    color: #687386;
    line-height: 1.7;
    margin-bottom: 15px;
}

.course-content .course-button {
    display: inline-block;
    width: 100%;
    text-align: center;
    padding: 12px;
    background: #163f70;
    color: white;
    text-decoration: none;
    border-radius: 9px;
    transition: 0.3s;
}

.course-content .course-button:hover {
    background: #d4af37;
    color: #0b1f3a;
}

/* Footer */
footer {
    background: #0b1f3a;
    color: white;
    text-align: center;
    padding: 25px;
    margin-top: 30px;
}

footer span {
    color: #d4af37;
}

/* Mobile */
@media (max-width: 700px) {
    header {
        flex-direction: column;
        gap: 15px;
        text-align: center;
    }

    nav {
        flex-wrap: wrap;
        justify-content: center;
    }

    .login-section {
        min-height: 70vh;
        padding: 25px 15px;
    }

    .login-box {
        padding: 25px 20px;
    }

    .courses-section {
        padding: 40px 15px;
    }

    .section-title h2 {
        font-size: 25px;
    }
}
