# TRPC Breaking Changes Detection

## Introduction

This repository showcases an innovative approach to ensure API integrity between a Next.js server using tRPC and its corresponding clients. By auto-generating OpenAPI schemas based on the tRPC server, and then diffing these with previous versions, we can automatically detect and notify developers of breaking changes in the API.

## Motivation

In dynamic development environments, APIs often undergo changes. While some of these changes are benign, others can break client-server communication, especially in mobile applications. Promptly identifying such changes can save time, prevent bugs, and ensure a seamless user experience.

## Features

- **Next.js with tRPC Integration:** A foundational setup showcasing how tRPC can be used with Next.js.
- **OpenAPI Auto-Generation:** Automatically generate an OpenAPI schema based on the current tRPC setup. This schema acts as the source of truth for the API's current state.
- **Diffing Mechanism with `openapi-diff`:** By comparing the newly generated OpenAPI schema with a baseline (e.g., from the main branch), the system can detect and report changes in the API.

## Getting Started

1. **Clone the Repository**

   \```bash
   git clone https://github.com/Fralleee/trpc-breaking-changes-detection.git
   \```

2. **Install Dependencies**

   Navigate to the project directory and install the necessary dependencies:

   \```bash
   cd trpc-breaking-changes-detection
   pnpm install
   \```

3. **Run the Next.js Server**

   \```bash
   pnpm run dev
   \```

4. **Generate OpenAPI Schema**

   Instructions on how to generate the schema based on your current tRPC setup.

   \```bash
   pnpm run generate-schema
   \```

5. **Check for Breaking Changes**

   Start by creating a new branch and introducing either breaking or non-breaking modifications to the tRPC server. The automated action is configured to activate upon the creation of new pull requests, provided they are not set to draft status.

## Contributing

Feel free to raise issues or submit pull requests. Any contributions, big or small, are highly appreciated!
