import { DepartmentCard } from "./components/DepartmentCard/DepartmentCard";
import { Workspace } from "./components/Workspace/Workspace";
import { companyStructure } from "./data/companyStructure";

function App() {
  return (
    <Workspace>
      <DepartmentCard department={companyStructure} />
    </Workspace>
  );
}

export default App;
