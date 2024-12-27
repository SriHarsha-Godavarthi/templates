# Backend Template Express

This project is a backend template using Express.js, configured to use AWS DynamoDB via the AWS SDK for JavaScript v3.
 It also includes a build setup with Babel for transpiling ES6 code to CommonJS.

## Features

- **Express.js**: backend server framework for Node.js.
- **AWS DynamoDB**: NoSQL database service that provides fast and predictable performance with seamless scalability.
- **Babel**: Transpile ES6 code down to ES5 for better compatibility.
- **Dotenv**: Loads environment variables from a `.env` file into `process.env`.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (LTS version recommended)
- Yarn or npm installed (Yarn preferred for consistency with the provided `yarn.lock` file)

## Installation

Clone the repository to your local machine:

```bash
git clone https://your-repository-url-here
cd backend-template-express
```

Install the dependencies:

```bash
yarn install
```

## Configuration

Create a `.env` file in the root of your project and populate it with your AWS credentials and region information:

```plaintext
AWS_ACCESS_KEY_ID=your_access_key_id
AWS_SECRET_ACCESS_KEY=your_secret_access_key
REGION=your_aws_region
```
you can also access AWS credentials using .aws/credential file instead of environment variables

Ensure your AWS credentials have the necessary permissions to access DynamoDB.

## Usage

To start the application, you can use the following command:

```bash
yarn start
```

To build the project, which transpiles the ES6 code to CommonJS using Babel to a directory (dist):

```bash
yarn build
```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Branch (`git checkout -b <branchName>`)
3. Commit your Changes (`git commit -m 'commitMessage'`)
4. Push to the Branch (`git push origin <branchName>`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Resources

- [AWS SDK Javascript V3 Documentation](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3)
- [Express.js Documentation](https://expressjs.com/)
- [Babel Documentation](https://babeljs.io/)
- [AWS General Documentation](https://docs.aws.amazon.com/)
