const {Router} = require('express')
const User = require('../models/User')
const router = Router()
const bcrypt = require('bcryptjs')
const {check, validationResult} = require('express-validator')


// /api/auth/register
router.post(
    '/register',
    [
        check('email', 'Неккоректный email').isEmail(),
        check('password', 'Минимальная длина пароля 6 символов')
            .isLength({ min: 6 })
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()){
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Неккоректные данные при регистрации"
                })
            }

            const {email, password} = req.body
            const candidate = await User.findOne({email: email})

            if (candidate) {
                return res.status(400).json({message: "Такой email уже используется"})
            }

            const hashedPassword = await bcrypt.hash(password, 12)
            const user = new User({email: email, password: hashedPassword})

            await user.save()

            res.status(201).json({message: "Пользователь успешно создан"})
        } catch (e) {
            res.status(500).json({message: "Что-то пошло не так, попробуйте снова"})
        }
    })


// /api/auth/login
router.post('/login', async (req, res) => {

})


module.exports = router
