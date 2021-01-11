import React from 'react';
import { number } from 'yup/lib/locale';


const tabledata = ({info,type,num}) => {

let summary= <tr>
             <td>{num+1}</td>
              <td>{info.Product_title}</td>
               <td>{info.Quantity_total}</td>
              </tr>

let detailed=<tr>
    <td>{num+1}</td>
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