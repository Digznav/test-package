type ImageFormat = 'svg' | 'webp' | 'jpg' | 'jpeg' | 'png' | 'gif';

function fileTypeFromFile(file: string): string | null {
    const splitPathRe = /^(\/?)(?:[^/]*\/)*(\.{1,2}|[^/]+?|)\.([^./]*|)[/]*$/;

    const types: Record<ImageFormat, string> = {
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

        return types[ext as ImageFormat];
    }

    return null;
}

export default fileTypeFromFile;
