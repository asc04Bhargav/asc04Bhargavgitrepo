import { Pipe, PipeTransform } from '@angular/core';
// import { Issue } from './models/issue.model';
import { Issue } from './issue/issue.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(issues: Issue[], searchText: string): Issue[] {
    if (!searchText) {
      return issues;
    }
    return issues.filter(issue => 
      issue.title.toLowerCase().includes(searchText.toLowerCase()) ||
      issue.status.toLowerCase().includes(searchText.toLowerCase()) ||
      issue.priority.toLowerCase().includes(searchText.toLowerCase()) ||
      issue.assignee.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}
