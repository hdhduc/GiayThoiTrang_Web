var menuitems = document.getElementById('menuitems');
menuitems.style.maxHeight = "0px";
function menutoggle(){
	if(menuitems.style.maxHeight=="0px"){
		menuitems.style.maxHeight= "220px";
	}else{
		menuitems.style.maxHeight = "0px";
	}
}