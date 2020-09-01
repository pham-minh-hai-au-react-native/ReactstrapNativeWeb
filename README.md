# ReactstrapNativeWeb
This is project create support library bootstrap on react native and react native web

# Table of contents
* [Installation](#installation) 
* [Container Component](#container-component)
    - [Usage](#usage)
    - [Document](#document)
    - [Example with default container and enable debug](#example-with-default-container-and-enable-debug)
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
| Name      | Description                                                                       | Default | Type    |
|:----------|:----------------------------------------------------------------------------------|:--------|:--------|
|   fluid   | Support for full width container                                                  | false   | Boolean |
|   debug   | Support debug for container component ( add border around container component )   | false   | Boolean |

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

## Inspired by
[Library Reactstrap](https://reactstrap.github.io/)
## Contributing
Pull requests are always welcome! Feel free to open a new GitHub issue for any changes that can be made.

**Working on your first Pull Request?** You can learn how from this *free* series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

## Author
Pham Minh Hai Au

## License
[MIT](./LICENSE)
