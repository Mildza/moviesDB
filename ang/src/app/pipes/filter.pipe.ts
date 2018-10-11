import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

		transform(items: any[], term: string, numberOfMovies:number): any[] {
			
			if(!term) return items;
			 return items.filter((x:any) => 
			 x.naziv.toLowerCase().startsWith(term.toLowerCase()) 
			 ||
			 x.glumci.toLowerCase().startsWith(term.toLowerCase()) 
			 )} 

  }