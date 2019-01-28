$(function(){
    var isolang=[
        {"code":"ar","name":"Arabic","nativeName":"العربية"},
        {"code":"eu","name":"Basque","nativeName":"euskara, euskera"},
        {"code":"bg","name":"Bulgarian","nativeName":"български език"},
        {"code":"ca","name":"Catalan; Valencian","nativeName":"Català"},
        {"code":"zh","name":"Chinese","nativeName":"中文 (Zhōngwén), 汉语, 漢語"},
        {"code":"hr","name":"Croatian","nativeName":"hrvatski"},
        {"code":"cs","name":"Czech","nativeName":"česky, čeština"},
        {"code":"da","name":"Danish","nativeName":"dansk"},
        {"code":"nl","name":"Dutch","nativeName":"Nederlands, Vlaams"},
        {"code":"en","name":"English","nativeName":"English"},
        {"code":"et","name":"Estonian","nativeName":"eesti, eesti keel"},
        {"code":"fr","name":"French","nativeName":"français, langue française"},
        {"code":"de","name":"German","nativeName":"Deutsch"},
        {"code":"el","name":"Greek, Modern","nativeName":"Ελληνικά"},
        {"code":"hi","name":"Hindi","nativeName":"हिन्दी, हिंदी"},
        {"code":"hu","name":"Hungarian","nativeName":"Magyar"},
        {"code":"id","name":"Indonesian","nativeName":"Bahasa Indonesia"},
        {"code":"is","name":"Icelandic","nativeName":"Íslenska"},
        {"code":"it","name":"Italian","nativeName":"Italiano"},
        {"code":"ja","name":"Japanese","nativeName":"日本語 (にほんご／にっぽんご)"},
        {"code":"kg","name":"Kongo","nativeName":"KiKongo"},
        {"code":"ko","name":"Korean","nativeName":"한국어 (韓國語), 조선말 (朝鮮語)"},
        {"code":"ku","name":"Kurdish","nativeName":"Kurdî, كوردی‎"},
        {"code":"la","name":"Latin","nativeName":"latine, lingua latina"},
        {"code":"mk","name":"Macedonian","nativeName":"македонски јазик"},
        {"code":"ne","name":"Nepali","nativeName":"नेपाली"},
        {"code":"nn","name":"Norwegian Nynorsk","nativeName":"Norsk nynorsk"},
        {"code":"no","name":"Norwegian","nativeName":"Norsk"},
        {"code":"fa","name":"Persian","nativeName":"فارسی"},
        {"code":"pl","name":"Polish","nativeName":"polski"},
        {"code":"pt","name":"Portuguese","nativeName":"Português"},
        {"code":"rm","name":"Romansh","nativeName":"rumantsch grischun"},
        {"code":"ro","name":"Romanian, Moldavian, Moldovan","nativeName":"română"},
        {"code":"ru","name":"Russian","nativeName":"русский язык"},
        {"code":"sr","name":"Serbian","nativeName":"српски језик"},
        {"code":"gd","name":"Scottish Gaelic; Gaelic","nativeName":"Gàidhlig"},
        {"code":"sk","name":"Slovak","nativeName":"slovenčina"},
        {"code":"sl","name":"Slovene","nativeName":"slovenščina"},
        {"code":"so","name":"Somali","nativeName":"Soomaaliga, af Soomaali"},
        {"code":"es","name":"Spanish; Castilian","nativeName":"español, castellano"},
        {"code":"sv","name":"Swedish","nativeName":"svenska"},
        {"code":"tr","name":"Turkish","nativeName":"Türkçe"},
        {"code":"ty","name":"Tahitian","nativeName":"Reo Tahiti"},
        {"code":"uk","name":"Ukrainian","nativeName":"українська"},
      ] ;
      
      //for each build list with flag
      $.each(isolang, function (index, language) {
      
        languagelist = "<option value='"+language.name+"'>"+ language.name + "</option>";
         $("#languagepicker").append(languagelist);
        });
        var elems = document.getElementById("languagepicker");
            var instances = M.FormSelect.init(elems, {});
});