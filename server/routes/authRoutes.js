const express = require("express");
const passport = require("passport");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.json({ success: false, message: "User not found!" });

        if (user.password) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.json({ success: false, message: "Incorrect Password" });
        }

        const token = jwt.sign(
            { id: user._id, username: user.username, profileImage: user.profileImage, email: user.email }, 
            process.env.JWT_SECRET, 
            { expiresIn: "1h" }
        );
        res.json({ success: true, token, user });
    } catch (err) {
        res.json({ success: false, message: "Error logging in!" });
    }
});