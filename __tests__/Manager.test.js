const Manager = require('../lib/Manager');

describe("Manager", () => {
    // Testing the initialization of the Manager Class
    describe ("Initialization", () => {
        // Positive Tests
        it("should create an object with a name, id, and email if provided valid arguments", () => {
            const manager = new Manager ("Cody", "A-2193", "codysun91@gmail.com", 101);

            expect(manager.name).toEqual("Cody");
            expect(manager.id).toEqual("A-2193");
            expect(manager.email).toEqual("codysun91@gmail.com")
            expect(manager.office).toEqual(101)
        });

        it("should return the name of the Manager when using the getName() method", () => {
            const manager = new Manager ("Sarah", "A-1211", "sarahwhittaker191@gmail.com", 12);

            expect(manager.getName()).toEqual("Sarah");
        });

        it("should return the ID of the Manager when using the getId() method", () => {
            const manager = new Manager ("Byron", "A-485", "byronkarachi@gmail.com", 64);

            expect(manager.getId()).toEqual("A-485");
        });

        it("should return the email of the Manager when using the getEmail() method", () => {
            const manager = new Manager ("Ajax", "A-112", "ajaxthekid@gmail.com", 122);

            expect(manager.getEmail()).toEqual("ajaxthekid@gmail.com");
        });

        it("should return the office number of the Manager when using the getOfficeNumber() method", () => {
            const manager = new Manager ("Ajax", "A-112", "ajaxthekid@gmail.com", 22);

            expect(manager.getOfficeNumber()).toEqual(22);
        });

        it("should return role 'Manager' when using the getRole() method", () => {
            const manager = new Manager ("Jacob", "A-128", "jacoblassoman@gmail.com", 19);

            expect(manager.getRole()).toEqual("Manager");
        });
    });
});