var d= new Date();
var weekdays=new Array(7);
 weekdays[0]="Sunday";
 weekdays[1]="Monday";
 weekdays[2]="Tuesday";
 weekdays[3]="Wednesday";
 weekdays[4]="Thursday";
 weekdays[5]="Friday";
 weekdays[6]="Saturday";

 var date2=new Date();
 var weekdays2=new Array(7);

 weekdays2[0]="is the fun day";
 weekdays2[1]="is the start of work day";
 weekdays2[2]="is the Hanuman day";
 weekdays2[3]="is the holy day";
 weekdays2[4]="is the Vishnu Day";
 weekdays2[5]="is the Allah Day";
 weekdays2[6]="is the Shani Day";

 var m=weekdays[d.getDay()];
 var n=weekdays2[date2.getDay()];

 var day=document.getElementById('week-day');
 var phrase=document.getElementById('phrase');

 function whatday(){
 	day.innerText=m;
 	phrase.innerText=n;
 }
 whatday();
