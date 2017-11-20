# EJ2 ng AutoComplete zIndex

Query: Doesn't work with ngModel

This sample works as ng two-way binding support. When value changes occur in the dropdownlist, the corresponding selected item's text updated in input element through ngModal.

Initially we have select a game through value property,

```
    // set a value to pre-select
    public selectedGame: string = 'Badminton';
```

The corresponding selected item's text updated in input element using ngModal.

```
  <ej-dropdownlist id='ddlelement' [dataSource]='data' [(value)]='selectedGame' placeholder='Select a game'></ej-dropdownlist>
    <div style='margin-top: 50px'>
        <input type="text" [(ngModel)]="selectedGame" style="width:245px;height:25px" />
     </div>
```

## Installing and Running Application

### Installing

To install all dependent packages, use the below command

```
npm install
```

### Run the application

To compile and run the source files, use the below command

```
npm start
```
