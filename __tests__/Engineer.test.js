const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    // Testing the initialization of the Engineer Class
    describe ("Initialization", () => {
        // Positive Tests
        it("should create an object with a name, id, and email if provided valid arguments", () => {
            const engineer = new Engineer ("Cody", "C-2193", "codysun91@gmail.com", "codysunshine");

            const name = "Cody";
            const id = "C-2193";
            const email = "codysun91@gmail.com";
            const github = "codysunshine"

            expect(engineer.name).toEqual(name);
            expect(engineer.id).toEqual(id);
            expect(engineer.email).toEqual(email)
            expect(engineer.github).toEqual(github)
        });

        it("should return the name of the engineer when using the getName() method", () => {
            const engineer = new Engineer ("Sarah", "C-1211", "sarahwhittaker191@gmail.com","saraharas");

            const name = "Sarah"

            expect(engineer.getName()).toEqual(name);
        });

        it("should return the ID of the engineer when using the getId() method", () => {
            const engineer = new Engineer ("Byron", "C-485", "byronkarachi@gmail.com", "byronthecrazy");

            const id = "C-485"

            expect(engineer.getId()).toEqual(id);
        });

        it("should return the email of the engineer when using the getEmail() method", () => {
            const engineer = new Engineer ("Ajax", "C-112", "ajaxthekid@gmail.com", "ajaxthekid");

            const email = "ajaxthekid@gmail.com"

            expect(engineer.getEmail()).toEqual(email);
        });

        it("should return the github username of the engineer when using the getGithub() method", () => {
            const engineer = new Engineer ("Ricardo", "C-292", "ricardodaman@gmail.com", "mandricardo");

            const github = "mandricardo"

            expect(engineer.getGithub()).toEqual(github);
        });

        it("should return role 'Engineer' when using the getRole() method", () => {
            const engineer = new Engineer ("Jacob", "C-128", "jacoblassoman@gmail.com", "lassomanjacob");

            const role = "Engineer"

            expect(engineer.getRole()).toEqual(role);
        });
    });
});