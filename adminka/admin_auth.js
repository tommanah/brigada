function check_form() {
    
    let admin_login = document.getElementById("admin_login").value;
    let admin_password = document.getElementById("admin_password").value;
    let admin_token = document.getElementById("admin_token").value;

    if (admin_login.length == 0) {
        let message = document.getElementById("error_admin_login");
        message.style.display = "block";
        return;
    } 
    // else {
    //     let message = document.getElementById("error_admin_login");
    //     message.style.display = "none";
    // }

    if (admin_password.length == 0) {
        let message = document.getElementById("error_admin_password");
        message.style.display = "block";
        return;
    } 
    // else {
    //     let message = document.getElementById("error_admin_password");
    //     message.style.display = "none";
    // }

    if (admin_token.length == 0) {
        let message = document.getElementById("error_admin_token");
        message.style.display = "block";
        return;
    }
    //  else {
    //     let message = document.getElementById("error_admin_token");
    //     message.style.display = "none";
    // }

    // console.log(admin_login, admin_password, admin_token);
    

    let data = {
        admin_login: admin_login,
        admin_password: admin_password
        // admin_token
    };

    // Отправляем данные на сервер
    fetch('url_вашего_backend', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            console.log('Данные успешно отправлены на сервер');
        } else {
            console.error('Ошибка при отправке данных на сервер');
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
    }); 
}