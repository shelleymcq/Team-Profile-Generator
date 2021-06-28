const MakeEmployee = require("./employeeTemplate");


class MakeManager extends MakeEmployee {
    constructor(name, id, email, office) {
        super(name, id, email)
        this.office = office;
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

module.exports = MakeManager;
