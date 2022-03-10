import { sortBy } from "./sortBy";

describe("sort by function sorts correctly", () => {
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

  test("sorts in ascending order", () => {
    const result = sortBy(data, "+title");
    expect(result[0].title).toBe("A");
  });

  test("sorts in descending order", () => {
    const result = sortBy(data, "-title");
    expect(result[0].title).toBe("C");
  });

  test("no sorting if there is no expression", () => {
    const result = sortBy(data, "");
    expect(result[0].title).toBe("B");
  });
});
