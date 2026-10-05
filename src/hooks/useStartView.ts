import { type RefObject, useLayoutEffect } from "react";
import type { Viewport } from "../types/viewport";
import { getOffsetWithin } from "../utils/getOffsetWithin";
import { getScaleToFitWidth, getViewportShowingAtTopCenter } from "../utils/viewport";

// При открытии страницы ставит элемент по центру сверху и уменьшает масштаб, чтобы он поместился по ширине
export function useStartView(
  workspaceRef: RefObject<HTMLElement | null>,
  targetRef: RefObject<HTMLElement | null> | undefined,
  showStartView: (viewport: Viewport) => void,
) {
  useLayoutEffect(() => {
    const workspaceElement = workspaceRef.current;
    const targetElement = targetRef?.current;
    if (!workspaceElement || !targetElement) return;

    const workspaceWidth = workspaceElement.clientWidth;
    const targetPosition = getOffsetWithin(targetElement, workspaceElement);
    const targetWidth = targetElement.offsetWidth;

    const startViewport = getViewportShowingAtTopCenter(
      workspaceWidth,
      targetPosition.x + targetWidth / 2,
      targetPosition.y,
      getScaleToFitWidth(workspaceWidth, targetWidth),
    );

    showStartView(startViewport);
  }, [workspaceRef, targetRef, showStartView]);
}
