const Intern = require('../lib/Intern');

describe("Intern", () => {
    // Testing the initialization of the Intern Class
    describe ("Initialization", () => {
        // Positive Tests
        it("should create an object with a name, id, and email if provided valid arguments", () => {
            const intern = new Intern ("Cody", "D-2193", "codysun91@gmail.com", "University of Toronto");

            const name = "Cody";
            const id = "D-2193";
            const email = "codysun91@gmail.com";
            const school = "University of Toronto"

            expect(intern.name).toEqual(name);
            expect(intern.id).toEqual(id);
            expect(intern.email).toEqual(email)
            expect(intern.school).toEqual(school)
        });

        it("should return the name of the Intern when using the getName() method", () => {
            const intern = new Intern ("Sarah", "D-1211", "sarahwhittaker191@gmail.com", "University of Toronto");
            
            const name = "Sarah"

            expect(intern.getName()).toEqual(name);
        });

        it("should return the ID of the Intern when using the getId() method", () => {
            const intern = new Intern ("Byron", "D-485", "byronkarachi@gmail.com", "University of Toronto");

            const id = "D-485"

            expect(intern.getId()).toEqual(id);
        });

        it("should return the email of the Intern when using the getEmail() method", () => {
            const intern = new Intern ("Ajax", "D-112", "ajaxthekid@gmail.com", "University of Toronto");

            const email = "ajaxthekid@gmail.com"

            expect(intern.getEmail()).toEqual(email);
        });

        it("should return the school of the Intern when using the getSchool() method", () => {
            const intern = new Intern ("Fred", "D-1", "carlfriedrich@gmail.com", "University of Toronto");

            const school = "University of Toronto"

            expect(intern.getSchool()).toEqual(school);
        });

        it("should return role 'Intern' when using the getRole() method", () => {
            const intern = new Intern ("Jacob", "D-128", "jacoblassoman@gmail.com", "University of Toronto");

            const role = "Intern"

            expect(intern.getRole()).toEqual(role);
        });
    });
});