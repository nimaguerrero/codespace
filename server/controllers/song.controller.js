/** Express router providing user related routes
 * @module routers/song
 * @requires express
 * @requires ../models/song
 * @requires ../models/tag
 * @requires ../helpers/pages.helper
 * @requires ../helpers/handleError.helper
 */

/** Express */
const { response, request } = require("express");
/** Models */
const Song = require("../models/song.model");
const Tag = require("../models/tag.model");
/** Helpers */
const {
    conditionPrevious,
    conditionNext,
    fillPagesArr,
} = require("../helpers/pages.helper");
/** Error */
const { handleError } = require("../helpers/handleError.helper");

/**
 * Funcion que obtiene las canciones por pagina y por filtro de año de lanzamiento
 * @async
 * @function
 * @param req request The request.
 * @param res response The response.
 * @returns {Promise} Una promesa al momento de enviar el correo
 * @throws
 */
const getSongsByPage = async (req = request, res = response) => {
    const term = req.query.term;
    const regex = new RegExp(term, "i");

    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    // filtro
    const func = req.query.func;
    const param = req.query.param;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    let songs = {
        songs: [],
        next: null,
        previous: null,
        pages: [],
        longitud: 0,
    };

    try {
        const longitud = await Song.find({
            $or: [
                { name: regex },
                { tags_names: { $in: [regex] } },
                { artists: { $in: [regex] } },
            ],
        }).countDocuments();
        songs.longitud = longitud;

        let s;
        if (func === "orden" && param === "Año de lanzamiento") {
            s = await Song.find({
                $or: [
                    { name: regex },
                    { tags_names: { $in: [regex] } },
                    { artists: { $in: [regex] } },
                ],
            })
                .limit(limit)
                .skip(startIndex)
                .sort({ release_year: -1 });
        } else {
            s = await Song.find({
                $or: [
                    { name: regex },
                    { tags_names: { $in: [regex] } },
                    { artists: { $in: [regex] } },
                ],
            })
                .limit(limit)
                .skip(startIndex)
                .sort({ createdAt: -1 });
        }
        songs.songs = s;

        const lengthArr = Math.ceil(longitud / limit);
        songs.pages = fillPagesArr(lengthArr);

        songs.previous = conditionPrevious(startIndex, page, limit);
        songs.next = conditionNext(endIndex, longitud, page, limit);

        res.json({
            ok: true,
            songs,
        });
    } catch (err) {
        handleError(res, err);
    }
};

const getSong = async (req = request, res = response) => {
    const id = req.params.id;
    let songObj = {
        song: {},
        tags: [],
    };
    try {
        songObj.song = await Song.findById(id);
        const idSong = songObj.song._id;
        songObj.tags = await Tag.find({ song: idSong });
        res.json({
            ok: true,
            song: songObj,
        });
    } catch (err) {
        handleError(res, err);
    }
};

module.exports = {
    getSongsByPage,
    getSong,
};
