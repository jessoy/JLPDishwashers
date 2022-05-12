// import functions from utils as helper functions
import * as Helper from '../utils/general.js';

const originalBuildOptions = Helper.buildOptions;
Helper.buildOptions = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
  // Reset to original implementation before each test
  Helper.buildOptions.mockImplementation(originalBuildOptions);
});

//test truncating function
test("test truncate description", () => {
  expect(Helper.truncateDescription("<p>hello</p><p>goodbye</>")).toStrictEqual([
    "<p>hello</p>",
    "<p>goodbye</>",
  ]);

  expect(Helper.truncateDescription("first paragraph<p>second paragraph</p><p>third paragraph</p>")).toStrictEqual([
    "first paragraph",
    "<p>second paragraph</p><p>third paragraph</p>",
  ]);
});

//test replace null manipulation
test("test replaceNull", () => {
  expect(Helper.replaceNull('"null" ok', "hello")).toStrictEqual(
    "hello ok",
  );
  expect(Helper.replaceNull('"NULL" ok', "HELLO")).toStrictEqual(
    "HELLO ok",
  );

  expect(Helper.replaceNull('we sell "NULL", buy here', "Dishwashers")).toStrictEqual(
    "we sell Dishwashers, buy here",
  );
});

