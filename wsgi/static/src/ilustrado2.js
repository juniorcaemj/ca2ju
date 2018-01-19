	var x = 0;
	var tempo = 1000;
	
	var timer = $.timer(
			function() {
				if (x == 0){
					document.getElementById(x).style.border = 'solid';
					x=x+1;
				}else if (x >= 1 && x <= 15){
					document.getElementById(x-1).style.border = 'none';
					document.getElementById(x).style.border = 'solid';
					x=x+1;
				}else{
					document.getElementById(15).style.border = 'none';
					x=0;
					document.getElementById(x).style.border = 'solid';
					x=x+1;
				}
				},
			tempo,
			true
		);
		
	//Definindo eventos
		var e1 = document.getElementById('simb_esc');
		e1.addEventListener("click", click, false);
		
		var e2 = document.getElementById('barra_prop');
		e2.addEventListener("click", click, false);
		
		var e3 = document.getElementById('simbolos_ou_previsao');
		e3.addEventListener("click", click, false);
		
		var e33 = document.getElementById('copyright');
		e33.addEventListener("click", click, false);
		
	///////////////////////////////////////////////////////////////////////
	
	function ajustarTempo(){
			var elem = document.getElementById("seletor");
			var index = document.getElementById("seletor").selectedIndex;
			var op = elem.options[index].value;
			switch(op){
				case '500': timer.set({time:500}); break;
				case '1000': timer.set({time:1000}); break; 
				case '1500': timer.set({time:1500}); break;
				case '2000': timer.set({time:2000}); break;
				case '2500': timer.set({time:2500}); break;
				case '3000': timer.set({time:3000}); break;
				case '3500': timer.set({time:3500}); break;
				case '4000': timer.set({time:4000}); break;
				case '4500': timer.set({time:4500}); break;
				case '5000': timer.set({time:5000}); break;	
		    }
	}
	
	 function reportErro(){
	 	var form = document.createElement("form");
		form.setAttribute("method", "post");
		form.setAttribute("action", "ilustradoPro");
		form.style.visibility = "hidden";
		
		var i = document.createElement("input"); //input element, text
		i.setAttribute('type',"text");
		i.setAttribute("id","caixa1");
		i.setAttribute("name","caixa1");
		i.setAttribute("value",document.getElementById("caixa1").value);
		
		var j = document.createElement("input"); //input element, text
		j.setAttribute('type',"text");
		j.setAttribute("id","erro");
		j.setAttribute("name","erro");
		j.setAttribute("value","Erro");
		
		var s = document.createElement("input"); //input element, Submit button
		s.setAttribute('type',"submit");
		s.setAttribute('value',"Submit");
		
		form.appendChild(i);
		form.appendChild(j);
		form.appendChild(s);
		document.body.appendChild(form);
		form.submit();
	 }
	 
	 function clicou(i){
		if (document.getElementById(0).style.border == 'solid'){
			if (document.getElementById(0).style.visibility != 'hidden'){
				var a = new String();
				document.getElementById(0).id = 'c0';
				document.getElementById('c0').style.border = 'none';
				a = document.getElementById('c0').outerHTML;
				document.getElementById('c0').id = 0;
				document.getElementById(0).style.visibility = 'hidden';
				document.getElementById('simb_esc').innerHTML = document.getElementById('simb_esc').innerHTML + a;
			}
			
		}else if (document.getElementById(1).style.border == 'solid'){
			if (document.getElementById(1).style.visibility != 'hidden'){
				var a = new String();
				document.getElementById(1).id = 'c1';
				document.getElementById('c1').style.border = 'none';
				a = document.getElementById('c1').outerHTML;
				document.getElementById('c1').id = 1;
				document.getElementById(1).style.visibility = 'hidden';
				document.getElementById('simb_esc').innerHTML = document.getElementById('simb_esc').innerHTML + a;
			}
			
		}else if (document.getElementById(2).style.border == 'solid'){
			if (document.getElementById(2).style.visibility != 'hidden'){
				var a = new String();
				document.getElementById(2).id = 'c2';
				document.getElementById('c2').style.border = 'none';
				a = document.getElementById('c2').outerHTML;
				document.getElementById('c2').id = 2;
				document.getElementById(2).style.visibility = 'hidden';
				document.getElementById('simb_esc').innerHTML = document.getElementById('simb_esc').innerHTML + a;
			}
			
		}else if (document.getElementById(3).style.border == 'solid'){
			if (document.getElementById(3).style.visibility != 'hidden'){
				var a = new String();
				document.getElementById(3).id = 'c3';
				document.getElementById('c3').style.border = 'none';
				a = document.getElementById('c3').outerHTML;
				document.getElementById('c3').id = 3;
				document.getElementById(3).style.visibility = 'hidden';
				document.getElementById('simb_esc').innerHTML = document.getElementById('simb_esc').innerHTML + a;
			}
			
		}else if (document.getElementById(4).style.border == 'solid'){
			if (document.getElementById(4).style.visibility != 'hidden'){
				var a = new String();
				document.getElementById(4).id = 'c4';
				document.getElementById('c4').style.border = 'none';
				a = document.getElementById('c4').outerHTML;
				document.getElementById('c4').id = 4;
				document.getElementById(4).style.visibility = 'hidden';
				document.getElementById('simb_esc').innerHTML = document.getElementById('simb_esc').innerHTML + a;
			}
			
		}else if (document.getElementById(5).style.border == 'solid'){
			if (document.getElementById(5).style.visibility != 'hidden'){
				var a = new String();
				document.getElementById(5).id = 'c5';
				document.getElementById('c5').style.border = 'none';
				a = document.getElementById('c5').outerHTML;
				document.getElementById('c5').id = 5;
				document.getElementById(5).style.visibility = 'hidden';
				document.getElementById('simb_esc').innerHTML = document.getElementById('simb_esc').innerHTML + a;
			}
			
		}else if (document.getElementById(6).style.border == 'solid'){
			if (document.getElementById(6).style.visibility != 'hidden'){
				var a = new String();
				document.getElementById(6).id = 'c6';
				document.getElementById('c6').style.border = 'none';
				a = document.getElementById('c6').outerHTML;
				document.getElementById('c6').id = 6;
				document.getElementById(6).style.visibility = 'hidden';
				document.getElementById('simb_esc').innerHTML = document.getElementById('simb_esc').innerHTML + a;
			}
			
		}else if (document.getElementById(7).style.border == 'solid'){
			if (document.getElementById(7).style.visibility != 'hidden'){
				var a = new String();
				document.getElementById(7).id = 'c7';
				document.getElementById('c7').style.border = 'none';
				a = document.getElementById('c7').outerHTML;
				document.getElementById('c7').id = 7;
				document.getElementById(7).style.visibility = 'hidden';
				document.getElementById('simb_esc').innerHTML = document.getElementById('simb_esc').innerHTML + a;
			}
			
		}else if (document.getElementById(8).style.border == 'solid'){
			if (document.getElementById(8).style.visibility != 'hidden'){
				var a = new String();
				document.getElementById(8).id = 'c8';
				document.getElementById('c8').style.border = 'none';
				a = document.getElementById('c8').outerHTML;
				document.getElementById('c8').id = 8;
				document.getElementById(8).style.visibility = 'hidden';
				document.getElementById('simb_esc').innerHTML = document.getElementById('simb_esc').innerHTML + a;
			}
			
		}else if (document.getElementById(9).style.border == 'solid'){
			if (document.getElementById(9).style.visibility != 'hidden'){
				var a = new String();
				document.getElementById(9).id = 'c9';
				document.getElementById('c9').style.border = 'none';
				a = document.getElementById('c9').outerHTML;
				document.getElementById('c9').id = 9;
				document.getElementById(9).style.visibility = 'hidden';
				document.getElementById('simb_esc').innerHTML = document.getElementById('simb_esc').innerHTML + a;
			}
			
		}else if (document.getElementById(10).style.border == 'solid'){
			if (document.getElementById(10).style.visibility != 'hidden'){
				var a = new String();
				document.getElementById(10).id = 'c10';
				document.getElementById('c10').style.border = 'none';
				a = document.getElementById('c10').outerHTML;
				document.getElementById('c10').id = 10;
				document.getElementById(10).style.visibility = 'hidden';
				document.getElementById('simb_esc').innerHTML = document.getElementById('simb_esc').innerHTML + a;
			}
			
		}else if (document.getElementById(11).style.border == 'solid'){
			if (document.getElementById(11).style.visibility != 'hidden'){
				var a = new String();
				document.getElementById(11).id = 'c11';
				document.getElementById('c11').style.border = 'none';
				a = document.getElementById('c11').outerHTML;
				document.getElementById('c11').id = 11;
				document.getElementById(11).style.visibility = 'hidden';
				document.getElementById('simb_esc').innerHTML = document.getElementById('simb_esc').innerHTML + a;
			}
			
		}else if (document.getElementById(12).style.border == 'solid'){
			if (document.getElementById(12).style.visibility != 'hidden'){
				var a = new String();
				document.getElementById(12).id = 'c12';
				document.getElementById('c12').style.border = 'none';
				a = document.getElementById('c12').outerHTML;
				document.getElementById('c12').id = 12;
				document.getElementById(12).style.visibility = 'hidden';
				document.getElementById('simb_esc').innerHTML = document.getElementById('simb_esc').innerHTML + a;
			}
			
		}else if (document.getElementById(13).style.border == 'solid'){
			if (document.getElementById(13).style.visibility != 'hidden'){
				var a = new String();
				document.getElementById(13).id = 'c13';
				document.getElementById('c13').style.border = 'none';
				a = document.getElementById('c13').outerHTML;
				document.getElementById('c13').id = 13;
				document.getElementById(13).style.visibility = 'hidden';
				document.getElementById('simb_esc').innerHTML = document.getElementById('simb_esc').innerHTML + a;
			}
			
		}else if (document.getElementById(14).style.border == 'solid'){
			if (document.getElementById(14).style.visibility != 'hidden'){
				var a = new String();
				document.getElementById(14).id = 'c14';
				document.getElementById('c14').style.border = 'none';
				a = document.getElementById('c14').outerHTML;
				document.getElementById('c14').id = 14;
				document.getElementById(14).style.visibility = 'hidden';
				document.getElementById('simb_esc').innerHTML = document.getElementById('simb_esc').innerHTML + a;
			}
			
		}else if (document.getElementById(15).style.border == 'solid'){
			if (document.getElementById(15).style.visibility != 'hidden'){
				var a = new String();
				document.getElementById(15).id = 'c15';
				document.getElementById('c15').style.border = 'none';
				a = document.getElementById('c15').outerHTML;
				document.getElementById('c15').id = 15;
				document.getElementById(15).style.visibility = 'hidden';
				document.getElementById('simb_esc').innerHTML = document.getElementById('simb_esc').innerHTML + a;
			}
		}
	 }
	 
	 /*function botao_alterar(){
	 	document.getElementById('tabela_prop').style.backgroundColor = '#f6f6f6';
		document.getElementById('botoes_prop_A').style.visibility = 'hidden';
		document.getElementById('botoes_prop_OC').style.visibility = 'visible';
	 }*/
	 
	 function botao_C(){
	 	var form = document.createElement("form");
		form.setAttribute("method", "post");
		form.setAttribute("action", "ilustradoPro");
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
	 
	 function botao_O(){
	 	var form = document.createElement("form");
		form.setAttribute("method", "post");
		form.setAttribute("action", "ilustradoPro");
		form.style.visibility = "hidden";
		
		// Frase
		var i = document.createElement("input"); //input element, text
		i.setAttribute('type',"text");
		i.setAttribute("id","caixa1");
		i.setAttribute("name","caixa1");
		i.setAttribute("value",document.getElementById("caixa1").value);
		
		// Palavra
		var palavra = document.getElementById("t_palavra").value;
		
		var j = document.createElement("input"); //input element, text
		j.setAttribute('type',"text");
		j.setAttribute("id","prop_palavras");
		j.setAttribute("name","prop_palavras");
		j.setAttribute("value",palavra);
		
		// Propriedades		
		tabela = document.getElementById('tabela_prop');
		c_linhas = tabela.getElementsByTagName('tr').length;
		var props = [document.getElementById("t_classe").value,document.getElementById("t_sinonimos").value,document.getElementById("t_entidade1").value];
		
					 
		var k = document.createElement("input"); //input element, text
		k.setAttribute('type',"text");
		k.setAttribute("id","lista_prop");
		k.setAttribute("name","lista_prop");
		k.setAttribute("value",props);
		
		// Estado
		var l = document.createElement("input"); //input element, text
		l.setAttribute('type',"text");
		l.setAttribute("id","estado");
		l.setAttribute("name","estado");
		l.setAttribute("value",1);
		
		var m = document.createElement("input"); //input element, Submit button
		m.setAttribute('type',"submit");
		m.setAttribute('value',"Submit");
		
		form.appendChild(i);
		form.appendChild(j);
		form.appendChild(k);
		form.appendChild(l);
		form.appendChild(m);
		
		document.body.appendChild(form);
		form.submit();
	 }
	 
	 function click_simb(elem,i,id){
			if (document.getElementById(elem.id).style.border != 'solid'){
				for (x=0; x < i; x++){
					document.getElementById(x).style.border = 'none';
				}
				document.getElementById(elem.id).style.border = 'solid';
				var t = parseInt(document.getElementById(elem.id));
			
				var h = 0;
				var pal = [];
				var props = [];
	
				while(document.getElementById('007p'+(h)) != null){
					var k = 0;
					var vetor = [];
					pal.push(document.getElementById('007p'+(h)).value);
					while(document.getElementById('007p'+(h)+'pr'+(k)) != null){
						vetor.push(document.getElementById('007p'+(h)+'pr'+(k)).value);
						k=k+1;
					}
					props.push(vetor);
					h=h+1;
				}
				
				var i = 0;
				props = props[id];
				for (var x=0; x< props.length; x++){
					if (props[x] == "['']"){
						props[x] = "";
					}
					if (props[x].substring(0,3) == "[u'"){
						props[x] = props[x].substring(3,props[x].length-2)
					}
				}
				document.getElementById('t_palavra').value = props[i++];
				document.getElementById('t_classe').value = props[i++];
				document.getElementById('t_sinonimos').value = props[i++];
				document.getElementById('t_entidade1').value = props[i++];
				if (props.length > 4){
					for (var x=4; x < props.length; x++){
						document.getElementById('t_entidade1').value = document.getElementById('t_entidade1').value+','+props[x];
					}
				}
				
			}else{
				document.getElementById('t_palavra').value = '';
				document.getElementById('t_classe').value = '';
				document.getElementById('t_sinonimos').value = '';
				document.getElementById('t_entidade1').value = '';
				document.getElementById(elem.id).style.border = 'none';
			}	
		}