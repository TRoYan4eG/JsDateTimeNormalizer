export class DateTime {
  private _date: Date;

  // Time
  private _hours: string;
  private _minutes: string;

  // Date
  private _year: string;
  private _day: string;
  private _month: string;

  constructor(date?: string | Date) {
    this._date = new Date(date);
    this.parse();
    return this;
  }

  get hours() {
    return this._hours;
  }

  get minutes() {
    return this._minutes;
  }

  get year() {
    return this._year;
  }

  get day() {
    return this._day;
  }

  get month() {
    return this._month;
  }

  get date() {
    return `${this._month}/${this._day}/${this._year}`;
  }

  get time() {
    return `${this._hours}/${this._minutes}`;
  }

  get dateTime() {
    return `${this.date} ${this.time}`;
  }

  private parse() {
    this._hours = DateTime.addBeginZero(this._date.getHours());
    this._minutes = DateTime.addBeginZero(this._date.getMinutes());

    this._year = this._date.getFullYear().toString();
    this._month = DateTime.addBeginZero(+this._date.getMonth() + 1);
    this._day = DateTime.addBeginZero(this._date.getDate());
  }

  public static addBeginZero(number: number): string {
    let res = number.toString();
    if (res.length < 2) {
      res = `0${res}`;
    }
    return res;
  }
}
