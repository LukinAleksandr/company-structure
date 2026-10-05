import { useRef } from "react";
import { CanvasItem } from "./components/CanvasItem/CanvasItem";
import { OrgChart } from "./components/OrgChart/OrgChart";
import { Workspace } from "./components/Workspace/Workspace";
import { ORG_CHART_POSITION } from "./constants/layout";
import { mockCompanyStructure } from "./data/mockCompanyStructure";

function App() {
  const orgChartRef = useRef<HTMLDivElement>(null);

  return (
    <Workspace startViewTargetRef={orgChartRef}>
      <CanvasItem position={ORG_CHART_POSITION}>
        <OrgChart ref={orgChartRef} rootDepartment={mockCompanyStructure} />
      </CanvasItem>
    </Workspace>
  );
}

export default App;
