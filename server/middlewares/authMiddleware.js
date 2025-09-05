const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decryptedToken = jwt.verify(token, process.env.jwt_secret);

        // Attach the userId to the request object safely
        req.userId = decryptedToken.userId;

        next();
    } catch (error) {
        res.status(401).send({
            success: false,
            message: "Unauthorized: " + error.message,
        });
    }
};
