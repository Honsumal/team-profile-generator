const Intern = require('../lib/Intern');

describe("Intern", () => {
    // Testing the initialization of the Intern Class
    describe ("Initialization", () => {
        // Positive Tests
        it("should create an object with a name, id, and email if provided valid arguments", () => {
            const intern = new Intern ("Cody", "D-2193", "codysun91@gmail.com", "University of Toronto");

            expect(intern.name).toEqual("Cody");
            expect(intern.id).toEqual("D-2193");
            expect(intern.email).toEqual("codysun91@gmail.com")
            expect(intern.school).toEqual("University of Toronto")
        });

        it("should return the name of the Intern when using the getName() method", () => {
            const intern = new Intern ("Sarah", "D-1211", "sarahwhittaker191@gmail.com", "University of Toronto");

            expect(intern.getName()).toEqual("Sarah");
        });

        it("should return the ID of the Intern when using the getId() method", () => {
            const intern = new Intern ("Byron", "D-485", "byronkarachi@gmail.com", "University of Toronto");

            expect(intern.getId()).toEqual("D-485");
        });

        it("should return the email of the Intern when using the getEmail() method", () => {
            const intern = new Intern ("Ajax", "D-112", "ajaxthekid@gmail.com", "University of Toronto");

            expect(intern.getEmail()).toEqual("ajaxthekid@gmail.com");
        });

        it("should return the school of the Intern when using the getSchool() method", () => {
            const intern = new Intern ("Fred", "D-1", "carlfriedrich@gmail.com", "University of Toronto");

            expect(intern.getSchool()).toEqual("University of Toronto");
        });

        it("should return role 'Intern' when using the getRole() method", () => {
            const intern = new Intern ("Jacob", "D-128", "jacoblassoman@gmail.com", "University of Toronto");

            expect(intern.getRole()).toEqual("Intern");
        });
    });
});