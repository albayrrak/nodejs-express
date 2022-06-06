const { Users } = require("../users");

const getUser = async (req, res) => {
    try {
        const { id } = await req.params;
        const math = id * 10 - 10;
        const filterUser = await Users.slice(math, math + 10);
        if (math > Users.length - 1) {
            return res.status(404).json({ msg: "error" });
        } else if (isNaN(math)) {
            return res.status(404).json({ msg: "error" });
        }

        res.status(200).json(filterUser);
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

module.exports = { getUser };
