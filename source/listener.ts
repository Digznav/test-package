function listener(element: HTMLElement, selector: string, _type: string, callback: (event: Event) => void) {
    return function listen(event: Event): void {
        // @ts-expect-error Property 'delegateTarget' does not exist on type 'Event'.ts(2339)
        event.delegateTarget = (event.target as HTMLElement).closest(selector) as HTMLElement; // eslint-disable-line no-param-reassign

        // @ts-expect-error Property 'delegateTarget' does not exist on type 'Event'.ts(2339)
        if (event.delegateTarget) {
            callback.call(element, event);
        }
    };
}

export default listener;
