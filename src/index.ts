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
  if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Minimal TypeScript server for Gitflow practice.");
    return;
  }

  if (req.url === "/time") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ now: new Date().toISOString() }));
    return;
  }

  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok" }));
    return;
  }

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
