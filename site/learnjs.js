const a=['hello','Hiii','good'];
console.log(a.length);
a.splice(a.length, 0, 'Day');
console.log(a);
const index=a.indexOf('good');
if(index!=-1){
	a.splice(index,1,'Good');
	console.log(a);

}
