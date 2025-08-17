export default function ModelSelector() {
    return (
      <div className="p-4 bg-white dark:bg-gray-800 shadow rounded-xl">
        <label className="block text-sm font-medium mb-2">Select Model</label>
        <select className="w-full p-2 border rounded-lg dark:bg-gray-700">
          <option>GPT-3.5</option>
          <option>GPT-4</option>
          <option>Custom Model</option>
        </select>
      </div>
    );
  }
  