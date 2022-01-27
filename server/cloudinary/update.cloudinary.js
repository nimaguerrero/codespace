const fse = require("fs-extra"); //soporte a las promesas
const { v4: uuid_v4 } = require("uuid");
const cloudinary = require("cloudinary");

const updateCloudinary = async (req, modelObj, modelName) => {
    if (req.file) {
        await cloudinary.v2.uploader.destroy(modelObj.public_id);
        const result = await cloudinary.v2.uploader.upload(
            req.file.path,
            {
                resource_type: "image",
                public_id: `mrstems/${modelName}/${uuid_v4()}`,
                overwrite: true,
            },
            (error, result) => {
                if (error) {
                    console.log(error);
                    return {
                        url: "",
                        public_id: "",
                    };
                }
                return result;
            }
        );
        modelObj.profile = {
            url: result.url,
            public_id: result.public_id,
        };
        await fse.unlink(req.file.path);
    }
};

module.exports = {
    updateCloudinary,
};