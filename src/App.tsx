import { useRef } from "react";
import { CanvasItem } from "./components/CanvasItem/CanvasItem";
import { OrgChart } from "./components/OrgChart/OrgChart";
import { StatusMessage } from "./components/StatusMessage/StatusMessage";
import { Workspace } from "./components/Workspace/Workspace";
import { ORG_CHART_POSITION } from "./constants/layout";
import { useCompanyStructure } from "./hooks/useCompanyStructure";

function App() {
  const orgChartRef = useRef<HTMLDivElement>(null);
  const companyStructureRequest = useCompanyStructure();

  if (companyStructureRequest.status === "loading") {
    return <StatusMessage text="Завантаження структури…" />;
  }

  if (companyStructureRequest.status === "error") {
    return <StatusMessage text="Не вдалося завантажити структуру підприємства" />;
  }

  return (
    <Workspace startViewTargetRef={orgChartRef}>
      <CanvasItem position={ORG_CHART_POSITION}>
        <OrgChart ref={orgChartRef} rootDepartment={companyStructureRequest.data} />
      </CanvasItem>
    </Workspace>
  );
}

export default App;
