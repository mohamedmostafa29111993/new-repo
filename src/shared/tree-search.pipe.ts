import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "treeSearch",
})
export class TreeSearchPipe implements PipeTransform {
  transform(data: string[], value: string): string[] {
    return value
      ? data.filter((v) => v.toLowerCase().includes(value.toLowerCase()))
      : data;
  }
}
