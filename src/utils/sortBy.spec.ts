import { sortBy } from "./sortBy";

describe("sortBy function", () => {
  let data: any[];

  beforeEach(() => {
    data = [
      {
        title: "B",
      },
      {
        title: "A",
      },
      {
        title: "C",
      },
    ];
  });

  test("Sort in ascending order", () => {
    const result = sortBy(data, "+title");
    expect(result[0].title).toBe("A");
  });

  test("sorts in descending order", () => {
    const result = sortBy(data, "-title");
    expect(result[0].title).toBe("C");
  });

  test("Doesn't sort", () => {
    const result = sortBy(data, "");
    expect(result[0].title).toBe("B");
  });
});
