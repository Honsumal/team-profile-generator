const Employee = require('../lib/Employee');

describe("Employee", () => {
    // Testing the initialization of the Employee Class
    describe ("Initialization", () => {
        // Positive Tests
        it("should create an object with a name, id, and email if provided valid arguments", () => {
            const employee = new Employee ("Cody", "B-2193", "codysun91@gmail.com");

            expect(employee.name).toEqual("Cody");
            expect(employee.id).toEqual("B-2193");
            expect(employee.email).toEqual("codysun91@gmail.com")
        });

        it("should return the name of the employee when using the getName() method", () => {
            const employee = new Employee ("Sarah", "B-1211", "sarahwhittaker191@gmail.com");

            expect(employee.getName()).toEqual("Sarah");
        });

        it("should return the ID of the employee when using the getId() method", () => {
            const employee = new Employee ("Byron", "B-485", "byronkarachi@gmail.com");

            expect(employee.getId()).toEqual("B-485");
        });

        it("should return the email of the employee when using the getEmail() method", () => {
            const employee = new Employee ("Ajax", "B-112", "ajaxthekid@gmail.com");

            expect(employee.getEmail()).toEqual("ajaxthekid@gmail.com");
        });

        it("should return role 'Employee' when using the getRole() method", () => {
            const employee = new Employee ("Jacob", "B-128", "jacoblassoman@gmail.com");

            expect(employee.getRole()).toEqual("Employee");
        });
        
        // Exception Tests
        it("should throw an error if provided no arguments", () => {
            const cb = () => new Employee();

            expect(cb).toThrow();
        });
        
        it("should throw an error if not provided an email", () => {
            const cb = () => new Employee("Rayman", "B-121");

            expect(cb).toThrow();
        });

        it("should throw an error if provided neither an email, nor an ID", () => {
            const cb = () => new Employee("Edward");

            expect(cb).toThrow();
        });
    });
});