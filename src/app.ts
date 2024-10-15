import { Server } from "./server";

const server = new Server();

server.beforeStartFn(async () => {
  // Implementar lógica previa al inicio
});

server.start();
