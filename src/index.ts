import { createServer } from "node:http";

const PORT = 3000;

function greet(name: string): string {
  const emoji = name.length % 2 === 0 ? "😊" : "👋";
  return `${emoji} Hello, ${name}!`;
}

interface User {
  id: number;
  name: string;
}
///////////////////////////
const user: User = { id: 1, name: "Alice" };

const MOTIVATIONS = [
  "Small commits, clean history.",
  "A merge a day keeps conflicts away.",
  "Review first, merge second.",
];

const server = createServer((req, res) => {
  if (req.url === "/idea") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Idea: one endpoint per cycle keeps learning simple.");
    return;
  }

  if (req.url === "/motivation") {
    const index = Math.floor(Math.random() * MOTIVATIONS.length);
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(MOTIVATIONS[index]);
    return;
  }

  if (req.url === "/count") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ visits: Date.now() }));
    return;
  }

  if (req.url === "/thanks") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Thanks for practicing Gitflow!");
    return;
  }

  if (req.url === "/coffee") {
    res.writeHead(418, { "Content-Type": "text/plain" });
    res.end("I'm a teapot (but I'd love to brew you a coffee).");
    return;
  }

  if (req.url === "/motd") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Today's motivation: small commits, clean history.");
    return;
  }

  if (req.url === "/hello") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from Gitflow!");
    return;
  }

  if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Minimal TypeScript server for Gitflow practice.");
    return;
  }

  if (req.url === "/version") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("v1.0.0");
    return;
  }

  if (req.url === "/ping") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("pong");
    return;
  }

  if (req.url?.startsWith("/greet")) {
    const params = new URLSearchParams(req.url.split("?")[1] ?? "");
    const name = params.get("name") ?? "stranger";
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(greet(name));
    return;
  }

  if (req.url === "/random") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ random: Math.floor(Math.random() * 100) + 1 }));
    return;
  }

  if (req.url?.startsWith("/sum?")) {
    const params = new URLSearchParams(req.url.split("?")[1]);
    const a = Number(params.get("a"));
    const b = Number(params.get("b"));
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ a, b, sum: a + b }));
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
