import { CanvasItem } from "./components/CanvasItem/CanvasItem";
import { RootDepartment } from "./components/RootDepartment/RootDepartment";
import { Workspace } from "./components/Workspace/Workspace";
import { ROOT_DEPARTMENT_POSITION } from "./constants/layout";
import { mockCompanyStructure } from "./data/mockCompanyStructure";

function App() {
  return (
    <Workspace>
      <CanvasItem position={ROOT_DEPARTMENT_POSITION}>
        <RootDepartment department={mockCompanyStructure} />
      </CanvasItem>
    </Workspace>
  );
}

export default App;
