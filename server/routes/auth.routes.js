const {Router} = require('express')
const User = require('../models/User')
const router = Router()
const config = require('config')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')


// /api/auth/register
router.post(
    '/register',
    [
        check('email', 'Incorrect email').isEmail(),
        check('password', 'Minimal password length is 6 symbols')
            .isLength({min: 6})
    ],
    async (req, res) => {
        try {
            // console.log('Body:', req.body)

            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                // const errorMessage = errors.array().map((val) => {return val.msg})
                // console.log(errorMessage)
                return res.status(400).json({
                    errors: errors.array(),
                    message: errors.array().map((val) => {return val.msg})
                })
            }

            const {email, password} = req.body
            const candidate = await User.findOne({email: email})

            if (candidate) {
                return res.status(400).json({message: "This email is already used"})
            }

            const hashedPassword = await bcrypt.hash(password, 12)
            const user = new User({email: email, password: hashedPassword})

            await user.save()

            res.status(201).json({message: "User is successfully created"})
        } catch (e) {
            res.status(500).json({message: "Something went wrong, please try again"})
        }
    })


// /api/auth/login
router.post(
    '/login',
    [
        check('email', 'Enter correct email or password').normalizeEmail().isEmail(),
        check('password', 'Enter correct email or password').exists()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Incorrect data"
                })
            }

            const {email, password} = req.body

            const user = await User.findOne({email: email})

            if (!user){
                return res.status(400).json({message: "User not found"})
            }

            const isPassMatch = await bcrypt.compare(password, user.password) // этот метод позволяет сравнивать зашифрованные пароли

            if (!isPassMatch){
                return res.status(400).json({message: "Wrong password, try again"})
            }

            const token = jwt.sign(
                { userId: user.id },
                config.get('jwtSecret'),
                { expiresIn: '1h'}
            )

            res.json({ token, userId: user.id })

        } catch (e) {
            res.status(500).json({message: "Something went wrong, try again"})
        }
    })


module.exports = router
