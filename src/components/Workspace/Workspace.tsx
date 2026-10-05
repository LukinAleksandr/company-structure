import { type ReactNode, useRef } from "react";
import { BUTTON_ZOOM_FACTOR } from "../../constants/viewport";
import { useDragPanning } from "../../hooks/useDragPanning";
import { useSpaceKeyPressed } from "../../hooks/useSpaceKeyPressed";
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
};

/**
 * Рабочая область: бесконечное полотно, которое можно двигать и масштабировать.
 * Всё, что передано в children, рисуется на полотне.
 */
export function Workspace({ children }: WorkspaceProps) {
  const workspaceRef = useRef<HTMLDivElement>(null);
  const { viewport, moveBy, zoomAtPoint, resetViewport } = useViewport();
  const isSpacePressed = useSpaceKeyPressed();
  const { isDragging, dragHandlers } = useDragPanning(moveBy, isSpacePressed);

  useWheelNavigation(workspaceRef, { moveBy, zoomAtPoint });
  useTouchNavigation(workspaceRef, { moveBy, zoomAtPoint });

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
