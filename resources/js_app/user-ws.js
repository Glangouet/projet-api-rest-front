function getUsers() {
    // Création de l'objet XHR
    var xhr = getXhr();
    // Ouverture de l'URL en GET
    xhr.open("GET", "http://127.0.0.1/index.php", false);
    // Envoie de la requête
    xhr.send();
    // Récupération de la réponse
    var json = xhr.responseText;
    // Parse du tableau d'utilisateur
    var users = JSON.parse(json);
    // Parse de chaque utilisateur
    for (var i = 0; i < users.length; i++) {
        users[i] = User.fromObject(users[i]);
    }

    return users;
}

function getUserById(id) {
    // Création de l'objet XHR
    var xhr = getXhr();
    // Ouverture de l'URL en GET avec l'identifiant
    xhr.open("GET", "http://127.0.0.1/index.php?id=" + id, false);
    // Envoie de la requête
    xhr.send();
    // Récupération de la réponse
    var json = xhr.responseText;

    // Parse de l'utilisateur
    return User.fromJson(json);
}

function addUser(user) {
    // Création de l'objet XHR
    var xhr = getXhr();
    // Ouverture de l'URL en POST
    xhr.open("POST", "http://127.0.0.1/index.php", false);
    // Envoie de la requête avec l'objet User dans le body
    xhr.send(user.toJson());

    // Récupération de la réponse
    return xhr.responseText;
}

function updateUser(user) {
    // Création de l'objet XHR
    var xhr = getXhr();
    // Ouverture de l'URL en POST
    xhr.open("PUT", "http://127.0.0.1/index.php", false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    // Envoie de la requête avec l'objet User dans le body
    xhr.send(user.toJson());

    // Récupération de la réponse
    return xhr.status === 202;
}

function deleteUser(id) {
    // Création de l'objet XHR
    var xhr = getXhr();
    // Ouverture de l'URL en DELETE
    xhr.open("DELETE", "http://127.0.0.1/index.php", false);
    // Envoie de la requête avec l'objet User dans le body
    xhr.send(JSON.stringify(id));

    // Récupération de la réponse
    return xhr.status === 202;
}