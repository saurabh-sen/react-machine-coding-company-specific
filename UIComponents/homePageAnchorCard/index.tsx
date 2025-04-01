'use client';
import { useState } from "react";

interface IHomePageAnchorCard {
    title: string;
    solution: string;
    difficulty: "easy" | "medium" | "hard";
    tags: string[];
    relatedTopics?: string[];
    onClick?: () => void;
}

const difficultyColors = {
    easy: "bg-green-100 text-green-700",
    medium: "bg-orange-100 text-orange-700",
    hard: "bg-red-100 text-red-700"
};

export const HomePageAnchorCard : React.FC<IHomePageAnchorCard> = ({ title, solution, difficulty, tags, relatedTopics, onClick }) => {
    const [expanded, setExpanded] = useState(false);
    
    return (
        <div className="shadow-lg rounded-2xl p-5 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 bg-white dark:bg-gray-200 text-gray-800 dark:text-gray-900" onClick={onClick}>
            <h2 className="text-2xl font-bold">{title}</h2>
            
            <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${difficultyColors[difficulty]}`}>
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
            </div>
            
            <p className="mt-3 text-gray-600">
                {expanded ? solution : solution.slice(0, 80) + "... "}
                <button className="text-blue-500 hover:underline cursor-pointer" onClick={() => setExpanded(!expanded)}>
                    {expanded ? "Read Less" : "Read More"}
                </button>
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
                {tags.map(tag => (
                    <span key={tag} className="dark:bg-yellow-400 px-3 py-1 text-sm rounded-full">{tag}</span>
                ))}
            </div>

            {relatedTopics && relatedTopics.length > 0 && (
                <div className="mt-4">
                    <h4 className="text-gray-700 font-semibold">Related Topics:</h4>
                    <ul className="list-disc list-inside text-blue-500">
                        {relatedTopics.map(topic => (
                            <li key={topic} className="hover:underline">{topic}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}