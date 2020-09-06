import {buildTheme} from '../src/styles';
import objectContaining = jasmine.objectContaining;

describe('Write test for function buildTheme', () => {
  it('Write test for case input is undefined', () => {
    const result = buildTheme();
    expect(result).toEqual(
      objectContaining({
        default: {
          colors: {primary: '#007bff'},
          textColor: {
            textPrimary: {
              color: '#007bff',
            },
          },
          bgColor: {
            bgPrimary: {
              backgroundColor: '#007bff',
            },
          },
        },
      }),
    );
  });
  it('Write test for case input is only contain default theme', async () => {
    const result = buildTheme({
      default: {
        colors: {
          secondary: 'red',
        },
      },
    });
    expect(result).toEqual(
      objectContaining({
        default: {
          colors: {
            primary: '#007bff',
            secondary: 'red',
          },
          textColor: {
            textPrimary: {
              color: '#007bff',
            },
            textSecondary: {
              color: 'red',
            },
          },
          bgColor: {
            bgPrimary: {
              backgroundColor: '#007bff',
            },
            bgSecondary: {
              backgroundColor: 'red',
            },
          },
        },
      }),
    );
  });

  it('Write test for case input is contain multiple theme', async () => {
    const result = buildTheme({
      default: {
        colors: {
          secondary: 'red',
        },
      },
      whiteColor: {
        colors: {
          secondary: 'red',
        },
      },
    });
    expect(result).toEqual({
      default: {
        colors: {
          primary: '#007bff',
          secondary: 'red',
        },
        textColor: {
          textPrimary: {
            color: '#007bff',
          },
          textSecondary: {
            color: 'red',
          },
        },
        bgColor: {
          bgPrimary: {
            backgroundColor: '#007bff',
          },
          bgSecondary: {
            backgroundColor: 'red',
          },
        },
      },
      whiteColor: {
        colors: {
          secondary: 'red',
        },
        textColor: {
          textSecondary: {
            color: 'red',
          },
        },
        bgColor: {
          bgSecondary: {
            backgroundColor: 'red',
          },
        },
      },
    });
  });

  it('Write test for case input is not contain default theme, but have another theme', async () => {
    const result = buildTheme({
      secondTheme: {
        colors: {
          secondary: 'red',
        },
      },
    });
    expect(result).toEqual(
      objectContaining({
        default: {
          colors: {
            primary: '#007bff',
          },
          textColor: {
            textPrimary: {
              color: '#007bff',
            },
          },
          bgColor: {
            bgPrimary: {
              backgroundColor: '#007bff',
            },
          },
        },
        secondTheme: {
          colors: {
            secondary: 'red',
          },
          textColor: {
            textSecondary: {
              color: 'red',
            },
          },
          bgColor: {
            bgSecondary: {
              backgroundColor: 'red',
            },
          },
        },
      }),
    );
  });
});
