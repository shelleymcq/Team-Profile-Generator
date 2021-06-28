const MakeEmployee = require("./employeeTemplate");


class MakeIntern extends MakeEmployee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
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

module.exports = MakeIntern;