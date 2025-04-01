export interface IData {
    title: string;
    solution: string;
    difficulty: "easy" | "medium" | "hard";
    tags: string[];
    relatedTopics?: string[];
}

export const DATA: Record<string, Record<string, IData[]>> = {
    "company-specific": {
        "flipkart": [
            {
                title: "API Rate Limiter",
                solution: "Use a token bucket or leaky bucket algorithm to control the request rate.",
                difficulty: "medium",
                tags: ["API", "Rate Limiting", "Backend"],
                relatedTopics: ["Caching Identical API Calls"]
            },
            {
                title: "Auto Retry Promises",
                solution: "Wrap the promise in a function that retries on failure with exponential backoff.",
                difficulty: "medium",
                tags: ["Promises", "Retry", "JavaScript"],
                relatedTopics: ["Custom Event Emitter"]
            }
        ],
        "meta": [
            {
                title: "Caching Identical API Calls",
                solution: "Use a cache layer like Redis or an in-memory store to prevent redundant API calls.",
                difficulty: "hard",
                tags: ["API", "Caching", "Optimization"],
                relatedTopics: ["API Rate Limiter"]
            },
            {
                title: "Custom Event Emitter",
                solution: "Implement a class with `on`, `off`, and `emit` methods using a Map for event storage.",
                difficulty: "medium",
                tags: ["Events", "Emitter", "JavaScript"],
                relatedTopics: ["Auto Retry Promises"]
            }
        ]
    },
    "misc": {
        "birdeye": [
            {
                title: "Folder Structure",
                solution: "Organize files into `components/`, `utils/`, `services/`, and `pages/` for better maintainability.",
                difficulty: "easy",
                tags: ["Project Structure", "Best Practices"],
                relatedTopics: ["Nested Comments"]
            },
            {
                title: "Nested Comments",
                solution: "Use a tree structure with a parent-child relationship to manage nested comments efficiently.",
                difficulty: "medium",
                tags: ["Comments", "Data Structures"],
                relatedTopics: ["Folder Structure"]
            }
        ]
    }
};
