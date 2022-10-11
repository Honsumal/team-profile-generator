const Manager = require('../lib/Manager');

describe("Manager", () => {
    // Testing the initialization of the Manager Class
    describe ("Initialization", () => {
        // Positive Tests
        it("should create an object with a name, id, and email if provided valid arguments", () => {
            const manager = new Manager ("Cody", "A-2193", "codysun91@gmail.com", 101);

            const name = "Cody";
            const id = "A-2193";
            const email = "codysun91@gmail.com";
            const office = 101

            expect(manager.name).toEqual(name);
            expect(manager.id).toEqual(id);
            expect(manager.email).toEqual(email)
            expect(manager.office).toEqual(office)
        });

        it("should return the name of the Manager when using the getName() method", () => {
            const manager = new Manager ("Sarah", "A-1211", "sarahwhittaker191@gmail.com", 12);

            const name = "Sarah"

            expect(manager.getName()).toEqual(name);
        });

        it("should return the ID of the Manager when using the getId() method", () => {
            const manager = new Manager ("Byron", "A-485", "byronkarachi@gmail.com", 64);

            const id = "A-485"

            expect(manager.getId()).toEqual(id);
        });

        it("should return the email of the Manager when using the getEmail() method", () => {
            const manager = new Manager ("Ajax", "A-112", "ajaxthekid@gmail.com", 122);

            const email = "ajaxthekid@gmail.com"

            expect(manager.getEmail()).toEqual(email);
        });

        it("should return the office number of the Manager when using the getOfficeNumber() method", () => {
            const manager = new Manager ("Simon", "A-112", "simonwaters@gmail.com", 22);

            const office = 22

            expect(manager.getOfficeNumber()).toEqual(office);
        });

        it("should return role 'Manager' when using the getRole() method", () => {
            const manager = new Manager ("Jacob", "A-128", "jacoblassoman@gmail.com", 19);

            expect(manager.getRole()).toEqual("Manager");
        });
    });
});