//// [/src/2/.tsbuildinfo]
{
  "bundle": {
    "commonSourceDirectory": "/src/second/",
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 167,
          "kind": "prepend",
          "data": "/src/first/bin/first-output.js",
          "texts": [
            {
              "pos": 0,
              "end": 127,
              "kind": "text"
            },
            {
              "pos": 127,
              "end": 167,
              "kind": "sourceMapUrl"
            }
          ]
        },
        {
          "pos": 169,
          "end": 3603,
          "kind": "text"
        },
        {
          "pos": 3603,
          "end": 3644,
          "kind": "sourceMapUrl"
        }
      ]
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 214,
          "kind": "prepend",
          "data": "/src/first/bin/first-output.d.ts",
          "texts": [
            {
              "pos": 0,
              "end": 54,
              "kind": "internal"
            },
            {
              "pos": 56,
              "end": 172,
              "kind": "text"
            },
            {
              "pos": 172,
              "end": 214,
              "kind": "sourceMapUrl"
            }
          ]
        },
        {
          "pos": 216,
          "end": 293,
          "kind": "text"
        },
        {
          "pos": 293,
          "end": 442,
          "kind": "internal"
        },
        {
          "pos": 444,
          "end": 476,
          "kind": "text"
        },
        {
          "pos": 476,
          "end": 988,
          "kind": "internal"
        },
        {
          "pos": 990,
          "end": 993,
          "kind": "text"
        },
        {
          "pos": 993,
          "end": 1526,
          "kind": "internal"
        },
        {
          "pos": 1528,
          "end": 1576,
          "kind": "text"
        },
        {
          "pos": 1576,
          "end": 1619,
          "kind": "sourceMapUrl"
        }
      ]
    }
  }
}

//// [/src/2/.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/2/second-output.js
----------------------------------------------------------------------
prepend: (0-167):: /src/first/bin/first-output.js texts:: 2
>>--------------------------------------------------------------------
text: (0-127)
var s = "Hello, world";
console.log(s);
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}

>>--------------------------------------------------------------------
sourceMapUrl: (127-167)
//# sourceMappingURL=first-output.js.map
----------------------------------------------------------------------
text: (169-3603)
var N;
(function (N) {
    function f() {
        console.log('testing');
    }
    f();
})(N || (N = {}));
var normalC = /** @class */ (function () {
    /**@internal*/ function normalC() {
    }
    /**@internal*/ normalC.prototype.method = function () { };
    Object.defineProperty(normalC.prototype, "c", {
        /**@internal*/ get: function () { return 10; },
        /**@internal*/ set: function (val) { },
        enumerable: true,
        configurable: true
    });
    return normalC;
}());
var normalN;
(function (normalN) {
    /**@internal*/ var C = /** @class */ (function () {
        function C() {
        }
        return C;
    }());
    normalN.C = C;
    /**@internal*/ function foo() { }
    normalN.foo = foo;
    /**@internal*/ var someNamespace;
    (function (someNamespace) {
        var C = /** @class */ (function () {
            function C() {
            }
            return C;
        }());
        someNamespace.C = C;
    })(someNamespace = normalN.someNamespace || (normalN.someNamespace = {}));
    /**@internal*/ var someOther;
    (function (someOther) {
        var something;
        (function (something) {
            var someClass = /** @class */ (function () {
                function someClass() {
                }
                return someClass;
            }());
            something.someClass = someClass;
        })(something = someOther.something || (someOther.something = {}));
    })(someOther = normalN.someOther || (normalN.someOther = {}));
    /**@internal*/ normalN.someImport = someNamespace.C;
    /**@internal*/ normalN.internalConst = 10;
    /**@internal*/ var internalEnum;
    (function (internalEnum) {
        internalEnum[internalEnum["a"] = 0] = "a";
        internalEnum[internalEnum["b"] = 1] = "b";
        internalEnum[internalEnum["c"] = 2] = "c";
    })(internalEnum = normalN.internalEnum || (normalN.internalEnum = {}));
})(normalN || (normalN = {}));
/**@internal*/ var internalC = /** @class */ (function () {
    function internalC() {
    }
    return internalC;
}());
/**@internal*/ function internalfoo() { }
/**@internal*/ var internalNamespace;
(function (internalNamespace) {
    var someClass = /** @class */ (function () {
        function someClass() {
        }
        return someClass;
    }());
    internalNamespace.someClass = someClass;
})(internalNamespace || (internalNamespace = {}));
/**@internal*/ var internalOther;
(function (internalOther) {
    var something;
    (function (something) {
        var someClass = /** @class */ (function () {
            function someClass() {
            }
            return someClass;
        }());
        something.someClass = someClass;
    })(something = internalOther.something || (internalOther.something = {}));
})(internalOther || (internalOther = {}));
/**@internal*/ var internalImport = internalNamespace.someClass;
/**@internal*/ var internalConst = 10;
/**@internal*/ var internalEnum;
(function (internalEnum) {
    internalEnum[internalEnum["a"] = 0] = "a";
    internalEnum[internalEnum["b"] = 1] = "b";
    internalEnum[internalEnum["c"] = 2] = "c";
})(internalEnum || (internalEnum = {}));
var C = /** @class */ (function () {
    function C() {
    }
    C.prototype.doSomething = function () {
        console.log("something got done");
    };
    return C;
}());

----------------------------------------------------------------------
sourceMapUrl: (3603-3644)
//# sourceMappingURL=second-output.js.map
======================================================================
======================================================================
File:: /src/2/second-output.d.ts
----------------------------------------------------------------------
prepend: (0-214):: /src/first/bin/first-output.d.ts texts:: 3
>>--------------------------------------------------------------------
internal: (0-54)
/**@internal*/ interface TheFirst {
    none: any;
}
>>--------------------------------------------------------------------
text: (56-172)
declare const s = "Hello, world";
interface NoJsForHereEither {
    none: any;
}
declare function f(): string;

>>--------------------------------------------------------------------
sourceMapUrl: (172-214)
//# sourceMappingURL=first-output.d.ts.map
----------------------------------------------------------------------
text: (216-293)
declare namespace N {
}
declare namespace N {
}
declare class normalC {

----------------------------------------------------------------------
internal: (293-442)
    /**@internal*/ constructor();
    /**@internal*/ prop: string;
    /**@internal*/ method(): void;
    /**@internal*/ /**@internal*/ c: number;
----------------------------------------------------------------------
text: (444-476)
}
declare namespace normalN {

----------------------------------------------------------------------
internal: (476-988)
    /**@internal*/ class C {
    }
    /**@internal*/ function foo(): void;
    /**@internal*/ namespace someNamespace {
        class C {
        }
    }
    /**@internal*/ namespace someOther.something {
        class someClass {
        }
    }
    /**@internal*/ export import someImport = someNamespace.C;
    /**@internal*/ type internalType = internalC;
    /**@internal*/ const internalConst = 10;
    /**@internal*/ enum internalEnum {
        a = 0,
        b = 1,
        c = 2
    }
----------------------------------------------------------------------
text: (990-993)
}

----------------------------------------------------------------------
internal: (993-1526)
/**@internal*/ declare class internalC {
}
/**@internal*/ declare function internalfoo(): void;
/**@internal*/ declare namespace internalNamespace {
    class someClass {
    }
}
/**@internal*/ declare namespace internalOther.something {
    class someClass {
    }
}
/**@internal*/ import internalImport = internalNamespace.someClass;
/**@internal*/ declare type internalType = internalC;
/**@internal*/ declare const internalConst = 10;
/**@internal*/ declare enum internalEnum {
    a = 0,
    b = 1,
    c = 2
}
----------------------------------------------------------------------
text: (1528-1576)
declare class C {
    doSomething(): void;
}

----------------------------------------------------------------------
sourceMapUrl: (1576-1619)
//# sourceMappingURL=second-output.d.ts.map
======================================================================

//// [/src/2/second-output.js]
var s = "Hello, world";
console.log(s);
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}
//# sourceMappingURL=first-output.js.map
var N;
(function (N) {
    function f() {
        console.log('testing');
    }
    f();
})(N || (N = {}));
var normalC = /** @class */ (function () {
    /**@internal*/ function normalC() {
    }
    /**@internal*/ normalC.prototype.method = function () { };
    Object.defineProperty(normalC.prototype, "c", {
        /**@internal*/ get: function () { return 10; },
        /**@internal*/ set: function (val) { },
        enumerable: true,
        configurable: true
    });
    return normalC;
}());
var normalN;
(function (normalN) {
    /**@internal*/ var C = /** @class */ (function () {
        function C() {
        }
        return C;
    }());
    normalN.C = C;
    /**@internal*/ function foo() { }
    normalN.foo = foo;
    /**@internal*/ var someNamespace;
    (function (someNamespace) {
        var C = /** @class */ (function () {
            function C() {
            }
            return C;
        }());
        someNamespace.C = C;
    })(someNamespace = normalN.someNamespace || (normalN.someNamespace = {}));
    /**@internal*/ var someOther;
    (function (someOther) {
        var something;
        (function (something) {
            var someClass = /** @class */ (function () {
                function someClass() {
                }
                return someClass;
            }());
            something.someClass = someClass;
        })(something = someOther.something || (someOther.something = {}));
    })(someOther = normalN.someOther || (normalN.someOther = {}));
    /**@internal*/ normalN.someImport = someNamespace.C;
    /**@internal*/ normalN.internalConst = 10;
    /**@internal*/ var internalEnum;
    (function (internalEnum) {
        internalEnum[internalEnum["a"] = 0] = "a";
        internalEnum[internalEnum["b"] = 1] = "b";
        internalEnum[internalEnum["c"] = 2] = "c";
    })(internalEnum = normalN.internalEnum || (normalN.internalEnum = {}));
})(normalN || (normalN = {}));
/**@internal*/ var internalC = /** @class */ (function () {
    function internalC() {
    }
    return internalC;
}());
/**@internal*/ function internalfoo() { }
/**@internal*/ var internalNamespace;
(function (internalNamespace) {
    var someClass = /** @class */ (function () {
        function someClass() {
        }
        return someClass;
    }());
    internalNamespace.someClass = someClass;
})(internalNamespace || (internalNamespace = {}));
/**@internal*/ var internalOther;
(function (internalOther) {
    var something;
    (function (something) {
        var someClass = /** @class */ (function () {
            function someClass() {
            }
            return someClass;
        }());
        something.someClass = someClass;
    })(something = internalOther.something || (internalOther.something = {}));
})(internalOther || (internalOther = {}));
/**@internal*/ var internalImport = internalNamespace.someClass;
/**@internal*/ var internalConst = 10;
/**@internal*/ var internalEnum;
(function (internalEnum) {
    internalEnum[internalEnum["a"] = 0] = "a";
    internalEnum[internalEnum["b"] = 1] = "b";
    internalEnum[internalEnum["c"] = 2] = "c";
})(internalEnum || (internalEnum = {}));
var C = /** @class */ (function () {
    function C() {
    }
    C.prototype.doSomething = function () {
        console.log("something got done");
    };
    return C;
}());
//# sourceMappingURL=second-output.js.map

//// [/src/2/second-output.js.map]
{"version":3,"file":"second-output.js","sourceRoot":"","sources":["../first/first_PART1.ts","../first/first_part2.ts","../first/first_part3.ts","../second/second_part1.ts","../second/second_part2.ts"],"names":[],"mappings":"AAIA,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AACf,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACXf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC;;ACED,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;AAED;IACI,cAAc,CAAC;IAAgB,CAAC;IAEhC,cAAc,CAAC,wBAAM,GAAN,cAAW,CAAC;IACZ,sBAAI,sBAAC;QAApB,cAAc,MAAC,cAAU,OAAO,EAAE,CAAC,CAAC,CAAC;QACrC,cAAc,MAAC,UAAM,GAAW,IAAI,CAAC;;;OADA;IAEzC,cAAC;AAAD,CAAC,AAND,IAMC;AACD,IAAU,OAAO,CAShB;AATD,WAAU,OAAO;IACb,cAAc,CAAC;QAAA;QAAiB,CAAC;QAAD,QAAC;IAAD,CAAC,AAAlB,IAAkB;IAAL,SAAC,IAAI,CAAA;IACjC,cAAc,CAAC,SAAgB,GAAG,KAAI,CAAC;IAAR,WAAG,MAAK,CAAA;IACvC,cAAc,CAAC,IAAiB,aAAa,CAAsB;IAApD,WAAiB,aAAa;QAAG;YAAA;YAAgB,CAAC;YAAD,QAAC;QAAD,CAAC,AAAjB,IAAiB;QAAJ,eAAC,IAAG,CAAA;IAAC,CAAC,EAAnC,aAAa,GAAb,qBAAa,KAAb,qBAAa,QAAsB;IACnE,cAAc,CAAC,IAAiB,SAAS,CAAwC;IAAlE,WAAiB,SAAS;QAAC,IAAA,SAAS,CAA8B;QAAvC,WAAA,SAAS;YAAG;gBAAA;gBAAwB,CAAC;gBAAD,gBAAC;YAAD,CAAC,AAAzB,IAAyB;YAAZ,mBAAS,YAAG,CAAA;QAAC,CAAC,EAAvC,SAAS,GAAT,mBAAS,KAAT,mBAAS,QAA8B;IAAD,CAAC,EAAjD,SAAS,GAAT,iBAAS,KAAT,iBAAS,QAAwC;IACjF,cAAc,CAAe,kBAAU,GAAG,aAAa,CAAC,CAAC,CAAC;IAE1D,cAAc,CAAc,qBAAa,GAAG,EAAE,CAAC;IAC/C,cAAc,CAAC,IAAY,YAAwB;IAApC,WAAY,YAAY;QAAG,yCAAC,CAAA;QAAE,yCAAC,CAAA;QAAE,yCAAC,CAAA;IAAC,CAAC,EAAxB,YAAY,GAAZ,oBAAY,KAAZ,oBAAY,QAAY;AACvD,CAAC,EATS,OAAO,KAAP,OAAO,QAShB;AACD,cAAc,CAAC;IAAA;IAAiB,CAAC;IAAD,gBAAC;AAAD,CAAC,AAAlB,IAAkB;AACjC,cAAc,CAAC,SAAS,WAAW,KAAI,CAAC;AACxC,cAAc,CAAC,IAAU,iBAAiB,CAA8B;AAAzD,WAAU,iBAAiB;IAAG;QAAA;QAAwB,CAAC;QAAD,gBAAC;IAAD,CAAC,AAAzB,IAAyB;IAAZ,2BAAS,YAAG,CAAA;AAAC,CAAC,EAA/C,iBAAiB,KAAjB,iBAAiB,QAA8B;AACxE,cAAc,CAAC,IAAU,aAAa,CAAwC;AAA/D,WAAU,aAAa;IAAC,IAAA,SAAS,CAA8B;IAAvC,WAAA,SAAS;QAAG;YAAA;YAAwB,CAAC;YAAD,gBAAC;QAAD,CAAC,AAAzB,IAAyB;QAAZ,mBAAS,YAAG,CAAA;IAAC,CAAC,EAAvC,SAAS,GAAT,uBAAS,KAAT,uBAAS,QAA8B;AAAD,CAAC,EAArD,aAAa,KAAb,aAAa,QAAwC;AAC9E,cAAc,CAAC,IAAO,cAAc,GAAG,iBAAiB,CAAC,SAAS,CAAC;AAEnE,cAAc,CAAC,IAAM,aAAa,GAAG,EAAE,CAAC;AACxC,cAAc,CAAC,IAAK,YAAwB;AAA7B,WAAK,YAAY;IAAG,yCAAC,CAAA;IAAE,yCAAC,CAAA;IAAE,yCAAC,CAAA;AAAC,CAAC,EAAxB,YAAY,KAAZ,YAAY,QAAY;ACpC5C;IAAA;IAIA,CAAC;IAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC"}

//// [/src/2/second-output.js.map.baseline.txt]
===================================================================
JsFile: second-output.js
mapUrl: second-output.js.map
sourceRoot: 
sources: ../first/first_PART1.ts,../first/first_part2.ts,../first/first_part3.ts,../second/second_part1.ts,../second/second_part2.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/2/second-output.js
sourceFile:../first/first_PART1.ts
-------------------------------------------------------------------
>>>var s = "Hello, world";
1 >
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^^^^^^^^^^^
6 >                      ^
1 >/**@internal*/ interface TheFirst {
  >    none: any;
  >}
  >
  >
