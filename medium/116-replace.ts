/*
  116 - Replace
  -------
  ### Question

  Implement `Replace<S, From, To>` which replace the string `From` with `To` once in the given string `S`

  For example

  ```ts
  type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'
  ```
*/

/* _____________ Your Code Here _____________ */

type Replace<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer Start}${From}${infer End}`
  ? From extends ""
    ? S
    : `${Start}${To}${End}`
  : S;

type Test = Replace<"foobarbar", "bar", "">;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Replace<"foobar", "bar", "foo">, "foofoo">>,
  Expect<Equal<Replace<"foobarbar", "bar", "foo">, "foofoobar">>,
  Expect<Equal<Replace<"foobarbar", "", "foo">, "foobarbar">>,
  Expect<Equal<Replace<"foobarbar", "bar", "">, "foobar">>,
  Expect<Equal<Replace<"foobarbar", "bra", "foo">, "foobarbar">>,
  Expect<Equal<Replace<"", "", "">, "">>
];
