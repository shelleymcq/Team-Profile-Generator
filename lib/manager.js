const MakeEmployee = require("./employeeTemplate");


class MakeManager extends MakeEmployee {
    constructor(name, id, email, office) {
        super(name, id, email)
        this.office = office;
    }

    getRole() {
        return "Manager";
    }

    getOffice() {
        return this.office;
    }
}


module.exports = MakeManager;
