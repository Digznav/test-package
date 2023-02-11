function trigger(elem, event) {
    const e = event || 'change';
    const htmlEvent = document.createEvent('HTMLEvents');
    htmlEvent.initEvent(e, true, false);
    elem.dispatchEvent(htmlEvent);
}
export default trigger;
