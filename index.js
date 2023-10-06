const egaliteIT = {
  cours: "Javascript",
  email: "egaliterichardson@gmail.com",
  etudiant: [],

  login(nom, prenom) {
    console.log(
      `${nom} ${prenom} you are in ${this.cours} your email is${this.email}`
    );
    this.etudiant.push(`${nom} ${prenom}`);
  },
};

egaliteIT.login("Egalite", "Richardson");
console.log(egaliteIT.etudiant);
