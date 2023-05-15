class Names {
  static generateRandomFullNameFromHongKong() {
    const surnames = [
      "Chan",
      "Cheung",
      "Cheng",
      "Fong",
      "Ho",
      "Kwok",
      "Lam",
      "Lee",
      "Leung",
      "Li",
      "Lui",
      "Ng",
      "Poon",
      "Tam",
      "Wong",
      "Yip",
      "Yu",
    ];

    const givenNames = [
      "Amy",
      "Benjamin",
      "Catherine",
      "David",
      "Eva",
      "Frank",
      "Grace",
      "Henry",
      "Ivy",
      "Jason",
      "Karen",
      "Louis",
      "Michelle",
      "Nancy",
      "Oscar",
      "Peggy",
      "Roger",
      "Sandy",
      "Tommy",
      "Vivian",
      "William",
      "Yvonne",
      "Zoe",
    ];

    const randomSurnameIndex = Math.floor(Math.random() * surnames.length);
    const randomGivenNameIndex = Math.floor(Math.random() * givenNames.length);

    const randomSurname = surnames[randomSurnameIndex];
    const randomGivenName = givenNames[randomGivenNameIndex];

    const fullName = randomGivenName + " " + randomSurname;
    return fullName;
  }
}


export default Names