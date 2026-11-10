import { createServer } from "node:http";

const PORT = 3000;

function greet(name: string): string {
  return `Hello, ${name}!`;
}

interface User {
  id: number;
  name: string;
}

const user: User = { id: 1, name: "Alice" };

const server = createServer((req, res) => {
  if (req.url === "/user") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(user));
    return;
  }

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(greet("TypeScript"));
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
