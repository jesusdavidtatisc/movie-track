const User =
require("../models/User");

const bcrypt =
require("bcryptjs");

const jwt =
require("jsonwebtoken");

exports.register =
async (req, res) => {

    try {

        const {

            username,
            email,
            password

        } = req.body;

        const hashedPassword =

        await bcrypt.hash(
            password,
            10
        );

        const user =
        new User({

            username,
            email,

            password:
            hashedPassword

        });

        await user.save();

        res.json(user);

    } catch (error) {

        console.log(error);

        res.status(500).json(error);
    }
};

exports.login =
async (req, res) => {

    try {

        const {

            email,
            password

        } = req.body;

        const user =
        await User.findOne({
            email
        });

        if (!user) {

            return res.status(400)
            .json({

                message:
                "Usuario no encontrado"

            });
        }

        const validPassword =

        await bcrypt.compare(

            password,

            user.password

        );

        if (!validPassword) {

            return res.status(400)
            .json({

                message:
                "Contraseña incorrecta"

            });
        }

        const token =
            jwt.sign(

        {

        userId:user._id

        },

    process.env.JWT_SECRET,

    {

        expiresIn:"7d"

    }

);

res.json({

    token,

    user

});

    } catch (error) {

        console.log(error);

        res.status(500).json(error);
    }
};