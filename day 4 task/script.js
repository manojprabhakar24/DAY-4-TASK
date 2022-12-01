1)

var obj1 ={
    name:"person 1",
    age : 5
};
var obj2 ={
    age : 6,
    name : "person 1"
};

   if(JSON.stringify(obj1)===JSON.stringify(obj2))
   {
    console.log("TRUE");
   }
  else{
    console.log("FALSE");
  };

  OUTPUT :  FALSE 

 2) 

   var request = new XMLHttpRequest();
  request.open("GET","https://restcountries.com/v2/all",true)
  request.send()
  request.onload=function() {
    var data = request. response
    var result = JSON.parse(data)
    var res= result.map((ele)=>`${ele.flags.png}`)
    console.log(res);
  } 


  3)
  
   
 var request = new XMLHttpRequest();
 request.open("GET","https://restcountries.com/v2/all",true)
 request.send()
 request.onload=function() {
   var data = request. response
   var result = JSON.parse(data)
   var res= result.map((ele)=>`${ele.name} :${ele.region}:${ele.subregion}  :${ele.population}`)
   console.log(res);

 }
   

OUTPUT:
 
"Afghanistan :Asia:Southern Asia  :40218234"
1
: 
"Åland Islands :Europe:Northern Europe  :28875"
2
: 
"Albania :Europe:Southern Europe  :2837743"
3
: 
"Algeria :Africa:Northern Africa  :44700000"
4
: 
"American Samoa :Oceania:Polynesia  :55197"
5
: 
"Andorra :Europe:Southern Europe  :77265"
6
: 
"Angola :Africa:Middle Africa  :32866268"
7
: 
"Anguilla :Americas:Caribbean  :13452"
8
: 
"Antarctica :Polar:Antarctica  :1000"
9
: 
"Antigua and Barbuda :Americas:Caribbean  :97928"
10
: 
"Argentina :Americas:South America  :45376763"
11
: 
"Armenia :Asia:Western Asia  :2963234"
12
: 
"Aruba :Americas:Caribbean  :106766"
13
: 
"Australia :Oceania:Australia and New Zealand  :25687041"
14
: 
"Austria :Europe:Central Europe  :8917205"
15
: 
"Azerbaijan :Asia:Western Asia  :10110116"
16
: 
"Bahamas :Americas:Caribbean  :393248"
17
: 
"Bahrain :Asia:Western Asia  :1701583"
18
: 
"Bangladesh :Asia:Southern Asia  :164689383"
19
: 
"Barbados :Americas:Caribbean  :287371"
20
: 
"Belarus :Europe:Eastern Europe  :9398861"
21
: 
"Belgium :Europe:Western Europe  :11555997"
22
: 
"Belize :Americas:Central America  :397621"
23
: 
"Benin :Africa:Western Africa  :12123198"
24
: 
"Bermuda :Americas:Northern America  :63903"
25
: 
"Bhutan :Asia:Southern Asia  :771612"
26
: 
"Bolivia (Plurinational State of) :Americas:South America  :11673029"
27
: 
"Bonaire, Sint Eustatius and Saba :Americas:Caribbean  :17408"
28
: 
"Bosnia and Herzegovina :Europe:Southern Europe  :3280815"
29
: 
"Botswana :Africa:Southern Africa  :2351625"
30
: 
"Bouvet Island :Antarctic Ocean:South Antarctic Ocean  :0"
31
: 
"Brazil :Americas:South America  :212559409"
32
: 
"British Indian Ocean Territory :Africa:Eastern Africa  :3000"
33
: 
"United States Minor Outlying Islands :Americas:Northern America  :300"
34
: 
"Virgin Islands (British) :Americas:Caribbean  :30237"
35
: 
"Virgin Islands (U.S.) :Americas:Caribbean  :106290"
36
: 
"Brunei Darussalam :Asia:South-Eastern Asia  :437483"
37
: 
"Bulgaria :Europe:Eastern Europe  :6927288"
38
: 
"Burkina Faso :Africa:Western Africa  :20903278"
39
: 
"Burundi :Africa:Eastern Africa  :11890781"
40
: 
"Cambodia :Asia:South-Eastern Asia  :16718971"
41
: 
"Cameroon :Africa:Middle Africa  :26545864"
42
: 
"Canada :Americas:Northern America  :38005238"
43
: 
"Cabo Verde :Africa:Western Africa  :555988"
44
: 
"Cayman Islands :Americas:Caribbean  :65720"
45
: 
"Central African Republic :Africa:Middle Africa  :4829764"
46
: 
"Chad :Africa:Middle Africa  :16425859"
47
: 
"Chile :Americas:South America  :19116209"
48
: 
"China :Asia:Eastern Asia  :1402112000"
49
: 
"Christmas Island :Oceania:Australia and New Zealand  :2072"
50
: 
"Cocos (Keeling) Islands :Oceania:Australia and New Zealand  :550"
51
: 
"Colombia :Americas:South America  :50882884"
52
: 
"Comoros :Africa:Eastern Africa  :869595"
53
: 
"Congo :Africa:Middle Africa  :5518092"
54
: 
"Congo (Democratic Republic of the) :Africa:Middle Africa  :89561404"
55
: 
"Cook Islands :Oceania:Polynesia  :18100"
56
: 
"Costa Rica :Americas:Central America  :5094114"
57
: 
"Croatia :Europe:Southern Europe  :4047200"
58
: 
"Cuba :Americas:Caribbean  :11326616"
59
: 
"Curaçao :Americas:Caribbean  :155014"
60
: 
"Cyprus :Europe:Southern Europe  :1207361"
61
: 
"Czech Republic :Europe:Central Europe  :10698896"
62
: 
"Denmark :Europe:Northern Europe  :5831404"
63
: 
"Djibouti :Africa:Eastern Africa  :988002"
64
: 
"Dominica :Americas:Caribbean  :71991"
65
: 
"Dominican Republic :Americas:Caribbean  :10847904"
66
: 
"Ecuador :Americas:South America  :17643060"
67
: 
"Egypt :Africa:Northern Africa  :102334403"
68
: 
"El Salvador :Americas:Central America  :6486201"
69
: 
"Equatorial Guinea :Africa:Middle Africa  :1402985"
70
: 
"Eritrea :Africa:Eastern Africa  :5352000"
71
: 
"Estonia :Europe:Northern Europe  :1331057"
72
: 
"Ethiopia :Africa:Eastern Africa  :114963583"
73
: 
"Falkland Islands (Malvinas) :Americas:South America  :2563"
74
: 
"Faroe Islands :Europe:Northern Europe  :48865"
75
: 
"Fiji :Oceania:Melanesia  :896444"
76
: 
"Finland :Europe:Northern Europe  :5530719"
77
: 
"France :Europe:Western Europe  :67391582"
78
: 
"French Guiana :Americas:South America  :254541"
79
: 
"French Polynesia :Oceania:Polynesia  :280904"
80
: 
"French Southern Territories :Africa:Southern Africa  :140"
81
: 
"Gabon :Africa:Middle Africa  :2225728"
82
: 
"Gambia :Africa:Western Africa  :2416664"
83
: 
"Georgia :Asia:Western Asia  :3714000"
84
: 
"Germany :Europe:Central Europe  :83240525"
85
: 
"Ghana :Africa:Western Africa  :31072945"
86
: 
"Gibraltar :Europe:Southern Europe  :33691"
87
: 
"Greece :Europe:Southern Europe  :10715549"
88
: 
"Greenland :Americas:Northern America  :56367"
89
: 
"Grenada :Americas:Caribbean  :112519"
90
: 
"Guadeloupe :Americas:Caribbean  :400132"
91
: 
"Guam :Oceania:Micronesia  :168783"
92
: 
"Guatemala :Americas:Central America  :16858333"
93
: 
"Guernsey :Europe:Northern Europe  :62999"
94
: 
"Guinea :Africa:Western Africa  :13132792"
95
: 
"Guinea-Bissau :Africa:Western Africa  :1967998"
96
: 
"Guyana :Americas:South America  :786559"
97
: 
"Haiti :Americas:Caribbean  :11402533"
98
: 
"Heard Island and McDonald Islands :Antarctic:Antarctic  :0"
99
: 
"Vatican City :Europe:Southern Europe  :451"
[100 … 199]
[200 … 249]
length
: 
250
[[Prototype]]
: 
Array(0)
﻿