2 >const 
3 >    s
4 >      = 
5 >        "Hello, world"
6 >                      ;
1 >Emitted(1, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(1, 5) Source(5, 7) + SourceIndex(0)
3 >Emitted(1, 6) Source(5, 8) + SourceIndex(0)
4 >Emitted(1, 9) Source(5, 11) + SourceIndex(0)
5 >Emitted(1, 23) Source(5, 25) + SourceIndex(0)
6 >Emitted(1, 24) Source(5, 26) + SourceIndex(0)
---
>>>console.log(s);
1 >
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^->
1 >
  >
  >interface NoJsForHereEither {
  >    none: any;
  >}
  >
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1 >Emitted(2, 1) Source(11, 1) + SourceIndex(0)
2 >Emitted(2, 8) Source(11, 8) + SourceIndex(0)
3 >Emitted(2, 9) Source(11, 9) + SourceIndex(0)
4 >Emitted(2, 12) Source(11, 12) + SourceIndex(0)
5 >Emitted(2, 13) Source(11, 13) + SourceIndex(0)
6 >Emitted(2, 14) Source(11, 14) + SourceIndex(0)
7 >Emitted(2, 15) Source(11, 15) + SourceIndex(0)
8 >Emitted(2, 16) Source(11, 16) + SourceIndex(0)
---
>>>console.log(s);
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^^^->
1->
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1->Emitted(3, 1) Source(12, 1) + SourceIndex(0)
2 >Emitted(3, 8) Source(12, 8) + SourceIndex(0)
3 >Emitted(3, 9) Source(12, 9) + SourceIndex(0)
4 >Emitted(3, 12) Source(12, 12) + SourceIndex(0)
5 >Emitted(3, 13) Source(12, 13) + SourceIndex(0)
6 >Emitted(3, 14) Source(12, 14) + SourceIndex(0)
7 >Emitted(3, 15) Source(12, 15) + SourceIndex(0)
8 >Emitted(3, 16) Source(12, 16) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/2/second-output.js
sourceFile:../first/first_part2.ts
-------------------------------------------------------------------
>>>console.log(f());
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^
1->
2 >console
3 >       .
4 >        log
5 >           (
6 >            f
7 >             ()
8 >               )
9 >                ;
1->Emitted(4, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(4, 8) Source(1, 8) + SourceIndex(1)
3 >Emitted(4, 9) Source(1, 9) + SourceIndex(1)
4 >Emitted(4, 12) Source(1, 12) + SourceIndex(1)
5 >Emitted(4, 13) Source(1, 13) + SourceIndex(1)
6 >Emitted(4, 14) Source(1, 14) + SourceIndex(1)
7 >Emitted(4, 16) Source(1, 16) + SourceIndex(1)
8 >Emitted(4, 17) Source(1, 17) + SourceIndex(1)
9 >Emitted(4, 18) Source(1, 18) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/2/second-output.js
sourceFile:../first/first_part3.ts
-------------------------------------------------------------------
>>>function f() {
1 >
2 >^^^^^^^^^
3 >         ^
4 >          ^^^^^^^^^^^^^^^^^^^->
1 >
2 >function 
3 >         f
1 >Emitted(5, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(5, 10) Source(1, 10) + SourceIndex(2)
3 >Emitted(5, 11) Source(1, 11) + SourceIndex(2)
---
>>>    return "JS does hoists";
1->^^^^
2 >    ^^^^^^^
3 >           ^^^^^^^^^^^^^^^^
4 >                           ^
1->() {
  >    
2 >    return 
3 >           "JS does hoists"
4 >                           ;
1->Emitted(6, 5) Source(2, 5) + SourceIndex(2)
2 >Emitted(6, 12) Source(2, 12) + SourceIndex(2)
3 >Emitted(6, 28) Source(2, 28) + SourceIndex(2)
4 >Emitted(6, 29) Source(2, 29) + SourceIndex(2)
---
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
1 >Emitted(7, 1) Source(3, 1) + SourceIndex(2)
2 >Emitted(7, 2) Source(3, 2) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/2/second-output.js
sourceFile:../second/second_part1.ts
-------------------------------------------------------------------
>>>//# sourceMappingURL=first-output.js.map
>>>var N;
1->
2 >^^^^
3 >    ^
4 >     ^
5 >      ^^^^^^^^^^->
1->namespace N {
  >    // Comment text
  >}
  >
  >
2 >namespace 
3 >    N
4 >      {
  >         function f() {
  >             console.log('testing');
  >         }
  >     
  >         f();
  >     }
1->Emitted(9, 1) Source(5, 1) + SourceIndex(3)
2 >Emitted(9, 5) Source(5, 11) + SourceIndex(3)
3 >Emitted(9, 6) Source(5, 12) + SourceIndex(3)
4 >Emitted(9, 7) Source(11, 2) + SourceIndex(3)
---
>>>(function (N) {
1->
2 >^^^^^^^^^^^
3 >           ^
4 >            ^^^^^^^->
1->
2 >namespace 
3 >           N
1->Emitted(10, 1) Source(5, 1) + SourceIndex(3)
2 >Emitted(10, 12) Source(5, 11) + SourceIndex(3)
3 >Emitted(10, 13) Source(5, 12) + SourceIndex(3)
---
>>>    function f() {
1->^^^^
2 >    ^^^^^^^^^
3 >             ^
4 >              ^^^^^^^^^^^^^^^^^^->
1-> {
  >    
2 >    function 
3 >             f
1->Emitted(11, 5) Source(6, 5) + SourceIndex(3)
2 >Emitted(11, 14) Source(6, 14) + SourceIndex(3)
3 >Emitted(11, 15) Source(6, 15) + SourceIndex(3)
---
>>>        console.log('testing');
1->^^^^^^^^
2 >        ^^^^^^^
3 >               ^
4 >                ^^^
5 >                   ^
6 >                    ^^^^^^^^^
7 >                             ^
8 >                              ^
1->() {
  >        
2 >        console
3 >               .
4 >                log
5 >                   (
6 >                    'testing'
7 >                             )
8 >                              ;
1->Emitted(12, 9) Source(7, 9) + SourceIndex(3)
2 >Emitted(12, 16) Source(7, 16) + SourceIndex(3)
3 >Emitted(12, 17) Source(7, 17) + SourceIndex(3)
4 >Emitted(12, 20) Source(7, 20) + SourceIndex(3)
5 >Emitted(12, 21) Source(7, 21) + SourceIndex(3)
6 >Emitted(12, 30) Source(7, 30) + SourceIndex(3)
7 >Emitted(12, 31) Source(7, 31) + SourceIndex(3)
8 >Emitted(12, 32) Source(7, 32) + SourceIndex(3)
---
>>>    }
1 >^^^^
2 >    ^
3 >     ^^^^->
1 >
  >    
2 >    }
1 >Emitted(13, 5) Source(8, 5) + SourceIndex(3)
2 >Emitted(13, 6) Source(8, 6) + SourceIndex(3)
---
>>>    f();
1->^^^^
2 >    ^
3 >     ^^
4 >       ^
5 >        ^^^^^^^^^^^->
1->
  >
  >    
2 >    f
3 >     ()
4 >       ;
1->Emitted(14, 5) Source(10, 5) + SourceIndex(3)
2 >Emitted(14, 6) Source(10, 6) + SourceIndex(3)
3 >Emitted(14, 8) Source(10, 8) + SourceIndex(3)
4 >Emitted(14, 9) Source(10, 9) + SourceIndex(3)
---
>>>})(N || (N = {}));
1->
2 >^
3 > ^^
4 >   ^
5 >    ^^^^^
6 >         ^
7 >          ^^^^^^^^
8 >                  ^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
2 >}
3 > 
4 >   N
5 >    
6 >         N
7 >           {
  >              function f() {
  >                  console.log('testing');
  >              }
  >          
  >              f();
  >          }
1->Emitted(15, 1) Source(11, 1) + SourceIndex(3)
2 >Emitted(15, 2) Source(11, 2) + SourceIndex(3)
3 >Emitted(15, 4) Source(5, 11) + SourceIndex(3)
4 >Emitted(15, 5) Source(5, 12) + SourceIndex(3)
5 >Emitted(15, 10) Source(5, 11) + SourceIndex(3)
6 >Emitted(15, 11) Source(5, 12) + SourceIndex(3)
7 >Emitted(15, 19) Source(11, 2) + SourceIndex(3)
---
>>>var normalC = /** @class */ (function () {
1->
2 >^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
  >
1->Emitted(16, 1) Source(13, 1) + SourceIndex(3)
---
>>>    /**@internal*/ function normalC() {
1->^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
1->class normalC {
  >    
2 >    /**@internal*/
3 >                   
1->Emitted(17, 5) Source(14, 5) + SourceIndex(3)
2 >Emitted(17, 19) Source(14, 19) + SourceIndex(3)
3 >Emitted(17, 20) Source(14, 20) + SourceIndex(3)
---
>>>    }
1 >^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >constructor() { 
2 >    }
1 >Emitted(18, 5) Source(14, 36) + SourceIndex(3)
2 >Emitted(18, 6) Source(14, 37) + SourceIndex(3)
---
>>>    /**@internal*/ normalC.prototype.method = function () { };
1->^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^^^^^^^^^^^^^^^^^^^^^
5 >                                           ^^^
6 >                                              ^^^^^^^^^^^^^^
7 >                                                            ^
1->
  >    /**@internal*/ prop: string;
  >    
2 >    /**@internal*/
3 >                   
4 >                   method
5 >                                           
6 >                                              method() { 
7 >                                                            }
1->Emitted(19, 5) Source(16, 5) + SourceIndex(3)
2 >Emitted(19, 19) Source(16, 19) + SourceIndex(3)
3 >Emitted(19, 20) Source(16, 20) + SourceIndex(3)
4 >Emitted(19, 44) Source(16, 26) + SourceIndex(3)
5 >Emitted(19, 47) Source(16, 20) + SourceIndex(3)
6 >Emitted(19, 61) Source(16, 31) + SourceIndex(3)
7 >Emitted(19, 62) Source(16, 32) + SourceIndex(3)
---
>>>    Object.defineProperty(normalC.prototype, "c", {
1 >^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^
3 >                          ^^^^^^^^^^^^^^^^^^^^^^
4 >                                                ^^^^^^^^->
1 >
  >    /**@internal*/ 
2 >    get 
3 >                          c
1 >Emitted(20, 5) Source(17, 20) + SourceIndex(3)
2 >Emitted(20, 27) Source(17, 24) + SourceIndex(3)
3 >Emitted(20, 49) Source(17, 25) + SourceIndex(3)
---
>>>        /**@internal*/ get: function () { return 10; },
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^
3 >                      ^^^^^^
4 >                            ^^^^^^^^^^^^^^
5 >                                          ^^^^^^^
6 >                                                 ^^
7 >                                                   ^
8 >                                                    ^
9 >                                                     ^
1->
2 >        /**@internal*/
3 >                       
4 >                            get c() { 
5 >                                          return 
6 >                                                 10
7 >                                                   ;
8 >                                                     
9 >                                                     }
1->Emitted(21, 9) Source(17, 5) + SourceIndex(3)
2 >Emitted(21, 23) Source(17, 19) + SourceIndex(3)
3 >Emitted(21, 29) Source(17, 20) + SourceIndex(3)
4 >Emitted(21, 43) Source(17, 30) + SourceIndex(3)
5 >Emitted(21, 50) Source(17, 37) + SourceIndex(3)
6 >Emitted(21, 52) Source(17, 39) + SourceIndex(3)
7 >Emitted(21, 53) Source(17, 40) + SourceIndex(3)
8 >Emitted(21, 54) Source(17, 41) + SourceIndex(3)
9 >Emitted(21, 55) Source(17, 42) + SourceIndex(3)
---
>>>        /**@internal*/ set: function (val) { },
1 >^^^^^^^^
2 >        ^^^^^^^^^^^^^^
3 >                      ^^^^^^
4 >                            ^^^^^^^^^^
5 >                                      ^^^
6 >                                         ^^^^
7 >                                             ^
1 >
  >    
2 >        /**@internal*/
3 >                       
4 >                            set c(
5 >                                      val: number
6 >                                         ) { 
7 >                                             }
1 >Emitted(22, 9) Source(18, 5) + SourceIndex(3)
2 >Emitted(22, 23) Source(18, 19) + SourceIndex(3)
3 >Emitted(22, 29) Source(18, 20) + SourceIndex(3)
4 >Emitted(22, 39) Source(18, 26) + SourceIndex(3)
5 >Emitted(22, 42) Source(18, 37) + SourceIndex(3)
6 >Emitted(22, 46) Source(18, 41) + SourceIndex(3)
7 >Emitted(22, 47) Source(18, 42) + SourceIndex(3)
---
>>>        enumerable: true,
>>>        configurable: true
>>>    });
1 >^^^^^^^
2 >       ^^^^^^^^^^^^^->
1 >
1 >Emitted(25, 8) Source(17, 42) + SourceIndex(3)
---
>>>    return normalC;
1->^^^^
2 >    ^^^^^^^^^^^^^^
1->
  >    /**@internal*/ set c(val: number) { }
  >
2 >    }
1->Emitted(26, 5) Source(19, 1) + SourceIndex(3)
2 >Emitted(26, 19) Source(19, 2) + SourceIndex(3)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^^->
1 >
2 >}
3 > 
4 > class normalC {
  >     /**@internal*/ constructor() { }
  >     /**@internal*/ prop: string;
  >     /**@internal*/ method() { }
  >     /**@internal*/ get c() { return 10; }
  >     /**@internal*/ set c(val: number) { }
  > }
1 >Emitted(27, 1) Source(19, 1) + SourceIndex(3)
2 >Emitted(27, 2) Source(19, 2) + SourceIndex(3)
3 >Emitted(27, 2) Source(13, 1) + SourceIndex(3)
4 >Emitted(27, 6) Source(19, 2) + SourceIndex(3)
---
>>>var normalN;
1->
2 >^^^^
3 >    ^^^^^^^
4 >           ^
5 >            ^^^^^^^^^^->
1->
  >
2 >namespace 
3 >    normalN
4 >            {
  >               /**@internal*/ export class C { }
  >               /**@internal*/ export function foo() {}
  >               /**@internal*/ export namespace someNamespace { export class C {} }
  >               /**@internal*/ export namespace someOther.something { export class someClass {} }
  >               /**@internal*/ export import someImport = someNamespace.C;
  >               /**@internal*/ export type internalType = internalC;
  >               /**@internal*/ export const internalConst = 10;
  >               /**@internal*/ export enum internalEnum { a, b, c }
  >           }
1->Emitted(28, 1) Source(20, 1) + SourceIndex(3)
2 >Emitted(28, 5) Source(20, 11) + SourceIndex(3)
3 >Emitted(28, 12) Source(20, 18) + SourceIndex(3)
4 >Emitted(28, 13) Source(29, 2) + SourceIndex(3)
---
>>>(function (normalN) {
1->
2 >^^^^^^^^^^^
3 >           ^^^^^^^
4 >                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >namespace 
3 >           normalN
1->Emitted(29, 1) Source(20, 1) + SourceIndex(3)
2 >Emitted(29, 12) Source(20, 11) + SourceIndex(3)
3 >Emitted(29, 19) Source(20, 18) + SourceIndex(3)
---
>>>    /**@internal*/ var C = /** @class */ (function () {
1->^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^->
1-> {
  >    
2 >    /**@internal*/
3 >                   
1->Emitted(30, 5) Source(21, 5) + SourceIndex(3)
2 >Emitted(30, 19) Source(21, 19) + SourceIndex(3)
3 >Emitted(30, 20) Source(21, 20) + SourceIndex(3)
---
>>>        function C() {
1->^^^^^^^^
2 >        ^^->
1->
1->Emitted(31, 9) Source(21, 20) + SourceIndex(3)
---
>>>        }
1->^^^^^^^^
2 >        ^
3 >         ^^^^^^^^^->
1->export class C { 
2 >        }
1->Emitted(32, 9) Source(21, 37) + SourceIndex(3)
2 >Emitted(32, 10) Source(21, 38) + SourceIndex(3)
---
>>>        return C;
1->^^^^^^^^
2 >        ^^^^^^^^
1->
2 >        }
1->Emitted(33, 9) Source(21, 37) + SourceIndex(3)
2 >Emitted(33, 17) Source(21, 38) + SourceIndex(3)
---
>>>    }());
1 >^^^^
2 >    ^
3 >     
4 >     ^^^^
5 >         ^^^^^^^^^^->
1 >
2 >    }
3 >     
4 >     export class C { }
1 >Emitted(34, 5) Source(21, 37) + SourceIndex(3)
2 >Emitted(34, 6) Source(21, 38) + SourceIndex(3)
3 >Emitted(34, 6) Source(21, 20) + SourceIndex(3)
4 >Emitted(34, 10) Source(21, 38) + SourceIndex(3)
---
>>>    normalN.C = C;
1->^^^^
2 >    ^^^^^^^^^
3 >             ^^^^
4 >                 ^
5 >                  ^^^^^^^^^^^^^^^^^^^^->
1->
2 >    C
3 >              { }
4 >                 
1->Emitted(35, 5) Source(21, 33) + SourceIndex(3)
2 >Emitted(35, 14) Source(21, 34) + SourceIndex(3)
3 >Emitted(35, 18) Source(21, 38) + SourceIndex(3)
4 >Emitted(35, 19) Source(21, 38) + SourceIndex(3)
---
>>>    /**@internal*/ function foo() { }
1->^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^^^^^^
5 >                            ^^^
6 >                               ^^^^^
7 >                                    ^
1->
  >    
2 >    /**@internal*/
3 >                   
4 >                   export function 
5 >                            foo
6 >                               () {
7 >                                    }
1->Emitted(36, 5) Source(22, 5) + SourceIndex(3)
2 >Emitted(36, 19) Source(22, 19) + SourceIndex(3)
3 >Emitted(36, 20) Source(22, 20) + SourceIndex(3)
4 >Emitted(36, 29) Source(22, 36) + SourceIndex(3)
5 >Emitted(36, 32) Source(22, 39) + SourceIndex(3)
6 >Emitted(36, 37) Source(22, 43) + SourceIndex(3)
7 >Emitted(36, 38) Source(22, 44) + SourceIndex(3)
---
>>>    normalN.foo = foo;
1 >^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^
4 >                     ^
5 >                      ^^^^^^^^^^^^^^^^->
1 >
2 >    foo
3 >               () {}
4 >                     
1 >Emitted(37, 5) Source(22, 36) + SourceIndex(3)
2 >Emitted(37, 16) Source(22, 39) + SourceIndex(3)
3 >Emitted(37, 22) Source(22, 44) + SourceIndex(3)
4 >Emitted(37, 23) Source(22, 44) + SourceIndex(3)
---
>>>    /**@internal*/ var someNamespace;
1->^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^
5 >                       ^^^^^^^^^^^^^
6 >                                    ^
1->
  >    
2 >    /**@internal*/
3 >                   
4 >                   export namespace 
5 >                       someNamespace
6 >                                     { export class C {} }
1->Emitted(38, 5) Source(23, 5) + SourceIndex(3)
2 >Emitted(38, 19) Source(23, 19) + SourceIndex(3)
3 >Emitted(38, 20) Source(23, 20) + SourceIndex(3)
4 >Emitted(38, 24) Source(23, 37) + SourceIndex(3)
5 >Emitted(38, 37) Source(23, 50) + SourceIndex(3)
6 >Emitted(38, 38) Source(23, 72) + SourceIndex(3)
---
>>>    (function (someNamespace) {
1 >^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^^^^^^^^
4 >                            ^^^^^^^^^^^^^^^^^->
1 >
2 >    export namespace 
3 >               someNamespace
1 >Emitted(39, 5) Source(23, 20) + SourceIndex(3)
2 >Emitted(39, 16) Source(23, 37) + SourceIndex(3)
3 >Emitted(39, 29) Source(23, 50) + SourceIndex(3)
---
>>>        var C = /** @class */ (function () {
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^^->
1-> { 
1->Emitted(40, 9) Source(23, 53) + SourceIndex(3)
---
>>>            function C() {
1->^^^^^^^^^^^^
2 >            ^^->
1->
1->Emitted(41, 13) Source(23, 53) + SourceIndex(3)
---
>>>            }
1->^^^^^^^^^^^^
2 >            ^
3 >             ^^^^^^^^^->
1->export class C {
2 >            }
1->Emitted(42, 13) Source(23, 69) + SourceIndex(3)
2 >Emitted(42, 14) Source(23, 70) + SourceIndex(3)
---
>>>            return C;
1->^^^^^^^^^^^^
2 >            ^^^^^^^^
1->
2 >            }
1->Emitted(43, 13) Source(23, 69) + SourceIndex(3)
2 >Emitted(43, 21) Source(23, 70) + SourceIndex(3)
---
>>>        }());
1 >^^^^^^^^
2 >        ^
3 >         
4 >         ^^^^
5 >             ^^^^^^^^^^^^^^^^->
1 >
2 >        }
3 >         
4 >         export class C {}
1 >Emitted(44, 9) Source(23, 69) + SourceIndex(3)
2 >Emitted(44, 10) Source(23, 70) + SourceIndex(3)
3 >Emitted(44, 10) Source(23, 53) + SourceIndex(3)
4 >Emitted(44, 14) Source(23, 70) + SourceIndex(3)
---
>>>        someNamespace.C = C;
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^^
3 >                       ^^^^
4 >                           ^
5 >                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >        C
3 >                        {}
4 >                           
1->Emitted(45, 9) Source(23, 66) + SourceIndex(3)
2 >Emitted(45, 24) Source(23, 67) + SourceIndex(3)
3 >Emitted(45, 28) Source(23, 70) + SourceIndex(3)
4 >Emitted(45, 29) Source(23, 70) + SourceIndex(3)
---
>>>    })(someNamespace = normalN.someNamespace || (normalN.someNamespace = {}));
1->^^^^
2 >    ^
3 >     ^^
4 >       ^^^^^^^^^^^^^
5 >                    ^^^
6 >                       ^^^^^^^^^^^^^^^^^^^^^
7 >                                            ^^^^^
8 >                                                 ^^^^^^^^^^^^^^^^^^^^^
9 >                                                                      ^^^^^^^^
1-> 
2 >    }
3 >     
4 >       someNamespace
5 >                    
6 >                       someNamespace
7 >                                            
8 >                                                 someNamespace
9 >                                                                       { export class C {} }
1->Emitted(46, 5) Source(23, 71) + SourceIndex(3)
2 >Emitted(46, 6) Source(23, 72) + SourceIndex(3)
3 >Emitted(46, 8) Source(23, 37) + SourceIndex(3)
4 >Emitted(46, 21) Source(23, 50) + SourceIndex(3)
5 >Emitted(46, 24) Source(23, 37) + SourceIndex(3)
6 >Emitted(46, 45) Source(23, 50) + SourceIndex(3)
7 >Emitted(46, 50) Source(23, 37) + SourceIndex(3)
8 >Emitted(46, 71) Source(23, 50) + SourceIndex(3)
9 >Emitted(46, 79) Source(23, 72) + SourceIndex(3)
---
>>>    /**@internal*/ var someOther;
1 >^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^
5 >                       ^^^^^^^^^
6 >                                ^
1 >
  >    
2 >    /**@internal*/
3 >                   
4 >                   export namespace 
5 >                       someOther
6 >                                .something { export class someClass {} }
1 >Emitted(47, 5) Source(24, 5) + SourceIndex(3)
2 >Emitted(47, 19) Source(24, 19) + SourceIndex(3)
3 >Emitted(47, 20) Source(24, 20) + SourceIndex(3)
4 >Emitted(47, 24) Source(24, 37) + SourceIndex(3)
5 >Emitted(47, 33) Source(24, 46) + SourceIndex(3)
6 >Emitted(47, 34) Source(24, 86) + SourceIndex(3)
---
>>>    (function (someOther) {
1 >^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^^^^
1 >
2 >    export namespace 
3 >               someOther
1 >Emitted(48, 5) Source(24, 20) + SourceIndex(3)
2 >Emitted(48, 16) Source(24, 37) + SourceIndex(3)
3 >Emitted(48, 25) Source(24, 46) + SourceIndex(3)
---
>>>        var something;
1 >^^^^^^^^
2 >        ^^^^
3 >            ^^^^^^^^^
4 >                     ^
5 >                      ^^^^^^^^^^->
1 >.
2 >        
3 >            something
4 >                      { export class someClass {} }
1 >Emitted(49, 9) Source(24, 47) + SourceIndex(3)
2 >Emitted(49, 13) Source(24, 47) + SourceIndex(3)
3 >Emitted(49, 22) Source(24, 56) + SourceIndex(3)
4 >Emitted(49, 23) Source(24, 86) + SourceIndex(3)
---
>>>        (function (something) {
1->^^^^^^^^
2 >        ^^^^^^^^^^^
3 >                   ^^^^^^^^^
4 >                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >        
3 >                   something
1->Emitted(50, 9) Source(24, 47) + SourceIndex(3)
2 >Emitted(50, 20) Source(24, 47) + SourceIndex(3)
3 >Emitted(50, 29) Source(24, 56) + SourceIndex(3)
---
>>>            var someClass = /** @class */ (function () {
1->^^^^^^^^^^^^
2 >            ^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1-> { 
1->Emitted(51, 13) Source(24, 59) + SourceIndex(3)
---
>>>                function someClass() {
1->^^^^^^^^^^^^^^^^
2 >                ^^->
1->
1->Emitted(52, 17) Source(24, 59) + SourceIndex(3)
---
>>>                }
1->^^^^^^^^^^^^^^^^
2 >                ^
3 >                 ^^^^^^^^^^^^^^^^^->
1->export class someClass {
2 >                }
1->Emitted(53, 17) Source(24, 83) + SourceIndex(3)
2 >Emitted(53, 18) Source(24, 84) + SourceIndex(3)
---
>>>                return someClass;
1->^^^^^^^^^^^^^^^^
2 >                ^^^^^^^^^^^^^^^^
1->
2 >                }
1->Emitted(54, 17) Source(24, 83) + SourceIndex(3)
2 >Emitted(54, 33) Source(24, 84) + SourceIndex(3)
---
>>>            }());
1 >^^^^^^^^^^^^
2 >            ^
3 >             
4 >             ^^^^
5 >                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >            }
3 >             
4 >             export class someClass {}
1 >Emitted(55, 13) Source(24, 83) + SourceIndex(3)
2 >Emitted(55, 14) Source(24, 84) + SourceIndex(3)
3 >Emitted(55, 14) Source(24, 59) + SourceIndex(3)
4 >Emitted(55, 18) Source(24, 84) + SourceIndex(3)
---
>>>            something.someClass = someClass;
1->^^^^^^^^^^^^
2 >            ^^^^^^^^^^^^^^^^^^^
3 >                               ^^^^^^^^^^^^
4 >                                           ^
5 >                                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >            someClass
3 >                                {}
4 >                                           
1->Emitted(56, 13) Source(24, 72) + SourceIndex(3)
2 >Emitted(56, 32) Source(24, 81) + SourceIndex(3)
3 >Emitted(56, 44) Source(24, 84) + SourceIndex(3)
4 >Emitted(56, 45) Source(24, 84) + SourceIndex(3)
---
>>>        })(something = someOther.something || (someOther.something = {}));
1->^^^^^^^^
2 >        ^
3 >         ^^
4 >           ^^^^^^^^^
5 >                    ^^^
6 >                       ^^^^^^^^^^^^^^^^^^^
7 >                                          ^^^^^
8 >                                               ^^^^^^^^^^^^^^^^^^^
9 >                                                                  ^^^^^^^^
1-> 
2 >        }
3 >         
4 >           something
5 >                    
6 >                       something
7 >                                          
8 >                                               something
9 >                                                                   { export class someClass {} }
1->Emitted(57, 9) Source(24, 85) + SourceIndex(3)
2 >Emitted(57, 10) Source(24, 86) + SourceIndex(3)
3 >Emitted(57, 12) Source(24, 47) + SourceIndex(3)
4 >Emitted(57, 21) Source(24, 56) + SourceIndex(3)
5 >Emitted(57, 24) Source(24, 47) + SourceIndex(3)
6 >Emitted(57, 43) Source(24, 56) + SourceIndex(3)
7 >Emitted(57, 48) Source(24, 47) + SourceIndex(3)
8 >Emitted(57, 67) Source(24, 56) + SourceIndex(3)
9 >Emitted(57, 75) Source(24, 86) + SourceIndex(3)
---
>>>    })(someOther = normalN.someOther || (normalN.someOther = {}));
1 >^^^^
2 >    ^
3 >     ^^
4 >       ^^^^^^^^^
5 >                ^^^
6 >                   ^^^^^^^^^^^^^^^^^
7 >                                    ^^^^^
8 >                                         ^^^^^^^^^^^^^^^^^
9 >                                                          ^^^^^^^^
1 >
2 >    }
3 >     
4 >       someOther
5 >                
6 >                   someOther
7 >                                    
8 >                                         someOther
9 >                                                          .something { export class someClass {} }
1 >Emitted(58, 5) Source(24, 85) + SourceIndex(3)
2 >Emitted(58, 6) Source(24, 86) + SourceIndex(3)
3 >Emitted(58, 8) Source(24, 37) + SourceIndex(3)
4 >Emitted(58, 17) Source(24, 46) + SourceIndex(3)
5 >Emitted(58, 20) Source(24, 37) + SourceIndex(3)
6 >Emitted(58, 37) Source(24, 46) + SourceIndex(3)
7 >Emitted(58, 42) Source(24, 37) + SourceIndex(3)
8 >Emitted(58, 59) Source(24, 46) + SourceIndex(3)
9 >Emitted(58, 67) Source(24, 86) + SourceIndex(3)
---
>>>    /**@internal*/ normalN.someImport = someNamespace.C;
1 >^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^^^^^^^^^^^^^^^
5 >                                     ^^^
6 >                                        ^^^^^^^^^^^^^
7 >                                                     ^
8 >                                                      ^
9 >                                                       ^
1 >
  >    
2 >    /**@internal*/
3 >                   export import 
4 >                   someImport
5 >                                      = 
6 >                                        someNamespace
7 >                                                     .
8 >                                                      C
9 >                                                       ;
1 >Emitted(59, 5) Source(25, 5) + SourceIndex(3)
2 >Emitted(59, 19) Source(25, 19) + SourceIndex(3)
3 >Emitted(59, 20) Source(25, 34) + SourceIndex(3)
4 >Emitted(59, 38) Source(25, 44) + SourceIndex(3)
5 >Emitted(59, 41) Source(25, 47) + SourceIndex(3)
6 >Emitted(59, 54) Source(25, 60) + SourceIndex(3)
7 >Emitted(59, 55) Source(25, 61) + SourceIndex(3)
8 >Emitted(59, 56) Source(25, 62) + SourceIndex(3)
9 >Emitted(59, 57) Source(25, 63) + SourceIndex(3)
---
>>>    /**@internal*/ normalN.internalConst = 10;
1 >^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^^^^^^^^^^^^^^^^^^
5 >                                        ^^^
6 >                                           ^^
7 >                                             ^
1 >
  >    /**@internal*/ export type internalType = internalC;
  >    
2 >    /**@internal*/
3 >                   export const 
4 >                   internalConst
5 >                                         = 
6 >                                           10
7 >                                             ;
1 >Emitted(60, 5) Source(27, 5) + SourceIndex(3)
2 >Emitted(60, 19) Source(27, 19) + SourceIndex(3)
3 >Emitted(60, 20) Source(27, 33) + SourceIndex(3)
4 >Emitted(60, 41) Source(27, 46) + SourceIndex(3)
5 >Emitted(60, 44) Source(27, 49) + SourceIndex(3)
6 >Emitted(60, 46) Source(27, 51) + SourceIndex(3)
7 >Emitted(60, 47) Source(27, 52) + SourceIndex(3)
---
>>>    /**@internal*/ var internalEnum;
1 >^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^
5 >                       ^^^^^^^^^^^^
1 >
  >    
2 >    /**@internal*/
3 >                   
4 >                   export enum 
5 >                       internalEnum { a, b, c }
1 >Emitted(61, 5) Source(28, 5) + SourceIndex(3)
2 >Emitted(61, 19) Source(28, 19) + SourceIndex(3)
3 >Emitted(61, 20) Source(28, 20) + SourceIndex(3)
4 >Emitted(61, 24) Source(28, 32) + SourceIndex(3)
5 >Emitted(61, 36) Source(28, 56) + SourceIndex(3)
---
>>>    (function (internalEnum) {
1 >^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^^^^^^^
4 >                           ^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >    export enum 
3 >               internalEnum
1 >Emitted(62, 5) Source(28, 20) + SourceIndex(3)
2 >Emitted(62, 16) Source(28, 32) + SourceIndex(3)
3 >Emitted(62, 28) Source(28, 44) + SourceIndex(3)
---
>>>        internalEnum[internalEnum["a"] = 0] = "a";
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                                 ^
4 >                                                  ^->
1-> { 
2 >        a
3 >                                                 
1->Emitted(63, 9) Source(28, 47) + SourceIndex(3)
2 >Emitted(63, 50) Source(28, 48) + SourceIndex(3)
3 >Emitted(63, 51) Source(28, 48) + SourceIndex(3)
---
>>>        internalEnum[internalEnum["b"] = 1] = "b";
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                                 ^
4 >                                                  ^->
1->, 
2 >        b
3 >                                                 
1->Emitted(64, 9) Source(28, 50) + SourceIndex(3)
2 >Emitted(64, 50) Source(28, 51) + SourceIndex(3)
3 >Emitted(64, 51) Source(28, 51) + SourceIndex(3)
---
>>>        internalEnum[internalEnum["c"] = 2] = "c";
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                                 ^
4 >                                                  ^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->, 
2 >        c
3 >                                                 
1->Emitted(65, 9) Source(28, 53) + SourceIndex(3)
2 >Emitted(65, 50) Source(28, 54) + SourceIndex(3)
3 >Emitted(65, 51) Source(28, 54) + SourceIndex(3)
---
>>>    })(internalEnum = normalN.internalEnum || (normalN.internalEnum = {}));
1->^^^^
2 >    ^
3 >     ^^
4 >       ^^^^^^^^^^^^
5 >                   ^^^
6 >                      ^^^^^^^^^^^^^^^^^^^^
7 >                                          ^^^^^
8 >                                               ^^^^^^^^^^^^^^^^^^^^
9 >                                                                   ^^^^^^^^
1-> 
2 >    }
3 >     
4 >       internalEnum
5 >                   
6 >                      internalEnum
7 >                                          
8 >                                               internalEnum
9 >                                                                    { a, b, c }
1->Emitted(66, 5) Source(28, 55) + SourceIndex(3)
2 >Emitted(66, 6) Source(28, 56) + SourceIndex(3)
3 >Emitted(66, 8) Source(28, 32) + SourceIndex(3)
4 >Emitted(66, 20) Source(28, 44) + SourceIndex(3)
5 >Emitted(66, 23) Source(28, 32) + SourceIndex(3)
6 >Emitted(66, 43) Source(28, 44) + SourceIndex(3)
7 >Emitted(66, 48) Source(28, 32) + SourceIndex(3)
8 >Emitted(66, 68) Source(28, 44) + SourceIndex(3)
9 >Emitted(66, 76) Source(28, 56) + SourceIndex(3)
---
>>>})(normalN || (normalN = {}));
1 >
2 >^
3 > ^^
4 >   ^^^^^^^
5 >          ^^^^^
6 >               ^^^^^^^
7 >                      ^^^^^^^^
8 >                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
3 > 
4 >   normalN
5 >          
6 >               normalN
7 >                       {
  >                          /**@internal*/ export class C { }
  >                          /**@internal*/ export function foo() {}
  >                          /**@internal*/ export namespace someNamespace { export class C {} }
  >                          /**@internal*/ export namespace someOther.something { export class someClass {} }
  >                          /**@internal*/ export import someImport = someNamespace.C;
  >                          /**@internal*/ export type internalType = internalC;
  >                          /**@internal*/ export const internalConst = 10;
  >                          /**@internal*/ export enum internalEnum { a, b, c }
  >                      }
