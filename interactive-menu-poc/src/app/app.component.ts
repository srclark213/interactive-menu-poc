import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('expandContract', [
      state('expand', style({
        width: '100%'
      })), 
      state('contract', style({
        width: 'auto'
      })),
      transition('expand => contract', [
        animate('1s')
      ]),
      transition('contract => expand', [
        animate('1s')
      ])
    ])
  ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  packages: any[] = [
    {
      id: 1,
      title: 'Package One',
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
