var users=Array();function mdm_disable(){document.getElementById("entry").value="disabled";document.getElementById("entry").disabled="disabled";document.getElementById("ok_button").disabled="disabled"}function mdm_enable(){document.getElementById("entry").value="";document.getElementById("entry").disabled=false;document.getElementById("ok_button").disabled=false}function set_welcome_message(message){document.getElementById("welcome_message").innerHTML=message}function set_clock(message){document.getElementById("clock").innerHTML=message}function mdm_prompt(message){mdm_enable();document.getElementById("label").innerHTML=message;document.getElementById("entry").value="";document.getElementById("entry").type="text";document.getElementById("entry").focus()}function mdm_noecho(message){mdm_enable();document.getElementById("label").innerHTML=message;document.getElementById("entry").value="";document.getElementById("entry").type="password";document.getElementById("entry").focus()}function mdm_msg(message){document.getElementById("message").innerHTML=message}function mdm_timed(message){if(message!=""){document.getElementById("timed").style.display="block";document.getElementById("notify_area_timed").style.display="block"}else{document.getElementById("timed").style.display="none";document.getElementById("notify_area_timed").style.display="none"}document.getElementById("timed").innerHTML=message}function mdm_error(message){if(message!=""){document.getElementById("error").style.display="block";document.getElementById("notify_area_error").style.display="block"}else{document.getElementById("error").style.display="none";document.getElementById("notify_area_error").style.display="none"}document.getElementById("error").innerHTML=message}function send_login(){var value=document.getElementById("entry").value;mdm_disable();alert("LOGIN###"+value);return false}function init(){document.getElementById("error").style.display="none"}function mdm_add_user(username,gecos,status){var box=document.createElement("div");box.setAttribute("class","user-info");var link=document.createElement("a");link.setAttribute("href","javascript:alert('USER###"+username+"')");var picture=document.createElement("img");picture.setAttribute("class","img-circle user-img");picture.setAttribute("src","file:///home/"+username+"/.face");picture.setAttribute("onerror","this.src='file:///usr/share/pixmaps/nobody.png';");var realname_div=document.createElement("div");realname_div.setAttribute("class","user-gecos");realname_div.innerHTML=gecos;var username_div=document.createElement("div");username_div.setAttribute("class","username");username_div.innerHTML=username;if(status!=""){var userstatus_div=document.createElement("div");userstatus_div.setAttribute("class","user-status");userstatus_div.innerHTML=status}box.appendChild(link);link.appendChild(picture);link.appendChild(realname_div);link.appendChild(username_div);if(status!=""){link.appendChild(userstatus_div)}var src=document.getElementById("users");src.appendChild(box)}function mdm_add_session(session_name,session_file){session_name=session_name.replace("Ubuntu","Unity");var filename=session_name.toLowerCase();filename=filename.replace(/ /g,"-");filename=filename.replace(/\(/g,"");filename=filename.replace(/\)/g,"");var li=document.createElement("li");var link=document.createElement("a");link.setAttribute("href","javascript:alert('SESSION###"+session_name+"###"+session_file+"');select_session('"+session_name+"','"+session_file+"');");var picture=document.createElement("img");picture.setAttribute("class","session-picture");picture.setAttribute("src","img/sessions/"+filename+".svg");picture.setAttribute("onerror","this.src='img/sessions/default.svg';");var name_div=document.createTextNode(session_name);li.appendChild(link);link.appendChild(picture);link.appendChild(name_div);var src=document.getElementById("sessions");src.appendChild(li)}function select_session(session_name,session_file){var filename=session_name.toLowerCase();filename=filename.replace(/ /g,"-");filename=filename.replace(/\(/g,"");filename=filename.replace(/\)/g,"");document.getElementById("current_session_picture").src="img/sessions/"+filename+".svg";document.getElementById("current_session_picture").title=session_name}function mdm_add_language(language_name,language_code){var filename=language_code.toLowerCase();filename=filename.replace(".utf-8","");bits=filename.split("_");if(bits.length==2){filename=bits[1]}var li=document.createElement("li");var link=document.createElement("a");link.setAttribute("href","javascript:alert('LANGUAGE###"+language_code+"')");var picture=document.createElement("img");picture.setAttribute("class","language-picture");picture.setAttribute("src","img/languages/"+filename+".png");picture.setAttribute("onerror","this.src='img/languages/generic.png';");var name_div=document.createTextNode(language_name);li.appendChild(link);link.appendChild(picture);link.appendChild(name_div);var src=document.getElementById("languages");src.appendChild(li)}function mdm_set_current_language(language_name,language_code){var filename=language_code.toLowerCase();filename=filename.replace(".utf-8","");bits=filename.split("_");if(bits.length==2){filename=bits[1]}document.getElementById("current_language_flag").src="img/languages/"+filename+".png";document.getElementById("current_language_flag").title=language_name}function mdm_hide_shutdown(){document.getElementById("shutdown").style.display="none"}function mdm_hide_suspend(){document.getElementById("suspend").style.display="none"}function mdm_hide_restart(){document.getElementById("restart").style.display="none"}function mdm_hide_quit(){document.getElementById("quit").style.display="none"}function mdm_hide_xdmcp(){document.getElementById("xdmcp").style.display="none"}