1 >Emitted(67, 1) Source(29, 1) + SourceIndex(3)
2 >Emitted(67, 2) Source(29, 2) + SourceIndex(3)
3 >Emitted(67, 4) Source(20, 11) + SourceIndex(3)
4 >Emitted(67, 11) Source(20, 18) + SourceIndex(3)
5 >Emitted(67, 16) Source(20, 11) + SourceIndex(3)
6 >Emitted(67, 23) Source(20, 18) + SourceIndex(3)
7 >Emitted(67, 31) Source(29, 2) + SourceIndex(3)
---
>>>/**@internal*/ var internalC = /** @class */ (function () {
1->
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^^^^^^^^^->
1->
  >
2 >/**@internal*/
3 >               
1->Emitted(68, 1) Source(30, 1) + SourceIndex(3)
2 >Emitted(68, 15) Source(30, 15) + SourceIndex(3)
3 >Emitted(68, 16) Source(30, 16) + SourceIndex(3)
---
>>>    function internalC() {
1->^^^^
2 >    ^^->
1->
1->Emitted(69, 5) Source(30, 16) + SourceIndex(3)
---
>>>    }
1->^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^^^^->
1->class internalC {
2 >    }
1->Emitted(70, 5) Source(30, 33) + SourceIndex(3)
2 >Emitted(70, 6) Source(30, 34) + SourceIndex(3)
---
>>>    return internalC;
1->^^^^
2 >    ^^^^^^^^^^^^^^^^
1->
2 >    }
1->Emitted(71, 5) Source(30, 33) + SourceIndex(3)
2 >Emitted(71, 21) Source(30, 34) + SourceIndex(3)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 > class internalC {}
1 >Emitted(72, 1) Source(30, 33) + SourceIndex(3)
2 >Emitted(72, 2) Source(30, 34) + SourceIndex(3)
3 >Emitted(72, 2) Source(30, 16) + SourceIndex(3)
4 >Emitted(72, 6) Source(30, 34) + SourceIndex(3)
---
>>>/**@internal*/ function internalfoo() { }
1->
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^^^^^^
5 >                        ^^^^^^^^^^^
6 >                                   ^^^^^
7 >                                        ^
1->
  >
2 >/**@internal*/
3 >               
4 >               function 
5 >                        internalfoo
6 >                                   () {
7 >                                        }
1->Emitted(73, 1) Source(31, 1) + SourceIndex(3)
2 >Emitted(73, 15) Source(31, 15) + SourceIndex(3)
3 >Emitted(73, 16) Source(31, 16) + SourceIndex(3)
4 >Emitted(73, 25) Source(31, 25) + SourceIndex(3)
5 >Emitted(73, 36) Source(31, 36) + SourceIndex(3)
6 >Emitted(73, 41) Source(31, 40) + SourceIndex(3)
7 >Emitted(73, 42) Source(31, 41) + SourceIndex(3)
---
>>>/**@internal*/ var internalNamespace;
1 >
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^
5 >                   ^^^^^^^^^^^^^^^^^
6 >                                    ^
1 >
  >
2 >/**@internal*/
3 >               
4 >               namespace 
5 >                   internalNamespace
6 >                                     { export class someClass {} }
1 >Emitted(74, 1) Source(32, 1) + SourceIndex(3)
2 >Emitted(74, 15) Source(32, 15) + SourceIndex(3)
3 >Emitted(74, 16) Source(32, 16) + SourceIndex(3)
4 >Emitted(74, 20) Source(32, 26) + SourceIndex(3)
5 >Emitted(74, 37) Source(32, 43) + SourceIndex(3)
6 >Emitted(74, 38) Source(32, 73) + SourceIndex(3)
---
>>>(function (internalNamespace) {
1 >
2 >^^^^^^^^^^^
3 >           ^^^^^^^^^^^^^^^^^
4 >                            ^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >namespace 
3 >           internalNamespace
1 >Emitted(75, 1) Source(32, 16) + SourceIndex(3)
2 >Emitted(75, 12) Source(32, 26) + SourceIndex(3)
3 >Emitted(75, 29) Source(32, 43) + SourceIndex(3)
---
>>>    var someClass = /** @class */ (function () {
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1-> { 
1->Emitted(76, 5) Source(32, 46) + SourceIndex(3)
---
>>>        function someClass() {
1->^^^^^^^^
2 >        ^^->
1->
1->Emitted(77, 9) Source(32, 46) + SourceIndex(3)
---
>>>        }
1->^^^^^^^^
2 >        ^
3 >         ^^^^^^^^^^^^^^^^^->
1->export class someClass {
2 >        }
1->Emitted(78, 9) Source(32, 70) + SourceIndex(3)
2 >Emitted(78, 10) Source(32, 71) + SourceIndex(3)
---
>>>        return someClass;
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^
1->
2 >        }
1->Emitted(79, 9) Source(32, 70) + SourceIndex(3)
2 >Emitted(79, 25) Source(32, 71) + SourceIndex(3)
---
>>>    }());
1 >^^^^
2 >    ^
3 >     
4 >     ^^^^
5 >         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >    }
3 >     
4 >     export class someClass {}
1 >Emitted(80, 5) Source(32, 70) + SourceIndex(3)
2 >Emitted(80, 6) Source(32, 71) + SourceIndex(3)
3 >Emitted(80, 6) Source(32, 46) + SourceIndex(3)
4 >Emitted(80, 10) Source(32, 71) + SourceIndex(3)
---
>>>    internalNamespace.someClass = someClass;
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                               ^^^^^^^^^^^^
4 >                                           ^
5 >                                            ^^^^^^^->
1->
2 >    someClass
3 >                                {}
4 >                                           
1->Emitted(81, 5) Source(32, 59) + SourceIndex(3)
2 >Emitted(81, 32) Source(32, 68) + SourceIndex(3)
3 >Emitted(81, 44) Source(32, 71) + SourceIndex(3)
4 >Emitted(81, 45) Source(32, 71) + SourceIndex(3)
---
>>>})(internalNamespace || (internalNamespace = {}));
1->
2 >^
3 > ^^
4 >   ^^^^^^^^^^^^^^^^^
5 >                    ^^^^^
6 >                         ^^^^^^^^^^^^^^^^^
7 >                                          ^^^^^^^^
1-> 
2 >}
3 > 
4 >   internalNamespace
5 >                    
6 >                         internalNamespace
7 >                                           { export class someClass {} }
1->Emitted(82, 1) Source(32, 72) + SourceIndex(3)
2 >Emitted(82, 2) Source(32, 73) + SourceIndex(3)
3 >Emitted(82, 4) Source(32, 26) + SourceIndex(3)
4 >Emitted(82, 21) Source(32, 43) + SourceIndex(3)
5 >Emitted(82, 26) Source(32, 26) + SourceIndex(3)
6 >Emitted(82, 43) Source(32, 43) + SourceIndex(3)
7 >Emitted(82, 51) Source(32, 73) + SourceIndex(3)
---
>>>/**@internal*/ var internalOther;
1 >
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^
5 >                   ^^^^^^^^^^^^^
6 >                                ^
1 >
  >
