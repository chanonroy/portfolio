"use strict";var app=new Vue({el:"#app",data:{message:"Hello Vue!"},computed:{time_greeting:function(){var e=new Date,n=e.getHours();return n>2&&n<12?"Good morning":n>11&&n<17?"Good afternoon":n>16&&n<22?"Good evening":"Greetings"}}});