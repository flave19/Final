import React from "react";
import { Box, Form, Button, Table, TableBody, TableHeader, TableCell, TableRow, FormField } from "grommet";
import { Close, Save } from "grommet-icons";

export default function AddEmployee(props){
  return(
    <Box>
      <Button alignSelf="end" icon={<Close/>} onClick={props.onClose}/>
      <Form>
        <FormField name="name" Label="Name" placeholder="name" />
        <FormField name="email" Label="Email" placeholder="email"/>
      </Form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell scope="col" border="bottom">
              Monday
            </TableCell>
            <TableCell scope="col" border="bottom">
              Tuesday
            </TableCell>
            <TableCell scope="col" border="bottom">
              Wednesday
            </TableCell>
            <TableCell scope="col" border="bottom">
              Thursday
            </TableCell>
            <TableCell scope="col" border="bottom">
              Friday
            </TableCell>
            <TableCell scope="col" border="bottom">
              Saturday
            </TableCell>
            <TableCell scope="col" border="bottom">
              Sunday
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableCell scope="row" border="true"> 
            <Form>
              <FormField name="start" placeholder="start time"/>
              <FormField name="duration" placeholder="duration"/>
            </Form>
          </TableCell>
          <TableCell scope="row" border="true"> 
            <Form>
              <FormField name="start" placeholder="start time"/>
              <FormField name="duration" placeholder="duration"/>
            </Form>
          </TableCell>
          <TableCell scope="row" border="true"> 
            <Form>
              <FormField name="start" placeholder="start time"/>
              <FormField name="duration" placeholder="duration"/>
            </Form>
          </TableCell>
          <TableCell scope="row" border="true"> 
            <Form>
              <FormField name="start" placeholder="start time"/>
              <FormField name="duration" placeholder="duration"/>
            </Form>
          </TableCell>
          <TableCell scope="row" border="true"> 
            <Form>
              <FormField name="start" placeholder="start time"/>
              <FormField name="duration" placeholder="duration"/>
            </Form>
          </TableCell>
          <TableCell scope="row" border="true"> 
            <Form>
              <FormField name="start" placeholder="start time"/>
              <FormField name="duration" placeholder="duration"/>
            </Form>
          </TableCell>
          <TableCell scope="row" border="true"> 
            <Form>
              <FormField name="start" placeholder="start time"/>
              <FormField name="duration" placeholder="duration"/>
            </Form>
          </TableCell>
        </TableBody>
      </Table>
      <Button alignSelf="end" icon={<Save/>} onClick={props.onSave}/>
    </Box>
  );
}