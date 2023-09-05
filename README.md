# Custom T-Shirt App

This is a custom T-shirt design application built using React, Node.js, Express, and several other technologies. It allows users to customize T-shirts by changing their color and adding logos or full images to the T-shirt. Additionally, it leverages OpenAI to create logos or gradients for T-shirts, although this feature is currently disabled. To enable the OpenAI integration, you need to provide your OpenAI API key in a `.env` file.

## Technologies Used

The following technologies were used to build this application:

- React
- Node.js
- Express
- OpenAI
- react-three/fiber
- react-three/drei
- three.js
- math.js
- Valtio

## Installation

To get started with the Custom T-Shirt App, follow these steps:

1. Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/custom-t-shirt-app.git
```

2. Change into the project directory:

```bash
cd custom-t-shirt-app
```

3. Install the required dependencies for both the client and server:

```bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

4. Create a `.env` file in the `server` directory and add your OpenAI API key as follows:

```env
OPENAI_API_KEY="your api key"
```

## Usage

To run the Custom T-Shirt App, follow these steps:

1. Start the server:

```bash
# From the server directory
cd server
npm start
```

The server will run on port 3001 by default. You can configure the port in the `server.js` file if needed.

2. Start the client:

```bash
# From the client directory
cd ../client
npm start
```

The client will run on port 3000 by default and open in your default web browser.

## Customization

The Custom T-Shirt App includes an editor with two tabs:

1. **Color Picker**: This tab allows you to change the color of the T-shirt.

2. **File Picker**: This tab lets you upload and place logos or full images on the T-shirt.

**Note**: The AI integration for creating logos or gradients is currently disabled. If you wish to enable this feature, uncomment the relevant object data in the `constants.js` file.

## Contributors

- [Your Name](https://github.com/your-username)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

Feel free to contribute to this project or use it as a starting point for your own custom T-shirt design application!