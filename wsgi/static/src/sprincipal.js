// JavaScript Document
			/*function eventoCelula1 () {
							
							document.getElementById("e"+2 ).className = "teste";
							document.getElementById("e"+3 ).className = "teste";
							document.getElementById("e"+1 ).className = "teste3";
							window.location = "previsao"							
				}
			
			function eventoCelula2 () {
							
							document.getElementById("e"+1 ).className = "teste";
							document.getElementById("e"+3 ).className = "teste";
							document.getElementById("e"+2 ).className = "teste3";
							window.location = "texttopic";
				}
			
			function eventoCelula3 () {
							document.getElementById("e"+1 ).className = "teste";
							document.getElementById("e"+2 ).className = "teste";
							document.getElementById("e"+3 ).className = "teste3";			
				}
				
			function post() {
								var form = document.createElement("form");
								form.setAttribute("method", "post");
								form.setAttribute("action", "texttopic");
								form.style.visibility = "hidden";
								
								var i = document.createElement("input"); //input element, text
								i.setAttribute('type',"text");
								i.setAttribute("id","caixa1");
								i.setAttribute("name","caixa1");
								i.setAttribute("value",document.getElementById("caixa1").value);
								
								var s = document.createElement("input"); //input element, Submit button
								s.setAttribute('type',"submit");
								s.setAttribute('value',"Submit");
								
								form.appendChild(i);
								form.appendChild(s);
								document.body.appendChild(form);
								form.submit();
				}
			var letras = ["1","2","3","4","5","Q","W","E","R","T","A",
							"S","D","F","G","Z","X","C","V","B",
							  "(",")","?","!","@","6","7","8","9",
							  "0","Y","U","I","O","P","H","J","K","L","Ç",
							  "N","M","<",">",",","^","OK","BOR","ESP","ENT"
                              
                ];
			var estado = "inicial";
            var linha1 = "linha1";
            var linha2 = "linha2";
            var coluna = "coluna";
			var coluna2 = "coluna2";
            var lista = "lista";
            var inicial = "inicial";
			var a = 1;
            var b = 5;
            var c = 0;
            var d = 0;
            var e = 1;
            var f = 25;
            var g = 0;
            var h = 0;
            var aux2 = 0;
            var limite = 0;
            var aux = 1;
			var count = 0;
			
		/*function pause(){
            timer.pause();
            switch(estado){
				case (inicial):
                    var um = 1;
                    for(um;um<=50; um++){
                       document.getElementById("b"+um).style.backgroundColor = "#C0C0C0";
                                    }
                    if (intervalo == 50){
                        estado = linha2;
                        a = 26;
                        b = 30;
                        c = 0;
                        d = 0;
                    } else {
                        estado = linha1;
                        a = 1;
                        b = 5;
                        c = 0;
                        d = 0;
                 }	
					break;
				case (linha1):
					estado = "coluna";   
					//document.getElementById("p1").textContent = "LINHAAA!!!";
					break;
				case (linha2):
					estado = "coluna2";
					break;
				case(coluna): 
					switch(letras[aux - 2]){
						case "ESP":
							document.getElementById("caixa1").value += " ";
							break;
						case "OK":
							post();
							break;
						case "BOR":
							var tam = document.getElementById("caixa1").value.toString();
							var tam2 = document.getElementById("caixa1").value.toString().length;
							document.getElementById("caixa1").value = document.getElementById("caixa1").value.toString().substring(0, tam2 - 1);
							break;
						case "CONTINUAR":
							init();
							break;
						case "CORRIGIR":
							var tam = document.getElementById("caixa1").value.toString();
							var tam2 = document.getElementById("caixa1").value.toString().length;
							document.getElementById("caixa1").value = document.getElementById("caixa1").value.toString().substring(0, tam2 - 1);
							break;
						default:
							document.getElementById("caixa1").value += letras[aux - 2];
							estado = inicial;
					}
				break;
				case (coluna2):
					switch(letras[aux - 2]){
						case "ESP":
							document.getElementById("caixa1").value += " ";
							break;
						case "OK":
							post();
							//document.getElementById("caixa1").value = "OK";
							break;
						case "BOR":
							var tam = document.getElementById("caixa1").value.toString();
							var tam2 = document.getElementById("caixa1").value.toString().length;
							document.getElementById("caixa1").value = document.getElementById("caixa1").value.toString().substring(0, tam2 - 1);
							break;
						case "CONTINUAR":
							init();
							init();
							break;
						case "CORRIGIR":
							var tam = document.getElementById("caixa1").value.toString();
							var tam2 = document.getElementById("caixa1").value.toString().length;
							document.getElementById("caixa1").value = document.getElementById("caixa1").value.toString().substring(0, tam2 - 1);
							break;
						default:
							document.getElementById("caixa1").value += letras[aux - 2];
							estado = inicial;
					}
					estado = inicial;
					break;
				}
				timer.play();
				
     		}
			var timer = $.timer(
			function() {
                           if (estado == "inicial") {
                                if ( g != 0){
                                    for(g;g<=h; g++){
                                        document.getElementById("b"+g).style.backgroundColor = "#C0C0C0";
                                    }
                                }
                                g = e;
                                h = f;
                                for (e; e<=f; e++){
                                   document.getElementById("b"+e).style.backgroundColor = "#FFFF00";
                                   intervalo = f;
                                }
                                if (f == 50){
                                    f = 25;
                                    e = 1;
                                } else{
                                    e = f + 1;
                                    f += 25;    
                                }
                                aux2 = f;
                            }
                           if (estado == "linha1"){
                               
                               if (c != 0){
                                    for(c;c<=d; c++){
                                        document.getElementById("b"+c).style.backgroundColor = "#C0C0C0";
                                    }
                               }
                                c = a;
                                d = b;
                                for (a; a<=b; a++){
                                   document.getElementById("b"+a).style.backgroundColor = "#FFFF00";                 
                                }
                                if (b == 25){
                                    b = 5 ;
                                    a = 1;
                                } else{
                                    a = b + 1;
                                    b += 5;    
                                }
                                aux = c;
                                
                                $('.count').html(count);
                            } 
                            if (estado == "linha2"){
                               
                               if (c != 0){
                                    for(c;c<=d; c++){
                                        document.getElementById("b"+c).style.backgroundColor = "#C0C0C0";
                                    }
                               }
                                c = a;
                                d = b;
                                for (a; a<=b; a++){
                                   document.getElementById("b"+a).style.backgroundColor = "#FFFF00";                 
                                }
                                if (b == 50){
                                    b = 30 ;
                                    a = 26;
                                } else{
                                    a = b + 1;
                                    b += 5;    
                                }
                                aux = c;
                                
                                $('.count').html(count);
                            }
                            if (estado == "coluna") {
                                var aux2 = 1;
                                for(aux2;aux2<=50; aux2++){
                                    document.getElementById("b"+aux2).style.backgroundColor = "#C0C0C0";
                                }
                                if((b-5)!=0){   
                                    if(aux <= (b - 5)){
                                    document.getElementById("b"+aux).style.backgroundColor = "#FFFF00";
                                    aux = aux + 1;
                                    } else {
                                        aux = c;
                                    }
                                }else{
                                    if(aux <= (50)){
                                    document.getElementById("b"+aux).style.backgroundColor = "#FFFF00";
                                    aux = aux + 1;
                                    } else {
                                        aux = c;
                                    }
                                }
                            }
							if (estado == "coluna2") {
                                var aux2 = 1;
                                for(aux2;aux2<=50; aux2++){
                                    document.getElementById("b"+aux2).style.backgroundColor = "#C0C0C0";
                                }
                                if((b-5)!=25){   
                                    if(aux <= (b - 5)){
                                    document.getElementById("b"+aux).style.backgroundColor = "#FFFF00";
                                    aux = aux + 1;
                                    } else {
                                        aux = c;
                                    }
                                }else{
                                    if(aux <= (50)){
                                    document.getElementById("b"+aux).style.backgroundColor = "#FFFF00";
                                    aux = aux + 1;
                                    } else {
                                        aux = c;
                                    }
                                }
                            }
                            if (estado=="lista" || estado=="correcao"){
                                if (clist == 11){
                                    document.getElementById("p"+(clist -1) ).style.backgroundColor = "#C0C0C0";
                                    clist = 1;
                                    document.getElementById("p"+clist).style.backgroundColor = "#FFFF00";
                                }else{
                                    document.getElementById("p"+clist).style.backgroundColor = "#FFFF00";
  
                                }
                                if (clist > 1){
                                    document.getElementById("p"+(clist -1) ).style.backgroundColor = "#C0C0C0";
                                    
                                }
                                clist = clist + 1;
                            }
			},
			1000,
			true
		);*/