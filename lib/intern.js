const MakeEmployee = require("./employeeTemplate");


class MakeIntern extends MakeEmployee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }

    getRole() {
        return "Intern";
    }

    getSchool() {
        return this.school;
    }

}

module.exports = MakeIntern;