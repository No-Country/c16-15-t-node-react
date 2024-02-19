import { decrypt, encrypt } from "../../utils/bcrypt.js";
import { userModel } from "../../models/userModel.js";


export const signUp = async(req, res) => {
  try{
    console.log(req.body);
    const { email, password } = req.body;
    const emailExists = await userModel.find({ email }, 'email').exec();
    console.log({emailExists});
    if( emailExists.length > 0 ){
      return res.status(409).json({ ok: false, message: 'Email alredy exists' });
    };
    const encryptedPass = await encrypt( password );
    const user = new userModel({ email, password: encryptedPass });
    user.save();
    return res.status(201).json({ ok: true, message: 'User created successfully' });
  } catch( err ){
    console.log( err );
    if(!req.body.password){
      return res.status(401).json({ ok:false, message: 'Password is required'});
    };
    return res.status(404).json({ ok: false, message: 'There was an error with encryptation'});
  }
}


export const signIn = async(req, res) => {
  const { email: currentEmail, password: currentPassword } = req.body;
  try {
    const user = await userModel.find({ currentEmail }).exec();
    const isValidPassword = await decrypt(currentPassword, user[0].password);
    if (!isValidPassword)
      res.status(401).json({ ok:false, message: 'Invalid email or password' });
    const { email: userEmailDB } = user[0]; 
    return res.status(200).json({ ok: true, userEmailDB })
  } catch (error) {
    console.log(error);
    !currentPassword
    ?  res.status(403).json({ ok:false, message: 'Password is required'})
    : res.status(404).json({ ok: false, message: 'There was an error with encryptation'});
  }
}




