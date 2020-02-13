import { Component } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.pug',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent {
  projectName = 'Website Redesign';

  sharedAvatars: string[] = [
    'shared-avatar.jpeg',
    'shared-avatar2.jpeg',
    'shared-avatar3.jpeg'
  ];

  contentTabs: string[] = [
    'Tasks',
    'Kanban',
    'Activity',
    'Calendar',
    'Files',
  ];
}
