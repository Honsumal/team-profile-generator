const Employee = require('../lib/Employee');

describe("Employee", () => {
    // Testing the initialization of the Employee Class
    describe ("Initialization", () => {
        // Positive Tests
        it("should create an object with a name, id, and email if provided valid arguments", () => {
            const employee = new Employee ("Cody", "B-2193", "codysun91@gmail.com");

            const name = "Cody";
            const id = "B-2193";
            const email = "codysun91@gmail.com";

            expect(employee.name).toEqual(name);
            expect(employee.id).toEqual(id);
            expect(employee.email).toEqual(email)
        });

        it("should return the name of the employee when using the getName() method", () => {
            const employee = new Employee ("Sarah", "B-1211", "sarahwhittaker191@gmail.com");

            const name = "Sarah";

            expect(employee.getName()).toEqual(name);
        });

        it("should return the ID of the employee when using the getId() method", () => {
            const employee = new Employee ("Byron", "B-485", "byronkarachi@gmail.com");

            const id = "B-485"

            expect(employee.getId()).toEqual(id);
        });

        it("should return the email of the employee when using the getEmail() method", () => {
            const employee = new Employee ("Ajax", "B-112", "ajaxthekid@gmail.com");

            const email = "ajaxthekid@gmail.com"

            expect(employee.getEmail()).toEqual(email);
        });

        it("should return role 'Employee' when using the getRole() method", () => {
            const employee = new Employee ("Jacob", "B-128", "jacoblassoman@gmail.com");

            const role = "Employee"

            expect(employee.getRole()).toEqual(role);
        });
    });
});