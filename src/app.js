import './css/common.css'
import Layer from "./components/layer/layer.js"
const app=(()=>{
	var dom=document.getElementById('app');
	var layer=new Layer();
	dom.innerHTML=layer.tpl;

})
new app();