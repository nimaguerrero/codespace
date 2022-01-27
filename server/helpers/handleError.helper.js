const httpError = (res, err) => {
    console.log(err);
    res.status(500).json({
        ok: false,
        msg: "Error inesperado... revisar logs",
    });
};

module.exports = {
    httpError,
};
