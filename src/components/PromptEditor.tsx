export default function PromptEditor() {
    return (
      <div className="p-4 bg-white dark:bg-gray-800 shadow rounded-xl flex flex-col">
        <label className="text-sm font-medium mb-2">Prompt</label>
        <textarea className="border rounded-lg p-3 h-40 dark:bg-gray-700"></textarea>
        <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Run Prompt
        </button>
      </div>
    );
  }
  