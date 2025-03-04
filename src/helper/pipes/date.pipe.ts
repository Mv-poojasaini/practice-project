import { DatePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'dateConversion',
  
})
export class DateConversion implements PipeTransform{
  constructor(private datePipe: DatePipe){}
  transform(timeStamps: any) {
    if (!timeStamps) return timeStamps;
    return (this.datePipe.transform((timeStamps * 1000), 'dd-mm-yyyy'));

  }

}