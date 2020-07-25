"use strict"
function Weather(cityname,description){
    this.cityname=cityname;
    this.description=description;
    this._temparature='';
}
Object.defineProperty(Weather.prototype,'temparature',{
    get:function(){
        return this._temparature;
    },
    set:function(value){
        this._temparature=(value*1.8 + 32).toFixed(2) + 'F.';
    }
});