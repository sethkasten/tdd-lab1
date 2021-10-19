const { translator, translatorSplit } = require("./lab");

describe("translator function", () => {
  test("a returns away", () => {
    const result = translator("a");
    expect(result).toStrictEqual("away");
  });
});

describe("translator function", () => {
  test("Ur returns urway", () => {
    const result = translator("Ur");
    expect(result).toStrictEqual("urway");
  });
});

describe("translator function", () => {
  test("dog returns ogday", () => {
    const result = translator("dog");
    expect(result).toStrictEqual("ogday");
  });
});

describe("translator function", () => {
  test("Thales returns alesthay", () => {
    const result = translator("Thales");
    expect(result).toStrictEqual("alesthay");
  });
});

describe("translator function", () => {
  test("Schtick returns ickschtay", () => {
    const result = translator("Schtick");
    expect(result).toStrictEqual("ickschtay");
  });
});

// extended tests

describe("translator function", () => {
  test("seth-kasten returns eth-kastensay", () => {
    const result = translator("seth-kasten");
    expect(result).toStrictEqual("eth-kastensay");
  });
});

describe("translator function", () => {
  test("can't returns an'tcay", () => {
    const result = translator("can't");
    expect(result).toStrictEqual("an'tcay");
  });
});

describe("translator function", () => {
  test("d0g returns d0g", () => {
    const result = translator("d0g");
    expect(result).toStrictEqual("d0g");
  });
});

describe("translator function", () => {
  test("address@domain.com returns address@domain.com", () => {
    const result = translator("address@domain.com");
    expect(result).toStrictEqual("address@domain.com");
  });
});

describe("translatorSplit function", () => {
  test("a dog returns away ogday", () => {
    const result = translatorSplit("a dog");
    expect(result).toStrictEqual("away ogday");
  });
});

// test all the things!

describe("translatorSplit function", () => {
  test("My email is address@domain.com. Send your file! returns in proper pig latin", () => {
    const result = translatorSplit(
      "My email is address@domain.com. Send your file!"
    );
    expect(result).toStrictEqual(
      "ymay emailway isway address@domain.com. endsay ouryay ile!fay"
    );
  });
});