var blinking=false;var next_sec=(1000-(new Date().getMilliseconds()));ul=(navigator.language)?navigator.language:navigator.userLanguage;langs=["en","es","fr","it","pt","zh","ru"];lang=0;days=[["sunday","domingo","dimanche","domenica","domingo","星期日","воскресенье"],["monday","lunes","lundi","lunedì","segunda-feira","星期一","понедельник"],["tuesday","martes","mardi","martedì","terça-feira","星期二","вторник"],["wednesday","miercoles","mercredi","mercoledì","quarta-feira","星期三,","среда"],["thursday","jueves","jeudi","giovedì","quinta-feira","星期四","четверг"],["friday","viernes","vendredi","venerdì","sexta-feira","星期五","пятница"],["saturday","sábado","dimanche","sabato","sábado","星期六","суббота"]];months=[["january","enero","janvier","gennaio","janeiro","芍月","Январь"],["february","febrero","février","febbraio","fevereiro","杏月","Февраль"],["march","marzo","mars","marzo","março","桃月","Март"],["april","abril","avril","aprile","abril","梅月","Апрель"],["may","mayo","mai","maggio","maio","榴月","Май"],["june","junio","juin","guigno","junho","荷月","Июнь"],["july","julio","juillet","luglio","julho","蘭月","Июль"],["august","agosto","août","agosto","agosto","桂月","Август"],["september","septiembre","septembre","settembre","setembro","菊月","Сентябрь"],["october","octubre","octobre","ottobre","outumbro","良月","Октябрь"],["november","noviembre","novembre","novembre","novembro","冬月","Ноябрь"],["december","deciembre","dêcembre","dicembre","dezembro","臘月","Декабрь"]];function run_clock(){for(i=0;i<=langs.length;i++){if(ul.indexOf(langs[i])>-1){lang=i}}d=new Date();today=d.getDay();month=d.getMonth();year=d.getFullYear();hour=d.getHours();minutes=d.getMinutes();seconds=d.getSeconds();if(clockType!=24){switch(true){case hour>12:hour-=12;break;case hour==0:hour=12;break}}if(minutes<10){minutes="0"+minutes}document.getElementById("hours").innerHTML=hour;document.getElementById("mins").innerHTML=minutes;document.getElementById("date").innerHTML=days[today][lang].toProperCase()+", "+months[month][lang].toProperCase()+" "+d.getDate();next_minute=(60-seconds);setTimeout("run_clock()",next_minute)}function blink(){if(shouldBlink==false){return}if(blinking){document.getElementById("dots").innerHTML=" "}else{document.getElementById("dots").innerHTML=":"}blinking=!blinking;setTimeout("blink()",1000)}String.prototype.toProperCase=function(){return this.replace(/\w\S*/g,function(txt){return txt.charAt(0).toUpperCase()+txt.substr(1).toLowerCase()})};window.onload=run_clock(),setTimeout("blink()",next_sec);