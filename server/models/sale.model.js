"use strict";
const { Schema, model } = require("mongoose");

const SaleSchema = new Schema(
    {
        client: { type: Schema.Types.ObjectId, ref: "Client", required: false },
        nsale: { type: String, required: true },
        subtotal: { type: Number, required: false },
        total: { type: Number, required: true },
        igv: { type: Number, required: true },
        transaction: { type: String, default: "", required: false },
        state: { type: String, default: "Pendiente", required: true },
        phone: { type: String, required: false },
        report: { type: String, required: false },
        createdAt: { type: Date, default: Date.now, required: true },
        // esto es para el populate en algunos casos me es mas rapido pero luego lo borrare
        details: {
            type: Array,
            required: false,
        },
        payer: { type: Object, required: false },
    },
    { collection: "sales" }
);

SaleSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = model("Sale", SaleSchema);
