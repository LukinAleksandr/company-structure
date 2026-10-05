import { type ReactNode, type RefObject, useRef } from "react";
import { BUTTON_ZOOM_FACTOR } from "../../constants/viewport";
import { useDragPanning } from "../../hooks/useDragPanning";
import { useSpaceKeyPressed } from "../../hooks/useSpaceKeyPressed";
import { useStartView } from "../../hooks/useStartView";
import { useTouchNavigation } from "../../hooks/useTouchNavigation";
import { useViewport } from "../../hooks/useViewport";
import { useWheelNavigation } from "../../hooks/useWheelNavigation";
import { getElementCenter } from "../../utils/getElementCenter";
import { getGridBackgroundStyle } from "../../utils/getGridBackgroundStyle";
import { joinClassNames } from "../../utils/joinClassNames";
import { WorkspaceContent } from "../WorkspaceContent/WorkspaceContent";
import { ZoomControls } from "../ZoomControls/ZoomControls";
import styles from "./Workspace.module.css";

type WorkspaceProps = {
  children: ReactNode;
  // Что показать по центру сверху при открытии страницы
  startViewTargetRef?: RefObject<HTMLElement | null>;
};

export function Workspace({ children, startViewTargetRef }: WorkspaceProps) {
  const workspaceRef = useRef<HTMLDivElement>(null);
  const { viewport, moveBy, zoomAtPoint, resetViewport, showStartView } = useViewport();
  const isSpacePressed = useSpaceKeyPressed();
  const { isDragging, dragHandlers } = useDragPanning(moveBy, isSpacePressed);

  useWheelNavigation(workspaceRef, { moveBy, zoomAtPoint });
  useTouchNavigation(workspaceRef, { moveBy, zoomAtPoint });
  useStartView(workspaceRef, startViewTargetRef, showStartView);

  function zoomIn() {
    if (!workspaceRef.current) return;
    zoomAtPoint(BUTTON_ZOOM_FACTOR, getElementCenter(workspaceRef.current));
  }

  function zoomOut() {
    if (!workspaceRef.current) return;
    zoomAtPoint(1 / BUTTON_ZOOM_FACTOR, getElementCenter(workspaceRef.current));
  }

  const workspaceClassNames = joinClassNames(
    styles.workspace,
    isSpacePressed && styles.readyToDrag,
    isDragging && styles.dragging,
  );

  return (
    <div ref={workspaceRef} className={workspaceClassNames} style={getGridBackgroundStyle(viewport)} {...dragHandlers}>
      <WorkspaceContent viewport={viewport}>{children}</WorkspaceContent>

      <ZoomControls scale={viewport.scale} onZoomIn={zoomIn} onZoomOut={zoomOut} onReset={resetViewport} />
    </div>
  );
}
