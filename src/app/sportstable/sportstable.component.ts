import {Component} from '@angular/core';

/**
 * @title Basic table
 */
@Component({
  selector: 'Sportstable',
  styleUrls: ['Sportstable.component.css'],
  templateUrl: 'Sportstable.component.html',
})
export class SportstableComponent {
  displayedColumns = ['Id', 'name', 'Rank', 'Sport'];
  dataSource = ELEMENT_DATA;
}

export interface Element {
  name: string;
  Id: number;
  Rank: number;
  Sport: string;
}

const ELEMENT_DATA: Element[] = [
  {Id: 1, name: 'Sachin', Rank: 1, Sport: 'Cricket '},
  {Id: 2, name: 'Leo Messi', Rank: 1, Sport: 'Soccer '},
  {Id: 3, name: 'AlexSmith', Rank: 1, Sport: 'NFL '},
  {Id: 4, name: 'StepCurry', Rank: 1, Sport: 'NBA '},


];
