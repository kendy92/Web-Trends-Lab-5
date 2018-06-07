import { Injectable } from '@angular/core';
import { Person } from './person';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  people: Person[] = [ //* create guest array 

    {id: 1, firstName: 'Lee', lastName: 'Dinh', dateOfBirth: new Date('02/09/1992')},
    {id: 2, firstName: 'Bill', lastName: 'Wright', dateOfBirth: new Date('01/01/1950')},
    {id: 3, firstName: 'Bernie', lastName: 'Monette', dateOfBirth: new Date('01/01/1955')},
    {id: 4, firstName: 'Sean', lastName: 'Doyle', dateOfBirth: new Date('01/01/1970')},

    ];

  //* create func to return guest array
  getPeople(peopleOfInterest?: Person): Observable< Person[] > {

    if(peopleOfInterest !== undefined) {

      let peopleResults: Person[] = []; //create empty array to obtain result
      
      for(let p of this.people) { //* loop through people arr

        if(peopleOfInterest.firstName.toLowerCase() === p.firstName.toLowerCase()) {
            peopleResults.push(p);
        }else if(peopleOfInterest.lastName.toLowerCase() === p.lastName.toLowerCase()) {
            peopleResults.push(p);
        }

      }
      return of(peopleResults);
    }
    return of(this.people);
  }
  constructor() { }
}
