const Song = require("../models/song.model");

const filtersHelper = async (songs, limit, func, param) => {
    let s = await Song.find({}).limit(limit);
    let resp;
    switch (func) {
        case "tipo":
            resp =
                param === "video"
                    ? s.filter((a) => a.link_youtube)
                    : s.filter((a) => a.cover);
            break;
        case "contenido":
            resp = s.filter((a) => a.state === param);
            break;
        case "lanzamiento":
            if (param === "actual")
                resp = s.filter((a) => a.release_year >= 2000);
            if (param === "90´s")
                resp = s.filter(
                    (a) => a.release_year >= 1990 && a.release_year < 2000
                );
            if (param === "80´s")
                resp = s.filter(
                    (a) => a.release_year >= 1980 && a.release_year < 1990
                );
            break;
        case "orden":
            if (param === "hoy") {
                resp = s.filter(
                    (a) =>
                        new Date(a.createdAt).getDate() === new Date().getDate()
                );
            }
            if (param === "este mes") {
                resp = s.filter(
                    (a) =>
                        new Date(a.createdAt).getMonth() ===
                        new Date().getMonth()
                );
            }
            break;
        default:
            resp = songs;
            break;
    }
    return resp;
};
// NO FUNCIONA Y NO SE PORQUE
// return functions[func]() || songs;

module.exports = { filtersHelper };
