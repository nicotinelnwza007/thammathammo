

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.BoF2xA9x.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.CX87mN_u.js"];
export const stylesheets = ["_app/immutable/assets/4.BHAMZ9Ug.css"];
export const fonts = [];
