function User(id, username, firstName, lastName, age) {

    this.id = id;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.toJson = function() {

        return JSON.stringify(this);
    }

}

// Simulation d'une méthode statique en la définissant après l'objet
User.fromJson = function(json) {
    try{
        var obj = JSON.parse(json);
        if(!obj){

            return false;
        }

        return new User(obj.id, obj.username, obj.firstName, obj.lastName, obj.age);
    } catch (e) {

        console.log(e);
        return false;
    }
};

User.fromObject = function (obj) {
    try{
        if(!obj){

            return false;
        }

        return new User(obj.id, obj.username, obj.firstName, obj.lastName, obj.age);
    } catch (e) {

        console.log(e);
        return false;
    }
};