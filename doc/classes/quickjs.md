[quickjs-emscripten](../README.md) › [Globals](../globals.md) › [QuickJS](quickjs.md)

# Class: QuickJS

QuickJS presents a Javascript interface to QuickJS, a Javascript interpreter that
supports ES2019.

QuickJS is a singleton. Use the [getQuickJS](../globals.md#getquickjs) function to instantiate
or retrieve an instance.

Use the [QuickJS.createVm](quickjs.md#createvm) method to create a [QuickJSVm](quickjsvm.md).

Use the [QuickJS.evalCode](quickjs.md#evalcode) method as a shortcut evaluate Javascript safely
and return the result as a native Javascript value.

## Hierarchy

* **QuickJS**

## Index

### Constructors

* [constructor](quickjs.md#constructor)

### Methods

* [createVm](quickjs.md#createvm)
* [evalCode](quickjs.md#evalcode)

## Constructors

###  constructor

\+ **new QuickJS**(): *[QuickJS](quickjs.md)*

*Defined in [quickjs.ts:781](https://github.com/justjake/quickjs-emscripten/blob/master/ts/quickjs.ts#L781)*

**Returns:** *[QuickJS](quickjs.md)*

## Methods

###  createVm

▸ **createVm**(): *[QuickJSVm](quickjsvm.md)*

*Defined in [quickjs.ts:832](https://github.com/justjake/quickjs-emscripten/blob/master/ts/quickjs.ts#L832)*

Create a QuickJS VM.

Each VM is completely independent - you cannot share handles between
VMs.

**Returns:** *[QuickJSVm](quickjsvm.md)*

___

###  evalCode

▸ **evalCode**(`code`: string, `options`: [QuickJSEvalOptions](../interfaces/quickjsevaloptions.md)): *unknown*

*Defined in [quickjs.ts:870](https://github.com/justjake/quickjs-emscripten/blob/master/ts/quickjs.ts#L870)*

One-off evaluate code without needing to create a VM.

To protect against infinite loops, use the `shouldInterrupt` option. The
[shouldInterruptAfterDeadline](../globals.md#shouldinterruptafterdeadline) function will create a time-based deadline.

If you need more control over how the code executes, create a
[QuickJSVm](quickjsvm.md) instance and use its [QuickJSVm.evalCode](quickjsvm.md#evalcode) method.

**`throws`** If `code` throws during evaluation, the exception will be
converted into a native Javascript value and thrown.

**`throws`** if `options.shouldInterrupt` interrupted execution, will throw a Error
with name `"InternalError"` and  message `"interrupted"`.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`code` | string | - |
`options` | [QuickJSEvalOptions](../interfaces/quickjsevaloptions.md) |  {} |

**Returns:** *unknown*

The result is coerced to a native Javascript value using JSON
serialization, so properties and values unsupported by JSON will be dropped.
