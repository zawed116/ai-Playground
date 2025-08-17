import ModelSelector from "../components/ModelSelector";
import PromptEditor from "../components/PromptEditor";
import ParametersPanel from "../components/ParametersPanel";
import ChatOutput from "../components/ChatOutput";

export default function Playground() {
  return (
    <div className="p-6 grid grid-cols-4 gap-6 h-screen">
      {/* Left Panel */}
      <div className="col-span-1 space-y-4">
        <ModelSelector />
        <ParametersPanel />
      </div>

      {/* Right Panel */}
      <div className="col-span-3 flex flex-col space-y-4">
        <PromptEditor />
        <ChatOutput />
      </div>
    </div>
  );
}
