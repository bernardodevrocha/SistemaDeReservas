export class DateRange{
  private readonly startDate: Date;
  private readonly endDate: Date;

  constructor(startDate: Date, endDate: Date){
    this.validateDates(startDate, endDate);

    this.startDate = startDate;
    this.endDate = endDate;
  }

  private validateDates(startDate: Date, endDate: Date): void{
    if(endDate < startDate){
      throw new Error("A data de término deve ser posterior a data de início.");
    }
    
    if(endDate == startDate){
      throw new Error("A data início e termino não podem ser iguais!");
    }
  }

  getStartDate(): Date{
    return this.startDate;
  }

  getEndDate(): Date{
    return this.endDate;
  }

  getTotalNights(): number{
    const diffTime = this.endDate.getTime() - this.startDate.getTime(); 
    return Math.ceil(diffTime / (1000 * 3600 * 24));
  }
}