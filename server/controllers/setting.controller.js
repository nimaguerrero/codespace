/** Express router providing user related routes
 * @module routers/setting
 * @requires express
 * @requires ../models/setting.model
 * @requires ../helpers/handleError.helper
 */

/** Express */
const { response, request } = require("express");
/** Models */
const Config = require("../models/setting.model");
/** Error */
const { handleError } = require("../helpers/handleError.helper");

const getIGV = async (req = request, res = response) => {
    try {
        const { igv } = await Config.findById(process.env.IDCONFIG);
        res.json({
            ok: true,
            igv,
        });
    } catch (err) {
        handleError(res, err);
    }
};

const getCategories = async (req = request, res = response) => {
    try {
        const { categories } = await Config.findById(process.env.IDCONFIG);
        res.json({
            ok: true,
            categories,
        });
    } catch (err) {
        handleError(res, err);
    }
};

const getBlackLogo = async (req = request, res = response) => {
    try {
        const { logo } = await Config.findById(process.env.IDCONFIG);
        res.json({
            ok: true,
            logo,
        });
    } catch (err) {
        handleError(res, err);
    }
};
const getWhiteLogo = async (req = request, res = response) => {
    try {
        const { logo_white } = await Config.findById(process.env.IDCONFIG);
        res.json({
            ok: true,
            logo: logo_white,
        });
    } catch (err) {
        handleError(res, err);
    }
};

module.exports = {
    getIGV,
    getCategories,
    getWhiteLogo,
    getBlackLogo,
};
