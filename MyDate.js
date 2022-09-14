class MyDate {
    day;
    mon;
    year;

    constructor(day, mon, year) {
        this.day = day;
        this.mon = mon;
        this.year = year;

    }
    setDay(day){
        this.day=day
    }
    getDay(){
        return this.day
    }
    setMon(mon){
        this.mon=mon
    }
    getMon(){
        return this.mon
    }
    setYear(year){
        this.year=year
    }
    getYear(){
        return this.year
    }
    setDate(day,mon,year){
        this.day=day;
        this.mon=mon;
        this.year=year;
    }
    toString(){
        return this.day+"/"+this.mon+"/"+this.year
    }
}