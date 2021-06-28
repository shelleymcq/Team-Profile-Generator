const MakeEmployee = require("./employeeTemplate");


class MakeEngineer extends MakeEmployee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }

    getName() {

    }

    getId() {

    }

    getEmail() {

    }

    getRole() {

    }

}

module.exports = MakeEngineer;