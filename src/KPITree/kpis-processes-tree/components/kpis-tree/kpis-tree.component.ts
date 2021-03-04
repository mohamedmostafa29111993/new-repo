import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FlatTreeControl } from "@angular/cdk/tree";
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from "@angular/material/tree";
import { TreeNode } from "@shared/tree-node";
import { TreeNodeInfo } from "@shared/tree-node-info";
import { GetTreeDataService } from "@shared/get-tree-data.service";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
{
  ElementRef;
}

@Component({
  selector: "kpis-tree",
  templateUrl: "./kpis-tree.component.html",
  styleUrls: ["./kpis-tree.component.css"],
})
export class KpisTreeComponent implements OnInit {
  @ViewChild("addNewNodeForm") private addNewNodeFormElm: ElementRef;
  flatNodeMap = new Map<TreeNodeInfo, TreeNode>();
  nestedNodeMap = new Map<TreeNode, TreeNodeInfo>();
  treeFlattener: MatTreeFlattener<TreeNode, TreeNodeInfo>;
  treeControl: FlatTreeControl<TreeNodeInfo>;
  dataSource: MatTreeFlatDataSource<TreeNode, TreeNodeInfo>;
  selectedNodeActionType: string;
  isExistNodeForm = false;

  constructor(
    private getTreeviewNodesService: GetTreeDataService,
    private router: Router
  ) {
    this.treeFlattener = new MatTreeFlattener(
      this.transformer,
      this.getLevel,
      this.isExpandable,
      this.getChildren
    );
    this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(
      this.treeControl,
      this.treeFlattener
    );
  }

  ngOnInit(): void {
    this.getTreeviewNodesService.dataChange.subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  isExpandable = (node: TreeNodeInfo) => node.nodeExpandable;
  getLevel = (node: TreeNodeInfo) => node.nodeLevel;
  getChildren = (node: TreeNode): TreeNode[] => node.children;
  hasChild = (_: number, node: TreeNodeInfo) => node.nodeExpandable;
  hasNoContent = (_: number, nodeData: TreeNodeInfo) =>
    nodeData.nodeText === "";

  private transformer = (node: TreeNode, nodeLevel: number) => {
    const existingNode = this.nestedNodeMap.get(node);
    const flatNode =
      existingNode && existingNode.nodeText === node.nodeText
        ? existingNode
        : ({
            nodeExpandable: false,
            nodeText: "",
            nodeType: "",
            nodeActions: [],
            nodeLevel: nodeLevel + 1,
          } as TreeNodeInfo);
    flatNode.nodeType = node.nodeType;
    flatNode.nodeText = node.nodeText;
    flatNode.nodeActions = node.nodeActions;
    flatNode.nodeLevel = nodeLevel;
    flatNode.nodeExpandable = !!node.children?.length;
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  };

  // open add node form
  addNewNodeForm(parentNode, node): void {
    this.getTreeviewNodesService.insertItem(parentNode, "", "", []);
    this.treeControl.expand(node);
  }

  // check that there is only one classification type under the parent kpi
  checkSelectedNode(parentNode, node): void {
    if (this.isExistNodeForm === false) {
      this.addNewNodeForm(parentNode, node);
      this.isExistNodeForm = true;
    } else {
      Swal.fire({
        title: "Error!",
        text: `Sorry, you can not add more than one node form!`,
        icon: "error",
        confirmButtonText: "Return",
      });
    }
  }

  // add node to the tree
  addNewNode(node: TreeNodeInfo, nodeAction): void {
    this.selectedNodeActionType = nodeAction.nodeAactionType;
    const parentNode = this.flatNodeMap.get(node);
    this.router.navigate(["/app/kpis-processes-tree/kpi-form"]);
    this.checkSelectedNode(parentNode, node);
  }

  // save the added tree node to the api
  saveNode(
    node: TreeNodeInfo,
    nodeType: string,
    nodeText: string,
    nodeActions: []
  ): void {
    const nestedNode = this.flatNodeMap.get(node);
    this.getTreeviewNodesService.updateItem(
      nestedNode,
      nodeType,
      nodeText,
      nodeActions
    );
    this.isExistNodeForm = false;
  }

  // close add node form
  handleCloseAddNode() {
    this.addNewNodeFormElm.nativeElement.remove();
    for (var i = 0; i < this.treeControl.dataNodes.length; i++) {
      var obj = this.treeControl.dataNodes[i];

      if (obj.nodeText === "" && obj.nodeType === "") {
        this.treeControl.dataNodes.splice(i, 1);
        i--;
      }
    }
    this.getTreeviewNodesService.dataChange.next(this.dataSource.data);
    // this.dataSource = new MatTreeFlatDataSource(
    //   this.treeControl,
    //   this.treeFlattener
    // );
    this.isExistNodeForm = false;
  }

  // add .div-node-active to the clicked node
  updateActiveTreeNode(event, node): void {
    const oldActiveTreeNode = document.querySelector(".div-node-active");
    if (oldActiveTreeNode) {
      oldActiveTreeNode.classList.remove("div-node-active");
      event.target.classList.add("div-node-active");
    } else {
      event.target.classList.add("div-node-active");
    }
  }

  tryAction(node) {
    console.log(node.nodeActions);
  }
}
