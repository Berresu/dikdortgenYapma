let yukseklik=document.getElementById("numberYukseklik");
let genislik=document.getElementById("numberGenislik");
let button=document.getElementById("btnUygula");
let sonuc=document.getElementById("sonuc");

button.addEventListener("click", ()=>{
    for(let i=1; i<=yukseklik; i++){
        for(let j=1; j<=genislik; i++){
            if(i==1 || i==yukseklik){
                document.write("*");
            }
            else{
                if(j==1 || j==genislik){
                    document.write("*");
                }
                else{
                    document.write("&nbsp;");
		                document.write("&nbsp;");
                }
            }
        }
        document.write("<br>")
    }
});
