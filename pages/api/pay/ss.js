`<h1 style="text-transform:capitalize;">Dear ${
    customerDetails.metadata.name
  }</h1> 
  </br></hr> 
  <p style="margin-bottom:20px;">Your ticket purchase hase been successfully confirmed✅. Kindly provide the QRcode below at the entrance gate. </br></hr> Love from Shodex Garden❤. </p>
<h3 style="margin-bottom:20px;>Order Summary</h3>    
<table style="font-size:12px;margin:10px auto;font-family: arial, sans-serif;border: 1px solid #dddddd;">
<thead >
<tr>
<th style='border-bottom: 1px solid #dddddd;padding: 15px;'>Item</th>
<th style='border-bottom: 1px solid #dddddd;padding: 15px;'>Price</th>
<th style='border-bottom: 1px solid #dddddd;padding: 15px;'>Quantity</th>
</tr>
</thead>

<tbody>
${cleanCart.map(
(row) =>
`<tr>
<td style='border-bottom: 1px solid #dddddd;padding: 15px;'>
${row.title}
</td>
<td style='border-bottom: 1px solid #dddddd;padding: 15px;'>
#${Intl.NumberFormat("en-US").format(row.price)}
</td> 
<td style='border-bottom: 1px solid #dddddd;padding: 15px;'>
X 
${row.quantity} 
</td> 
</tr>`
)}
</tbody>
</table>   

<h3 style="text-transform:capitalize;border: 1px solid #dddddd;padding: 15px;text-align-center;">TOTAL - &#8358;${Intl.NumberFormat(
    "en-US"
  ).format(total)}</h3> <img style="width:300px;height:300px;" src="` +
  img +
  '">  </br></hr> '
// //////////////////////////
// //////////////////////////
// //////////////////////////
// //////////////////////////
  `
  <h1 style="text-transform:capitalize;">Dear ${
    customerDetails.metadata.name
  }</h1> 
  </br></hr> 
  <p style="margin-bottom:20px;">Your ticket purchase hase been successfully confirmed✅. Kindly provide the QRcode below at the entrance gate. </br></hr> Love from Shodex Garden❤. </p>
<h3 style="margin-bottom:20px;>Order Summary</h3>    
<table style="font-size:12px;margin:10px auto;font-family: arial, sans-serif;border: 1px solid #dddddd;">
<thead >
<tr>
<th style='border-bottom: 1px solid #dddddd;padding: 15px;'>Item</th>
<th style='border-bottom: 1px solid #dddddd;padding: 15px;'>Price</th>
<th style='border-bottom: 1px solid #dddddd;padding: 15px;'>Quantity</th>
</tr>
</thead>

<tbody>
${cleanCart.map(
    (row) =>
    "<tr> <td style='border-bottom: 1px solid #dddddd;padding: 15px;'>" +  ${row.title}
   + "</td>" + "</tr> "
    )}
</tbody>


  `