2 >/**@internal*/
3 >               
4 >               namespace 
5 >                   internalOther
6 >                                .something { export class someClass {} }
1 >Emitted(83, 1) Source(33, 1) + SourceIndex(3)
2 >Emitted(83, 15) Source(33, 15) + SourceIndex(3)
3 >Emitted(83, 16) Source(33, 16) + SourceIndex(3)
4 >Emitted(83, 20) Source(33, 26) + SourceIndex(3)
5 >Emitted(83, 33) Source(33, 39) + SourceIndex(3)
6 >Emitted(83, 34) Source(33, 79) + SourceIndex(3)
---
>>>(function (internalOther) {
1 >
2 >^^^^^^^^^^^
3 >           ^^^^^^^^^^^^^
1 >
2 >namespace 
3 >           internalOther
1 >Emitted(84, 1) Source(33, 16) + SourceIndex(3)
2 >Emitted(84, 12) Source(33, 26) + SourceIndex(3)
3 >Emitted(84, 25) Source(33, 39) + SourceIndex(3)
---
>>>    var something;
1 >^^^^
2 >    ^^^^
3 >        ^^^^^^^^^
4 >                 ^
5 >                  ^^^^^^^^^^->
1 >.
2 >    
3 >        something
4 >                  { export class someClass {} }
1 >Emitted(85, 5) Source(33, 40) + SourceIndex(3)
2 >Emitted(85, 9) Source(33, 40) + SourceIndex(3)
3 >Emitted(85, 18) Source(33, 49) + SourceIndex(3)
4 >Emitted(85, 19) Source(33, 79) + SourceIndex(3)
---
>>>    (function (something) {
1->^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^^^^
4 >                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >    
3 >               something
1->Emitted(86, 5) Source(33, 40) + SourceIndex(3)
2 >Emitted(86, 16) Source(33, 40) + SourceIndex(3)
3 >Emitted(86, 25) Source(33, 49) + SourceIndex(3)
---
>>>        var someClass = /** @class */ (function () {
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1-> { 
1->Emitted(87, 9) Source(33, 52) + SourceIndex(3)
---
>>>            function someClass() {
1->^^^^^^^^^^^^
2 >            ^^->
1->
1->Emitted(88, 13) Source(33, 52) + SourceIndex(3)
---
>>>            }
1->^^^^^^^^^^^^
2 >            ^
3 >             ^^^^^^^^^^^^^^^^^->
1->export class someClass {
2 >            }
1->Emitted(89, 13) Source(33, 76) + SourceIndex(3)
2 >Emitted(89, 14) Source(33, 77) + SourceIndex(3)
---
>>>            return someClass;
1->^^^^^^^^^^^^
2 >            ^^^^^^^^^^^^^^^^
1->
2 >            }
1->Emitted(90, 13) Source(33, 76) + SourceIndex(3)
2 >Emitted(90, 29) Source(33, 77) + SourceIndex(3)
---
>>>        }());
1 >^^^^^^^^
2 >        ^
3 >         
4 >         ^^^^
5 >             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >        }
3 >         
4 >         export class someClass {}
1 >Emitted(91, 9) Source(33, 76) + SourceIndex(3)
2 >Emitted(91, 10) Source(33, 77) + SourceIndex(3)
3 >Emitted(91, 10) Source(33, 52) + SourceIndex(3)
4 >Emitted(91, 14) Source(33, 77) + SourceIndex(3)
---
>>>        something.someClass = someClass;
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^^
3 >                           ^^^^^^^^^^^^
4 >                                       ^
5 >                                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >        someClass
3 >                            {}
4 >                                       
1->Emitted(92, 9) Source(33, 65) + SourceIndex(3)
2 >Emitted(92, 28) Source(33, 74) + SourceIndex(3)
3 >Emitted(92, 40) Source(33, 77) + SourceIndex(3)
4 >Emitted(92, 41) Source(33, 77) + SourceIndex(3)
---
>>>    })(something = internalOther.something || (internalOther.something = {}));
1->^^^^
2 >    ^
3 >     ^^
4 >       ^^^^^^^^^
5 >                ^^^
6 >                   ^^^^^^^^^^^^^^^^^^^^^^^
7 >                                          ^^^^^
8 >                                               ^^^^^^^^^^^^^^^^^^^^^^^
9 >                                                                      ^^^^^^^^
1-> 
2 >    }
3 >     
4 >       something
5 >                
6 >                   something
7 >                                          
8 >                                               something
9 >                                                                       { export class someClass {} }
1->Emitted(93, 5) Source(33, 78) + SourceIndex(3)
2 >Emitted(93, 6) Source(33, 79) + SourceIndex(3)
3 >Emitted(93, 8) Source(33, 40) + SourceIndex(3)
4 >Emitted(93, 17) Source(33, 49) + SourceIndex(3)
5 >Emitted(93, 20) Source(33, 40) + SourceIndex(3)
6 >Emitted(93, 43) Source(33, 49) + SourceIndex(3)
7 >Emitted(93, 48) Source(33, 40) + SourceIndex(3)
8 >Emitted(93, 71) Source(33, 49) + SourceIndex(3)
9 >Emitted(93, 79) Source(33, 79) + SourceIndex(3)
---
>>>})(internalOther || (internalOther = {}));
1 >
2 >^
3 > ^^
4 >   ^^^^^^^^^^^^^
5 >                ^^^^^
6 >                     ^^^^^^^^^^^^^
7 >                                  ^^^^^^^^
8 >                                          ^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 >   internalOther
5 >                
6 >                     internalOther
7 >                                  .something { export class someClass {} }
1 >Emitted(94, 1) Source(33, 78) + SourceIndex(3)
2 >Emitted(94, 2) Source(33, 79) + SourceIndex(3)
3 >Emitted(94, 4) Source(33, 26) + SourceIndex(3)
4 >Emitted(94, 17) Source(33, 39) + SourceIndex(3)
5 >Emitted(94, 22) Source(33, 26) + SourceIndex(3)
6 >Emitted(94, 35) Source(33, 39) + SourceIndex(3)
7 >Emitted(94, 43) Source(33, 79) + SourceIndex(3)
---
>>>/**@internal*/ var internalImport = internalNamespace.someClass;
1->
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^
5 >                   ^^^^^^^^^^^^^^
6 >                                 ^^^
7 >                                    ^^^^^^^^^^^^^^^^^
8 >                                                     ^
9 >                                                      ^^^^^^^^^
10>                                                               ^
1->
  >
2 >/**@internal*/
3 >               
4 >               import 
5 >                   internalImport
6 >                                  = 
7 >                                    internalNamespace
8 >                                                     .
9 >                                                      someClass
10>                                                               ;
1->Emitted(95, 1) Source(34, 1) + SourceIndex(3)
2 >Emitted(95, 15) Source(34, 15) + SourceIndex(3)
3 >Emitted(95, 16) Source(34, 16) + SourceIndex(3)
4 >Emitted(95, 20) Source(34, 23) + SourceIndex(3)
5 >Emitted(95, 34) Source(34, 37) + SourceIndex(3)
6 >Emitted(95, 37) Source(34, 40) + SourceIndex(3)
7 >Emitted(95, 54) Source(34, 57) + SourceIndex(3)
8 >Emitted(95, 55) Source(34, 58) + SourceIndex(3)
9 >Emitted(95, 64) Source(34, 67) + SourceIndex(3)
10>Emitted(95, 65) Source(34, 68) + SourceIndex(3)
---
>>>/**@internal*/ var internalConst = 10;
1 >
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^
5 >                   ^^^^^^^^^^^^^
6 >                                ^^^
7 >                                   ^^
8 >                                     ^
1 >
  >/**@internal*/ type internalType = internalC;
  >
2 >/**@internal*/
3 >               
4 >               const 
5 >                   internalConst
6 >                                 = 
7 >                                   10
8 >                                     ;
1 >Emitted(96, 1) Source(36, 1) + SourceIndex(3)
2 >Emitted(96, 15) Source(36, 15) + SourceIndex(3)
3 >Emitted(96, 16) Source(36, 16) + SourceIndex(3)
4 >Emitted(96, 20) Source(36, 22) + SourceIndex(3)
5 >Emitted(96, 33) Source(36, 35) + SourceIndex(3)
6 >Emitted(96, 36) Source(36, 38) + SourceIndex(3)
7 >Emitted(96, 38) Source(36, 40) + SourceIndex(3)
8 >Emitted(96, 39) Source(36, 41) + SourceIndex(3)
---
>>>/**@internal*/ var internalEnum;
1 >
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^
5 >                   ^^^^^^^^^^^^
1 >
  >
2 >/**@internal*/
3 >               
4 >               enum 
5 >                   internalEnum { a, b, c }
1 >Emitted(97, 1) Source(37, 1) + SourceIndex(3)
2 >Emitted(97, 15) Source(37, 15) + SourceIndex(3)
3 >Emitted(97, 16) Source(37, 16) + SourceIndex(3)
4 >Emitted(97, 20) Source(37, 21) + SourceIndex(3)
5 >Emitted(97, 32) Source(37, 45) + SourceIndex(3)
---
>>>(function (internalEnum) {
1 >
2 >^^^^^^^^^^^
3 >           ^^^^^^^^^^^^
4 >                       ^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >enum 
3 >           internalEnum
1 >Emitted(98, 1) Source(37, 16) + SourceIndex(3)
2 >Emitted(98, 12) Source(37, 21) + SourceIndex(3)
3 >Emitted(98, 24) Source(37, 33) + SourceIndex(3)
---
>>>    internalEnum[internalEnum["a"] = 0] = "a";
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                             ^
4 >                                              ^->
1-> { 
2 >    a
3 >                                             
1->Emitted(99, 5) Source(37, 36) + SourceIndex(3)
2 >Emitted(99, 46) Source(37, 37) + SourceIndex(3)
3 >Emitted(99, 47) Source(37, 37) + SourceIndex(3)
---
>>>    internalEnum[internalEnum["b"] = 1] = "b";
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                             ^
4 >                                              ^->
1->, 
2 >    b
3 >                                             
1->Emitted(100, 5) Source(37, 39) + SourceIndex(3)
2 >Emitted(100, 46) Source(37, 40) + SourceIndex(3)
3 >Emitted(100, 47) Source(37, 40) + SourceIndex(3)
---
>>>    internalEnum[internalEnum["c"] = 2] = "c";
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                             ^
1->, 
2 >    c
3 >                                             
1->Emitted(101, 5) Source(37, 42) + SourceIndex(3)
2 >Emitted(101, 46) Source(37, 43) + SourceIndex(3)
3 >Emitted(101, 47) Source(37, 43) + SourceIndex(3)
---
>>>})(internalEnum || (internalEnum = {}));
1 >
2 >^
3 > ^^
4 >   ^^^^^^^^^^^^
5 >               ^^^^^
6 >                    ^^^^^^^^^^^^
7 >                                ^^^^^^^^
1 > 
2 >}
3 > 
4 >   internalEnum
5 >               
6 >                    internalEnum
7 >                                 { a, b, c }
1 >Emitted(102, 1) Source(37, 44) + SourceIndex(3)
2 >Emitted(102, 2) Source(37, 45) + SourceIndex(3)
3 >Emitted(102, 4) Source(37, 21) + SourceIndex(3)
4 >Emitted(102, 16) Source(37, 33) + SourceIndex(3)
5 >Emitted(102, 21) Source(37, 21) + SourceIndex(3)
6 >Emitted(102, 33) Source(37, 33) + SourceIndex(3)
7 >Emitted(102, 41) Source(37, 45) + SourceIndex(3)
---
-------------------------------------------------------------------
emittedFile:/src/2/second-output.js
sourceFile:../second/second_part2.ts
-------------------------------------------------------------------
>>>var C = /** @class */ (function () {
1 >
2 >^^^^^^^^^^^^^^^^^^^->
1 >
1 >Emitted(103, 1) Source(1, 1) + SourceIndex(4)
---
>>>    function C() {
1->^^^^
2 >    ^^->
1->
1->Emitted(104, 5) Source(1, 1) + SourceIndex(4)
---
>>>    }
1->^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->class C {
  >    doSomething() {
  >        console.log("something got done");
  >    }
  >
2 >    }
1->Emitted(105, 5) Source(5, 1) + SourceIndex(4)
2 >Emitted(105, 6) Source(5, 2) + SourceIndex(4)
---
>>>    C.prototype.doSomething = function () {
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^
3 >                           ^^^
4 >                              ^^^^^^^^^^^^^->
1->
2 >    doSomething
3 >                           
1->Emitted(106, 5) Source(2, 5) + SourceIndex(4)
2 >Emitted(106, 28) Source(2, 16) + SourceIndex(4)
3 >Emitted(106, 31) Source(2, 5) + SourceIndex(4)
---
>>>        console.log("something got done");
1->^^^^^^^^
2 >        ^^^^^^^
3 >               ^
4 >                ^^^
5 >                   ^
6 >                    ^^^^^^^^^^^^^^^^^^^^
7 >                                        ^
8 >                                         ^
1->doSomething() {
  >        
2 >        console
3 >               .
4 >                log
5 >                   (
6 >                    "something got done"
7 >                                        )
8 >                                         ;
1->Emitted(107, 9) Source(3, 9) + SourceIndex(4)
2 >Emitted(107, 16) Source(3, 16) + SourceIndex(4)
3 >Emitted(107, 17) Source(3, 17) + SourceIndex(4)
4 >Emitted(107, 20) Source(3, 20) + SourceIndex(4)
5 >Emitted(107, 21) Source(3, 21) + SourceIndex(4)
6 >Emitted(107, 41) Source(3, 41) + SourceIndex(4)
7 >Emitted(107, 42) Source(3, 42) + SourceIndex(4)
8 >Emitted(107, 43) Source(3, 43) + SourceIndex(4)
---
>>>    };
1 >^^^^
2 >    ^
3 >     ^^^^^^^^^->
1 >
  >    
2 >    }
1 >Emitted(108, 5) Source(4, 5) + SourceIndex(4)
2 >Emitted(108, 6) Source(4, 6) + SourceIndex(4)
---
>>>    return C;
1->^^^^
2 >    ^^^^^^^^
1->
  >
2 >    }
1->Emitted(109, 5) Source(5, 1) + SourceIndex(4)
2 >Emitted(109, 13) Source(5, 2) + SourceIndex(4)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 > class C {
  >     doSomething() {
  >         console.log("something got done");
  >     }
  > }
1 >Emitted(110, 1) Source(5, 1) + SourceIndex(4)
2 >Emitted(110, 2) Source(5, 2) + SourceIndex(4)
3 >Emitted(110, 2) Source(1, 1) + SourceIndex(4)
4 >Emitted(110, 6) Source(5, 2) + SourceIndex(4)
---
>>>//# sourceMappingURL=second-output.js.map

//// [/src/first/bin/.tsbuildinfo]
{
  "bundle": {
    "commonSourceDirectory": "/src/first/",
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 127,
          "kind": "text"
        },
        {
          "pos": 127,
          "end": 167,
          "kind": "sourceMapUrl"
        }
      ]
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 54,
          "kind": "internal"
        },
        {
          "pos": 56,
          "end": 172,
          "kind": "text"
        },
        {
          "pos": 172,
          "end": 214,
          "kind": "sourceMapUrl"
        }
      ]
    }
  }
}

//// [/src/first/bin/.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/first/bin/first-output.js
----------------------------------------------------------------------
text: (0-127)
var s = "Hello, world";
console.log(s);
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}

----------------------------------------------------------------------
sourceMapUrl: (127-167)
//# sourceMappingURL=first-output.js.map
======================================================================
======================================================================
File:: /src/first/bin/first-output.d.ts
----------------------------------------------------------------------
internal: (0-54)
/**@internal*/ interface TheFirst {
    none: any;
}
----------------------------------------------------------------------
text: (56-172)
declare const s = "Hello, world";
interface NoJsForHereEither {
    none: any;
}
declare function f(): string;

----------------------------------------------------------------------
sourceMapUrl: (172-214)
//# sourceMappingURL=first-output.d.ts.map
======================================================================

//// [/src/first/bin/first-output.js]
var s = "Hello, world";
console.log(s);
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}
//# sourceMappingURL=first-output.js.map

//// [/src/first/bin/first-output.js.map]
{"version":3,"file":"first-output.js","sourceRoot":"","sources":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"names":[],"mappings":"AAIA,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AACf,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACXf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC"}

//// [/src/first/bin/first-output.js.map.baseline.txt]
===================================================================
JsFile: first-output.js
mapUrl: first-output.js.map
sourceRoot: 
sources: ../first_PART1.ts,../first_part2.ts,../first_part3.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_PART1.ts
-------------------------------------------------------------------
>>>var s = "Hello, world";
1 >
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^^^^^^^^^^^
6 >                      ^
1 >/**@internal*/ interface TheFirst {
  >    none: any;
  >}
  >
  >
