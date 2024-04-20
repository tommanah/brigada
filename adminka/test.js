// import axios from './axios';

function check_form() {
    let admin_login = document.getElementById("admin_login").value;
    let admin_password = document.getElementById("admin_password").value;

    const fields = ["admin_login", "admin_password", "admin_token"];
    const errorMessages = ["error_admin_login", "error_admin_password", "error_admin_token"];

    for (let i = 0; i < fields.length; i++) {
        let field = document.getElementById(fields[i]);
        let message = document.getElementById(errorMessages[i]);

        if (field.value.length === 0) {
            message.style.display = "block";
            return;
        } else {
            message.style.display = "none";
        }
    }

    let data = {
        admin_login: admin_login,
        admin_password: admin_password
        // admin_token
    };

    fetch('https://45htp9nq-12060.euw.devtunnels.ms/api/admin/login/', {
    mode: 'no-cors',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            console.log('Запрос успешно отправлен, но ответ сервера не доступен из-за mode: no-cors');
            window.location.href = 'admin_main_page.html';
        } else {
            console.log('Ошибка при отправке запроса');
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });

}