import { ApiArgModel } from "../models/api_arg.model.js";

export const getAll = async (req, res) => {
  res.json( await ApiArgModel.getAll() );
}

export const getOrder = async(req, res) => {
  const { order } = req.params;
  res.json( await ApiArgModel.getOrder( order ) ); 
}

