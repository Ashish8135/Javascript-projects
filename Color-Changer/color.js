 

 var color=["red","green","#fad390","#f8c291","#6a89cc","#82ccdd","#b8e994","#f6b93b","#e55039",
"#4a69bd","#60a3bc","#78e08f","#fa983a","#eb2f06","#1e3799","#3c6382","#38ada9","#b71540","#0c2461","#0a3d62"]

var i=0;
$("#btn").click(function(){
		$("div").css("background-color",color[i]);
		i=(i==color.lenght-1) ? 0 :(i+1);	
});


