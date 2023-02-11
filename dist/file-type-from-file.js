function fileTypeFromFile(file) {
    const splitPathRe = /^(\/?)(?:[^/]*\/)*(\.{1,2}|[^/]+?|)\.([^./]*|)[/]*$/;
    const types = {
        svg: 'image/svg+xml',
        jpg: 'image/jpeg',
        jpeg: 'image/jpeg',
        png: 'image/png',
        gif: 'image/gif',
        webp: 'image/webp'
    };
    const res = splitPathRe.exec(file);
    if (res) {
        const [ext] = res.slice(-1);
        return types[ext];
    }
    return null;
}
export default fileTypeFromFile;
