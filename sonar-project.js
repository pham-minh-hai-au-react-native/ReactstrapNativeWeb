const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner(
  {
    serverUrl: 'http://localhost:9000',
    token: 'b0a08314c28ad6f4cdbcb6b123fb4e787946783c',
    options: {
      'sonar.projectName': 'ReactstrapNativeWeb',
      'sonar.sources': 'src',
      'sonar.exclusions': '**/__tests__/**',
      'sonar.tests': '',
      'sonar.test.inclusions': '',
      'sonar.typescript.lcov.reportPaths': '',
      'sonar.testExecutionReportPaths': '',
    },
  },
  () => {},
);
