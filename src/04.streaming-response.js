// GOAL: Demonstrate Streaming Response from Gemini SDK

import ai from "../utils/geminiClient.js";

// Define a long prompt for testing
const prompt = `
Explain in detail how artificial intelligence impacts the software development industry.
Include subtopics: productivity, code quality, automation, and future trends.
`;

async function main() {
  console.log("Starting stream...\n");

  // Create a streaming response
  const stream = await ai.models.generateContentStream({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  let fullResponse = "";

  // Read chunks as they arrive
  for await (const chunk of stream) {
    const textPart = chunk.text;
    if (textPart) {
      process.stdout.write(textPart);
      fullResponse += textPart;
    }
  }

  // Print the complete final response
  console.log("\n\nFinal Output:\n");
  console.log(fullResponse);
}

await main();

/**
 
Key Takeaways

| Concept                             | Explanation                                               |
| ----------------------------------- | --------------------------------------------------------- |
| `.generateContent()`                | Returns full output at once (no streaming).               |
| `.generateContentStream()`          | Returns async iterable stream (chunk by chunk).           |
| `.streamGenerateContent()`          | Used in newer SDK builds (same function, different name). |
| `for await (const chunk of stream)` | Lets you consume generated text incrementally.            |


 */