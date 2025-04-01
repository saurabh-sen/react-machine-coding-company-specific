import { DATA } from "@/constants";
import { HomePageAnchorCard } from "@/UIComponents";
import { useCallback } from "react";

export default function Home() {

  const handleCardClick = useCallback((question: any) => {
    // Handle the card click event here
    // For example, you can navigate to a detailed page or show a modal
    console.log("Card clicked:", question);
  }, []);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)] bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="row-start-1 w-full flex justify-center items-center py-4 bg-gray-100 dark:bg-gray-800">
        <h1 className="text-xl font-bold">My Animated Anchor Cards</h1>
      </header>

      {/* Main Section */}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h1 className="text-3xl font-bold mb-6">Problem Solutions</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(DATA).map(([category, companies]) =>
            Object.entries(companies).map(([company, questions]) =>
              questions.map((question, index) => (
                <HomePageAnchorCard key={`${company}-${index}`} onClick={() => handleCardClick("sdf")} {...question} />
              ))
            )
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="row-start-3 w-full flex justify-center items-center py-4 bg-gray-100 dark:bg-gray-800">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © 2025 My Website. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
