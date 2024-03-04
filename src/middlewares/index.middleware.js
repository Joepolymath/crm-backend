const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
  const headers = req.headers;
  const authorization = headers['authorization'].split(' ');
  if (authorization[0] !== 'Bearer') {
    return res
      .status(403)
      .json({ message: "Authorization header must start with 'Bearer'" });
  }

  const token = authorization[1];
  const decoded = jwt.decode(token);

  req.user = decoded;
  next();
}

module.exports = authenticate;
