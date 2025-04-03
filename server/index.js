// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const session = require("express-session");
// const passport = require("passport");
// const bcrypt = require("bcrypt");
// const nodemailer = require("nodemailer");
// const jwt = require("jsonwebtoken");
// const UserModel = require("./models/User");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;

// require("dotenv").config();

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors({ origin: "http://localhost:5173", credentials: true }));
// app.use(
//     session({
//         secret: process.env.SESSION_SECRET || "your_secret_key",
//         resave: false,
//         saveUninitialized: true,
//     })
// );
// app.use(passport.initialize());
// app.use(passport.session());

// console.log("Attempting to connect to MongoDB...");
// mongoose.connect("mongodb://127.0.0.1:27017/User")
//     .then(() => console.log("Connected to MongoDB"))
//     .catch((error) => console.error("MongoDB connection error:", error));

// // Passport Google Strategy
// passport.use(new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://localhost:3001/auth/google/callback",
// },
// async (accessToken, refreshToken, profile, done) => {
//     try {
//         let user = await UserModel.findOne({ googleId: profile.id });

//         if (!user) {
//             user = await UserModel.create({
//                 googleId: profile.id,
//                 username: profile.displayName,
//                 email: profile.emails[0].value,
//             });
//         }
//         return done(null, user);
//     } catch (err) {
//         return done(err, null);
//     }
// }));

// passport.serializeUser((user, done) => {
//     done(null, user.id);
// });

// passport.deserializeUser(async (id, done) => {
//     const user = await UserModel.findById(id);
//     done(null, user);
// });

// // Google OAuth Routes
// app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// app.get(
//     "/auth/google/callback",
//     passport.authenticate("google", { failureRedirect: "http://localhost:5173/login" }),
//     (req, res) => {
//         const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
//         res.redirect(`http://localhost:5173/user-dashboard?token=${token}`);
//     }
// );

// // Email & Password Registration
// app.post('/register', async (req, res) => {
//     try {
//         const { username, email, password } = req.body;

//         const existingUser = await UserModel.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ success: false, message: "Email already exists!" });
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);

//         const newUser = await UserModel.create({ username, email, password: hashedPassword });

//         res.status(201).json({ success: true, message: "User registered successfully!", user: newUser });
//     } catch (err) {
//         console.error("Error in registration:", err);
//         res.status(500).json({ success: false, message: "Server error. Please try again." });
//     }
// });

// // Email & Password Login
// app.post('/login', async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         const user = await UserModel.findOne({ email });

//         if (!user) {
//             return res.json({ success: false, message: "User not found!" });
//         }

//         if (user.password) {
//             const isMatch = await bcrypt.compare(password, user.password);
//             if (!isMatch) {
//                 return res.json({ success: false, message: "Incorrect Password" });
//             }
//         }

//         res.json({ success: true, message: "Login successful!", user });
//     } catch (err) {
//         res.json({ success: false, message: "Something went wrong!" });
//     }
// });

// // Forgot Password (Send Reset Email)
// app.post("/forgot-password", async (req, res) => {
//     const { email } = req.body;

//     try {
//         const user = await UserModel.findOne({ email });
//         if (!user) {
//             return res.status(404).json({ success: false, message: "User not found!" });
//         }

//         // Generate reset token
//         const resetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "15m" });

//         // Email transport setup
//         const transporter = nodemailer.createTransport({
//             service: "gmail",
//             auth: {
//                 user: process.env.EMAIL_USER,
//                 pass: process.env.EMAIL_PASS,
//             },
//         });

//         const resetLink = `http://localhost:5173/reset-password/${resetToken}`;

//         await transporter.sendMail({
//             from: process.env.EMAIL_USER,
//             to: email,
//             subject: "Password Reset Request",
//             html: `<p>Click the link below to reset your password:</p>
//                    <a href="${resetLink}">${resetLink}</a>
//                    <p>This link is valid for 15 minutes.</p>`,
//         });

//         res.json({ success: true, message: "Reset password email sent!" });
//     } catch (error) {
//         console.error("Error sending reset email:", error);
//         res.status(500).json({ success: false, message: "Server error. Try again later." });
//     }
// });

