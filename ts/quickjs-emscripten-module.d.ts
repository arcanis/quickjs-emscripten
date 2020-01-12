/**
 * Typings for the featuers we use to interface with our Empscripten build of
 * QuickJS. */
export interface QuickJSEmscriptenModule extends EmscriptenModule {
  addFunction(fn: Function, type: string): number
  removeFunction(pointer: number): void
}

/**
 *  Emscripten module built from the unmodified [`quickjs/quickjs.h`](../quickjs/quickjs.h)
 *  and our FFI support functions [c/interface.c](../c/interface.c).
 *
 * Note that emscripten modules returned by a `MODULARIZE=1` emscripten build
 * (like this one). load asynchronously. You must wait until the module is
 * ready to use it.
 *
 * See
 */
declare function ModuleLoader(): QuickJSEmscriptenModule
export default ModuleLoader
