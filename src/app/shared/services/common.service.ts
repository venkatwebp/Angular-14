import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CommonService {

  showShoppingEdit: boolean = false;
  totalValue: any;

  courses = [
    {
      id: 0,
      name: 'React',
      imagePath: 'https://149695847.v2.pressablecdn.com/wp-content/uploads/2021/01/pasted-image-0-2.png',
      version: 'Vesion : 7',
      description: 'Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.',
      details: {
        head1: 'Declarative',
        para1: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.',
        head2: 'Component-Based',
        para2: 'Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DO'
      }
    },
    {
      id: 1,
      name: 'Angular',
      imagePath: 'https://www.levelaccess.com/wp-content/uploads/2015/08/AngularJS_google.png',
      version: 'Vesion : 14',
      description: 'Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.',
      details: {
        head1: 'Declarative',
        para1: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.',
        head2: 'Component-Based',
        para2: 'Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DO'
      }
    },
    {
      id: 2,
      name: 'Vue',
      imagePath: 'https://miro.medium.com/max/720/1*OrjCKmou1jT4It5so5gvOA.jpeg',
      version: 'Vesion : 3',
      description: 'Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.',
      details: {
        head1: 'Declarative',
        para1: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.',
        head2: 'Component-Based',
        para2: 'Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DO'
      }
    },
    {
      id: 3,
      name: 'Javascript',
      imagePath: 'https://149695847.v2.pressablecdn.com/wp-content/uploads/2021/01/pasted-image-0-2.png',
      version: 'Vesion : 12',
      description: 'Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.',
      details: {
        head1: 'Declarative',
        para1: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.',
        head2: 'Component-Based',
        para2: 'Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DO'
      }
    },
    {
      id: 4,
      name: 'Jquery',
      imagePath: 'https://149695847.v2.pressablecdn.com/wp-content/uploads/2021/01/pasted-image-0-2.png',
      version: 'Vesion : 7',
      description: 'Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.',
      details: {
        head1: 'Declarative',
        para1: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.',
        head2: 'Component-Based',
        para2: 'Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DO'
      }
    },
    {
      id: 5,
      name: 'MongoDB',
      imagePath: 'https://149695847.v2.pressablecdn.com/wp-content/uploads/2021/01/pasted-image-0-2.png',
      version: 'Vesion : 14',
      description: 'Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.',
      details: {
        head1: 'Declarative',
        para1: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.',
        head2: 'Component-Based',
        para2: 'Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DO'
      }
    },
    {
      id: 6,
      name: 'Node',
      imagePath: 'https://149695847.v2.pressablecdn.com/wp-content/uploads/2021/01/pasted-image-0-2.png',
      version: 'Vesion : 3',
      description: 'Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.',
      details: {
        head1: 'Declarative',
        para1: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.',
        head2: 'Component-Based',
        para2: 'Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DO'
      }
    },
    {
      id: 7,
      name: 'RX Js',
      imagePath: 'https://149695847.v2.pressablecdn.com/wp-content/uploads/2021/01/pasted-image-0-2.png',
      version: 'Vesion : 12',
      description: 'Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.',
      details: {
        head1: 'Declarative',
        para1: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.',
        head2: 'Component-Based',
        para2: 'Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DO'
      }
    }
  ]

  studentList = [
    {name: "rahul", age: 20},
    {name: "naveen", age: 24}
  ];

  constructor( private httpClient: HttpClient) {}

  public getAll():Observable<any>{
    return this.httpClient.get('https://api.fda.gov/food/enforcement.json?limit=10');
  }

  getServiceId(id: number) {
    return this.courses.find(course => course.id == id);
  }

  add(n1: string, n2: string, n3: string) {
    let total = [];
    total.push(parseInt(n1), parseInt(n2)!, parseInt(n3)!);
    const sumValue = total.reduce((tVal, cVal) => {
      return tVal + (cVal || 0)
    });
    return sumValue;
  }

  addStudent(o: any){
    this.studentList.push(o)
  }

  addObs(x:number, y: number){
    return Observable.create((obs: any)=>{
      obs.next(x+y);
    })
  }

}
