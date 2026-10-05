import { DepartmentCard } from "./components/DepartmentCard/DepartmentCard";
import { Workspace } from "./components/Workspace/Workspace";
import { ROOT_DEPARTMENT_POSITION } from "./constants/layout";
import { mockCompanyStructure } from "./data/mockCompanyStructure";

function App() {
  return (
    <Workspace>
      <DepartmentCard department={mockCompanyStructure} position={ROOT_DEPARTMENT_POSITION} />
    </Workspace>
  );
}

export default App;
