/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidad;
 	var marca;
 	var precioFinal;
 	var precioLamparita = 35;
 	var ingresosBrutos;
 	var descuento = 1;

 	cantidad = Cantidad.value;
 	marca = Marca.value;

 	cantidad = parseInt(cantidad);
 	precioFinal = cantidad*precioLamparita;
 	

 	if(cantidad >= 6)
 	{
 		descuento = 0.5;
 	}
 	else
 	{
 		if(cantidad == 5)
 		{
 			if(marca == "ArgentinaLuz")
 			{			
 				descuento = 0.6;

 			}else
 			{
 				descuento = 0.7;
 			}
 		}
 		
 		if(cantidad == 4)
 		{
 			if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
 			{
 			
 				descuento = 0.75;

 			}else
 			{
 				descuento = 0.8;
 			}
 		}
 		
 		if(cantidad == 3)
 		{



 			if(marca == "ArgentinaLuz")
 			{
 				descuento = 0.85;
 			}
 			else
 			{
 				if(marca == "FelipeLamparas")
 				{
 					descuento = 0.9;
 				}
 				else
 				{
 					descuento = 0.95;
 				}
 			}

 		}
 	}
	
	precioFinal = precioFinal*descuento;

 	if(precioFinal > 120)
 	{
 		ingresosBrutos = precioFinal/10;
 		precioFinal = precioFinal + ingresosBrutos;
 		
 		alert("Usted pago $"+ingresosBrutos+" de IIBB");
 	}
 	
 	precioDescuento.value = "$"+precioFinal;
 	
}
