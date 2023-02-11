function listener(element, selector, _type, callback) {
    return function listen(event) {
        event.delegateTarget = event.target.closest(selector);
        if (event.delegateTarget) {
            callback.call(element, event);
        }
    };
}
export default listener;
