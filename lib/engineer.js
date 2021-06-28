const MakeEmployee = require("./employeeTemplate");


class MakeEngineer extends MakeEmployee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }

    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.github;
    }
}


module.exports = MakeEngineer;