const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner(
  {
    serverUrl: process.env.SONAR_SERVER || 'http://localhost:9000',
    token:
      process.env.SONAR_TOKEN || '96d99b449e01aab64e2c35298c5bd2b239595a03',
    options: {},
  },
  () => {
    console.log('>> Sonar analysis is done!');
  },
);
