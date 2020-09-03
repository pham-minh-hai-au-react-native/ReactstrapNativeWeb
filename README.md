# ReactstrapNativeWeb
This is project create support library bootstrap on react native and react native web

# Table of contents
* [Installation](#installation) 
* [Container Component](#container-component)
    - [Usage](#usage)
    - [Document](#document)
    - [Example with default container and enable debug](#example-with-default-container-and-enable-debug)
* [Row Component](#row-component)
    - [Usage](#usage)
    - [Document](#document)
* [Col Component](#col-component)
    - [Usage](#usage)
    - [Document](#document)
    - [Example](#example)
* [Inspired by](#inspired-by)
* [Contributing](#contributing)
* [Author](#author)
* [License](#license)
    
## Installation

If using yarn:
```
yarn add reactstrap-native-web@beta
```
If using npm:
```
npm i reactstrap-native-web@beta
```
## `Container` Component
### Usage
```jsx
import {Container} from 'reactstrap-native-web';
```
### Document
| Name      | Description                                                                       | Default | Type    | Required |
|:----------|:----------------------------------------------------------------------------------|:--------|:--------|:---------|
|   fluid    | Type container you want: "sm", "md", "lg", "xl", true <br /> You can reference link [Container bootstrap](https://getbootstrap.com/docs/4.5/layout/overview/#containers) to know use them                | false   | String or Boolean | false |
|   debug   | Support debug for container component ( add border around container component )   | false   | Boolean | false |

### Example with default container and enable `debug`
```jsx
import React from 'react';
import {View, Text} from 'react-native';
import {Container} from 'reactstrap-native-web';

export const ContainerWithDebug = () => {
  return (
    <Container debug>
      <View>
        <Text>Container</Text>
      </View>
    </Container>
  );
};

```
| On Web                                                                                                                                     |  On IOS                                                                                                                                       | On Android                                                                                                                                       |
|:------------------------------------------------------------------------------------------------------------------------------------------ |:---------------------------------------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------:|
| ![](assets/container/example_container/web.gif) [containerWithDebug.js](examples/RuuiProject/src/examples/Container/containerWithDebug.js) | ![](assets/container/example_container/ios_11.png) [containerWithDebug.js](examples/RuuiProject/src/examples/Container/containerWithDebug.js) | ![](assets/container/example_container/android.png) [containerWithDebug.js](examples/RuuiProject/src/examples/Container/containerWithDebug.js)   |

## `Row` Component
### Usage
```jsx
import {Row} from 'reactstrap-native-web';
```
### Document

## `Col` Component
### Usage
```jsx
import {Col} from 'reactstrap-native-web';
```
### Document
 Name      | Description                                                                       | Default | Type    | Required |
|:---------|:----------------------------------------------------------------------------------|:--------|:--------|:---------|
|   col    | Number column: [1...12] or 'auto' or object: {size: number, offset: number} <br /> You can reference link [Column Reactstrap](https://reactstrap.github.io/components/layout/#app)               | None   | String or Object | true |
|   sm    | Number column: [1...12] or 'auto' or object: {size: number, offset: number} <br /> You can reference link [Column Reactstrap](https://reactstrap.github.io/components/layout/#app)               | None   | String or Object | false |
|   md    | Number column: [1...12] or 'auto' or object: {size: number, offset: number} <br /> You can reference link [Column Reactstrap](https://reactstrap.github.io/components/layout/#app)               | None   | String or Object | false |
|   xl    | Number column: [1...12] or 'auto' or object: {size: number, offset: number} <br /> You can reference link [Column Reactstrap](https://reactstrap.github.io/components/layout/#app)               | None   | String or Object | false |
|   lg    | Number column: [1...12] or 'auto' or object: {size: number, offset: number} <br /> You can reference link [Column Reactstrap](https://reactstrap.github.io/components/layout/#app)               | None   | String or Object | false |
|   debug   | Support debug    | false   | Boolean | false |
### Example
```jsx
import React from 'react';
import {Text} from 'react-native';
import {Container, Row, Col} from 'reactstrap-native-web';

export const TestColumn = () => {
  return (
    <Container fluid>
      <Row>
        <Col
          col={{size: '3', offset: '1'}}
          sm={{size: '6', offset: '0'}}
          md={{size: '4', offset: '0'}}
          debug>
          <Text>Col 6</Text>
        </Col>
        <Col
          col={{size: '7', offset: '1'}}
          sm={{size: '6', offset: '0'}}
          md={{size: '7', offset: '1'}}
          debug>
          <Text>Col 6</Text>
        </Col>
      </Row>
    </Container>
  );
};
```
| On Web                                                                                                                                     |  On IOS                                                                                                                                       | On Android                                                                                                                                       |
|:------------------------------------------------------------------------------------------------------------------------------------------ |:---------------------------------------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------------------------:|
| ![](assets/col/web.gif) [demo.js](examples/RuuiProject/src/examples/Col/demo.js) | ![](assets/col/ios.png) [demo.js](examples/RuuiProject/src/examples/Col/demo.js) | ![](assets/col/android.png) [demo.js](examples/RuuiProject/src/examples/Col/demo.js)   |


## Inspired by
[Library Reactstrap](https://reactstrap.github.io/)
## Contributing
Pull requests are always welcome! Feel free to open a new GitHub issue for any changes that can be made.

**Working on your first Pull Request?** You can learn how from this *free* series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

## Author
Pham Minh Hai Au

## License
[MIT](./LICENSE)
