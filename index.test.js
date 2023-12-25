// NOTE - Tulis kode pengujian disini
// Path: test.index.js
// ! Dont change this code
const { capitalize, filterOddNumber, epochDateToUTC } = require("./index");
const { expect, describe, test } = require("@jest/globals");

// @ Capitalize
// ! Write Minimum 4 different test case, with different matcher for capitalize
/**
 * Example input param = "hello"
 * Expected output = "Hello"
 */
describe("Capitalize", () => {
  test("should return uppercased Hello", () => {
    const result = capitalize("hello");
    expect(result).toBe("Hello");
  });

  test("should return uppercased World", () => {
    const result = capitalize("world");
    expect(result).toBe("World");
  });

  test("should return empty string for empty input", () => {
    const result = capitalize("");
    expect(result).toBe("");
  });

  test("should handle single character input", () => {
    const result = capitalize("a");
    expect(result).toBe("A");
  });
});

// @ FilterOddNumber
// ! Try to check the filterOddNumber function, and repair the function
describe("FilterOddNumber", () => {
  it("should return [2,4]", () => {
    expect(filterOddNumber([1, 2, 3, 4, 5])).toEqual([2, 4]);
  });

  it("should return []", () => {
    expect(filterOddNumber([1, 3, 5, 7, 9])).toEqual([]);
  });
});

// @ EpochDateToUTC
// ! Write Minimum 4 different test case for epochDateToUTC
/**
 * Example input param = 0
 * Expected output = Thu, 01 Jan 1970 00:00:00 GMT
 */
describe("EpochDateToUTC", () => {
  it("should return Thu, 01 Jan 1970 00:00:00 GMT", () => {
    const result = epochDateToUTC(0);
    expect(result).toBe("Thu, 01 Jan 1970 00:00:00 GMT");
  });

  it("should return Fri, 02 Jan 1970 12:34:56 GMT", () => {
    const result = epochDateToUTC(150000);
    expect(result).toBe("Fri, 02 Jan 1970 17:40:00 GMT");
  });

  it("should return Sat, 15 Feb 2023 18:45:30 GMT", () => {
    const result = epochDateToUTC(1676628330);
    expect(result).toBe("Fri, 17 Feb 2023 10:05:30 GMT");
  });

  it("should handle negative epoch date", () => {
    const result = epochDateToUTC(-123456789);
    expect(result).toBe("Wed, 02 Feb 1966 02:26:51 GMT");
  });
});

