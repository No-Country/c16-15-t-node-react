import bcrypt from 'bcrypt';

export const encrypt = async( password ) => {
  try{
    const saltRounds = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, saltRounds);
  } catch( error ){
    console.log( error );
    return new Error('There was an error with encryptation');
  }
};

export const decrypt = async( currentPassword, dbPassword ) => {
  try {
    return await bcrypt.compare( currentPassword, dbPassword );
    
  } catch (error) {
    console.log(error);
    return new Error('There was an error with encryptation');
  }
}







