let img;
let screenWidth = window.screen.width;
let screenHeight = window.screen.height;
let screenRate = screenWidth/screenHeight;

 function imgAdepptScreen(img){
	 
	 let imgRate = 0;
	 img.src='/myresource/images/background3.jpg';
	 
	 img.onload = function(){
	 	imgRate = img.width/img.height;
	 	if(imgRate>screenRate){
	 		img.style.height = '100%';
	 		img.style.maxWidth = imgRate*screenHeight+'px';
	 	}else{
	 		img.style.width = '100%';
	 	}
	 	img.style.opacity = 1;
	 }
 }
function onReady(fn){
  console.log(1332)
  let readyState = document.readyState;
  img = document.createElement("img");
  img.style.backgroundSize = 'cover';
  img.style.top = 0;
  img.style.left = 0;
  img.style.opacity= 0;
  img.style.zIndex = -100;
  img.style.transition = 'opacity 0.5s';
  img.style.position = 'fixed';
  img.style.backgroundAttachment = 'fixed';
  img.setAttribute('id','backgroundImg');
  document.body.appendChild(img);
  if(readyState === 'interactive' || readyState === 'complete') {
  fn()
 }else{
   window.addEventListener("DOMContentLoaded",fn);
  }
 
}
 

 
onReady((img) => imgAdepptScreen(img) )
 
 window.onresize = imgAdepptScreen(img);
