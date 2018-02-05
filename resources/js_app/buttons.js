function doCreateUser() {

    var username = document.getElementById("username").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var age = document.getElementById("age").value;
    if (username === "" || firstName === "" || lastName === "" || age === "") {
        alert("Missing field !");

        return false;
    }

    var user = new User(0, username, firstName, lastName, age);
    if (!addUser(user)) {
        alert("Something went wrong !");

        return false;
    }

    alert("Creation successful !");
    eraseFieldValues();

    return true;
}

function doGetUser() {

    var id = document.getElementById("id").value;
    if (id === "") {
        alert("Missing field !");

        return false;
    }

    var user = getUserById(id);
    if (!user) {
        alert("User does not exists !");

        return false;
    }

    document.getElementById("username").value = user.username;
    document.getElementById("firstName").value = user.firstName;
    document.getElementById("lastName").value = user.lastName;
    document.getElementById("age").value = user.age;

    var div = document.getElementById("show");
    div.innerHTML = user.toJson();

    return true;
}

function doGetUsers() {

    var users = getUsers();
    if (!users) {
        alert("Something went wrong !");

        return false;
    }

    var div = document.getElementById("show");
    if (users.length === 0) {
        div.innerHTML = "Pas d'utilisateur !";
    } else {
        div.innerHTML = "";
        for (var i = 0; i < users.length; i++) {
            var user = users[i];
            div.innerHTML += user.toJson() + "<br/>";
        }
    }

    return true;
}

function doUpdateUser() {

    var username = document.getElementById("username").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var age = document.getElementById("age").value;
    var id = document.getElementById("id").value;
    if (username === "" || firstName === "" || lastName === "" || age === "" || id === "") {
        alert("Missing field !");

        return false;
    }

    var user = new User(parseInt(id), username, firstName, lastName, age);
    if (!updateUser(user)) {
        alert("User not found !");

        return false;
    }
    alert("User modified !");

    return true;
}

function doDeleteUser() {

    var id = document.getElementById("id").value;
    if (id === "") {
        alert("Missing field !");

        return false;
    }
    if (!deleteUser(id)) {
        alert("User does not exists !");

        return false;
    }
    alert("User deleted !");

    return true;
}

function eraseFieldValues() {
    document.getElementById("username").value = "";
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("age").value = "";

    return true;
}