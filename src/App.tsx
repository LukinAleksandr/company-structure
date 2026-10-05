import { CanvasItem } from "./components/CanvasItem/CanvasItem";
import { DepartmentCard } from "./components/DepartmentCard/DepartmentCard";
import { ProfileCard } from "./components/ProfileCard/ProfileCard";
import { Workspace } from "./components/Workspace/Workspace";
import { PROFILE_CARD_PREVIEW_POSITION, ROOT_DEPARTMENT_POSITION } from "./constants/layout";
import { mockCompanyStructure } from "./data/mockCompanyStructure";

// Временно: засновниця с фото, чтобы посмотреть карточку профиля
const previewEmployee = mockCompanyStructure.staff[1];

function App() {
  return (
    <Workspace>
      <CanvasItem position={ROOT_DEPARTMENT_POSITION}>
        <DepartmentCard department={mockCompanyStructure} />
      </CanvasItem>

      <CanvasItem position={PROFILE_CARD_PREVIEW_POSITION}>
        <ProfileCard employee={previewEmployee} />
      </CanvasItem>
    </Workspace>
  );
}

export default App;
