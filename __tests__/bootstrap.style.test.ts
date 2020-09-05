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
        },
      }),
    );
  });
  it('Write test for case input is contain multiple theme', async () => {});
});
