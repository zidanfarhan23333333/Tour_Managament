import jwt from "jsonwebtoken";

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const token =
    req.cookies.accessToken || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "No token provided" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ success: false, message: "Invalid token" });
    }

    req.user = user;
    next();
  });
};

// Middleware to verify user role
export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    // User-specific logic, if any
    next();
  });
};

// Middleware to verify admin role
export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role === "admin") {
      next();
    } else {
      return res
        .status(403)
        .json({ success: false, message: "You are not authorized" });
    }
  });
};