2 >const 
3 >    s
4 >      = 
5 >        "Hello, world"
6 >                      ;
1 >Emitted(1, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(1, 5) Source(5, 7) + SourceIndex(0)
3 >Emitted(1, 6) Source(5, 8) + SourceIndex(0)
4 >Emitted(1, 9) Source(5, 11) + SourceIndex(0)
5 >Emitted(1, 23) Source(5, 25) + SourceIndex(0)
6 >Emitted(1, 24) Source(5, 26) + SourceIndex(0)
---
>>>console.log(s);
1 >
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^->
1 >
  >
  >interface NoJsForHereEither {
  >    none: any;
  >}
  >
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1 >Emitted(2, 1) Source(11, 1) + SourceIndex(0)
2 >Emitted(2, 8) Source(11, 8) + SourceIndex(0)
3 >Emitted(2, 9) Source(11, 9) + SourceIndex(0)
4 >Emitted(2, 12) Source(11, 12) + SourceIndex(0)
5 >Emitted(2, 13) Source(11, 13) + SourceIndex(0)
6 >Emitted(2, 14) Source(11, 14) + SourceIndex(0)
7 >Emitted(2, 15) Source(11, 15) + SourceIndex(0)
8 >Emitted(2, 16) Source(11, 16) + SourceIndex(0)
---
>>>console.log(s);
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^^^->
1->
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1->Emitted(3, 1) Source(12, 1) + SourceIndex(0)
2 >Emitted(3, 8) Source(12, 8) + SourceIndex(0)
3 >Emitted(3, 9) Source(12, 9) + SourceIndex(0)
4 >Emitted(3, 12) Source(12, 12) + SourceIndex(0)
5 >Emitted(3, 13) Source(12, 13) + SourceIndex(0)
6 >Emitted(3, 14) Source(12, 14) + SourceIndex(0)
7 >Emitted(3, 15) Source(12, 15) + SourceIndex(0)
8 >Emitted(3, 16) Source(12, 16) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_part2.ts
-------------------------------------------------------------------
>>>console.log(f());
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^
1->
2 >console
3 >       .
4 >        log
5 >           (
6 >            f
7 >             ()
8 >               )
9 >                ;
1->Emitted(4, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(4, 8) Source(1, 8) + SourceIndex(1)
3 >Emitted(4, 9) Source(1, 9) + SourceIndex(1)
4 >Emitted(4, 12) Source(1, 12) + SourceIndex(1)
5 >Emitted(4, 13) Source(1, 13) + SourceIndex(1)
6 >Emitted(4, 14) Source(1, 14) + SourceIndex(1)
7 >Emitted(4, 16) Source(1, 16) + SourceIndex(1)
8 >Emitted(4, 17) Source(1, 17) + SourceIndex(1)
9 >Emitted(4, 18) Source(1, 18) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_part3.ts
-------------------------------------------------------------------
>>>function f() {
1 >
2 >^^^^^^^^^
3 >         ^
4 >          ^^^^^^^^^^^^^^^^^^^->
1 >
2 >function 
3 >         f
1 >Emitted(5, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(5, 10) Source(1, 10) + SourceIndex(2)
3 >Emitted(5, 11) Source(1, 11) + SourceIndex(2)
---
>>>    return "JS does hoists";
1->^^^^
2 >    ^^^^^^^
3 >           ^^^^^^^^^^^^^^^^
4 >                           ^
1->() {
  >    
2 >    return 
3 >           "JS does hoists"
4 >                           ;
1->Emitted(6, 5) Source(2, 5) + SourceIndex(2)
2 >Emitted(6, 12) Source(2, 12) + SourceIndex(2)
3 >Emitted(6, 28) Source(2, 28) + SourceIndex(2)
4 >Emitted(6, 29) Source(2, 29) + SourceIndex(2)
---
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
1 >Emitted(7, 1) Source(3, 1) + SourceIndex(2)
2 >Emitted(7, 2) Source(3, 2) + SourceIndex(2)
---
>>>//# sourceMappingURL=first-output.js.map

//// [/src/first/first_PART1.ts]
/**@internal*/ interface TheFirst {
    none: any;
}

const s = "Hello, world";

interface NoJsForHereEither {
    none: any;
}

console.log(s);
console.log(s);

//// [/src/third/thirdjs/output/.tsbuildinfo]
{
  "bundle": {
    "commonSourceDirectory": "/src/third/",
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 3644,
          "kind": "prepend",
          "data": "/src/2/second-output.js",
          "texts": [
            {
              "pos": 0,
              "end": 127,
              "kind": "text"
            },
            {
              "pos": 127,
              "end": 167,
              "kind": "sourceMapUrl"
            },
            {
              "pos": 169,
              "end": 3603,
              "kind": "text"
            },
            {
              "pos": 3603,
              "end": 3644,
              "kind": "sourceMapUrl"
            }
          ]
        },
        {
          "pos": 3646,
          "end": 3682,
          "kind": "text"
        },
        {
          "pos": 3682,
          "end": 3722,
          "kind": "sourceMapUrl"
        }
      ]
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 419,
          "kind": "prepend",
          "data": "/src/2/second-output.d.ts",
          "texts": [
            {
              "pos": 0,
              "end": 54,
              "kind": "internal"
            },
            {
              "pos": 56,
              "end": 172,
              "kind": "text"
            },
            {
              "pos": 172,
              "end": 214,
              "kind": "sourceMapUrl"
            },
            {
              "pos": 216,
              "end": 376,
              "kind": "text"
            },
            {
              "pos": 376,
              "end": 419,
              "kind": "sourceMapUrl"
            }
          ]
        },
        {
          "pos": 421,
          "end": 440,
          "kind": "text"
        },
        {
          "pos": 440,
          "end": 482,
          "kind": "sourceMapUrl"
        }
      ]
    }
  }
}

//// [/src/third/thirdjs/output/.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/third/thirdjs/output/third-output.js
----------------------------------------------------------------------
prepend: (0-3644):: /src/2/second-output.js texts:: 4
>>--------------------------------------------------------------------
text: (0-127)
var s = "Hello, world";
console.log(s);
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}

>>--------------------------------------------------------------------
sourceMapUrl: (127-167)
//# sourceMappingURL=first-output.js.map
>>--------------------------------------------------------------------
text: (169-3603)
var N;
(function (N) {
    function f() {
        console.log('testing');
    }
    f();
})(N || (N = {}));
var normalC = /** @class */ (function () {
    /**@internal*/ function normalC() {
    }
    /**@internal*/ normalC.prototype.method = function () { };
    Object.defineProperty(normalC.prototype, "c", {
        /**@internal*/ get: function () { return 10; },
        /**@internal*/ set: function (val) { },
        enumerable: true,
        configurable: true
    });
    return normalC;
}());
var normalN;
(function (normalN) {
    /**@internal*/ var C = /** @class */ (function () {
        function C() {
        }
        return C;
    }());
    normalN.C = C;
    /**@internal*/ function foo() { }
    normalN.foo = foo;
    /**@internal*/ var someNamespace;
    (function (someNamespace) {
        var C = /** @class */ (function () {
            function C() {
            }
            return C;
        }());
        someNamespace.C = C;
    })(someNamespace = normalN.someNamespace || (normalN.someNamespace = {}));
    /**@internal*/ var someOther;
    (function (someOther) {
        var something;
        (function (something) {
            var someClass = /** @class */ (function () {
                function someClass() {
                }
                return someClass;
            }());
            something.someClass = someClass;
        })(something = someOther.something || (someOther.something = {}));
    })(someOther = normalN.someOther || (normalN.someOther = {}));
    /**@internal*/ normalN.someImport = someNamespace.C;
    /**@internal*/ normalN.internalConst = 10;
    /**@internal*/ var internalEnum;
    (function (internalEnum) {
        internalEnum[internalEnum["a"] = 0] = "a";
        internalEnum[internalEnum["b"] = 1] = "b";
        internalEnum[internalEnum["c"] = 2] = "c";
    })(internalEnum = normalN.internalEnum || (normalN.internalEnum = {}));
})(normalN || (normalN = {}));
/**@internal*/ var internalC = /** @class */ (function () {
    function internalC() {
    }
    return internalC;
}());
/**@internal*/ function internalfoo() { }
/**@internal*/ var internalNamespace;
(function (internalNamespace) {
    var someClass = /** @class */ (function () {
        function someClass() {
        }
        return someClass;
    }());
    internalNamespace.someClass = someClass;
})(internalNamespace || (internalNamespace = {}));
/**@internal*/ var internalOther;
(function (internalOther) {
    var something;
    (function (something) {
        var someClass = /** @class */ (function () {
            function someClass() {
            }
            return someClass;
        }());
        something.someClass = someClass;
    })(something = internalOther.something || (internalOther.something = {}));
})(internalOther || (internalOther = {}));
/**@internal*/ var internalImport = internalNamespace.someClass;
/**@internal*/ var internalConst = 10;
/**@internal*/ var internalEnum;
(function (internalEnum) {
    internalEnum[internalEnum["a"] = 0] = "a";
    internalEnum[internalEnum["b"] = 1] = "b";
    internalEnum[internalEnum["c"] = 2] = "c";
})(internalEnum || (internalEnum = {}));
var C = /** @class */ (function () {
    function C() {
    }
    C.prototype.doSomething = function () {
        console.log("something got done");
    };
    return C;
}());

>>--------------------------------------------------------------------
sourceMapUrl: (3603-3644)
//# sourceMappingURL=second-output.js.map
----------------------------------------------------------------------
text: (3646-3682)
var c = new C();
c.doSomething();

----------------------------------------------------------------------
sourceMapUrl: (3682-3722)
//# sourceMappingURL=third-output.js.map
======================================================================
======================================================================
File:: /src/third/thirdjs/output/third-output.d.ts
----------------------------------------------------------------------
prepend: (0-419):: /src/2/second-output.d.ts texts:: 5
>>--------------------------------------------------------------------
internal: (0-54)
/**@internal*/ interface TheFirst {
    none: any;
}
>>--------------------------------------------------------------------
text: (56-172)
declare const s = "Hello, world";
interface NoJsForHereEither {
    none: any;
}
declare function f(): string;

>>--------------------------------------------------------------------
sourceMapUrl: (172-214)
//# sourceMappingURL=first-output.d.ts.map
>>--------------------------------------------------------------------
text: (216-376)
declare namespace N {
}
declare namespace N {
}
declare class normalC {
}
declare namespace normalN {
}
declare class C {
    doSomething(): void;
}

>>--------------------------------------------------------------------
sourceMapUrl: (376-419)
//# sourceMappingURL=second-output.d.ts.map
----------------------------------------------------------------------
text: (421-440)
declare var c: C;

----------------------------------------------------------------------
sourceMapUrl: (440-482)
//# sourceMappingURL=third-output.d.ts.map
======================================================================

//// [/src/third/thirdjs/output/third-output.js]
var s = "Hello, world";
console.log(s);
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}
//# sourceMappingURL=first-output.js.map
var N;
(function (N) {
    function f() {
        console.log('testing');
    }
    f();
})(N || (N = {}));
var normalC = /** @class */ (function () {
    /**@internal*/ function normalC() {
    }
    /**@internal*/ normalC.prototype.method = function () { };
    Object.defineProperty(normalC.prototype, "c", {
        /**@internal*/ get: function () { return 10; },
        /**@internal*/ set: function (val) { },
        enumerable: true,
        configurable: true
    });
    return normalC;
}());
var normalN;
(function (normalN) {
    /**@internal*/ var C = /** @class */ (function () {
        function C() {
        }
        return C;
    }());
    normalN.C = C;
    /**@internal*/ function foo() { }
    normalN.foo = foo;
    /**@internal*/ var someNamespace;
    (function (someNamespace) {
        var C = /** @class */ (function () {
            function C() {
            }
            return C;
        }());
        someNamespace.C = C;
    })(someNamespace = normalN.someNamespace || (normalN.someNamespace = {}));
    /**@internal*/ var someOther;
    (function (someOther) {
        var something;
        (function (something) {
            var someClass = /** @class */ (function () {
                function someClass() {
                }
                return someClass;
            }());
            something.someClass = someClass;
        })(something = someOther.something || (someOther.something = {}));
    })(someOther = normalN.someOther || (normalN.someOther = {}));
    /**@internal*/ normalN.someImport = someNamespace.C;
    /**@internal*/ normalN.internalConst = 10;
    /**@internal*/ var internalEnum;
    (function (internalEnum) {
        internalEnum[internalEnum["a"] = 0] = "a";
        internalEnum[internalEnum["b"] = 1] = "b";
        internalEnum[internalEnum["c"] = 2] = "c";
    })(internalEnum = normalN.internalEnum || (normalN.internalEnum = {}));
})(normalN || (normalN = {}));
/**@internal*/ var internalC = /** @class */ (function () {
    function internalC() {
    }
    return internalC;
}());
/**@internal*/ function internalfoo() { }
/**@internal*/ var internalNamespace;
(function (internalNamespace) {
    var someClass = /** @class */ (function () {
        function someClass() {
        }
        return someClass;
    }());
    internalNamespace.someClass = someClass;
})(internalNamespace || (internalNamespace = {}));
/**@internal*/ var internalOther;
(function (internalOther) {
    var something;
    (function (something) {
        var someClass = /** @class */ (function () {
            function someClass() {
            }
            return someClass;
        }());
        something.someClass = someClass;
    })(something = internalOther.something || (internalOther.something = {}));
})(internalOther || (internalOther = {}));
/**@internal*/ var internalImport = internalNamespace.someClass;
/**@internal*/ var internalConst = 10;
/**@internal*/ var internalEnum;
(function (internalEnum) {
    internalEnum[internalEnum["a"] = 0] = "a";
    internalEnum[internalEnum["b"] = 1] = "b";
    internalEnum[internalEnum["c"] = 2] = "c";
})(internalEnum || (internalEnum = {}));
var C = /** @class */ (function () {
    function C() {
    }
    C.prototype.doSomething = function () {
        console.log("something got done");
    };
    return C;
}());
//# sourceMappingURL=second-output.js.map
var c = new C();
c.doSomething();
//# sourceMappingURL=third-output.js.map

//// [/src/third/thirdjs/output/third-output.js.map]
{"version":3,"file":"third-output.js","sourceRoot":"","sources":["../../../first/first_PART1.ts","../../../first/first_part2.ts","../../../first/first_part3.ts","../../../second/second_part1.ts","../../../second/second_part2.ts","../../third_part1.ts"],"names":[],"mappings":"AAIA,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AACf,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACXf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC;;ACED,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;AAED;IACI,cAAc,CAAC;IAAgB,CAAC;IAEhC,cAAc,CAAC,wBAAM,GAAN,cAAW,CAAC;IACZ,sBAAI,sBAAC;QAApB,cAAc,MAAC,cAAU,OAAO,EAAE,CAAC,CAAC,CAAC;QACrC,cAAc,MAAC,UAAM,GAAW,IAAI,CAAC;;;OADA;IAEzC,cAAC;AAAD,CAAC,AAND,IAMC;AACD,IAAU,OAAO,CAShB;AATD,WAAU,OAAO;IACb,cAAc,CAAC;QAAA;QAAiB,CAAC;QAAD,QAAC;IAAD,CAAC,AAAlB,IAAkB;IAAL,SAAC,IAAI,CAAA;IACjC,cAAc,CAAC,SAAgB,GAAG,KAAI,CAAC;IAAR,WAAG,MAAK,CAAA;IACvC,cAAc,CAAC,IAAiB,aAAa,CAAsB;IAApD,WAAiB,aAAa;QAAG;YAAA;YAAgB,CAAC;YAAD,QAAC;QAAD,CAAC,AAAjB,IAAiB;QAAJ,eAAC,IAAG,CAAA;IAAC,CAAC,EAAnC,aAAa,GAAb,qBAAa,KAAb,qBAAa,QAAsB;IACnE,cAAc,CAAC,IAAiB,SAAS,CAAwC;IAAlE,WAAiB,SAAS;QAAC,IAAA,SAAS,CAA8B;QAAvC,WAAA,SAAS;YAAG;gBAAA;gBAAwB,CAAC;gBAAD,gBAAC;YAAD,CAAC,AAAzB,IAAyB;YAAZ,mBAAS,YAAG,CAAA;QAAC,CAAC,EAAvC,SAAS,GAAT,mBAAS,KAAT,mBAAS,QAA8B;IAAD,CAAC,EAAjD,SAAS,GAAT,iBAAS,KAAT,iBAAS,QAAwC;IACjF,cAAc,CAAe,kBAAU,GAAG,aAAa,CAAC,CAAC,CAAC;IAE1D,cAAc,CAAc,qBAAa,GAAG,EAAE,CAAC;IAC/C,cAAc,CAAC,IAAY,YAAwB;IAApC,WAAY,YAAY;QAAG,yCAAC,CAAA;QAAE,yCAAC,CAAA;QAAE,yCAAC,CAAA;IAAC,CAAC,EAAxB,YAAY,GAAZ,oBAAY,KAAZ,oBAAY,QAAY;AACvD,CAAC,EATS,OAAO,KAAP,OAAO,QAShB;AACD,cAAc,CAAC;IAAA;IAAiB,CAAC;IAAD,gBAAC;AAAD,CAAC,AAAlB,IAAkB;AACjC,cAAc,CAAC,SAAS,WAAW,KAAI,CAAC;AACxC,cAAc,CAAC,IAAU,iBAAiB,CAA8B;AAAzD,WAAU,iBAAiB;IAAG;QAAA;QAAwB,CAAC;QAAD,gBAAC;IAAD,CAAC,AAAzB,IAAyB;IAAZ,2BAAS,YAAG,CAAA;AAAC,CAAC,EAA/C,iBAAiB,KAAjB,iBAAiB,QAA8B;AACxE,cAAc,CAAC,IAAU,aAAa,CAAwC;AAA/D,WAAU,aAAa;IAAC,IAAA,SAAS,CAA8B;IAAvC,WAAA,SAAS;QAAG;YAAA;YAAwB,CAAC;YAAD,gBAAC;QAAD,CAAC,AAAzB,IAAyB;QAAZ,mBAAS,YAAG,CAAA;IAAC,CAAC,EAAvC,SAAS,GAAT,uBAAS,KAAT,uBAAS,QAA8B;AAAD,CAAC,EAArD,aAAa,KAAb,aAAa,QAAwC;AAC9E,cAAc,CAAC,IAAO,cAAc,GAAG,iBAAiB,CAAC,SAAS,CAAC;AAEnE,cAAc,CAAC,IAAM,aAAa,GAAG,EAAE,CAAC;AACxC,cAAc,CAAC,IAAK,YAAwB;AAA7B,WAAK,YAAY;IAAG,yCAAC,CAAA;IAAE,yCAAC,CAAA;IAAE,yCAAC,CAAA;AAAC,CAAC,EAAxB,YAAY,KAAZ,YAAY,QAAY;ACpC5C;IAAA;IAIA,CAAC;IAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC;;ACJD,IAAI,CAAC,GAAG,IAAI,CAAC,EAAE,CAAC;AAChB,CAAC,CAAC,WAAW,EAAE,CAAC"}

//// [/src/third/thirdjs/output/third-output.js.map.baseline.txt]
===================================================================
JsFile: third-output.js
mapUrl: third-output.js.map
sourceRoot: 
sources: ../../../first/first_PART1.ts,../../../first/first_part2.ts,../../../first/first_part3.ts,../../../second/second_part1.ts,../../../second/second_part2.ts,../../third_part1.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_PART1.ts
-------------------------------------------------------------------
>>>var s = "Hello, world";
1 >
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^^^^^^^^^^^
6 >                      ^
1 >/**@internal*/ interface TheFirst {
  >    none: any;
  >}
  >
  >
