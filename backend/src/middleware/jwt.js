import jwt from 'jsonwebtoken';



export const jwtAuth = async(req, res, next) => {
  const { data } = req.cookies.jwt;
  jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256' }, function(err, token) {
    console.log(token);
  });

}


