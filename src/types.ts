import { CanvasConnection } from 'app/features/canvas';
import { ElementState } from 'app/features/canvas/runtime/element';

export enum LayerActionID {
  Delete = 'delete',
  Duplicate = 'duplicate',
  MoveTop = 'move-top',
  MoveBottom = 'move-bottom',
}

export interface DragNode {
  key: number;
  dataRef: ElementState;
}

export interface DropNode extends DragNode {
  pos: string;
}

export enum InlineEditTabs {
  ElementManagement = 'element-management',
  SelectedElement = 'selected-element',
  SelectedConnection = 'selected-connection',
}

export type AnchorPoint = {
  x: number;
  y: number;
};

export interface CanvasTooltipPayload {
  anchorPoint: AnchorPoint | undefined;
  element: ElementState | undefined;
  isOpen?: boolean;
}

export interface ConnectionState {
  index: number; // array index from the source
  source: ElementState;
  target: ElementState;
  info: CanvasConnection;
}
