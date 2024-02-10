export class CalendarItem {
  constructor(
    public day: string,
    public period: string,
    public site: string,
    public category: string,
    public isLastInGroup  : boolean = false
  ) {}
}
