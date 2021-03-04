import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TreeNode } from "./tree-node";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable()
export class GetTreeDataService {
  apiUrl: string = "http://localhost:3000/kpis-tree-data";
  dataChange = new BehaviorSubject<TreeNode[]>([]);
  get data(): TreeNode[] {
    return this.dataChange.value;
  }

  constructor(private _http: HttpClient) {
    this.getTreeNodes().subscribe((data) => {
      this.dataChange.next(data);
    });
  }

  getTreeNodes(): Observable<TreeNode[]> {
    return this._http.get<TreeNode[]>(this.apiUrl);
  }

  insertItem(
    parent: TreeNode,
    nodeType: string,
    nodeText: string,
    nodeActions: []
  ) {
    if (parent.children) {
      parent.children.push({
        nodeType: nodeType,
        nodeText: nodeText,
        nodeActions: nodeActions,
      } as TreeNode);
      this.dataChange.next(this.data);
    } else {
      parent.children = [];
      parent.children.push({
        nodeType: nodeType,
        nodeText: nodeText,
        nodeActions: nodeActions,
      } as TreeNode);
      this.dataChange.next(this.data);
    }
  }

  updateItem(
    node: TreeNode,
    nodeType: string,
    nodeText: string,
    nodeActions: []
  ) {
    node.nodeType = nodeType;
    node.nodeText = nodeText;
    node.nodeActions = nodeActions;
    this.dataChange.next(this.data);
  }
}
