const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
    // Testing the initialization of the Engineer Class
    describe ("Initialization", () => {
        // Positive Tests
        it("should create an object with a name, id, and email if provided valid arguments", () => {
            const engineer = new Engineer ("Cody", "C-2193", "codysun91@gmail.com", "codysunshine");

            expect(engineer.name).toEqual("Cody");
            expect(engineer.id).toEqual("C-2193");
            expect(engineer.email).toEqual("codysun91@gmail.com")
            expect(engineer.github).toEqual("codysunshine")
        });

        it("should return the name of the engineer when using the getName() method", () => {
            const engineer = new Engineer ("Sarah", "C-1211", "sarahwhittaker191@gmail.com","saraharas");

            expect(engineer.getName()).toEqual("Sarah");
        });

        it("should return the ID of the engineer when using the getId() method", () => {
            const engineer = new Engineer ("Byron", "C-485", "byronkarachi@gmail.com", "byronthecrazy");

            expect(engineer.getId()).toEqual("C-485");
        });

        it("should return the email of the engineer when using the getEmail() method", () => {
            const engineer = new Engineer ("Ajax", "C-112", "ajaxthekid@gmail.com", "ajaxthekid");

            expect(engineer.getEmail()).toEqual("ajaxthekid@gmail.com");
        });

        it("should return the github username of the engineer when using the getGithub() method", () => {
            const engineer = new Engineer ("Ricardo", "C-292", "ricardodaman@gmail.com", "mandricardo");

            expect(engineer.getGithub()).toEqual("mandricardo");
        });

        it("should return role 'Engineer' when using the getRole() method", () => {
            const engineer = new Engineer ("Jacob", "C-128", "jacoblassoman@gmail.com", "lassomanjacob");

            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});