import { CanvasItem } from "./components/CanvasItem/CanvasItem";
import { OrgChart } from "./components/OrgChart/OrgChart";
import { Workspace } from "./components/Workspace/Workspace";
import { ORG_CHART_POSITION } from "./constants/layout";
import { mockCompanyStructure } from "./data/mockCompanyStructure";

function App() {
  return (
    <Workspace>
      <CanvasItem position={ORG_CHART_POSITION}>
        <OrgChart rootDepartment={mockCompanyStructure} />
      </CanvasItem>
    </Workspace>
  );
}

export default App;
