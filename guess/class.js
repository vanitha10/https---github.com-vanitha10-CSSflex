class Employee{

    constructor(name,empid,date,hours,designation){
this.name = name;
this.emp_id = empid;
this.join_date = date;
this.hours = hours;
this.designation = designation;

    }


get Manager(){ 
    return this.hours*90;
  }
set Manager(Manager){ //setter
    this.hours=Manager/90;
  }
}
var employee1= new Employee(10);

document.write("Vanitha who is an employee" + employee1.hours +  "is" + employee1.Manager +" ");