// // Reset Password
// app.post("/reset-password", async (req, res) => {
//     const { token, newPassword } = req.body;

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         const user = await UserModel.findById(decoded.id);

//         if (!user) {
//             return res.status(404).json({ success: false, message: "User not found!" });
//         }

//         // Hash new password
//         const hashedPassword = await bcrypt.hash(newPassword, 10);
//         user.password = hashedPassword;
//         await user.save();

//         res.json({ success: true, message: "Password has been reset successfully!" });
//     } catch (error) {
//         console.error("Error resetting password:", error);
//         res.status(400).json({ success: false, message: "Invalid or expired token!" });
//     }
// });

// // Logout
// app.get('/logout', (req, res) => {
//     req.logout(() => {
//         res.redirect("http://localhost:5173/login");
//     });
// });

// app.listen(3001, () => {
//     console.log("Server is running on port 3001");
// });



// index.js (Updated)
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const session = require("express-session");
// const passport = require("passport");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const UserModel = require("./models/User");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// require("dotenv").config();

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors({ origin: "http://localhost:5173", credentials: true }));
// app.use(
//     session({
//         secret: process.env.SESSION_SECRET || "your_secret_key",
//         resave: false,
//         saveUninitialized: true,
//     })
// );
// app.use(passport.initialize());
// app.use(passport.session());

// mongoose.connect("mongodb://127.0.0.1:27017/User")
//     .then(() => console.log("Connected to MongoDB"))
//     .catch((error) => console.error("MongoDB connection error:", error));

// // Passport Google Strategy
// passport.use(new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://localhost:3001/auth/google/callback",
// },
// async (accessToken, refreshToken, profile, done) => {
//     try {
//         let user = await UserModel.findOne({ googleId: profile.id });

//         if (!user) {
//             user = await UserModel.create({
//                 googleId: profile.id,
//                 username: profile.displayName,
//                 email: profile.emails[0].value,
//                 profileImage: profile.photos[0].value, // Store Google profile picture
//             });
//         }
//         return done(null, user);
//     } catch (err) {
//         return done(err, null);
//     }
// }));

// passport.serializeUser((user, done) => {
//     done(null, user.id);
// });

// passport.deserializeUser(async (id, done) => {
//     const user = await UserModel.findById(id);
//     done(null, user);
// });

// // Google OAuth Routes
// app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// app.get(
//     "/auth/google/callback",
//     passport.authenticate("google", { failureRedirect: "http://localhost:5173/login" }),
//     (req, res) => {
//         const token = jwt.sign(
//             { id: req.user.id, username: req.user.username, profileImage: req.user.profileImage }, 
//             process.env.JWT_SECRET, 
//             { expiresIn: "1h" }
//         );
//         res.redirect(`http://localhost:5173/user-dashboard?token=${token}`);
//     }
// );

// // Email & Password Registration
// app.post('/register', async (req, res) => {
//     try {
//         const { username, email, password } = req.body;
//         const existingUser = await UserModel.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ success: false, message: "Email already exists!" });
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);
//         const newUser = await UserModel.create({ 
//             username, 
//             email, 
//             password: hashedPassword,
//             profileImage: "https://via.placeholder.com/150" // Default avatar for non-Google users
//         });

//         res.status(201).json({ success: true, message: "User registered successfully!", user: newUser });
//     } catch (err) {
//         console.error("Error in registration:", err);
//         res.status(500).json({ success: false, message: "Server error. Please try again." });
//     }
// });

// // Email & Password Login
// // app.post('/login', async (req, res) => {
// //     const { email, password } = req.body;
// //     try {
// //         const user = await UserModel.findOne({ email });
// //         if (!user) {
// //             return res.json({ success: false, message: "User not found!" });
// //         }

// //         if (user.password) {
// //             const isMatch = await bcrypt.compare(password, user.password);
// //             if (!isMatch) {
// //                 return res.json({ success: false, message: "Incorrect Password" });
// //             }
// //         }

// //         const token = jwt.sign(
// //             { id: user._id, username: user.username, profileImage: user.profileImage },
// //             process.env.JWT_SECRET, 
// //             { expiresIn: "1h" }
// //         );
// //         res.json({ success: true, message: "Login successful!", token });
// //     } catch (err) {
// //         res.json({ success: false, message: "Something went wrong!" });
// //     }
// // });

