import { useState } from "react";
import { SourceStage } from "./SourceStage";
import { StagePlaceholder, StageTabs, type StageId } from "./StageTabs";
import { useCanvasProject } from "./useCanvasProject";

export default function ProductionDashboard() {
  const [activeStage, setActiveStage] = useState<StageId>("analysis");
  const projectState = useCanvasProject();
  return (
    <div className="canvas-production-dashboard">
      <StageTabs active={activeStage} onChange={setActiveStage} />
      <div className="canvas-production-surface">
        <div hidden={activeStage !== "analysis"}>
          <SourceStage {...projectState} />
        </div>
        {activeStage === "analysis" ? null : <StagePlaceholder stage={activeStage} />}
      </div>
    </div>
  );
}
