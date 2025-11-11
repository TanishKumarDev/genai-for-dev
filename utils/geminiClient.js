// geminiClient.js
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// ------------------------------
// 1️⃣ Compute project root path
// ------------------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Go one level up from /utils to project root
const rootEnvPath = path.resolve(__dirname, "../.env");

// ------------------------------
// 2️⃣ Load .env explicitly from root
// ------------------------------
dotenv.config({ path: rootEnvPath });

// ------------------------------
// 3️⃣ Check and setup
// ------------------------------
if (!process.env.GEMINI_API_KEY) {
  console.error("❌ GEMINI_API_KEY is missing in .env file");
  console.error("Checked path:", rootEnvPath);
  process.exit(1);
}

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export default ai;
