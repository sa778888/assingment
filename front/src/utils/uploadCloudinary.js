const upload_preset = import.meta.env.VITE_UPLOAD_PRESET;
const cloudName = import.meta.env.VITE_CLOUD_NAME;

const uploadImageToCloudinary = async file => {
    const uploadData = new FormData();
    uploadData.append('file', file);
    uploadData.append('uploadPreset', upload_preset);
    uploadData.append('cloudName', cloudName);

    const res = await fetch(`https://api.cloudinary.com/v1_1/mayank-23backend/image/upload`,{
        method: 'post',
        body: uploadData
    })

    const data = res.json();
    return data;

};
export default uploadImageToCloudinary;