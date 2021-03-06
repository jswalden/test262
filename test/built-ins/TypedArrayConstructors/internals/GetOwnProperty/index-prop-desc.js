// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-integer-indexed-exotic-objects-getownproperty-p
description: >
  Returns a descriptor object from an index property
info: |
  9.4.5.1 [[GetOwnProperty]] ( P )

  ...
  3. If Type(P) is String, then
    a. Let numericIndex be ! CanonicalNumericIndexString(P).
    b. If numericIndex is not undefined, then
      ...
      iii. Return a PropertyDescriptor{[[Value]]: value, [[Writable]]: true,
      [[Enumerable]]: true, [[Configurable]]: false}.
  ...
includes: [testTypedArray.js, propertyHelper.js]
features: [align-detached-buffer-semantics-with-web-reality, TypedArray]
---*/

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA([42, 43]);

  var desc0 = Object.getOwnPropertyDescriptor(sample, 0);
  assert.sameValue(desc0.value, 42, 'The value of desc0.value is 42');
  assert.sameValue(desc0.writable, true, 'The value of desc0.writable is true');
  verifyEnumerable(sample, "0", "index descriptor is enumerable [0]");
  verifyConfigurable(sample, "0", "index descriptor is configurable [0]");

  var desc1 = Object.getOwnPropertyDescriptor(sample, 1);
  assert.sameValue(desc1.value, 43, 'The value of desc1.value is 43');
  assert.sameValue(desc1.writable, true, 'The value of desc1.writable is true');
  verifyEnumerable(sample, "1", "index descriptor is enumerable [1]");
  verifyConfigurable(sample, "1", "index descriptor is configurable [1]");
});