2 >const 
3 >    s
4 >      = 
5 >        "Hello, world"
6 >                      ;
1 >Emitted(1, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(1, 5) Source(5, 7) + SourceIndex(0)
3 >Emitted(1, 6) Source(5, 8) + SourceIndex(0)
4 >Emitted(1, 9) Source(5, 11) + SourceIndex(0)
5 >Emitted(1, 23) Source(5, 25) + SourceIndex(0)
6 >Emitted(1, 24) Source(5, 26) + SourceIndex(0)
---
>>>console.log(s);
1 >
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^->
1 >
  >
  >interface NoJsForHereEither {
  >    none: any;
  >}
  >
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1 >Emitted(2, 1) Source(11, 1) + SourceIndex(0)
2 >Emitted(2, 8) Source(11, 8) + SourceIndex(0)
3 >Emitted(2, 9) Source(11, 9) + SourceIndex(0)
4 >Emitted(2, 12) Source(11, 12) + SourceIndex(0)
5 >Emitted(2, 13) Source(11, 13) + SourceIndex(0)
6 >Emitted(2, 14) Source(11, 14) + SourceIndex(0)
7 >Emitted(2, 15) Source(11, 15) + SourceIndex(0)
8 >Emitted(2, 16) Source(11, 16) + SourceIndex(0)
---
>>>console.log(s);
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^^^->
1->
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1->Emitted(3, 1) Source(12, 1) + SourceIndex(0)
2 >Emitted(3, 8) Source(12, 8) + SourceIndex(0)
3 >Emitted(3, 9) Source(12, 9) + SourceIndex(0)
4 >Emitted(3, 12) Source(12, 12) + SourceIndex(0)
5 >Emitted(3, 13) Source(12, 13) + SourceIndex(0)
6 >Emitted(3, 14) Source(12, 14) + SourceIndex(0)
7 >Emitted(3, 15) Source(12, 15) + SourceIndex(0)
8 >Emitted(3, 16) Source(12, 16) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_part2.ts
-------------------------------------------------------------------
>>>console.log(f());
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^
1->
2 >console
3 >       .
4 >        log
5 >           (
6 >            f
7 >             ()
8 >               )
9 >                ;
1->Emitted(4, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(4, 8) Source(1, 8) + SourceIndex(1)
3 >Emitted(4, 9) Source(1, 9) + SourceIndex(1)
4 >Emitted(4, 12) Source(1, 12) + SourceIndex(1)
5 >Emitted(4, 13) Source(1, 13) + SourceIndex(1)
6 >Emitted(4, 14) Source(1, 14) + SourceIndex(1)
7 >Emitted(4, 16) Source(1, 16) + SourceIndex(1)
8 >Emitted(4, 17) Source(1, 17) + SourceIndex(1)
9 >Emitted(4, 18) Source(1, 18) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_part3.ts
-------------------------------------------------------------------
>>>function f() {
1 >
2 >^^^^^^^^^
3 >         ^
4 >          ^^^^^^^^^^^^^^^^^^^->
1 >
2 >function 
3 >         f
1 >Emitted(5, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(5, 10) Source(1, 10) + SourceIndex(2)
3 >Emitted(5, 11) Source(1, 11) + SourceIndex(2)
---
>>>    return "JS does hoists";
1->^^^^
2 >    ^^^^^^^
3 >           ^^^^^^^^^^^^^^^^
4 >                           ^
1->() {
  >    
2 >    return 
3 >           "JS does hoists"
4 >                           ;
1->Emitted(6, 5) Source(2, 5) + SourceIndex(2)
2 >Emitted(6, 12) Source(2, 12) + SourceIndex(2)
3 >Emitted(6, 28) Source(2, 28) + SourceIndex(2)
4 >Emitted(6, 29) Source(2, 29) + SourceIndex(2)
---
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
1 >Emitted(7, 1) Source(3, 1) + SourceIndex(2)
2 >Emitted(7, 2) Source(3, 2) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../second/second_part1.ts
-------------------------------------------------------------------
>>>//# sourceMappingURL=first-output.js.map
>>>var N;
1->
2 >^^^^
3 >    ^
4 >     ^
5 >      ^^^^^^^^^^->
1->namespace N {
  >    // Comment text
  >}
  >
  >
2 >namespace 
3 >    N
4 >      {
  >         function f() {
  >             console.log('testing');
  >         }
  >     
  >         f();
  >     }
1->Emitted(9, 1) Source(5, 1) + SourceIndex(3)
2 >Emitted(9, 5) Source(5, 11) + SourceIndex(3)
3 >Emitted(9, 6) Source(5, 12) + SourceIndex(3)
4 >Emitted(9, 7) Source(11, 2) + SourceIndex(3)
---
>>>(function (N) {
1->
2 >^^^^^^^^^^^
3 >           ^
4 >            ^^^^^^^->
1->
2 >namespace 
3 >           N
1->Emitted(10, 1) Source(5, 1) + SourceIndex(3)
2 >Emitted(10, 12) Source(5, 11) + SourceIndex(3)
3 >Emitted(10, 13) Source(5, 12) + SourceIndex(3)
---
>>>    function f() {
1->^^^^
2 >    ^^^^^^^^^
3 >             ^
4 >              ^^^^^^^^^^^^^^^^^^->
1-> {
  >    
2 >    function 
3 >             f
1->Emitted(11, 5) Source(6, 5) + SourceIndex(3)
2 >Emitted(11, 14) Source(6, 14) + SourceIndex(3)
3 >Emitted(11, 15) Source(6, 15) + SourceIndex(3)
---
>>>        console.log('testing');
1->^^^^^^^^
2 >        ^^^^^^^
3 >               ^
4 >                ^^^
5 >                   ^
6 >                    ^^^^^^^^^
7 >                             ^
8 >                              ^
1->() {
  >        
2 >        console
3 >               .
4 >                log
5 >                   (
6 >                    'testing'
7 >                             )
8 >                              ;
1->Emitted(12, 9) Source(7, 9) + SourceIndex(3)
2 >Emitted(12, 16) Source(7, 16) + SourceIndex(3)
3 >Emitted(12, 17) Source(7, 17) + SourceIndex(3)
4 >Emitted(12, 20) Source(7, 20) + SourceIndex(3)
5 >Emitted(12, 21) Source(7, 21) + SourceIndex(3)
6 >Emitted(12, 30) Source(7, 30) + SourceIndex(3)
7 >Emitted(12, 31) Source(7, 31) + SourceIndex(3)
8 >Emitted(12, 32) Source(7, 32) + SourceIndex(3)
---
>>>    }
1 >^^^^
2 >    ^
3 >     ^^^^->
1 >
  >    
2 >    }
1 >Emitted(13, 5) Source(8, 5) + SourceIndex(3)
2 >Emitted(13, 6) Source(8, 6) + SourceIndex(3)
---
>>>    f();
1->^^^^
2 >    ^
3 >     ^^
4 >       ^
5 >        ^^^^^^^^^^^->
1->
  >
  >    
2 >    f
3 >     ()
4 >       ;
1->Emitted(14, 5) Source(10, 5) + SourceIndex(3)
2 >Emitted(14, 6) Source(10, 6) + SourceIndex(3)
3 >Emitted(14, 8) Source(10, 8) + SourceIndex(3)
4 >Emitted(14, 9) Source(10, 9) + SourceIndex(3)
---
>>>})(N || (N = {}));
1->
2 >^
3 > ^^
4 >   ^
5 >    ^^^^^
6 >         ^
7 >          ^^^^^^^^
8 >                  ^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
2 >}
3 > 
4 >   N
5 >    
6 >         N
7 >           {
  >              function f() {
  >                  console.log('testing');
  >              }
  >          
  >              f();
  >          }
1->Emitted(15, 1) Source(11, 1) + SourceIndex(3)
2 >Emitted(15, 2) Source(11, 2) + SourceIndex(3)
3 >Emitted(15, 4) Source(5, 11) + SourceIndex(3)
4 >Emitted(15, 5) Source(5, 12) + SourceIndex(3)
5 >Emitted(15, 10) Source(5, 11) + SourceIndex(3)
6 >Emitted(15, 11) Source(5, 12) + SourceIndex(3)
7 >Emitted(15, 19) Source(11, 2) + SourceIndex(3)
---
>>>var normalC = /** @class */ (function () {
1->
2 >^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
  >
1->Emitted(16, 1) Source(13, 1) + SourceIndex(3)
---
>>>    /**@internal*/ function normalC() {
1->^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
1->class normalC {
  >    
2 >    /**@internal*/
3 >                   
1->Emitted(17, 5) Source(14, 5) + SourceIndex(3)
2 >Emitted(17, 19) Source(14, 19) + SourceIndex(3)
3 >Emitted(17, 20) Source(14, 20) + SourceIndex(3)
---
>>>    }
1 >^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >constructor() { 
2 >    }
1 >Emitted(18, 5) Source(14, 36) + SourceIndex(3)
2 >Emitted(18, 6) Source(14, 37) + SourceIndex(3)
---
>>>    /**@internal*/ normalC.prototype.method = function () { };
1->^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^^^^^^^^^^^^^^^^^^^^^
5 >                                           ^^^
6 >                                              ^^^^^^^^^^^^^^
7 >                                                            ^
1->
  >    /**@internal*/ prop: string;
  >    
2 >    /**@internal*/
3 >                   
4 >                   method
5 >                                           
6 >                                              method() { 
7 >                                                            }
1->Emitted(19, 5) Source(16, 5) + SourceIndex(3)
2 >Emitted(19, 19) Source(16, 19) + SourceIndex(3)
3 >Emitted(19, 20) Source(16, 20) + SourceIndex(3)
4 >Emitted(19, 44) Source(16, 26) + SourceIndex(3)
5 >Emitted(19, 47) Source(16, 20) + SourceIndex(3)
6 >Emitted(19, 61) Source(16, 31) + SourceIndex(3)
7 >Emitted(19, 62) Source(16, 32) + SourceIndex(3)
---
>>>    Object.defineProperty(normalC.prototype, "c", {
1 >^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^
3 >                          ^^^^^^^^^^^^^^^^^^^^^^
4 >                                                ^^^^^^^^->
1 >
  >    /**@internal*/ 
2 >    get 
3 >                          c
1 >Emitted(20, 5) Source(17, 20) + SourceIndex(3)
2 >Emitted(20, 27) Source(17, 24) + SourceIndex(3)
3 >Emitted(20, 49) Source(17, 25) + SourceIndex(3)
---
>>>        /**@internal*/ get: function () { return 10; },
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^
3 >                      ^^^^^^
4 >                            ^^^^^^^^^^^^^^
5 >                                          ^^^^^^^
6 >                                                 ^^
7 >                                                   ^
8 >                                                    ^
9 >                                                     ^
1->
2 >        /**@internal*/
3 >                       
4 >                            get c() { 
5 >                                          return 
6 >                                                 10
7 >                                                   ;
8 >                                                     
9 >                                                     }
1->Emitted(21, 9) Source(17, 5) + SourceIndex(3)
2 >Emitted(21, 23) Source(17, 19) + SourceIndex(3)
3 >Emitted(21, 29) Source(17, 20) + SourceIndex(3)
4 >Emitted(21, 43) Source(17, 30) + SourceIndex(3)
5 >Emitted(21, 50) Source(17, 37) + SourceIndex(3)
6 >Emitted(21, 52) Source(17, 39) + SourceIndex(3)
7 >Emitted(21, 53) Source(17, 40) + SourceIndex(3)
8 >Emitted(21, 54) Source(17, 41) + SourceIndex(3)
9 >Emitted(21, 55) Source(17, 42) + SourceIndex(3)
---
>>>        /**@internal*/ set: function (val) { },
1 >^^^^^^^^
2 >        ^^^^^^^^^^^^^^
3 >                      ^^^^^^
4 >                            ^^^^^^^^^^
5 >                                      ^^^
6 >                                         ^^^^
7 >                                             ^
1 >
  >    
2 >        /**@internal*/
3 >                       
4 >                            set c(
5 >                                      val: number
6 >                                         ) { 
7 >                                             }
1 >Emitted(22, 9) Source(18, 5) + SourceIndex(3)
2 >Emitted(22, 23) Source(18, 19) + SourceIndex(3)
3 >Emitted(22, 29) Source(18, 20) + SourceIndex(3)
4 >Emitted(22, 39) Source(18, 26) + SourceIndex(3)
5 >Emitted(22, 42) Source(18, 37) + SourceIndex(3)
6 >Emitted(22, 46) Source(18, 41) + SourceIndex(3)
7 >Emitted(22, 47) Source(18, 42) + SourceIndex(3)
---
>>>        enumerable: true,
>>>        configurable: true
>>>    });
1 >^^^^^^^
2 >       ^^^^^^^^^^^^^->
1 >
1 >Emitted(25, 8) Source(17, 42) + SourceIndex(3)
---
>>>    return normalC;
1->^^^^
2 >    ^^^^^^^^^^^^^^
1->
  >    /**@internal*/ set c(val: number) { }
  >
2 >    }
1->Emitted(26, 5) Source(19, 1) + SourceIndex(3)
2 >Emitted(26, 19) Source(19, 2) + SourceIndex(3)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^^->
1 >
2 >}
3 > 
4 > class normalC {
  >     /**@internal*/ constructor() { }
  >     /**@internal*/ prop: string;
  >     /**@internal*/ method() { }
  >     /**@internal*/ get c() { return 10; }
  >     /**@internal*/ set c(val: number) { }
  > }
1 >Emitted(27, 1) Source(19, 1) + SourceIndex(3)
2 >Emitted(27, 2) Source(19, 2) + SourceIndex(3)
3 >Emitted(27, 2) Source(13, 1) + SourceIndex(3)
4 >Emitted(27, 6) Source(19, 2) + SourceIndex(3)
---
>>>var normalN;
1->
2 >^^^^
3 >    ^^^^^^^
4 >           ^
5 >            ^^^^^^^^^^->
1->
  >
2 >namespace 
3 >    normalN
4 >            {
  >               /**@internal*/ export class C { }
  >               /**@internal*/ export function foo() {}
  >               /**@internal*/ export namespace someNamespace { export class C {} }
  >               /**@internal*/ export namespace someOther.something { export class someClass {} }
  >               /**@internal*/ export import someImport = someNamespace.C;
  >               /**@internal*/ export type internalType = internalC;
  >               /**@internal*/ export const internalConst = 10;
  >               /**@internal*/ export enum internalEnum { a, b, c }
  >           }
1->Emitted(28, 1) Source(20, 1) + SourceIndex(3)
2 >Emitted(28, 5) Source(20, 11) + SourceIndex(3)
3 >Emitted(28, 12) Source(20, 18) + SourceIndex(3)
4 >Emitted(28, 13) Source(29, 2) + SourceIndex(3)
---
>>>(function (normalN) {
1->
2 >^^^^^^^^^^^
3 >           ^^^^^^^
4 >                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >namespace 
3 >           normalN
1->Emitted(29, 1) Source(20, 1) + SourceIndex(3)
2 >Emitted(29, 12) Source(20, 11) + SourceIndex(3)
3 >Emitted(29, 19) Source(20, 18) + SourceIndex(3)
---
>>>    /**@internal*/ var C = /** @class */ (function () {
1->^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^->
1-> {
  >    
2 >    /**@internal*/
3 >                   
1->Emitted(30, 5) Source(21, 5) + SourceIndex(3)
2 >Emitted(30, 19) Source(21, 19) + SourceIndex(3)
3 >Emitted(30, 20) Source(21, 20) + SourceIndex(3)
---
>>>        function C() {
1->^^^^^^^^
2 >        ^^->
1->
1->Emitted(31, 9) Source(21, 20) + SourceIndex(3)
---
>>>        }
1->^^^^^^^^
2 >        ^
3 >         ^^^^^^^^^->
1->export class C { 
2 >        }
1->Emitted(32, 9) Source(21, 37) + SourceIndex(3)
2 >Emitted(32, 10) Source(21, 38) + SourceIndex(3)
---
>>>        return C;
1->^^^^^^^^
2 >        ^^^^^^^^
1->
2 >        }
1->Emitted(33, 9) Source(21, 37) + SourceIndex(3)
2 >Emitted(33, 17) Source(21, 38) + SourceIndex(3)
---
>>>    }());
1 >^^^^
2 >    ^
3 >     
4 >     ^^^^
5 >         ^^^^^^^^^^->
1 >
2 >    }
3 >     
4 >     export class C { }
1 >Emitted(34, 5) Source(21, 37) + SourceIndex(3)
2 >Emitted(34, 6) Source(21, 38) + SourceIndex(3)
3 >Emitted(34, 6) Source(21, 20) + SourceIndex(3)
4 >Emitted(34, 10) Source(21, 38) + SourceIndex(3)
---
>>>    normalN.C = C;
1->^^^^
2 >    ^^^^^^^^^
3 >             ^^^^
4 >                 ^
5 >                  ^^^^^^^^^^^^^^^^^^^^->
1->
2 >    C
3 >              { }
4 >                 
1->Emitted(35, 5) Source(21, 33) + SourceIndex(3)
2 >Emitted(35, 14) Source(21, 34) + SourceIndex(3)
3 >Emitted(35, 18) Source(21, 38) + SourceIndex(3)
4 >Emitted(35, 19) Source(21, 38) + SourceIndex(3)
---
>>>    /**@internal*/ function foo() { }
1->^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^^^^^^
5 >                            ^^^
6 >                               ^^^^^
7 >                                    ^
1->
  >    
2 >    /**@internal*/
3 >                   
4 >                   export function 
5 >                            foo
6 >                               () {
7 >                                    }
1->Emitted(36, 5) Source(22, 5) + SourceIndex(3)
2 >Emitted(36, 19) Source(22, 19) + SourceIndex(3)
3 >Emitted(36, 20) Source(22, 20) + SourceIndex(3)
4 >Emitted(36, 29) Source(22, 36) + SourceIndex(3)
5 >Emitted(36, 32) Source(22, 39) + SourceIndex(3)
6 >Emitted(36, 37) Source(22, 43) + SourceIndex(3)
7 >Emitted(36, 38) Source(22, 44) + SourceIndex(3)
---
>>>    normalN.foo = foo;
1 >^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^
4 >                     ^
5 >                      ^^^^^^^^^^^^^^^^->
1 >
2 >    foo
3 >               () {}
4 >                     
1 >Emitted(37, 5) Source(22, 36) + SourceIndex(3)
2 >Emitted(37, 16) Source(22, 39) + SourceIndex(3)
3 >Emitted(37, 22) Source(22, 44) + SourceIndex(3)
4 >Emitted(37, 23) Source(22, 44) + SourceIndex(3)
---
>>>    /**@internal*/ var someNamespace;
1->^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^
5 >                       ^^^^^^^^^^^^^
6 >                                    ^
1->
  >    
2 >    /**@internal*/
3 >                   
4 >                   export namespace 
5 >                       someNamespace
6 >                                     { export class C {} }
1->Emitted(38, 5) Source(23, 5) + SourceIndex(3)
2 >Emitted(38, 19) Source(23, 19) + SourceIndex(3)
3 >Emitted(38, 20) Source(23, 20) + SourceIndex(3)
4 >Emitted(38, 24) Source(23, 37) + SourceIndex(3)
5 >Emitted(38, 37) Source(23, 50) + SourceIndex(3)
6 >Emitted(38, 38) Source(23, 72) + SourceIndex(3)
---
>>>    (function (someNamespace) {
1 >^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^^^^^^^^
4 >                            ^^^^^^^^^^^^^^^^^->
1 >
2 >    export namespace 
3 >               someNamespace
1 >Emitted(39, 5) Source(23, 20) + SourceIndex(3)
2 >Emitted(39, 16) Source(23, 37) + SourceIndex(3)
3 >Emitted(39, 29) Source(23, 50) + SourceIndex(3)
---
>>>        var C = /** @class */ (function () {
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^^->
1-> { 
1->Emitted(40, 9) Source(23, 53) + SourceIndex(3)
---
>>>            function C() {
1->^^^^^^^^^^^^
2 >            ^^->
1->
1->Emitted(41, 13) Source(23, 53) + SourceIndex(3)
---
>>>            }
1->^^^^^^^^^^^^
2 >            ^
3 >             ^^^^^^^^^->
1->export class C {
2 >            }
1->Emitted(42, 13) Source(23, 69) + SourceIndex(3)
2 >Emitted(42, 14) Source(23, 70) + SourceIndex(3)
---
>>>            return C;
1->^^^^^^^^^^^^
2 >            ^^^^^^^^
1->
2 >            }
1->Emitted(43, 13) Source(23, 69) + SourceIndex(3)
2 >Emitted(43, 21) Source(23, 70) + SourceIndex(3)
---
>>>        }());
1 >^^^^^^^^
2 >        ^
3 >         
4 >         ^^^^
5 >             ^^^^^^^^^^^^^^^^->
1 >
2 >        }
3 >         
4 >         export class C {}
1 >Emitted(44, 9) Source(23, 69) + SourceIndex(3)
2 >Emitted(44, 10) Source(23, 70) + SourceIndex(3)
3 >Emitted(44, 10) Source(23, 53) + SourceIndex(3)
4 >Emitted(44, 14) Source(23, 70) + SourceIndex(3)
---
>>>        someNamespace.C = C;
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^^
3 >                       ^^^^
4 >                           ^
5 >                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >        C
3 >                        {}
4 >                           
1->Emitted(45, 9) Source(23, 66) + SourceIndex(3)
2 >Emitted(45, 24) Source(23, 67) + SourceIndex(3)
3 >Emitted(45, 28) Source(23, 70) + SourceIndex(3)
4 >Emitted(45, 29) Source(23, 70) + SourceIndex(3)
---
>>>    })(someNamespace = normalN.someNamespace || (normalN.someNamespace = {}));
1->^^^^
2 >    ^
3 >     ^^
4 >       ^^^^^^^^^^^^^
5 >                    ^^^
6 >                       ^^^^^^^^^^^^^^^^^^^^^
7 >                                            ^^^^^
8 >                                                 ^^^^^^^^^^^^^^^^^^^^^
9 >                                                                      ^^^^^^^^
1-> 
2 >    }
3 >     
4 >       someNamespace
5 >                    
6 >                       someNamespace
7 >                                            
8 >                                                 someNamespace
9 >                                                                       { export class C {} }
1->Emitted(46, 5) Source(23, 71) + SourceIndex(3)
2 >Emitted(46, 6) Source(23, 72) + SourceIndex(3)
3 >Emitted(46, 8) Source(23, 37) + SourceIndex(3)
4 >Emitted(46, 21) Source(23, 50) + SourceIndex(3)
5 >Emitted(46, 24) Source(23, 37) + SourceIndex(3)
6 >Emitted(46, 45) Source(23, 50) + SourceIndex(3)
7 >Emitted(46, 50) Source(23, 37) + SourceIndex(3)
8 >Emitted(46, 71) Source(23, 50) + SourceIndex(3)
9 >Emitted(46, 79) Source(23, 72) + SourceIndex(3)
---
>>>    /**@internal*/ var someOther;
1 >^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^
5 >                       ^^^^^^^^^
6 >                                ^
1 >
  >    
2 >    /**@internal*/
3 >                   
4 >                   export namespace 
5 >                       someOther
6 >                                .something { export class someClass {} }
1 >Emitted(47, 5) Source(24, 5) + SourceIndex(3)
2 >Emitted(47, 19) Source(24, 19) + SourceIndex(3)
3 >Emitted(47, 20) Source(24, 20) + SourceIndex(3)
4 >Emitted(47, 24) Source(24, 37) + SourceIndex(3)
5 >Emitted(47, 33) Source(24, 46) + SourceIndex(3)
6 >Emitted(47, 34) Source(24, 86) + SourceIndex(3)
---
>>>    (function (someOther) {
1 >^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^^^^
1 >
2 >    export namespace 
3 >               someOther
1 >Emitted(48, 5) Source(24, 20) + SourceIndex(3)
2 >Emitted(48, 16) Source(24, 37) + SourceIndex(3)
3 >Emitted(48, 25) Source(24, 46) + SourceIndex(3)
---
>>>        var something;
1 >^^^^^^^^
2 >        ^^^^
3 >            ^^^^^^^^^
4 >                     ^
5 >                      ^^^^^^^^^^->
1 >.
2 >        
3 >            something
4 >                      { export class someClass {} }
1 >Emitted(49, 9) Source(24, 47) + SourceIndex(3)
2 >Emitted(49, 13) Source(24, 47) + SourceIndex(3)
3 >Emitted(49, 22) Source(24, 56) + SourceIndex(3)
4 >Emitted(49, 23) Source(24, 86) + SourceIndex(3)
---
>>>        (function (something) {
1->^^^^^^^^
2 >        ^^^^^^^^^^^
3 >                   ^^^^^^^^^
4 >                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >        
3 >                   something
1->Emitted(50, 9) Source(24, 47) + SourceIndex(3)
2 >Emitted(50, 20) Source(24, 47) + SourceIndex(3)
3 >Emitted(50, 29) Source(24, 56) + SourceIndex(3)
---
>>>            var someClass = /** @class */ (function () {
1->^^^^^^^^^^^^
2 >            ^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1-> { 
1->Emitted(51, 13) Source(24, 59) + SourceIndex(3)
---
>>>                function someClass() {
1->^^^^^^^^^^^^^^^^
2 >                ^^->
1->
1->Emitted(52, 17) Source(24, 59) + SourceIndex(3)
---
>>>                }
1->^^^^^^^^^^^^^^^^
2 >                ^
3 >                 ^^^^^^^^^^^^^^^^^->
1->export class someClass {
2 >                }
1->Emitted(53, 17) Source(24, 83) + SourceIndex(3)
2 >Emitted(53, 18) Source(24, 84) + SourceIndex(3)
---
>>>                return someClass;
1->^^^^^^^^^^^^^^^^
2 >                ^^^^^^^^^^^^^^^^
1->
2 >                }
1->Emitted(54, 17) Source(24, 83) + SourceIndex(3)
2 >Emitted(54, 33) Source(24, 84) + SourceIndex(3)
---
>>>            }());
1 >^^^^^^^^^^^^
2 >            ^
3 >             
4 >             ^^^^
5 >                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >            }
3 >             
4 >             export class someClass {}
1 >Emitted(55, 13) Source(24, 83) + SourceIndex(3)
2 >Emitted(55, 14) Source(24, 84) + SourceIndex(3)
3 >Emitted(55, 14) Source(24, 59) + SourceIndex(3)
4 >Emitted(55, 18) Source(24, 84) + SourceIndex(3)
---
>>>            something.someClass = someClass;
1->^^^^^^^^^^^^
2 >            ^^^^^^^^^^^^^^^^^^^
3 >                               ^^^^^^^^^^^^
4 >                                           ^
5 >                                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >            someClass
3 >                                {}
4 >                                           
1->Emitted(56, 13) Source(24, 72) + SourceIndex(3)
2 >Emitted(56, 32) Source(24, 81) + SourceIndex(3)
3 >Emitted(56, 44) Source(24, 84) + SourceIndex(3)
4 >Emitted(56, 45) Source(24, 84) + SourceIndex(3)
---
>>>        })(something = someOther.something || (someOther.something = {}));
1->^^^^^^^^
2 >        ^
3 >         ^^
4 >           ^^^^^^^^^
5 >                    ^^^
6 >                       ^^^^^^^^^^^^^^^^^^^
7 >                                          ^^^^^
8 >                                               ^^^^^^^^^^^^^^^^^^^
9 >                                                                  ^^^^^^^^
1-> 
2 >        }
3 >         
4 >           something
5 >                    
6 >                       something
7 >                                          
8 >                                               something
9 >                                                                   { export class someClass {} }
1->Emitted(57, 9) Source(24, 85) + SourceIndex(3)
2 >Emitted(57, 10) Source(24, 86) + SourceIndex(3)
3 >Emitted(57, 12) Source(24, 47) + SourceIndex(3)
4 >Emitted(57, 21) Source(24, 56) + SourceIndex(3)
5 >Emitted(57, 24) Source(24, 47) + SourceIndex(3)
6 >Emitted(57, 43) Source(24, 56) + SourceIndex(3)
7 >Emitted(57, 48) Source(24, 47) + SourceIndex(3)
8 >Emitted(57, 67) Source(24, 56) + SourceIndex(3)
9 >Emitted(57, 75) Source(24, 86) + SourceIndex(3)
---
>>>    })(someOther = normalN.someOther || (normalN.someOther = {}));
1 >^^^^
2 >    ^
3 >     ^^
4 >       ^^^^^^^^^
5 >                ^^^
6 >                   ^^^^^^^^^^^^^^^^^
7 >                                    ^^^^^
8 >                                         ^^^^^^^^^^^^^^^^^
9 >                                                          ^^^^^^^^
1 >
2 >    }
3 >     
4 >       someOther
5 >                
6 >                   someOther
7 >                                    
8 >                                         someOther
9 >                                                          .something { export class someClass {} }
1 >Emitted(58, 5) Source(24, 85) + SourceIndex(3)
2 >Emitted(58, 6) Source(24, 86) + SourceIndex(3)
3 >Emitted(58, 8) Source(24, 37) + SourceIndex(3)
4 >Emitted(58, 17) Source(24, 46) + SourceIndex(3)
5 >Emitted(58, 20) Source(24, 37) + SourceIndex(3)
6 >Emitted(58, 37) Source(24, 46) + SourceIndex(3)
7 >Emitted(58, 42) Source(24, 37) + SourceIndex(3)
8 >Emitted(58, 59) Source(24, 46) + SourceIndex(3)
9 >Emitted(58, 67) Source(24, 86) + SourceIndex(3)
---
>>>    /**@internal*/ normalN.someImport = someNamespace.C;
1 >^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^^^^^^^^^^^^^^^
5 >                                     ^^^
6 >                                        ^^^^^^^^^^^^^
7 >                                                     ^
8 >                                                      ^
9 >                                                       ^
1 >
  >    
2 >    /**@internal*/
3 >                   export import 
4 >                   someImport
5 >                                      = 
6 >                                        someNamespace
7 >                                                     .
8 >                                                      C
9 >                                                       ;
1 >Emitted(59, 5) Source(25, 5) + SourceIndex(3)
2 >Emitted(59, 19) Source(25, 19) + SourceIndex(3)
3 >Emitted(59, 20) Source(25, 34) + SourceIndex(3)
4 >Emitted(59, 38) Source(25, 44) + SourceIndex(3)
5 >Emitted(59, 41) Source(25, 47) + SourceIndex(3)
6 >Emitted(59, 54) Source(25, 60) + SourceIndex(3)
7 >Emitted(59, 55) Source(25, 61) + SourceIndex(3)
8 >Emitted(59, 56) Source(25, 62) + SourceIndex(3)
9 >Emitted(59, 57) Source(25, 63) + SourceIndex(3)
---
>>>    /**@internal*/ normalN.internalConst = 10;
1 >^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^^^^^^^^^^^^^^^^^^
5 >                                        ^^^
6 >                                           ^^
7 >                                             ^
1 >
  >    /**@internal*/ export type internalType = internalC;
  >    
2 >    /**@internal*/
3 >                   export const 
4 >                   internalConst
5 >                                         = 
6 >                                           10
7 >                                             ;
1 >Emitted(60, 5) Source(27, 5) + SourceIndex(3)
2 >Emitted(60, 19) Source(27, 19) + SourceIndex(3)
3 >Emitted(60, 20) Source(27, 33) + SourceIndex(3)
4 >Emitted(60, 41) Source(27, 46) + SourceIndex(3)
5 >Emitted(60, 44) Source(27, 49) + SourceIndex(3)
6 >Emitted(60, 46) Source(27, 51) + SourceIndex(3)
7 >Emitted(60, 47) Source(27, 52) + SourceIndex(3)
---
>>>    /**@internal*/ var internalEnum;
1 >^^^^
2 >    ^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^^^^
5 >                       ^^^^^^^^^^^^
1 >
  >    
2 >    /**@internal*/
3 >                   
4 >                   export enum 
5 >                       internalEnum { a, b, c }
1 >Emitted(61, 5) Source(28, 5) + SourceIndex(3)
2 >Emitted(61, 19) Source(28, 19) + SourceIndex(3)
3 >Emitted(61, 20) Source(28, 20) + SourceIndex(3)
4 >Emitted(61, 24) Source(28, 32) + SourceIndex(3)
5 >Emitted(61, 36) Source(28, 56) + SourceIndex(3)
---
>>>    (function (internalEnum) {
1 >^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^^^^^^^
4 >                           ^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >    export enum 
3 >               internalEnum
1 >Emitted(62, 5) Source(28, 20) + SourceIndex(3)
2 >Emitted(62, 16) Source(28, 32) + SourceIndex(3)
3 >Emitted(62, 28) Source(28, 44) + SourceIndex(3)
---
>>>        internalEnum[internalEnum["a"] = 0] = "a";
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                                 ^
4 >                                                  ^->
1-> { 
2 >        a
3 >                                                 
1->Emitted(63, 9) Source(28, 47) + SourceIndex(3)
2 >Emitted(63, 50) Source(28, 48) + SourceIndex(3)
3 >Emitted(63, 51) Source(28, 48) + SourceIndex(3)
---
>>>        internalEnum[internalEnum["b"] = 1] = "b";
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                                 ^
4 >                                                  ^->
1->, 
2 >        b
3 >                                                 
1->Emitted(64, 9) Source(28, 50) + SourceIndex(3)
2 >Emitted(64, 50) Source(28, 51) + SourceIndex(3)
3 >Emitted(64, 51) Source(28, 51) + SourceIndex(3)
---
>>>        internalEnum[internalEnum["c"] = 2] = "c";
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                                 ^
4 >                                                  ^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->, 
2 >        c
3 >                                                 
1->Emitted(65, 9) Source(28, 53) + SourceIndex(3)
2 >Emitted(65, 50) Source(28, 54) + SourceIndex(3)
3 >Emitted(65, 51) Source(28, 54) + SourceIndex(3)
---
>>>    })(internalEnum = normalN.internalEnum || (normalN.internalEnum = {}));
1->^^^^
2 >    ^
3 >     ^^
4 >       ^^^^^^^^^^^^
5 >                   ^^^
6 >                      ^^^^^^^^^^^^^^^^^^^^
7 >                                          ^^^^^
8 >                                               ^^^^^^^^^^^^^^^^^^^^
9 >                                                                   ^^^^^^^^
1-> 
2 >    }
3 >     
4 >       internalEnum
5 >                   
6 >                      internalEnum
7 >                                          
8 >                                               internalEnum
9 >                                                                    { a, b, c }
1->Emitted(66, 5) Source(28, 55) + SourceIndex(3)
2 >Emitted(66, 6) Source(28, 56) + SourceIndex(3)
3 >Emitted(66, 8) Source(28, 32) + SourceIndex(3)
4 >Emitted(66, 20) Source(28, 44) + SourceIndex(3)
5 >Emitted(66, 23) Source(28, 32) + SourceIndex(3)
6 >Emitted(66, 43) Source(28, 44) + SourceIndex(3)
7 >Emitted(66, 48) Source(28, 32) + SourceIndex(3)
8 >Emitted(66, 68) Source(28, 44) + SourceIndex(3)
9 >Emitted(66, 76) Source(28, 56) + SourceIndex(3)
---
>>>})(normalN || (normalN = {}));
1 >
2 >^
3 > ^^
4 >   ^^^^^^^
5 >          ^^^^^
6 >               ^^^^^^^
7 >                      ^^^^^^^^
8 >                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
3 > 
4 >   normalN
5 >          
6 >               normalN
7 >                       {
  >                          /**@internal*/ export class C { }
  >                          /**@internal*/ export function foo() {}
  >                          /**@internal*/ export namespace someNamespace { export class C {} }
  >                          /**@internal*/ export namespace someOther.something { export class someClass {} }
  >                          /**@internal*/ export import someImport = someNamespace.C;
  >                          /**@internal*/ export type internalType = internalC;
  >                          /**@internal*/ export const internalConst = 10;
  >                          /**@internal*/ export enum internalEnum { a, b, c }
  >                      }
