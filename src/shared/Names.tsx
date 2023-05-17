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

  static generateRandomFullName = () => {
    const firstNames = [
      "Chung",
      "Hoi",
      "Ka",
      "Lai",
      "Man",
      "Pak",
      "Siu",
      "Wai",
      "Yan",
      "Yiu",
    ];
    const lastNames = [
      "Chan",
      "Cheung",
      "Ho",
      "Lau",
      "Lee",
      "Leung",
      "Ng",
      "Wong",
      "Yau",
      "Yu",
    ];

    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    const numAsterisks = Math.floor(Math.random() * 4) + 1; // Generate a random number between 1 and 6
    const num2Asterisks = Math.floor(Math.random() * 4) + 1; // Generate a random number between 1 and 6

    const abbreviatedFirstName =
      firstName.slice(0, 1) + "*".repeat(numAsterisks);
    const abbreviatedLastName = lastName.slice(0, 1) + "*".repeat(num2Asterisks);

    const fullName =
      Math.random() < 0.5
        ? `${firstName} ${lastName}`
        : ` YU ${abbreviatedLastName} ${abbreviatedFirstName}`;

    return fullName;
  };
}

export default Names;
