import type React from 'react';

type Checked = 0 | 0.5 | 1;

type CheckedStatus = 'checked' | 'custom' | 'unchecked';

export interface FolderTreeProps {
  data: NodeData;
  iconComponents?: IconComponents;
  indentPixels?: number;
  initCheckedStatus?: CheckedStatus;
  initOpenStatus?: OpenStatus;
  onChange?: OnChange;
  onNameClick?: OnNameClick;
  readOnly?: boolean;
  showCheckbox?: boolean;
}

export type Icon = React.FunctionComponent<IconProps>;

export interface IconComponents {
  CancelIcon?: Icon;
  CaretRightIcon?: Icon;
  CaretDownIcon?: Icon;
  DeleteIcon?: Icon;
  EditIcon?: Icon;
  FileIcon?: Icon;
  AddFileIcon?: Icon,
  AddFolderIcon?: Icon,
  FolderIcon?: Icon;
  FolderOpenIcon?: Icon;
  OKIcon?: Icon;
}

export interface IconProps {
  nodeData: NodeData;
  onClick: () => void;
}

export interface NodeData {
  checked?: Checked;
  children?: Array<NodeData>;
  isOpen?: boolean;
  name: string;
  [key: string]: any;
}

type OnChange = (state: NodeData, event: unknown) => void;

type OnNameClick = (opts: {
  defaultOnClick: () => void;
  nodeData: NodeData;
}) => void;

type OpenStatus = 'closed' | 'custom' | 'open';

declare const FolderTree: React.FunctionComponent<FolderTreeProps>;

export const testData: NodeData;

export default FolderTree;
