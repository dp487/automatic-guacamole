# automatic-guacamole

**automatic-guacamole** is a simple web-based tool that converts English text into a stylized format using Japanese-inspired characters. The tool replaces each letter in the English alphabet with a visually similar Japanese character, allowing for creative and fun text transformations.

## Features

- **Real-time Conversion**: As you type, the tool instantly converts the English characters to the predefined Japanese-style characters.
- **Simple and Intuitive UI**: The interface is straightforward, making it easy to use for anyone.
- **Customizable Mapping**: The character mappings can be easily modified or extended in the JavaScript file.

## Demo

![automatic-guacamole Demo](https://github.com/user-attachments/assets/a487b59e-0053-4235-be96-8d85bee95295)


## How to Use

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/dhairyakpatel/automatic-guacamole.git
    ```

2. **Navigate to the Project Directory**:
    ```bash
    cd automatic-guacamole
    ```

3. **Open the `index.html` File**:
   Simply open the `index.html` file in your favorite web browser to start using the tool.

4. **Type and Convert**:
   - Type your English text in the input area.
   - Watch the converted text appear instantly in the output area.

## Customization

If you want to customize the character mapping:

1. Open the `script.js` file.
2. Modify the `conversionMap` object with your desired characters.

Example:
```javascript
const conversionMap = {
    'A': '卂', 'B': '乃', 'C': '匚', // and so on...
    'a': '卂', 'b': '乃', 'c': '匚', // and so on...
    // Add or modify characters as needed
};