1 >Emitted(67, 1) Source(29, 1) + SourceIndex(3)
2 >Emitted(67, 2) Source(29, 2) + SourceIndex(3)
3 >Emitted(67, 4) Source(20, 11) + SourceIndex(3)
4 >Emitted(67, 11) Source(20, 18) + SourceIndex(3)
5 >Emitted(67, 16) Source(20, 11) + SourceIndex(3)
6 >Emitted(67, 23) Source(20, 18) + SourceIndex(3)
7 >Emitted(67, 31) Source(29, 2) + SourceIndex(3)
---
>>>/**@internal*/ var internalC = /** @class */ (function () {
1->
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^^^^^^^^^->
1->
  >
2 >/**@internal*/
3 >               
1->Emitted(68, 1) Source(30, 1) + SourceIndex(3)
2 >Emitted(68, 15) Source(30, 15) + SourceIndex(3)
3 >Emitted(68, 16) Source(30, 16) + SourceIndex(3)
---
>>>    function internalC() {
1->^^^^
2 >    ^^->
1->
1->Emitted(69, 5) Source(30, 16) + SourceIndex(3)
---
>>>    }
1->^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^^^^->
1->class internalC {
2 >    }
1->Emitted(70, 5) Source(30, 33) + SourceIndex(3)
2 >Emitted(70, 6) Source(30, 34) + SourceIndex(3)
---
>>>    return internalC;
1->^^^^
2 >    ^^^^^^^^^^^^^^^^
1->
2 >    }
1->Emitted(71, 5) Source(30, 33) + SourceIndex(3)
2 >Emitted(71, 21) Source(30, 34) + SourceIndex(3)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 > class internalC {}
1 >Emitted(72, 1) Source(30, 33) + SourceIndex(3)
2 >Emitted(72, 2) Source(30, 34) + SourceIndex(3)
3 >Emitted(72, 2) Source(30, 16) + SourceIndex(3)
4 >Emitted(72, 6) Source(30, 34) + SourceIndex(3)
---
>>>/**@internal*/ function internalfoo() { }
1->
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^^^^^^
5 >                        ^^^^^^^^^^^
6 >                                   ^^^^^
7 >                                        ^
1->
  >
2 >/**@internal*/
3 >               
4 >               function 
5 >                        internalfoo
6 >                                   () {
7 >                                        }
1->Emitted(73, 1) Source(31, 1) + SourceIndex(3)
2 >Emitted(73, 15) Source(31, 15) + SourceIndex(3)
3 >Emitted(73, 16) Source(31, 16) + SourceIndex(3)
4 >Emitted(73, 25) Source(31, 25) + SourceIndex(3)
5 >Emitted(73, 36) Source(31, 36) + SourceIndex(3)
6 >Emitted(73, 41) Source(31, 40) + SourceIndex(3)
7 >Emitted(73, 42) Source(31, 41) + SourceIndex(3)
---
>>>/**@internal*/ var internalNamespace;
1 >
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^
5 >                   ^^^^^^^^^^^^^^^^^
6 >                                    ^
1 >
  >
2 >/**@internal*/
3 >               
4 >               namespace 
5 >                   internalNamespace
6 >                                     { export class someClass {} }
1 >Emitted(74, 1) Source(32, 1) + SourceIndex(3)
2 >Emitted(74, 15) Source(32, 15) + SourceIndex(3)
3 >Emitted(74, 16) Source(32, 16) + SourceIndex(3)
4 >Emitted(74, 20) Source(32, 26) + SourceIndex(3)
5 >Emitted(74, 37) Source(32, 43) + SourceIndex(3)
6 >Emitted(74, 38) Source(32, 73) + SourceIndex(3)
---
>>>(function (internalNamespace) {
1 >
2 >^^^^^^^^^^^
3 >           ^^^^^^^^^^^^^^^^^
4 >                            ^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >namespace 
3 >           internalNamespace
1 >Emitted(75, 1) Source(32, 16) + SourceIndex(3)
2 >Emitted(75, 12) Source(32, 26) + SourceIndex(3)
3 >Emitted(75, 29) Source(32, 43) + SourceIndex(3)
---
>>>    var someClass = /** @class */ (function () {
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1-> { 
1->Emitted(76, 5) Source(32, 46) + SourceIndex(3)
---
>>>        function someClass() {
1->^^^^^^^^
2 >        ^^->
1->
1->Emitted(77, 9) Source(32, 46) + SourceIndex(3)
---
>>>        }
1->^^^^^^^^
2 >        ^
3 >         ^^^^^^^^^^^^^^^^^->
1->export class someClass {
2 >        }
1->Emitted(78, 9) Source(32, 70) + SourceIndex(3)
2 >Emitted(78, 10) Source(32, 71) + SourceIndex(3)
---
>>>        return someClass;
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^
1->
2 >        }
1->Emitted(79, 9) Source(32, 70) + SourceIndex(3)
2 >Emitted(79, 25) Source(32, 71) + SourceIndex(3)
---
>>>    }());
1 >^^^^
2 >    ^
3 >     
4 >     ^^^^
5 >         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >    }
3 >     
4 >     export class someClass {}
1 >Emitted(80, 5) Source(32, 70) + SourceIndex(3)
2 >Emitted(80, 6) Source(32, 71) + SourceIndex(3)
3 >Emitted(80, 6) Source(32, 46) + SourceIndex(3)
4 >Emitted(80, 10) Source(32, 71) + SourceIndex(3)
---
>>>    internalNamespace.someClass = someClass;
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                               ^^^^^^^^^^^^
4 >                                           ^
5 >                                            ^^^^^^^->
1->
2 >    someClass
3 >                                {}
4 >                                           
1->Emitted(81, 5) Source(32, 59) + SourceIndex(3)
2 >Emitted(81, 32) Source(32, 68) + SourceIndex(3)
3 >Emitted(81, 44) Source(32, 71) + SourceIndex(3)
4 >Emitted(81, 45) Source(32, 71) + SourceIndex(3)
---
>>>})(internalNamespace || (internalNamespace = {}));
1->
2 >^
3 > ^^
4 >   ^^^^^^^^^^^^^^^^^
5 >                    ^^^^^
6 >                         ^^^^^^^^^^^^^^^^^
7 >                                          ^^^^^^^^
1-> 
2 >}
3 > 
4 >   internalNamespace
5 >                    
6 >                         internalNamespace
7 >                                           { export class someClass {} }
1->Emitted(82, 1) Source(32, 72) + SourceIndex(3)
2 >Emitted(82, 2) Source(32, 73) + SourceIndex(3)
3 >Emitted(82, 4) Source(32, 26) + SourceIndex(3)
4 >Emitted(82, 21) Source(32, 43) + SourceIndex(3)
5 >Emitted(82, 26) Source(32, 26) + SourceIndex(3)
6 >Emitted(82, 43) Source(32, 43) + SourceIndex(3)
7 >Emitted(82, 51) Source(32, 73) + SourceIndex(3)
---
>>>/**@internal*/ var internalOther;
1 >
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^
5 >                   ^^^^^^^^^^^^^
6 >                                ^
1 >
  >
