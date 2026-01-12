document.getElementById('login-form').onsubmit = function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulasi Otentikasi
    if (username === "mahasiswa" && password === "1234") {
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('student-dashboard').style.display = 'block';
        document.getElementById('welcome-message').innerText = `Selamat datang, ${username}!`;
        loadCourses();
    } else if (username === "staff" && password === "admin") {
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('staff-dashboard').style.display = 'block';
        loadStudents();
    } else {
        alert('Username atau Password salah!');
    }
};

function loadCourses() {
    const courses = ["Matematika", "Algoritma", "Pemrograman Web"];
    const course

