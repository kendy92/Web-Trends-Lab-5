export class Person { //* create person class

    /* init person properties */
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;

    getAge(): number { /* init method to get person age */

        let today: Date = new Date(); //* init today as Date class
        let age = today.getFullYear() - this.dateOfBirth.getFullYear(); //* cal person age

        if(
            this.dateOfBirth.getDate() > today.getDate() && 
            this.dateOfBirth.getMonth() > today.getMonth() 
        ) {
            age--;
        }
        return age;
    }
}
