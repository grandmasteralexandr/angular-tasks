import { Component } from '@angular/core';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.pug',
  styleUrls: ['./main-sidebar.component.scss']
})
export class MainSidebarComponent {
  completedTaskCount = 372;
  userName = 'Jean Gonzales';
  userRole = 'Product Owner';
  notificationCount = 3;
  openTaskCount = 0;

  goToTasks() {
    if (this.openTaskCount === 0) {
      alert('No more open tasks');
      return;
    }

    // this.$router.push({name: 'Tasks'}).catch(err => {console.log(err.message)})
  }
}
