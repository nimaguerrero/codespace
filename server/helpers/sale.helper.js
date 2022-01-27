// logo, correlativo
const Setting = require("../models/setting.model");
const Tag = require("../models/tag.model");
const Song = require("../models/song.model");

// ventas
const Sale = require("../models/sale.model");
const SaleDetail = require("../models/sale-detail.model");

const { zfill } = require("../helpers/zFill.helper");

/**
 * Función save para guardar venta y su detalle
 * @param {String} uid El uid del cliente
 * @param {String} tagId El id del tag
 * @param {String} transaction La transacción del cliente
 * @param {String} payer La información del paypal del cliente
 * @returns {Promise<String>}
 */
const save = async ({ uid, tagId, transaction, payer }) => {
    const { id, price, song } = await Tag.findById(tagId);
    const { name, artists } = await Song.findById(song);
    const { serie, correlative, igv } = await Setting.findById(
        process.env.IDCONFIG
    );

    const sale = {
        client: uid,
        subtotal: price,
        total: price + igv,
        igv,
        transaction,
        payer,
    };

    const details = [
        {
            tag: id,
            subtotal: price,
            amount: 1,
            name_artist_song: `${artists.join(",")} - ${name}`,
            client: uid,
        },
    ];

    const newSale = new Sale(sale);

    const lastSale = await Sale.find().sort({ createdAt: -1 });

    if (lastSale.length > 0) {
        const sc = lastSale[0].nsale.split("-");
        if (sc[1] !== "999999") {
            const newCorrelative = zfill(Number(sc[1]) + 1, 6);
            newSale.nsale = `${serie}-${newCorrelative}`;
        } else {
            const newSerie = zfill(Number(sc[0]) + 1, 3);
            newSale.nsale = `${serie}-${newSerie}`;
        }
    } else {
        newSale.nsale = `${serie}-${correlative}`;
    }

    await newSale.save();

    details.forEach(async (detail) => {
        const newSaleDetail = new SaleDetail(detail);
        newSaleDetail.sale = newSale.id;
        await newSaleDetail.save();
    });

    return newSale.id;
};

module.exports = {
    save,
};
