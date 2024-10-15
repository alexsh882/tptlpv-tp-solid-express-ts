import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

export class Server {
  constructor(
    private app: Application = express(),
    private app_port: string = process.env.APP_PORT || "3000",
    private app_host: string = process.env.APP_HOST || "localhost",
    private beforeStart: (() => Promise<void>)[] = []
  ) {
    this.middlewares();
    this.routes();
  }
  middlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(morgan("dev"));
  }
  routes(): void {
    // Implementar rutas
  }

  public beforeStartFn(fn: () => Promise<void>): void {
    this.beforeStart.push(fn);
  }

  public async start(): Promise<void> {
    for (const fn of this.beforeStart) {
      await fn();
    }
    this.app.listen(this.app_port, () => {
      console.log(`Server running at http://${this.app_host}:${this.app_port}`);
    });
  }
}
