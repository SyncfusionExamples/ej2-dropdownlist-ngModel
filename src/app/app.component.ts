import { Component } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-ng-dropdowns'; 

@Component({
    selector: 'my-app',
    template: `
    <ejs-dropdownlist id='ddlelement' [dataSource]='data' [(value)]='selectedGame' placeholder='Select a game'></ejs-dropdownlist>
    <div style='margin-top: 50px'>
        <input type="text" [(ngModel)]="selectedGame" style="width:245px;height:25px" />
     </div>
    `
})
export class AppComponent {
    constructor() { 
    }
    
    // defined the array of complex data
    public data: string[] = [ 'Badminton', 'Basketball', 'Cricket', 'Football' ];
    // set a value to pre-select
    public selectedGame: string = 'Badminton';
}