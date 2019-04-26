/* eslint-disable no-unused-vars */

/**
 * This comment _supports_ [Markdown](https://marked.js.org/)
 */
export class Markdown {}

/**
 * Codeblocks are great for examples
 *
 * ```
 * <my-custom-element>Highlight JS will autodetect the language</my-custom-element>
 * ```
 *
 * ```typescript
 * // Or you can specify the language explicitly
 * const codeBlock = new CodeBlock();
 * ```
 */
export class CodeBlock {}

/**
 * See the [[SymbolReference]] interface for more details.
 */
export class OtherSymbolReference implements SymbolReference {}

/** More details */
interface SymbolReference {}

/**
 * @param text  Comment for parameter ´text´.
 */
export const param = (target: any, text: string) => {};

/**
 * @typeparam T  Comment for type `T`.
 */
export const typeparam = <T>(target: T, text: string) => {};

/**
 * @returns      Comment for special return value.
 */
export const returns = (target: any, value: number) => {};

/**
 * @ignore
 */
export const hidden = (target: any, value: number) => {};

/**
 * Actual namespace comment.
 * @preferred
 */
namespace Namespace {}
/**
 * Dismissed namespace comment.
 * This is the longer comment but will be dismissed in favor of the preferred comment.
 */
namespace Namespace1 {}

/**
 * This is a doc comment for a file
 */

/**
 * This is a doc comment for "someVar".
 */
export const file: string = 'value';
