import { useCallback, useState } from "react";
import { INITIAL_VIEWPORT } from "../constants/viewport";
import type { Point } from "../types/geometry";
import type { Viewport } from "../types/viewport";
import { moveViewport, zoomViewportAtPoint } from "../utils/viewport";

export type MoveBy = (deltaX: number, deltaY: number) => void;
export type ZoomAtPoint = (zoomFactor: number, screenPoint: Point) => void;

export function useViewport() {
  const [viewport, setViewport] = useState<Viewport>(INITIAL_VIEWPORT);

  const moveBy: MoveBy = useCallback((deltaX, deltaY) => {
    setViewport((currentViewport) => moveViewport(currentViewport, deltaX, deltaY));
  }, []);

  const zoomAtPoint: ZoomAtPoint = useCallback((zoomFactor, screenPoint) => {
    setViewport((currentViewport) => zoomViewportAtPoint(currentViewport, zoomFactor, screenPoint));
  }, []);

  const resetViewport = useCallback(() => {
    setViewport(INITIAL_VIEWPORT);
  }, []);

  return { viewport, moveBy, zoomAtPoint, resetViewport };
}
