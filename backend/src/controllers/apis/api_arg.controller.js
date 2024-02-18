import { ApiArgModel } from "../../models/api_arg.model.js";

export const getAll = async (req, res) => {
  res.json( await ApiArgModel.getAll() );
}

export const getOrder = async(req, res) => {
  const order =  + req.params.order + 2;
  const arrLength = await ApiArgModel.getLength();
  console.log( order );
  console.log(await ApiArgModel.getLength());
  
  if ( !isNaN(Number(order)) && order >= 2 && order < arrLength)
    return res.status(200).json( await ApiArgModel.getOrder( order ) ); 
  return res.status(400).json('Error: request malformed')
}

