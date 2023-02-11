declare function listener(element: HTMLElement, selector: string, _type: string, callback: (event: Event) => void): (event: Event) => void;
export default listener;
