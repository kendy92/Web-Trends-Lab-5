import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';
import { Person } from '../person';
import { query } from '@angular/core/src/render3/query';

@Component({
  selector: 'app-guestlist',
  templateUrl: './guestlist.component.html',
  styleUrls: ['./guestlist.component.css']
})
export class GuestlistComponent implements OnInit {

  searchGuest: Person = new Person();

  guests: Person[] = []; 

  findPeople(queryPerson?: Person) {

    this.peopleService.getPeople().subscribe(data => this.guests = data);

    if(queryPerson !== undefined) {
      this.peopleService.getPeople(queryPerson).subscribe( data => this.guests = data);
    }
  }

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.findPeople();
  }

}
