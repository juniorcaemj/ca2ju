
				var letras = ["1","2","3","4","5","Q","W","E","R","T","A",
							"S","D","F","G","Z","X","C","V","B",
							  "(",")","?","!","@","6","7","8","9",
							  "0","Y","U","I","O","P","H","J","K","L","Ç",
							  "N","M","<",">",",","^","OK","BOR","ESP","ENT"
                              
                ];
                var auxiliar = [];
                var caixaAux = "";
				var esp = " ";
                var erroescrita = " escritaerrada";
                var count = 0;
                var comp = "";
                var a = 1;
                var b = 5;
                var c = 0;
                var d = 0;
                var e = 1;
                var f = 25;
                var g = 0;
                var h = 0;
				var espA = 1;
				var espB = 0;
                var aux2 = 0;
                var limite = 0;
                var aux = 1;
                var clist = 1;
                var estado = document.getElementById("estado007").value;
				var especiais = "especiais";
                var linha1 = "linha1";
                var linha2 = "linha2";
                var coluna = "coluna";
				var coluna2 = "coluna2";
                var lista = "lista";
                var inicial = "inicial";
                var intervalo = 0;
                var correcaoo = "correcao";
                var palavra ="";
                var vazio="";
                var lista2 = [];
                var todas = "";
				/*var mapVogais = new HashMap();
			
				mapVogais.put("A","A Á Â Ã À");
				mapVogais.put("E","E É Ê È Ë");
				mapVogais.put("I","I Í Î Ì Ï");
				mapVogais.put("O","O Ó Ô Õ Ò");
				mapVogais.put("U","U Ú Û Ù Ü");
				mapVogais.put("crc",". , = + - _ < > & * [ ] { } /");
				*/
				mapVogais = {"A":"A-Á-Â-Ã-À","E":"E-É-Ê-È-Ë","I":"I-Í-Î-Ì-Ï","O":"O-Ó-Ô-Õ-Ò","U":"U-Ú-Û-Ù-Ü"
				,"crc":". , = + - _ < > & * [ ] { } /"};
				
                var timer = $.timer(
			function() {
						
                           if (document.getElementById("estado007").value == "inicial") {
                                if ( g != 0){
                                    for(g;g<=h; g++){
                                        document.getElementById("b"+g).className = "botao";
                                    }
                                }
                                g = e;
                                h = f;
                                for (e; e<=f; e++){
                                   document.getElementById("b"+e).className = "botao_pintado";
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
                           if (document.getElementById("estado007").value == "linha1"){
                               
                               if (c != 0){
                                    for(c;c<=d; c++){
                                        document.getElementById("b"+c).className = "botao";
                                    }
                               }
                                c = a;
                                d = b;
								aux = a;
                                for (a; a<=b; a++){
                                   document.getElementById("b"+a).className = "botao_pintado";                 
                                }
                                if (b == 25){
                                    b = 5 ;
                                    a = 1;
                                } else{
                                    a = b + 1;
                                    b += 5;    
                                }
                                count++;
                                $('.count').html(count);
                            } 
                            if (document.getElementById("estado007").value == "linha2"){
                               if (c != 0){
                                    for(c;c<=d; c++){
                                        document.getElementById("b"+c).className = "botao";
                                    }
                               }
                                c = a;
                                d = b;
								aux = a;
                                for (a; a<=b; a++){
                                   document.getElementById("b"+a).className = "botao_pintado";                 
                                }
                                if (b == 50){
                                    b = 30 ;
                                    a = 26;
                                } else{
                                    a = b + 1;
                                    b += 5;    
                                }
                                
                                count++;
                                $('.count').html(count);
                            }
                            if (document.getElementById("estado007").value == "coluna") {
                                var aux2 = 1;
                                for(aux2;aux2<=50; aux2++){
                                    document.getElementById("b"+aux2).className = "botao";
                                }
                                if((b-5)!=0){   
                                    if(aux <= (b - 5)){
                                    document.getElementById("b"+aux).className = "botao_pintado";
                                    aux = aux + 1;
                                    } else {
                                        aux = c;
                                    }
                                }else{
                                    if(aux <= (50)){
                                    document.getElementById("b"+aux).className = "botao_pintado";
                                    aux = aux + 1;
                                    } else {
                                        aux = c;
                                    }
                                }
                            }
							if (document.getElementById("estado007").value == "coluna2") {
                                var aux2 = 1;
                                for(aux2;aux2<=50; aux2++){
                                    document.getElementById("b"+aux2).className = "botao";
                                }
                                if((b-5)!=25){   
                                    if(aux <= (b - 5)){
                                    document.getElementById("b"+aux).className = "botao_pintado";
                                    aux = aux + 1;
                                    } else {
                                        aux = c;
                                    }
                                }else{
                                    if(aux <= (50)){
                                    document.getElementById("b"+aux).className = "botao_pintado";
                                    aux = aux + 1;
                                    } else {
                                        aux = c;
                                    }
                                }
                            }
                            if (document.getElementById("estado007").value=="lista" || document.getElementById("estado007").value=="correcao"){
                                if (clist == 11){
                                    document.getElementById("p"+(clist -1) ).className = "palavras";
                                    clist = 1;
                                    document.getElementById("p"+clist).className = "palavras_pintadas";
                                }else{
                                    document.getElementById("p"+clist).className = "palavras_pintadas";
  
                                }
                                if (clist > 1){
                                    document.getElementById("p"+(clist -1) ).className = "palavras";
                                    
                                }
                                clist = clist + 1;
                            }
			},
			1000,
			true
		);
				
		var acenTos = $.timer(
			function eventAcentos(){
				if (espA > 5){
					espA = 1;
					document.getElementById("b5"+5).className = "botao";
					document.getElementById("b5"+espA).className = "botao_pintado";
				}else if( espA == 1){
					document.getElementById("b5"+espA).className = "botao_pintado";
				}else{
					document.getElementById("b5"+(espA - 1)).className = "botao";
					document.getElementById("b5"+espA).className = "botao_pintado";
				}
				espA++;
			},
			1000,
			true
		);
		acenTos.pause();
		
		function dir(){
			$(document).ready(function(){							 //  		para mostrar a caixa onde serão mostrados os acentos.
				$("#sombra").fadeTo(1,0);
				// b51 deve ser substituído pelo id objeto clicado que irá disparar o efeito
				document.getElementById("sombra").style.display="block"; // faz aparecer sombra negra
				$("#sombra").fadeTo("slow",0.8); // faz sompra ir aparecendo aos poucos
				document.getElementById("acentos").style.display="block";
			});
			var valores = mapVogais[letras[aux - 2]];
				var vetorValores = valores.split("-");
				if (valores != ""){
					document.getElementById("b51").value = vetorValores[0];
					document.getElementById("b51").textContent = vetorValores[0];
					document.getElementById("b52").value = vetorValores[1];
					document.getElementById("b52").textContent = vetorValores[1];					
					document.getElementById("b53").value = vetorValores[2];
					document.getElementById("b53").textContent = vetorValores[2];
					document.getElementById("b54").value = vetorValores[3];
					document.getElementById("b54").textContent = vetorValores[3];
					document.getElementById("b55").value = vetorValores[4];			
					document.getElementById("b55").textContent = vetorValores[4];
				}
			timer.pause();
			document.getElementById("estado007").value = especiais;
			acenTos.play();
		}
		
		function eventoCelula1 () {
							
							document.getElementById("e"+2 ).className = "teste";
							document.getElementById("e"+3 ).className = "teste";
							document.getElementById("e"+1 ).className = "teste3";	
														
				}
			
		function eventoCelula2 () {
							
							document.getElementById("e"+1 ).className = "teste";
							document.getElementById("e"+3 ).className = "teste";
							document.getElementById("e"+2 ).className = "teste3";
							window.location = "189.71.165.221:8080/texttopic";
																					
				}
			
		function eventoCelula3 () {
							document.getElementById("e"+1 ).className = "teste";
							document.getElementById("e"+2 ).className = "teste";
							document.getElementById("e"+3 ).className = "teste3";			
				}
       		
		function init() {
								var form = document.createElement("form");
								form.setAttribute("method", "post");
								form.style.visibility = "hidden";
								form.setAttribute("action", "acelerado");
								
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
		
        function init2(){
								var form = document.createElement("form");
								form.setAttribute("method", "post");
								form.style.visibility = "hidden";
								form.setAttribute("action", "acelerado2");
								
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
					
			   };
          
        function pause(){
            timer.pause();
            switch(document.getElementById("estado007").value){
            case (inicial):
                    var um = 1;
                    for(um;um<=50; um++){
                       document.getElementById("b"+um).className = "botao";
                                    }
                    if (intervalo == 50){
                        document.getElementById("estado007").value = linha2;
                        a = 26;
                        b = 30;
                        c = 0;
                        d = 0;
                    } else {
                        document.getElementById("estado007").value = linha1;
                        a = 1;
                        b = 5;
                        c = 0;
                        d = 0;
                    }
                    
                break;
            case (linha1):
                document.getElementById("estado007").value = "coluna";
                break;
            case (linha2):
                document.getElementById("estado007").value = "coluna2";
                break;
            case(coluna): 
                switch(letras[aux - 2]){
                    case "ESP":
                        document.getElementById("caixa1").value += " ";
                        break;
                    case "OK":
                        document.getElementById("caixa1").value = "OK";
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
						
				}
				palavra = document.getElementById("caixa1").value.toLowerCase();
				atual = palavra.split(" ");
				palavra = atual[atual.length - 1];  
				init();
				break;
			case (coluna2):
				switch(letras[aux - 2]){
                    case "ESP":
                        document.getElementById("caixa1").value += " ";
                        break;
                    case "OK":
                        document.getElementById("caixa1").value = "OK";
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
				
                }
                palavra = document.getElementById("caixa1").value.toLowerCase();
                atual = palavra.split(" ");
                palavra = atual[atual.length - 1];  
				init();
                break;
            case (lista):
                if (clist - 1 != -1){
                    var tokens = document.getElementById("p" +(clist - 1)).value.split(' ');
                    if (tokens[0]==vazio){
                        tokens[0] = tokens[1]
                    }
                    
                    comp += esp + tokens[0] + esp;
                    if (document.getElementById("p" +(clist - 1)).value == "INICIAL"){
						document.getElementById("estado007").value = inicial;
					 }else{		
							palavras = document.getElementById("caixa1").value.split(' ');
							palavras[palavras.length - 1] = comp;
							var i = 0;
							texto = "";
							for (i = 0; i < palavras.length; i++){
								texto += palavras[i] + " "; 
							}
							document.getElementById("caixa1").value = texto;
							init2();
					 }
                    } else {
                        document.getElementById("estado007").value = inicial;
                    }
                break;
            case (especiais):
				acenTos.pause();
                document.getElementById("caixa1").value += document.getElementById("b5"+(espA - 1)).value;
				palavra = document.getElementById("caixa1").value.toLowerCase();
                atual = palavra.split(" ");
                palavra = atual[atual.length - 1];
				document.getElementById("acentos").style.display="none";
				document.getElementById("sombra").style.display="none";
				init();
                break;
                
            }
            timer.play();
            
     }
