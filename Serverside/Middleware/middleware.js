const checkRole = (role) => {
    return (req, res, next) => {
      if (!req.user) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
  
      if (!role.includes(req.user.role)) {
        return res.status(403).json({ message: 'Forbidden' });
      }
  
      next();
    };
  };
  function verifyToken(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1];
    try {
      if (!token) throw 'Unauthorized access';
      const payload = jwt.verify(token, '000');
      if (!payload) throw 'Unauthorized access';
      req.user = payload;
      next();
    } catch (error) {
      res.status(401).json({ message: error });
    }
  }
  
  module.exports = {checkRole,verifyToken};