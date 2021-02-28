function SoundAudioContext (url){
    if (window.audioCtx){
        window.audioCtx.close();
        window.audioCtx = null;
    }
    function createAudioContext() {
        try {
            window.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.log("audioContext unavailable.");
        }
        return window.audioCtx;
    }
    function requestSound(url) {
        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            req.open("GET", url, true);
            req.responseType = "arraybuffer";
            req.onload = () => {
                resolve(req.response);
            };
            req.onerror = () => {
                reject("XHR:Faild to request" + url);
            };
            req.send();
        });
    }
    function decodeBuffer(ctx, arraybuffer) {
        return new Promise((resolve, reject) => {
            ctx.decodeAudioData(arraybuffer, decoded => {
                resolve(decoded);
            });
        });
    }
    function createSource(ctx, { decoded, loop }) {
            let source = ctx.createBufferSource();
            source.buffer = decoded;
            source.loop = loop;
            source.onended = () => {
                source = null;
            };
            return source;
    }
    (function () {
        let ctx = createAudioContext();
        requestSound(url)
            .then(buffer => decodeBuffer(ctx, buffer))
            .then(decoded => {
                let source = createSource(ctx, { decoded, loop: false });
                source.connect(ctx.destination);
                source.start();
            });
    }());
}
export default SoundAudioContext;