"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Case Problem 1

   Author: Cynthia Brown
   Date:   3/16/25
   
   Filename: tc_cart.js
	
*/


var orderTotal = 0;


var cartHTML = "<table>\n" +
               "<tr>\n" +
               "<th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th>\n" +
               "</tr>\n";


for (var i = 0; i < item.length; i++) {
   
   cartHTML += "<tr>\n<td><img src='tc_" + item[i] + ".png' alt='Item " + item[i] + "' /></td>\n";
   
   
   cartHTML += "<td>" + itemDescription[i] + "</td>\n";
   cartHTML += "<td>$" + itemPrice[i].toFixed(2) + "</td>\n";
   cartHTML += "<td>" + itemQty[i] + "</td>\n";
   
   
   var itemCost = itemPrice[i] * itemQty[i];

   
   cartHTML += "<td>$" + itemCost.toFixed(2) + "</td>\n</tr>\n";

   
   orderTotal += itemCost;
}


cartHTML += "<tr>\n<td colspan='4'>Subtotal</td>\n<td>$" + orderTotal.toFixed(2) + "</td>\n</tr>\n</table>";


document.getElementById("cart").innerHTML = cartHTML;