2 >/**@internal*/
3 >               
4 >               namespace 
5 >                   internalOther
6 >                                .something { export class someClass {} }
1 >Emitted(83, 1) Source(33, 1) + SourceIndex(3)
2 >Emitted(83, 15) Source(33, 15) + SourceIndex(3)
3 >Emitted(83, 16) Source(33, 16) + SourceIndex(3)
4 >Emitted(83, 20) Source(33, 26) + SourceIndex(3)
5 >Emitted(83, 33) Source(33, 39) + SourceIndex(3)
6 >Emitted(83, 34) Source(33, 79) + SourceIndex(3)
---
>>>(function (internalOther) {
1 >
2 >^^^^^^^^^^^
3 >           ^^^^^^^^^^^^^
1 >
2 >namespace 
3 >           internalOther
1 >Emitted(84, 1) Source(33, 16) + SourceIndex(3)
2 >Emitted(84, 12) Source(33, 26) + SourceIndex(3)
3 >Emitted(84, 25) Source(33, 39) + SourceIndex(3)
---
>>>    var something;
1 >^^^^
2 >    ^^^^
3 >        ^^^^^^^^^
4 >                 ^
5 >                  ^^^^^^^^^^->
1 >.
2 >    
3 >        something
4 >                  { export class someClass {} }
1 >Emitted(85, 5) Source(33, 40) + SourceIndex(3)
2 >Emitted(85, 9) Source(33, 40) + SourceIndex(3)
3 >Emitted(85, 18) Source(33, 49) + SourceIndex(3)
4 >Emitted(85, 19) Source(33, 79) + SourceIndex(3)
---
>>>    (function (something) {
1->^^^^
2 >    ^^^^^^^^^^^
3 >               ^^^^^^^^^
4 >                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >    
3 >               something
1->Emitted(86, 5) Source(33, 40) + SourceIndex(3)
2 >Emitted(86, 16) Source(33, 40) + SourceIndex(3)
3 >Emitted(86, 25) Source(33, 49) + SourceIndex(3)
---
>>>        var someClass = /** @class */ (function () {
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1-> { 
1->Emitted(87, 9) Source(33, 52) + SourceIndex(3)
---
>>>            function someClass() {
1->^^^^^^^^^^^^
2 >            ^^->
1->
1->Emitted(88, 13) Source(33, 52) + SourceIndex(3)
---
>>>            }
1->^^^^^^^^^^^^
2 >            ^
3 >             ^^^^^^^^^^^^^^^^^->
1->export class someClass {
2 >            }
1->Emitted(89, 13) Source(33, 76) + SourceIndex(3)
2 >Emitted(89, 14) Source(33, 77) + SourceIndex(3)
---
>>>            return someClass;
1->^^^^^^^^^^^^
2 >            ^^^^^^^^^^^^^^^^
1->
2 >            }
1->Emitted(90, 13) Source(33, 76) + SourceIndex(3)
2 >Emitted(90, 29) Source(33, 77) + SourceIndex(3)
---
>>>        }());
1 >^^^^^^^^
2 >        ^
3 >         
4 >         ^^^^
5 >             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >        }
3 >         
4 >         export class someClass {}
1 >Emitted(91, 9) Source(33, 76) + SourceIndex(3)
2 >Emitted(91, 10) Source(33, 77) + SourceIndex(3)
3 >Emitted(91, 10) Source(33, 52) + SourceIndex(3)
4 >Emitted(91, 14) Source(33, 77) + SourceIndex(3)
---
>>>        something.someClass = someClass;
1->^^^^^^^^
2 >        ^^^^^^^^^^^^^^^^^^^
3 >                           ^^^^^^^^^^^^
4 >                                       ^
5 >                                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >        someClass
3 >                            {}
4 >                                       
1->Emitted(92, 9) Source(33, 65) + SourceIndex(3)
2 >Emitted(92, 28) Source(33, 74) + SourceIndex(3)
3 >Emitted(92, 40) Source(33, 77) + SourceIndex(3)
4 >Emitted(92, 41) Source(33, 77) + SourceIndex(3)
---
>>>    })(something = internalOther.something || (internalOther.something = {}));
1->^^^^
2 >    ^
3 >     ^^
4 >       ^^^^^^^^^
5 >                ^^^
6 >                   ^^^^^^^^^^^^^^^^^^^^^^^
7 >                                          ^^^^^
8 >                                               ^^^^^^^^^^^^^^^^^^^^^^^
9 >                                                                      ^^^^^^^^
1-> 
2 >    }
3 >     
4 >       something
5 >                
6 >                   something
7 >                                          
8 >                                               something
9 >                                                                       { export class someClass {} }
1->Emitted(93, 5) Source(33, 78) + SourceIndex(3)
2 >Emitted(93, 6) Source(33, 79) + SourceIndex(3)
3 >Emitted(93, 8) Source(33, 40) + SourceIndex(3)
4 >Emitted(93, 17) Source(33, 49) + SourceIndex(3)
5 >Emitted(93, 20) Source(33, 40) + SourceIndex(3)
6 >Emitted(93, 43) Source(33, 49) + SourceIndex(3)
7 >Emitted(93, 48) Source(33, 40) + SourceIndex(3)
8 >Emitted(93, 71) Source(33, 49) + SourceIndex(3)
9 >Emitted(93, 79) Source(33, 79) + SourceIndex(3)
---
>>>})(internalOther || (internalOther = {}));
1 >
2 >^
3 > ^^
4 >   ^^^^^^^^^^^^^
5 >                ^^^^^
6 >                     ^^^^^^^^^^^^^
7 >                                  ^^^^^^^^
8 >                                          ^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 >   internalOther
5 >                
6 >                     internalOther
7 >                                  .something { export class someClass {} }
1 >Emitted(94, 1) Source(33, 78) + SourceIndex(3)
2 >Emitted(94, 2) Source(33, 79) + SourceIndex(3)
3 >Emitted(94, 4) Source(33, 26) + SourceIndex(3)
4 >Emitted(94, 17) Source(33, 39) + SourceIndex(3)
5 >Emitted(94, 22) Source(33, 26) + SourceIndex(3)
6 >Emitted(94, 35) Source(33, 39) + SourceIndex(3)
7 >Emitted(94, 43) Source(33, 79) + SourceIndex(3)
---
>>>/**@internal*/ var internalImport = internalNamespace.someClass;
1->
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^
5 >                   ^^^^^^^^^^^^^^
6 >                                 ^^^
7 >                                    ^^^^^^^^^^^^^^^^^
8 >                                                     ^
9 >                                                      ^^^^^^^^^
10>                                                               ^
1->
  >
2 >/**@internal*/
3 >               
4 >               import 
5 >                   internalImport
6 >                                  = 
7 >                                    internalNamespace
8 >                                                     .
9 >                                                      someClass
10>                                                               ;
1->Emitted(95, 1) Source(34, 1) + SourceIndex(3)
2 >Emitted(95, 15) Source(34, 15) + SourceIndex(3)
3 >Emitted(95, 16) Source(34, 16) + SourceIndex(3)
4 >Emitted(95, 20) Source(34, 23) + SourceIndex(3)
5 >Emitted(95, 34) Source(34, 37) + SourceIndex(3)
6 >Emitted(95, 37) Source(34, 40) + SourceIndex(3)
7 >Emitted(95, 54) Source(34, 57) + SourceIndex(3)
8 >Emitted(95, 55) Source(34, 58) + SourceIndex(3)
9 >Emitted(95, 64) Source(34, 67) + SourceIndex(3)
10>Emitted(95, 65) Source(34, 68) + SourceIndex(3)
---
>>>/**@internal*/ var internalConst = 10;
1 >
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^
5 >                   ^^^^^^^^^^^^^
6 >                                ^^^
7 >                                   ^^
8 >                                     ^
1 >
  >/**@internal*/ type internalType = internalC;
  >
2 >/**@internal*/
3 >               
4 >               const 
5 >                   internalConst
6 >                                 = 
7 >                                   10
8 >                                     ;
1 >Emitted(96, 1) Source(36, 1) + SourceIndex(3)
2 >Emitted(96, 15) Source(36, 15) + SourceIndex(3)
3 >Emitted(96, 16) Source(36, 16) + SourceIndex(3)
4 >Emitted(96, 20) Source(36, 22) + SourceIndex(3)
5 >Emitted(96, 33) Source(36, 35) + SourceIndex(3)
6 >Emitted(96, 36) Source(36, 38) + SourceIndex(3)
7 >Emitted(96, 38) Source(36, 40) + SourceIndex(3)
8 >Emitted(96, 39) Source(36, 41) + SourceIndex(3)
---
>>>/**@internal*/ var internalEnum;
1 >
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^
5 >                   ^^^^^^^^^^^^
1 >
  >
2 >/**@internal*/
3 >               
4 >               enum 
5 >                   internalEnum { a, b, c }
1 >Emitted(97, 1) Source(37, 1) + SourceIndex(3)
2 >Emitted(97, 15) Source(37, 15) + SourceIndex(3)
3 >Emitted(97, 16) Source(37, 16) + SourceIndex(3)
4 >Emitted(97, 20) Source(37, 21) + SourceIndex(3)
5 >Emitted(97, 32) Source(37, 45) + SourceIndex(3)
---
>>>(function (internalEnum) {
1 >
2 >^^^^^^^^^^^
3 >           ^^^^^^^^^^^^
4 >                       ^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >enum 
3 >           internalEnum
1 >Emitted(98, 1) Source(37, 16) + SourceIndex(3)
2 >Emitted(98, 12) Source(37, 21) + SourceIndex(3)
3 >Emitted(98, 24) Source(37, 33) + SourceIndex(3)
---
>>>    internalEnum[internalEnum["a"] = 0] = "a";
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                             ^
4 >                                              ^->
1-> { 
2 >    a
3 >                                             
1->Emitted(99, 5) Source(37, 36) + SourceIndex(3)
2 >Emitted(99, 46) Source(37, 37) + SourceIndex(3)
3 >Emitted(99, 47) Source(37, 37) + SourceIndex(3)
---
>>>    internalEnum[internalEnum["b"] = 1] = "b";
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                             ^
4 >                                              ^->
1->, 
2 >    b
3 >                                             
1->Emitted(100, 5) Source(37, 39) + SourceIndex(3)
2 >Emitted(100, 46) Source(37, 40) + SourceIndex(3)
3 >Emitted(100, 47) Source(37, 40) + SourceIndex(3)
---
>>>    internalEnum[internalEnum["c"] = 2] = "c";
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
3 >                                             ^
1->, 
2 >    c
3 >                                             
1->Emitted(101, 5) Source(37, 42) + SourceIndex(3)
2 >Emitted(101, 46) Source(37, 43) + SourceIndex(3)
3 >Emitted(101, 47) Source(37, 43) + SourceIndex(3)
---
>>>})(internalEnum || (internalEnum = {}));
1 >
2 >^
3 > ^^
4 >   ^^^^^^^^^^^^
5 >               ^^^^^
6 >                    ^^^^^^^^^^^^
7 >                                ^^^^^^^^
1 > 
2 >}
3 > 
4 >   internalEnum
5 >               
6 >                    internalEnum
7 >                                 { a, b, c }
1 >Emitted(102, 1) Source(37, 44) + SourceIndex(3)
2 >Emitted(102, 2) Source(37, 45) + SourceIndex(3)
3 >Emitted(102, 4) Source(37, 21) + SourceIndex(3)
4 >Emitted(102, 16) Source(37, 33) + SourceIndex(3)
5 >Emitted(102, 21) Source(37, 21) + SourceIndex(3)
6 >Emitted(102, 33) Source(37, 33) + SourceIndex(3)
7 >Emitted(102, 41) Source(37, 45) + SourceIndex(3)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../second/second_part2.ts
-------------------------------------------------------------------
>>>var C = /** @class */ (function () {
1 >
2 >^^^^^^^^^^^^^^^^^^^->
1 >
1 >Emitted(103, 1) Source(1, 1) + SourceIndex(4)
---
>>>    function C() {
1->^^^^
2 >    ^^->
1->
1->Emitted(104, 5) Source(1, 1) + SourceIndex(4)
---
>>>    }
1->^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->class C {
  >    doSomething() {
  >        console.log("something got done");
  >    }
  >
2 >    }
1->Emitted(105, 5) Source(5, 1) + SourceIndex(4)
2 >Emitted(105, 6) Source(5, 2) + SourceIndex(4)
---
>>>    C.prototype.doSomething = function () {
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^
3 >                           ^^^
4 >                              ^^^^^^^^^^^^^->
1->
2 >    doSomething
3 >                           
1->Emitted(106, 5) Source(2, 5) + SourceIndex(4)
2 >Emitted(106, 28) Source(2, 16) + SourceIndex(4)
3 >Emitted(106, 31) Source(2, 5) + SourceIndex(4)
---
>>>        console.log("something got done");
1->^^^^^^^^
2 >        ^^^^^^^
3 >               ^
4 >                ^^^
5 >                   ^
6 >                    ^^^^^^^^^^^^^^^^^^^^
7 >                                        ^
8 >                                         ^
1->doSomething() {
  >        
2 >        console
3 >               .
4 >                log
5 >                   (
6 >                    "something got done"
7 >                                        )
8 >                                         ;
1->Emitted(107, 9) Source(3, 9) + SourceIndex(4)
2 >Emitted(107, 16) Source(3, 16) + SourceIndex(4)
3 >Emitted(107, 17) Source(3, 17) + SourceIndex(4)
4 >Emitted(107, 20) Source(3, 20) + SourceIndex(4)
5 >Emitted(107, 21) Source(3, 21) + SourceIndex(4)
6 >Emitted(107, 41) Source(3, 41) + SourceIndex(4)
7 >Emitted(107, 42) Source(3, 42) + SourceIndex(4)
8 >Emitted(107, 43) Source(3, 43) + SourceIndex(4)
---
>>>    };
1 >^^^^
2 >    ^
3 >     ^^^^^^^^^->
1 >
  >    
2 >    }
1 >Emitted(108, 5) Source(4, 5) + SourceIndex(4)
2 >Emitted(108, 6) Source(4, 6) + SourceIndex(4)
---
>>>    return C;
1->^^^^
2 >    ^^^^^^^^
1->
  >
2 >    }
1->Emitted(109, 5) Source(5, 1) + SourceIndex(4)
2 >Emitted(109, 13) Source(5, 2) + SourceIndex(4)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 > class C {
  >     doSomething() {
  >         console.log("something got done");
  >     }
  > }
1 >Emitted(110, 1) Source(5, 1) + SourceIndex(4)
2 >Emitted(110, 2) Source(5, 2) + SourceIndex(4)
3 >Emitted(110, 2) Source(1, 1) + SourceIndex(4)
4 >Emitted(110, 6) Source(5, 2) + SourceIndex(4)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../third_part1.ts
-------------------------------------------------------------------
>>>//# sourceMappingURL=second-output.js.map
>>>var c = new C();
1->
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^->
1->
2 >var 
3 >    c
4 >      = 
5 >        new 
6 >            C
7 >             ()
8 >               ;
1->Emitted(112, 1) Source(1, 1) + SourceIndex(5)
2 >Emitted(112, 5) Source(1, 5) + SourceIndex(5)
3 >Emitted(112, 6) Source(1, 6) + SourceIndex(5)
4 >Emitted(112, 9) Source(1, 9) + SourceIndex(5)
5 >Emitted(112, 13) Source(1, 13) + SourceIndex(5)
6 >Emitted(112, 14) Source(1, 14) + SourceIndex(5)
7 >Emitted(112, 16) Source(1, 16) + SourceIndex(5)
8 >Emitted(112, 17) Source(1, 17) + SourceIndex(5)
---
>>>c.doSomething();
1->
2 >^
3 > ^
4 >  ^^^^^^^^^^^
5 >             ^^
6 >               ^
7 >                ^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
2 >c
3 > .
4 >  doSomething
5 >             ()
6 >               ;
1->Emitted(113, 1) Source(2, 1) + SourceIndex(5)
2 >Emitted(113, 2) Source(2, 2) + SourceIndex(5)
3 >Emitted(113, 3) Source(2, 3) + SourceIndex(5)
4 >Emitted(113, 14) Source(2, 14) + SourceIndex(5)
5 >Emitted(113, 16) Source(2, 16) + SourceIndex(5)
6 >Emitted(113, 17) Source(2, 17) + SourceIndex(5)
---
>>>//# sourceMappingURL=third-output.js.map

