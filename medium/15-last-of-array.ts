/*
  15 - Last of Array
  -------
  ### Question

  > TypeScript 4.0 is recommended in this challenge

  Implement a generic `Last<T>` that takes an Array `T` and returns its last element.

  For example

  ```ts
  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]

  type tail1 = Last<arr1> // expected to be 'c'
  type tail2 = Last<arr2> // expected to be 1
  ```
*/

/* _____________ Your Code Here _____________ */

type Last<T extends any[]> = T extends [...infer _, infer B] ? B : never;

type Test = Last<[2]>;
type Test2 = Last<[2, 3]>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Last<[]>, never>>,
  Expect<Equal<Last<[2]>, 2>>,
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>
];
