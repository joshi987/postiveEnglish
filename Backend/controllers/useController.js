// const asyncHandler = require("express-async-handler");
// const Registration = require("../models/Data");



// const registerUser = asyncHandler(async (req, res) => {
//     const { parentName, childAge, email, yourAge,city, reference } = req.body;

//     // Validation
//     if (!parentName || !childAge || !email || !yourAge) {
//         res.status(400);
//         throw new Error("Please fill in all required fields");
//     }

//     // Check if user email already exists
//     const userExists = await Registration.findOne({ email });

//     if (userExists) {
//         res.status(400);
//         throw new Error("User with this email already exists");
//     }

//     // Create new user
//     const user = new Registration({
//         parentName,
//         childAge,
//         email,
//         yourAge,
//         city, 
//         reference
//     });

//     await user.save();

//     res.status(201).json({
//         message: "User registered successfully",
//         user: {
//             id: user._id,
//             parentName: user.parentName,
//             childAge: user.childAge,
//             email: user.email,
//             yourAge: user.yourAge,
//             city:user.city,
//             reference: user.reference
//         }
//     });
// });

// module.exports = { registerUser };


const asyncHandler = require("express-async-handler");
const Registration = require("../models/Data");

const registerUser = asyncHandler(async (req, res) => {
    const { parentName, childAge, email, phoneNumber, yourAge, city, reference } = req.body;

    // Validation
    if (!parentName || !childAge || !email || !yourAge) {
        res.status(400);
        throw new Error("Please fill in all required fields");
    }

    // Check if user email already exists
    const userExists = await Registration.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error("User with this email already exists");
    }

    // Create new user
    const user = new Registration({
        parentName,
        childAge,
        email,
        phoneNumber, // Added phone number
        yourAge,
        city, 
        reference
    });

    await user.save();

    res.status(201).json({
        message: "User registered successfully",
        user: {
            id: user._id,
            parentName: user.parentName,
            childAge: user.childAge,
            email: user.email,
            phoneNumber: user.phoneNumber, // Added phone number to response
            yourAge: user.yourAge,
            city: user.city,
            reference: user.reference
        }
    });
});

module.exports = { registerUser };
