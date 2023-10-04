import { generateOpenApiDocument } from "trpc-openapi";
import path from "path";
import { writeFileSync, existsSync, mkdirSync } from "fs";
import { appRouter } from "../app/server";

const filePath = path.resolve("./", "schema.json");
const dirname = path.dirname(filePath);
if (!existsSync(dirname)) {
  mkdirSync(dirname, { recursive: true });
}

const openApiDocument = generateOpenApiDocument(appRouter, {
  title: "tRPC OpenAPI",
  version: "1.0.0",
  baseUrl: "http://localhost:3000/api/trpc",
  description: "tRPC OpenAPI example",
  docsUrl: "/docs",
  tags: [],
  securitySchemes: {},
});

const schemaString = JSON.stringify(openApiDocument, null, 2);
writeFileSync(filePath, schemaString);

console.log("OpenAPI document generated successfully.");
