import loadTheme from '../src/styles/scripts/loadTheme';
import objectContaining = jasmine.objectContaining;

describe('Write test for function buildTheme', () => {
  it('Write test for case input is undefined', () => {
    const testCaseOne = loadTheme();
    expect(testCaseOne.default.spacer).toBe(16);
    expect(testCaseOne.default.colors).toEqual(
      objectContaining({
        primary: '#007bff',
      }),
    );
    expect(testCaseOne.default.bgColor).toEqual(
      objectContaining({
        bgPrimary: {
          backgroundColor: '#007bff',
        },
      }),
    );
    expect(testCaseOne.default.borderColor).toEqual(
      objectContaining({
        borderPrimary: {
          borderColor: '#007bff',
        },
      }),
    );
    expect(testCaseOne.default.marginSpacer.m0).toEqual(
      objectContaining({
        margin: 0,
      }),
    );
    expect(testCaseOne.default.marginSpacer.m1).toEqual(
      objectContaining({
        margin: 16 * 0.25,
      }),
    );
    expect(testCaseOne.default.marginSpacer.m2).toEqual(
      objectContaining({
        margin: 16 * 0.5,
      }),
    );
    expect(testCaseOne.default.marginSpacer.m3).toEqual(
      objectContaining({
        margin: 16,
      }),
    );
    expect(testCaseOne.default.marginSpacer.m4).toEqual(
      objectContaining({
        margin: 16 * 1.5,
      }),
    );
    expect(testCaseOne.default.marginSpacer.m5).toEqual(
      objectContaining({
        margin: 16 * 3,
      }),
    );
  });
  it('Write test for case input only have dynamic theme', () => {
    const testCaseThree = loadTheme({
      darkTheme: {
        spacer: 20,
        colors: {
          secondary: '#000000',
        },
      },
    });

    expect(testCaseThree.darkTheme.spacer).toBe(20);
    expect(testCaseThree.darkTheme.colors).toEqual(
      objectContaining({
        secondary: '#000000',
      }),
    );
    expect(testCaseThree.darkTheme.bgColor).toEqual(
      objectContaining({
        bgSecondary: {
          backgroundColor: '#000000',
        },
      }),
    );
    expect(testCaseThree.darkTheme.borderColor).toEqual(
      objectContaining({
        borderSecondary: {
          borderColor: '#000000',
        },
      }),
    );
    expect(testCaseThree.darkTheme.marginSpacer.m0).toEqual(
      objectContaining({
        margin: 0,
      }),
    );
    expect(testCaseThree.darkTheme.marginSpacer.m1).toEqual(
      objectContaining({
        margin: 20 * 0.25,
      }),
    );
    expect(testCaseThree.darkTheme.marginSpacer.m2).toEqual(
      objectContaining({
        margin: 20 * 0.5,
      }),
    );
    expect(testCaseThree.darkTheme.marginSpacer.m3).toEqual(
      objectContaining({
        margin: 20,
      }),
    );
    expect(testCaseThree.darkTheme.marginSpacer.m4).toEqual(
      objectContaining({
        margin: 20 * 1.5,
      }),
    );
    expect(testCaseThree.darkTheme.marginSpacer.m5).toEqual(
      objectContaining({
        margin: 20 * 3,
      }),
    );

    expect(testCaseThree.default.spacer).toBe(16);
    expect(testCaseThree.default.colors).toEqual(
      objectContaining({
        primary: '#007bff',
      }),
    );
    expect(testCaseThree.default.bgColor).toEqual(
      objectContaining({
        bgPrimary: {
          backgroundColor: '#007bff',
        },
      }),
    );
    expect(testCaseThree.default.borderColor).toEqual(
      objectContaining({
        borderPrimary: {
          borderColor: '#007bff',
        },
      }),
    );
    expect(testCaseThree.default.marginSpacer.m0).toEqual(
      objectContaining({
        margin: 0,
      }),
    );
    expect(testCaseThree.default.marginSpacer.m1).toEqual(
      objectContaining({
        margin: 16 * 0.25,
      }),
    );
    expect(testCaseThree.default.marginSpacer.m2).toEqual(
      objectContaining({
        margin: 16 * 0.5,
      }),
    );
    expect(testCaseThree.default.marginSpacer.m3).toEqual(
      objectContaining({
        margin: 16,
      }),
    );
    expect(testCaseThree.default.marginSpacer.m4).toEqual(
      objectContaining({
        margin: 16 * 1.5,
      }),
    );
    expect(testCaseThree.default.marginSpacer.m5).toEqual(
      objectContaining({
        margin: 16 * 3,
      }),
    );
  });

  it('Write test for case input only have theme default', () => {
    const testCaseTwo = loadTheme({
      default: {
        spacer: 20,
        colors: {
          secondary: '#000000',
        },
      },
    });
    expect(testCaseTwo.default.spacer).toBe(20);
    expect(testCaseTwo.default.colors).toEqual(
      objectContaining({
        primary: '#007bff',
        secondary: '#000000',
      }),
    );
    expect(testCaseTwo.default.bgColor).toEqual(
      objectContaining({
        bgPrimary: {
          backgroundColor: '#007bff',
        },
        bgSecondary: {backgroundColor: '#000000'},
      }),
    );
    expect(testCaseTwo.default.borderColor).toEqual(
      objectContaining({
        borderPrimary: {
          borderColor: '#007bff',
        },
        borderSecondary: {borderColor: '#000000'},
      }),
    );
    expect(testCaseTwo.default.marginSpacer.m0).toEqual(
      objectContaining({
        margin: 0,
      }),
    );
    expect(testCaseTwo.default.marginSpacer.m1).toEqual(
      objectContaining({
        margin: 20 * 0.25,
      }),
    );
    expect(testCaseTwo.default.marginSpacer.m2).toEqual(
      objectContaining({
        margin: 20 * 0.5,
      }),
    );
    expect(testCaseTwo.default.marginSpacer.m3).toEqual(
      objectContaining({
        margin: 20,
      }),
    );
    expect(testCaseTwo.default.marginSpacer.m4).toEqual(
      objectContaining({
        margin: 20 * 1.5,
      }),
    );
    expect(testCaseTwo.default.marginSpacer.m5).toEqual(
      objectContaining({
        margin: 20 * 3,
      }),
    );
  });
});
