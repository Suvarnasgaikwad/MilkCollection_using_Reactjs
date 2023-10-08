import React from "react";
import { Table } from "react-bootstrap";
import { IoMdCreate } from "react-icons/io";
import { IoIosTrash } from "react-icons/io";
import { IoMdRefreshCircle } from "react-icons/io";
export const FarmerList = () => {
return (
	<div className="home">
		
	<Table striped bordered hover variant="light">
    
  <thead >
	
    <tr>
      <th>Sr.No</th>
	    <th>Id</th>
		<th>Date</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Mobile No</th>
	  <th>Edit</th>
	  <th>Update</th>
	  <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
	<td>1</td>
      <td>1</td>
      <td>12-09-2023</td>
      <td>Suvarna</td>
      <td>Pawar</td>
	  <td>7219339950</td>
	  <td>< IoMdCreate/></td>
	  <td>< IoMdRefreshCircle/></td>
	  <td>< IoIosTrash/></td>
    </tr>
	
  </tbody>
</Table>
	</div>
);
};
