import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertQuizResponseSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/quiz-responses", async (req, res) => {
    try {
      const validatedData = insertQuizResponseSchema.parse(req.body);
      const response = await storage.createQuizResponse(validatedData);
      res.status(201).json(response);
    } catch (error: any) {
      if (error.name === "ZodError") {
        return res.status(400).json({ error: "Invalid quiz response data" });
      }
      console.error("Failed to save quiz response:", error);
      res.status(500).json({ error: "Failed to save quiz response" });
    }
  });

  app.get("/api/quiz-responses", async (req, res) => {
    try {
      const responses = await storage.getQuizResponses();
      res.json(responses);
    } catch (error) {
      console.error("Failed to fetch quiz responses:", error);
      res.status(500).json({ error: "Failed to fetch quiz responses" });
    }
  });

  app.get("/api/quiz-responses/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid ID parameter" });
      }
      const response = await storage.getQuizResponseById(id);
      if (!response) {
        return res.status(404).json({ error: "Quiz response not found" });
      }
      res.json(response);
    } catch (error) {
      console.error("Failed to fetch quiz response:", error);
      res.status(500).json({ error: "Failed to fetch quiz response" });
    }
  });

  return httpServer;
}
