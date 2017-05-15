define(function () {
   "use strict";

   return ["ngNotify", function (ngNotify) {
       "ngInject";

       var formats = [
               {'name': 'Hexadecimal w/ Hashtag' , 'label': 'HEX - #1234EF', value: 'toHexHash'},
               {'name': 'Hexadecimal' , 'label': 'HEX - 1234EF', value: 'toHexNoHash'},
               {'name': 'RGB' , 'label': 'RGB - rgb(255, 255, 255)', value: 'toRGB'},
               {'name': 'RGBA' , 'label': 'RGBA - rgba(255, 255, 255, 1.0)', value: 'toRGBA'}
           ],
           format = formats[0],
           processHex = {};

       function toHexHash (hex) {
           return hex;
       }

       function toHexNoHash (hex) {
           return hex.slice(1);
       }

       function toRGB (hex) {
           var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex),
               r = parseInt(result[1], 16),
               g = parseInt(result[2], 16),
               b = parseInt(result[3], 16);
           return ['rgb(',r, ',', g, ',', b,')'].join('');
       }

       function toRGBA (hex) {
           var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex),
               r = parseInt(result[1], 16),
               g = parseInt(result[2], 16),
               b = parseInt(result[3], 16);
           return ['rgba(',r, ',', g, ',', b,', 1.0)'].join('');
       }

       processHex = {
           toHexHash: toHexHash,
           toHexNoHash: toHexNoHash,
           toRGB: toRGB,
           toRGBA: toRGBA
       };

       function getColor (hex) {
           return processHex[format.value](hex);
       }

       function getFormats() {
           return formats;
       }

       function getFormat() {
           return format;
       }

       function setFormat(data) {
           format = data;
           ngNotify.set('Color Format set to ' + data.name, {type: 'grimace'});
       }

       return {
           getColor: getColor,
           getFormat: getFormat,
           getFormats: getFormats,
           setFormat: setFormat
       };
   }]
});