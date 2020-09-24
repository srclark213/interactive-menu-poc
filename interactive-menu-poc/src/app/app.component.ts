import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  packages: any[] = [
    {
      id: 1,
      title: 'Package One',
      class: 'bg-blue-200',
      products: [
        'New VSC',
        'GAP',
        'Select 1',
        'Key Replacement',
        'Tire & Wheel',
        'Maintenance'
      ]
    },
    {
      id: 2,
      title: 'Package Two',
      class: 'bg-red-200',
      products: [
        'New VSC',
        'GAP',
        'Select 1',
        'Tire & Wheel',
        'Maintenance'
      ]
    },
    {
      id: 3,
      title: 'Package Three',
      class: 'bg-green-200',
      products: [
        'New VSC',
        'GAP',
        'Select 1',
        'Maintenance'
      ]
    },
    {
      id: 4,
      title: 'Package Four',
      class: 'bg-orange-200',
      products: [
        'New VSC',
        'GAP',
      ]
    }
  ]

  expandedPackage: number = null;

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  expand(pkg: any) {
    this.expandedPackage = pkg.id === this.expandedPackage ? null : pkg.id;
  }
}
