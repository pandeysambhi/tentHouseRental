import React from 'react';

let key=0;
const tabledata = ({info,type}) => {

let summary= <tr>
             <td>{key+1}</td>
              <td>{info.Product_title}</td>
               <td>{info.Quantity_total}</td>
              </tr>

let detailed=<tr>
    <td>{key+1}</td>
    <td>{info.Product_id}</td>
    <td>{info.type}</td>
    <td>{info.date}</td>
</tr>

let reportdata=type=="summary"?summary:detailed
    return (
        <>
       {reportdata}
       </>
    );
};

export default tabledata;