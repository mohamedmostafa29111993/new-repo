export interface TreeNode {
  nodeType: string;
  nodeText: string;
  nodeActions?: [];
  children?: TreeNode[];
}
