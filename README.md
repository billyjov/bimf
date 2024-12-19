# Bundle-Independent Micro-Frontend Demo

This repository showcases a **Micro-Frontend** implementation
using **RsPack**, a high-performance bundler for JavaScript and TypeScript applications.

## Overview

Micro-Frontends enable you to break down a large frontend application into smaller, independently deliverable units. This demo leverages RsPack’s blazing-fast build capabilities to demonstrate:

- Sharing components between micro-frontends.
- Independent builds for each micro-frontend.
- A seamless user experience with dynamic module federation.

## Features

- **Micro-Frontend Architecture**: Modularize your frontend into independently deployed applications.
- **Dynamic Module Federation**: On-the-fly loading of shared components and dependencies.
- **Blazing Performance**: Build and serve using RsPack for faster iteration.

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (version 20 or higher)
- **npm** or **yarn**

## Getting Started

### Install Dependencies

Run the following command to install the required dependencies for all micro-frontends:

```bash
npm install
```

### Start the Development Server

Run the following command to start the demo application:

```bash
npm run start
```

Each micro-frontend will be served locally, and the host application will combine them seamlessly.

### Build for Production

To build the micro-frontends for production, use:

```bash
npm run build
```

The production-ready assets will be output to the `dist/` directory.

## How It Works

1. **Independent Micro-Frontends**: Each micro-frontend is a standalone application with its own RsPack configuration.
2. **Module Federation**: The host app dynamically loads remote modules from each micro-frontend.
3. **Shared Components**: Common dependencies (e.g., React) and utilities are shared to minimize duplication.

## Key Scripts

- **`npm run start`**: Starts the development servers for all micro-frontends and the host application.
- **`npm run build`**: Builds the production-ready assets.
- **`npm run lint`**: Lints the codebase.

## Technologies Used

- **[RsPack](https://www.rspack.dev/)**: Fast and efficient JavaScript bundler.
- **React**: For building user interfaces.
- **Module Federation**: For implementing micro-frontends.

## Contributing

Contributions are welcome! If you find any bugs or have feature requests, feel free to open an issue or submit a pull request.

### Steps to Contribute

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature-name'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

Special thanks to the RsPack team for creating a fantastic bundler and to the community for inspiring
micro-frontend architectures and to https://github.com/RussellCanfield for his tutorials and example implementations.

## Future plans  

- Add Wasm examples 
- Include other bundles 

---

Happy coding! 🚀
