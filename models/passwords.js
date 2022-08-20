// login to https://www.mongodb.com/atlas with gmail
// user: netninja
// pass: N3tninJA
// string: mongodb+srv://<username>:<password>@cluster0.xxtzh.mongodb.net/

class AtlasUser {
  #user = "";
  #pass = "";
  #url = "";

  constructor(aUser, aPass, aUrl) {
    this.#user = aUser;
    this.#pass = aPass;
    this.#url = aUrl;
  }

  getUrl() {
    let url = this.#url.replace("<username>", this.#user); //replace <username> with the username
    url = url.replace("<password>", this.#pass);

    return url;
  }
}

const netninja = new AtlasUser(
  "netninja",
  "N3tninJA",
  "mongodb+srv://<username>:<password>@cluster0.xxtzh.mongodb.net/"
);
const m001 = new AtlasUser(
  "m001-student",
  "m001-mongodb-basics",
  "mongodb+srv://<username>:<password>@cluster0.xxtzh.mongodb.net/"
);

// console.log(netninja.getUrl());
// console.log(m001.getUrl());

module.exports = { netninja, m001 };
