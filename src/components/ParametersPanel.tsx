export default function ParametersPanel() {
    return (
      <div className="p-4 bg-white dark:bg-gray-800 shadow rounded-xl space-y-4">
        <div>
          <label className="text-sm font-medium">Temperature</label>
          <input type="range" min="0" max="1" step="0.1" className="w-full" />
        </div>
        <div>
          <label className="text-sm font-medium">Max Tokens</label>
          <input type="number" defaultValue={200} className="w-full border rounded-lg p-2 dark:bg-gray-700"/>
        </div>
      </div>
    );
  }
  