// app.post('/login', async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         const user = await UserModel.findOne({ email });

//         if (!user) {
//             return res.json({ success: false, message: "User not found!" });
//         }

//         if (user.password) {
//             const isMatch = await bcrypt.compare(password, user.password);
//             if (!isMatch) {
//                 return res.json({ success: false, message: "Incorrect Password" });
//             }
//         }

//         // Generate JWT
//         const token = jwt.sign(
//             { id: user._id, username: user.username, email: user.email, profileImage: user.profileImage },
//             process.env.JWT_SECRET, 
//             { expiresIn: "1h" }
//         );

//         res.json({ success: true, message: "Login successful!", token, user });
//     } catch (err) {
//         res.json({ success: false, message: "Something went wrong!" });
//     }
// });


// // Get User Profile
// app.get("/user/profile", async (req, res) => {
//     const token = req.headers.authorization?.split(" ")[1];
//     if (!token) {
//         return res.status(401).json({ success: false, message: "Unauthorized!" });
//     }
//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         const user = await UserModel.findById(decoded.id).select("-password");
//         if (!user) {
//             return res.status(404).json({ success: false, message: "User not found!" });
//         }
//         res.json({ success: true, user });
//     } catch (err) {
//         res.status(401).json({ success: false, message: "Invalid or expired token!" });
//     }
// });

// app.listen(3001, () => {
//     console.log("Server is running on port 3001");
// });



const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("./models/User");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(
    session({
        secret: process.env.SESSION_SECRET || "your_secret_key",
        resave: false,
        saveUninitialized: true,
    })
);
app.use(passport.initialize());
app.use(passport.session());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/User")
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("MongoDB connection error:", error));

// Passport Google Strategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/auth/google/callback",
},
async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await UserModel.findOne({ email: profile.emails[0].value });

        if (!user) {
            user = await UserModel.create({
                googleId: profile.id,
                username: profile.displayName,
                email: profile.emails[0].value,
                profileImage: profile.photos[0].value, // Save Profile Image
            });
        } else {
            user.googleId = profile.id;
            user.username = profile.displayName;
            user.profileImage = profile.photos[0].value; // Update Profile Image
            await user.save();
        }

        return done(null, user);
    } catch (err) {
        return done(err, null);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await UserModel.findById(id);
    done(null, user);
});

// ✅ Updated Google OAuth Routes
app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "http://localhost:5173/login" }),
    (req, res) => {
        // Generate JWT Token
        const token = jwt.sign(
            { 
                id: req.user.id, 
                username: req.user.username, 
                email: req.user.email, 
                profileImage: req.user.profileImage // ✅ Now profileImage is included
            }, 
            process.env.JWT_SECRET, 
            { expiresIn: "1h" }
        );

        // ✅ Redirect with Token as URL Param
        res.redirect(`http://localhost:5173/user-dashboard?token=${token}`);
    }
);

// ✅ Fetch User Profile
app.get("/user/profile", async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ success: false, message: "Unauthorized!" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await UserModel.findById(decoded.id).select("-password");
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found!" });
        }
        res.json({ success: true, user });
    } catch (err) {
        res.status(401).json({ success: false, message: "Invalid or expired token!" });
    }
});

app.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, message: "Email already exists!" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await UserModel.create({ 
            username, 
            email, 
            password: hashedPassword,
            profileImage: "https://via.placeholder.com" // Default avatar for non-Google users
        });

        res.status(201).json({ success: true, message: "User registered successfully!", user: newUser });
    } catch (err) {
        console.error("Error in registration:", err);
        res.status(500).json({ success: false, message: "Server error. Please try again." });
    }
});
mongodb://localhost:27017/
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "User not found!" });
        }

        if (user.password) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.json({ success: false, message: "Incorrect Password" });
            }
        }

        // Generate JWT
        const token = jwt.sign(
            { id: user._id, username: user.username, email: user.email, profileImage: user.profileImage },
            process.env.JWT_SECRET, 
            { expiresIn: "1h" }
        );

        res.json({ success: true, message: "Login successful!", token, user });
    } catch (err) {
        res.json({ success: false, message: "Something went wrong!" });
    }
});

// Start Server
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

