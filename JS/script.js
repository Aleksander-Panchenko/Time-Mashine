let dat = new Date();
let datN = new Date(Date.UTC(0,0,0,0,0,0));
// let timez = new Date().getTimezoneOffset();
console.log(dat + "")
console.log(datN + "")
// console.log("Дата: " + dat + "  " + "смещение: " + timez);
// let n = Date.now();
// console.log(n);
console.log(dat)


// инфа для размышления ----------------------------------------------------------------------------------------------------------------------

//1 // Используя объекты Date
// var start = Date.now();

// // Событие, для которого замеряется время, происходит тут:
// doSomethingForALongTime();
// var end = Date.now();
// var elapsed = end - start; // затраченное время в миллисекундах



//2 // Используя встроенные методы
// var start = new Date();

// // Событие, для которого замеряется время, происходит тут:
// doSomethingForALongTime();
// var end = new Date();
// var elapsed = end.getTime() - start.getTime(); // затраченное время в миллисекундах




//3 // Проверяет функцию и возвращает её возвращаемое значение
// function printElapsedTime(fTest) {
//     var nStartTime = Date.now(),
//       vReturn = fTest(),
//       nEndTime = Date.now();
  
//     console.log(
//       "Затраченное время: " + String(nEndTime - nStartTime) + " миллисекунд",
//     );
//     return vReturn;
//   }
  
//   yourFunctionReturn = printElapsedTime(yourFunction);




//4 //   Получить количество секунд с начала эпохи Unix

// var seconds = Math.floor(Date.now() / 1000);

// --------------------------------------------------------------------------------------------------------------------------










// один странный метод

// console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)


// # tmp date
// 	offsetDate = new Date()
	
// 	# default timezone
// 	Date.prototype.timezoneOffset = offsetDate.getTimezoneOffset()



// // Timezone to ALL dates
// Date.timezoneOffset(-240) // +4 UTC

// // Override timezone only for this date
// new Date().timezoneOffset(-180) // +3 UTC


// (function() {
//     let offsetDate;
//     offsetDate = new Date();
//     Date.prototype.timezoneOffset = offsetDate.getTimezoneOffset();
//     Date.setTimezoneOffset = function(timezoneOffset) {
//       return this.prototype.timezoneOffset = timezoneOffset;
//     };
//     Date.getTimezoneOffset = function(timezoneOffset) {
//       return this.prototype.timezoneOffset;
//     };
//     Date.prototype.getTimezoneOffset = function() {
//       return this.timezoneOffset;
//     };
//     Date.prototype.setTimezoneOffset = function(timezoneOffset) {
//       return this.timezoneOffset = timezoneOffset;
//     };
//     Date.prototype.toString = function() {
//       let offsetTime;
//       offsetTime = this.timezoneOffset * 60 * 1000;
//       offsetDate.setTime(this.getTime() - offsetTime);
//       return offsetDate.toUTCString();
//     };
//     return ['Milliseconds', 'Seconds', 'Minutes', 'Hours', 'Date', 'Month', 'FullYear', 'Year', 'Day'].forEach((function(_this) {
//       return function(key) {
//         Date.prototype["get" + key] = function() {
//           let offsetTime;
//           offsetTime = this.timezoneOffset * 60 * 1000;
//           offsetDate.setTime(this.getTime() - offsetTime);
//           return offsetDate["getUTC" + key]();
//         };
//         return Date.prototype["set" + key] = function(value) {
//           let offsetTime, time;
//           offsetTime = this.timezoneOffset * 60 * 1000;
//           offsetDate.setTime(this.getTime() - offsetTime);
//           offsetDate["setUTC" + key](value);
//           time = offsetDate.getTime() + offsetTime;
//           this.setTime(time);
//           return time;
//         };
//       };
//     })(this));
//   })();