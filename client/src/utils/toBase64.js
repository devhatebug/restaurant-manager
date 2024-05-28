import { Buffer } from "buffer";

export const fileToBase64 = (file, callback) => {
    const reader = new FileReader();
    reader.onloadend = () => {
        callback(reader.result);
    };
    reader.readAsDataURL(file);
}

export const blobtoBase64 = blob => new Buffer(blob, 'base64').toString('binary')