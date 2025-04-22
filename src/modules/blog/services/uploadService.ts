export const uploadImage = async (file: File): Promise<string> => {
    // Giả lập API call để tải lên ảnh
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            resolve(reader.result as string);
        };
        reader.readAsDataURL(file);
    });
};