const validateUser = (req, res, next) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).send({ message: "Name or Email required!" });
    }

    next();
}

export default validateUser;