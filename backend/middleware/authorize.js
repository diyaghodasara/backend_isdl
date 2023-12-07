// In your middleware folder (middleware/authorize.js)
const authorize = (role) => (req, res, next) => {
    if (req.user && req.user.role === role) {
        next();
    } else {
        res.status(403).json({ error: 'Forbidden - Insufficient permissions' });
    }
};

module.exports = authorize;
