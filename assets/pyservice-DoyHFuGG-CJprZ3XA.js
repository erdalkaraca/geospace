import"./dist-XDM-k8NY.js";import{l as e,n as t,t as n,u as r}from"./fs-access-BzDvih72-DkSEMJDg.js";var i=`//#region \\0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, { get: (a, b) => (typeof require !== "undefined" ? require : a)[b] }) : x)(function(x) {
	if (typeof require !== "undefined") return require.apply(this, arguments);
	throw Error("Calling \`require\` for \\"" + x + "\\" in an environment that doesn't expose the \`require\` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
});
var package_default = {
	name: "pyodide",
	version: "0.27.7",
	description: "The Pyodide JavaScript package",
	keywords: ["python", "webassembly"],
	homepage: "https://github.com/pyodide/pyodide",
	repository: {
		"type": "git",
		"url": "https://github.com/pyodide/pyodide"
	},
	bugs: { "url": "https://github.com/pyodide/pyodide/issues" },
	license: "MPL-2.0",
	devDependencies: {
		"@types/assert": "^1.5.6",
		"@types/expect": "^24.3.0",
		"@types/mocha": "^9.1.0",
		"@types/node": "^20.8.4",
		"@types/ws": "^8.5.3",
		"chai": "^4.3.6",
		"chai-as-promised": "^7.1.1",
		"cross-env": "^7.0.3",
		"dts-bundle-generator": "^8.1.1",
		"esbuild": "^0.17.12",
		"express": "^4.17.3",
		"mocha": "^9.0.2",
		"npm-run-all": "^4.1.5",
		"nyc": "^15.1.0",
		"prettier": "^2.2.1",
		"sinon": "^18.0.0",
		"ts-mocha": "^9.0.2",
		"tsd": "^0.24.1",
		"typedoc": "^0.27.6",
		"typescript": "5.7",
		"wabt": "^1.0.32"
	},
	main: "pyodide.js",
	exports: {
		".": {
			"types": "./pyodide.d.ts",
			"require": "./pyodide.js",
			"import": "./pyodide.mjs"
		},
		"./ffi": { "types": "./ffi.d.ts" },
		"./pyodide.asm.wasm": "./pyodide.asm.wasm",
		"./pyodide.asm.js": "./pyodide.asm.js",
		"./python_stdlib.zip": "./python_stdlib.zip",
		"./pyodide.mjs": "./pyodide.mjs",
		"./pyodide.js": "./pyodide.js",
		"./package.json": "./package.json",
		"./pyodide-lock.json": "./pyodide-lock.json"
	},
	files: [
		"pyodide.asm.js",
		"pyodide.asm.wasm",
		"python_stdlib.zip",
		"pyodide.mjs",
		"pyodide.js.map",
		"pyodide.mjs.map",
		"pyodide.d.ts",
		"ffi.d.ts",
		"pyodide-lock.json",
		"console.html"
	],
	browser: {
		"child_process": false,
		"crypto": false,
		"fs": false,
		"fs/promises": false,
		"path": false,
		"url": false,
		"vm": false,
		"ws": false
	},
	scripts: {
		"build-inner": "node esbuild.config.inner.mjs",
		"build": "tsc --noEmit && node esbuild.config.outer.mjs",
		"test": "npm-run-all test:*",
		"test:unit": "cross-env TEST_NODE=1 ts-mocha --node-option=experimental-loader=./test/loader.mjs --node-option=experimental-wasm-stack-switching -p tsconfig.test.json \\"test/unit/**\\"",
		"test:node": "cross-env TEST_NODE=1 mocha test/integration/**/*.test.js",
		"test:browser": "mocha test/integration/**/*.test.js",
		"tsc": "tsc --noEmit",
		"coverage": "cross-env TEST_NODE=1 npm-run-all coverage:*",
		"coverage:build": "nyc npm run test:node"
	},
	mocha: {
		"bail": false,
		"timeout": 3e4,
		"full-trace": true,
		"inline-diffs": true,
		"check-leaks": false,
		"global": [
			"pyodide",
			"page",
			"chai"
		]
	},
	nyc: {
		"reporter": ["html", "text-summary"],
		"include": ["*.ts"],
		"all": true,
		"clean": true,
		"cache": false,
		"instrument": false,
		"checkCoverage": true,
		"statements": 95,
		"functions": 95,
		"branches": 80,
		"lines": 95
	},
	tsd: { "compilerOptions": { "lib": ["ES2017", "DOM"] } },
	dependencies: { "ws": "^8.5.0" },
	types: "./pyodide.d.ts",
	engines: { "node": ">=18.0.0" }
};
//#endregion
//#region ../../node_modules/pyodide/pyodide.mjs
var Q = Object.defineProperty;
var s = (e, t) => Q(e, "name", {
	value: t,
	configurable: !0
}), R = ((e) => typeof __require < "u" ? __require : typeof Proxy < "u" ? new Proxy(e, { get: (t, o) => (typeof __require < "u" ? __require : t)[o] }) : e)(function(e) {
	if (typeof __require < "u") return __require.apply(this, arguments);
	throw new Error("Dynamic require of \\"" + e + "\\" is not supported");
});
function Z(e) {
	return !isNaN(parseFloat(e)) && isFinite(e);
}
s(Z, "_isNumber");
function E(e) {
	return e.charAt(0).toUpperCase() + e.substring(1);
}
s(E, "_capitalize");
function O(e) {
	return function() {
		return this[e];
	};
}
s(O, "_getter");
var w = [
	"isConstructor",
	"isEval",
	"isNative",
	"isToplevel"
], N = ["columnNumber", "lineNumber"], _ = [
	"fileName",
	"functionName",
	"source"
], P = w.concat(N, _, ["args"], ["evalOrigin"]);
function p(e) {
	if (e) for (var t = 0; t < P.length; t++) e[P[t]] !== void 0 && this["set" + E(P[t])](e[P[t]]);
}
s(p, "StackFrame");
p.prototype = {
	getArgs: function() {
		return this.args;
	},
	setArgs: function(e) {
		if (Object.prototype.toString.call(e) !== "[object Array]") throw new TypeError("Args must be an Array");
		this.args = e;
	},
	getEvalOrigin: function() {
		return this.evalOrigin;
	},
	setEvalOrigin: function(e) {
		if (e instanceof p) this.evalOrigin = e;
		else if (e instanceof Object) this.evalOrigin = new p(e);
		else throw new TypeError("Eval Origin must be an Object or StackFrame");
	},
	toString: function() {
		var e = this.getFileName() || "", t = this.getLineNumber() || "", o = this.getColumnNumber() || "", r = this.getFunctionName() || "";
		return this.getIsEval() ? e ? "[eval] (" + e + ":" + t + ":" + o + ")" : "[eval]:" + t + ":" + o : r ? r + " (" + e + ":" + t + ":" + o + ")" : e + ":" + t + ":" + o;
	}
};
p.fromString = s(function(t) {
	var o = t.indexOf("("), r = t.lastIndexOf(")"), a = t.substring(0, o), n = t.substring(o + 1, r).split(","), i = t.substring(r + 1);
	if (i.indexOf("@") === 0) var c = /@(.+?)(?::(\\d+))?(?::(\\d+))?$/.exec(i, ""), l = c[1], d = c[2], u = c[3];
	return new p({
		functionName: a,
		args: n || void 0,
		fileName: l,
		lineNumber: d || void 0,
		columnNumber: u || void 0
	});
}, "StackFrame$$fromString");
for (b = 0; b < w.length; b++) p.prototype["get" + E(w[b])] = O(w[b]), p.prototype["set" + E(w[b])] = function(e) {
	return function(t) {
		this[e] = !!t;
	};
}(w[b]);
var b;
for (v = 0; v < N.length; v++) p.prototype["get" + E(N[v])] = O(N[v]), p.prototype["set" + E(N[v])] = function(e) {
	return function(t) {
		if (!Z(t)) throw new TypeError(e + " must be a Number");
		this[e] = Number(t);
	};
}(N[v]);
var v;
for (h = 0; h < _.length; h++) p.prototype["get" + E(_[h])] = O(_[h]), p.prototype["set" + E(_[h])] = function(e) {
	return function(t) {
		this[e] = String(t);
	};
}(_[h]);
var h, k = p;
function ne() {
	var e = /^\\s*at .*(\\S+:\\d+|\\(native\\))/m, t = /^(eval@)?(\\[native code])?$/;
	return {
		parse: s(function(r) {
			if (r.stack && r.stack.match(e)) return this.parseV8OrIE(r);
			if (r.stack) return this.parseFFOrSafari(r);
			throw new Error("Cannot parse given Error object");
		}, "ErrorStackParser$$parse"),
		extractLocation: s(function(r) {
			if (r.indexOf(":") === -1) return [r];
			var n = /(.+?)(?::(\\d+))?(?::(\\d+))?$/.exec(r.replace(/[()]/g, ""));
			return [
				n[1],
				n[2] || void 0,
				n[3] || void 0
			];
		}, "ErrorStackParser$$extractLocation"),
		parseV8OrIE: s(function(r) {
			return r.stack.split(\`
\`).filter(function(n) {
				return !!n.match(e);
			}, this).map(function(n) {
				n.indexOf("(eval ") > -1 && (n = n.replace(/eval code/g, "eval").replace(/(\\(eval at [^()]*)|(,.*$)/g, ""));
				var i = n.replace(/^\\s+/, "").replace(/\\(eval code/g, "(").replace(/^.*?\\s+/, ""), c = i.match(/ (\\(.+\\)$)/);
				i = c ? i.replace(c[0], "") : i;
				var l = this.extractLocation(c ? c[1] : i);
				return new k({
					functionName: c && i || void 0,
					fileName: ["eval", "<anonymous>"].indexOf(l[0]) > -1 ? void 0 : l[0],
					lineNumber: l[1],
					columnNumber: l[2],
					source: n
				});
			}, this);
		}, "ErrorStackParser$$parseV8OrIE"),
		parseFFOrSafari: s(function(r) {
			return r.stack.split(\`
\`).filter(function(n) {
				return !n.match(t);
			}, this).map(function(n) {
				if (n.indexOf(" > eval") > -1 && (n = n.replace(/ line (\\d+)(?: > eval line \\d+)* > eval:\\d+:\\d+/g, ":$1")), n.indexOf("@") === -1 && n.indexOf(":") === -1) return new k({ functionName: n });
				var i = /((.*".+"[^@]*)?[^@]*)(?:@)/, c = n.match(i), l = c && c[1] ? c[1] : void 0, d = this.extractLocation(n.replace(i, ""));
				return new k({
					functionName: l,
					fileName: d[0],
					lineNumber: d[1],
					columnNumber: d[2],
					source: n
				});
			}, this);
		}, "ErrorStackParser$$parseFFOrSafari")
	};
}
s(ne, "ErrorStackParser");
var M = new ne(), g = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string" && !process.browser, A = g && typeof module < "u" && typeof module.exports < "u" && typeof R < "u" && typeof __dirname < "u", W = g && !A;
globalThis.Bun;
var B = !g && !(typeof Deno < "u"), $ = B && typeof window == "object" && typeof document == "object" && typeof document.createElement == "function" && "sessionStorage" in window && typeof importScripts != "function", j = B && typeof importScripts == "function" && typeof self == "object";
typeof navigator == "object" && typeof navigator.userAgent == "string" && navigator.userAgent.indexOf("Chrome") == -1 && navigator.userAgent.indexOf("Safari");
var z, D, V, H, L;
async function T() {
	if (!g || (z = (await import("./__vite-browser-external-BU9yIxFE.js").then((m) => /* @__PURE__ */ __toESM(m.default, 1))).default, H = await import("./__vite-browser-external-BU9yIxFE.js").then((m) => /* @__PURE__ */ __toESM(m.default, 1)), L = await import("./__vite-browser-external-BU9yIxFE.js").then((m) => /* @__PURE__ */ __toESM(m.default, 1)), V = (await import("./__vite-browser-external-BU9yIxFE.js").then((m) => /* @__PURE__ */ __toESM(m.default, 1))).default, D = await import("./__vite-browser-external-BU9yIxFE.js").then((m) => /* @__PURE__ */ __toESM(m.default, 1)), U = D.sep, typeof R < "u")) return;
	let a = {
		fs: H,
		crypto: await import("./__vite-browser-external-BU9yIxFE.js").then((m) => /* @__PURE__ */ __toESM(m.default, 1)),
		ws: await import("./__vite-browser-external-BU9yIxFE.js").then((m) => /* @__PURE__ */ __toESM(m.default, 1)),
		child_process: await import("./__vite-browser-external-BU9yIxFE.js").then((m) => /* @__PURE__ */ __toESM(m.default, 1))
	};
	globalThis.require = function(n) {
		return a[n];
	};
}
s(T, "initNodeModules");
function oe(e, t) {
	return D.resolve(t || ".", e);
}
s(oe, "node_resolvePath");
function ae(e, t) {
	return t === void 0 && (t = location), new URL(e, t).toString();
}
s(ae, "browser_resolvePath");
var x;
g ? x = oe : x = ae;
var U;
g || (U = "/");
function se(e, t) {
	return e.startsWith("file://") && (e = e.slice(7)), e.includes("://") ? { response: fetch(e) } : { binary: L.readFile(e).then((o) => new Uint8Array(o.buffer, o.byteOffset, o.byteLength)) };
}
s(se, "node_getBinaryResponse");
function ce(e, t) {
	let o = new URL(e, location);
	return { response: fetch(o, t ? { integrity: t } : {}) };
}
s(ce, "browser_getBinaryResponse");
var F;
g ? F = se : F = ce;
async function q(e, t) {
	let { response: o, binary: r } = F(e, t);
	if (r) return r;
	let a = await o;
	if (!a.ok) throw new Error(\`Failed to load '\${e}': request failed.\`);
	return new Uint8Array(await a.arrayBuffer());
}
s(q, "loadBinaryFile");
var I;
if ($) I = s(async (e) => await import(e), "loadScript");
else if (j) I = s(async (e) => {
	try {
		globalThis.importScripts(e);
	} catch (t) {
		if (t instanceof TypeError) await import(e);
		else throw t;
	}
}, "loadScript");
else if (g) I = le;
else throw new Error("Cannot determine runtime environment");
async function le(e) {
	e.startsWith("file://") && (e = e.slice(7)), e.includes("://") ? V.runInThisContext(await (await fetch(e)).text()) : await import(z.pathToFileURL(e).href);
}
s(le, "nodeLoadScript");
async function J(e) {
	if (g) {
		await T();
		let t = await L.readFile(e, { encoding: "utf8" });
		return JSON.parse(t);
	} else return await (await fetch(e)).json();
}
s(J, "loadLockFile");
async function K() {
	if (A) return __dirname;
	let e;
	try {
		throw new Error();
	} catch (r) {
		e = r;
	}
	let t = M.parse(e)[0].fileName;
	if (g && !t.startsWith("file://") && (t = \`file://\${t}\`), W) {
		let r = await import("./__vite-browser-external-BU9yIxFE.js").then((m) => /* @__PURE__ */ __toESM(m.default, 1));
		return (await import("./__vite-browser-external-BU9yIxFE.js").then((m) => /* @__PURE__ */ __toESM(m.default, 1))).fileURLToPath(r.dirname(t));
	}
	let o = t.lastIndexOf(U);
	if (o === -1) throw new Error("Could not extract indexURL path from pyodide module location");
	return t.slice(0, o);
}
s(K, "calculateDirname");
function Y(e) {
	let t = e.FS, o = e.FS.filesystems.MEMFS, r = e.PATH, a = {
		DIR_MODE: 16895,
		FILE_MODE: 33279,
		mount: function(n) {
			if (!n.opts.fileSystemHandle) throw new Error("opts.fileSystemHandle is required");
			return o.mount.apply(null, arguments);
		},
		syncfs: async (n, i, c) => {
			try {
				let l = a.getLocalSet(n), d = await a.getRemoteSet(n), u = i ? d : l, m = i ? l : d;
				await a.reconcile(n, u, m), c(null);
			} catch (l) {
				c(l);
			}
		},
		getLocalSet: (n) => {
			let i = Object.create(null);
			function c(u) {
				return u !== "." && u !== "..";
			}
			s(c, "isRealDir");
			function l(u) {
				return (m) => r.join2(u, m);
			}
			s(l, "toAbsolute");
			let d = t.readdir(n.mountpoint).filter(c).map(l(n.mountpoint));
			for (; d.length;) {
				let u = d.pop(), m = t.stat(u);
				t.isDir(m.mode) && d.push.apply(d, t.readdir(u).filter(c).map(l(u))), i[u] = {
					timestamp: m.mtime,
					mode: m.mode
				};
			}
			return {
				type: "local",
				entries: i
			};
		},
		getRemoteSet: async (n) => {
			let i = Object.create(null), c = await de(n.opts.fileSystemHandle);
			for (let [l, d] of c) l !== "." && (i[r.join2(n.mountpoint, l)] = {
				timestamp: d.kind === "file" ? new Date((await d.getFile()).lastModified) : /* @__PURE__ */ new Date(),
				mode: d.kind === "file" ? a.FILE_MODE : a.DIR_MODE
			});
			return {
				type: "remote",
				entries: i,
				handles: c
			};
		},
		loadLocalEntry: (n) => {
			let c = t.lookupPath(n).node, l = t.stat(n);
			if (t.isDir(l.mode)) return {
				timestamp: l.mtime,
				mode: l.mode
			};
			if (t.isFile(l.mode)) return c.contents = o.getFileDataAsTypedArray(c), {
				timestamp: l.mtime,
				mode: l.mode,
				contents: c.contents
			};
			throw new Error("node type not supported");
		},
		storeLocalEntry: (n, i) => {
			if (t.isDir(i.mode)) t.mkdirTree(n, i.mode);
			else if (t.isFile(i.mode)) t.writeFile(n, i.contents, { canOwn: !0 });
			else throw new Error("node type not supported");
			t.chmod(n, i.mode), t.utime(n, i.timestamp, i.timestamp);
		},
		removeLocalEntry: (n) => {
			var i = t.stat(n);
			t.isDir(i.mode) ? t.rmdir(n) : t.isFile(i.mode) && t.unlink(n);
		},
		loadRemoteEntry: async (n) => {
			if (n.kind === "file") {
				let i = await n.getFile();
				return {
					contents: new Uint8Array(await i.arrayBuffer()),
					mode: a.FILE_MODE,
					timestamp: new Date(i.lastModified)
				};
			} else {
				if (n.kind === "directory") return {
					mode: a.DIR_MODE,
					timestamp: /* @__PURE__ */ new Date()
				};
				throw new Error("unknown kind: " + n.kind);
			}
		},
		storeRemoteEntry: async (n, i, c) => {
			let l = n.get(r.dirname(i)), d = t.isFile(c.mode) ? await l.getFileHandle(r.basename(i), { create: !0 }) : await l.getDirectoryHandle(r.basename(i), { create: !0 });
			if (d.kind === "file") {
				let u = await d.createWritable();
				await u.write(c.contents), await u.close();
			}
			n.set(i, d);
		},
		removeRemoteEntry: async (n, i) => {
			await n.get(r.dirname(i)).removeEntry(r.basename(i)), n.delete(i);
		},
		reconcile: async (n, i, c) => {
			let l = 0, d = [];
			Object.keys(i.entries).forEach(function(f) {
				let y = i.entries[f], S = c.entries[f];
				(!S || t.isFile(y.mode) && y.timestamp.getTime() > S.timestamp.getTime()) && (d.push(f), l++);
			}), d.sort();
			let u = [];
			if (Object.keys(c.entries).forEach(function(f) {
				i.entries[f] || (u.push(f), l++);
			}), u.sort().reverse(), !l) return;
			let m = i.type === "remote" ? i.handles : c.handles;
			for (let f of d) {
				let y = r.normalize(f.replace(n.mountpoint, "/")).substring(1);
				if (c.type === "local") {
					let S = m.get(y), X = await a.loadRemoteEntry(S);
					a.storeLocalEntry(f, X);
				} else {
					let S = a.loadLocalEntry(f);
					await a.storeRemoteEntry(m, y, S);
				}
			}
			for (let f of u) if (c.type === "local") a.removeLocalEntry(f);
			else {
				let y = r.normalize(f.replace(n.mountpoint, "/")).substring(1);
				await a.removeRemoteEntry(m, y);
			}
		}
	};
	e.FS.filesystems.NATIVEFS_ASYNC = a;
}
s(Y, "initializeNativeFS");
var de = s(async (e) => {
	let t = [];
	async function o(a) {
		for await (let n of a.values()) t.push(n), n.kind === "directory" && await o(n);
	}
	s(o, "collect"), await o(e);
	let r = /* @__PURE__ */ new Map();
	r.set(".", e);
	for (let a of t) {
		let n = (await e.resolve(a)).join("/");
		r.set(n, a);
	}
	return r;
}, "getFsHandles");
function G(e) {
	let t = {
		noImageDecoding: !0,
		noAudioDecoding: !0,
		noWasmDecoding: !1,
		preRun: ge(e),
		quit(o, r) {
			throw t.exited = {
				status: o,
				toThrow: r
			}, r;
		},
		print: e.stdout,
		printErr: e.stderr,
		thisProgram: e._sysExecutable,
		arguments: e.args,
		API: { config: e },
		locateFile: (o) => e.indexURL + o,
		instantiateWasm: ye(e.indexURL)
	};
	return t;
}
s(G, "createSettings");
function ue(e) {
	return function(t) {
		let o = "/";
		try {
			t.FS.mkdirTree(e);
		} catch (r) {
			console.error(\`Error occurred while making a home directory '\${e}':\`), console.error(r), console.error(\`Using '\${o}' for a home directory instead\`), e = o;
		}
		t.FS.chdir(e);
	};
}
s(ue, "createHomeDirectory");
function fe(e) {
	return function(t) {
		Object.assign(t.ENV, e);
	};
}
s(fe, "setEnvironment");
function me(e) {
	return e ? [async (t) => {
		t.addRunDependency("fsInitHook");
		try {
			await e(t.FS, { sitePackages: t.API.sitePackages });
		} finally {
			t.removeRunDependency("fsInitHook");
		}
	}] : [];
}
s(me, "callFsInitHook");
function pe(e) {
	let t = q(e);
	return async (o) => {
		let r = o._py_version_major(), a = o._py_version_minor();
		o.FS.mkdirTree("/lib"), o.API.sitePackages = \`/lib/python\${r}.\${a}/site-packages\`, o.FS.mkdirTree(o.API.sitePackages), o.addRunDependency("install-stdlib");
		try {
			let n = await t;
			o.FS.writeFile(\`/lib/python\${r}\${a}.zip\`, n);
		} catch (n) {
			console.error("Error occurred while installing the standard library:"), console.error(n);
		} finally {
			o.removeRunDependency("install-stdlib");
		}
	};
}
s(pe, "installStdlib");
function ge(e) {
	let t;
	return e.stdLibURL != null ? t = e.stdLibURL : t = e.indexURL + "python_stdlib.zip", [
		...me(e.fsInit),
		pe(t),
		ue(e.env.HOME),
		fe(e.env),
		Y
	];
}
s(ge, "getFileSystemInitializationFuncs");
function ye(e) {
	if (typeof WasmOffsetConverter < "u") return;
	let { binary: t, response: o } = F(e + "pyodide.asm.wasm");
	return function(r, a) {
		return async function() {
			try {
				let n;
				o ? n = await WebAssembly.instantiateStreaming(o, r) : n = await WebAssembly.instantiate(await t, r);
				let { instance: i, module: c } = n;
				a(i, c);
			} catch (n) {
				console.warn("wasm instantiation failed!"), console.warn(n);
			}
		}(), {};
	};
}
s(ye, "getInstantiateWasmFunc");
var C = "0.27.7";
async function $e(e = {}) {
	var u, m;
	await T();
	let t = e.indexURL || await K();
	t = x(t), t.endsWith("/") || (t += "/"), e.indexURL = t;
	let o = {
		fullStdLib: !1,
		jsglobals: globalThis,
		stdin: globalThis.prompt ? globalThis.prompt : void 0,
		lockFileURL: t + "pyodide-lock.json",
		args: [],
		env: {},
		packageCacheDir: t,
		packages: [],
		enableRunUntilComplete: !0,
		checkAPIVersion: !0,
		BUILD_ID: "e94377f5ce7dcf67e0417b69a0016733c2cfb6b4622ee8c490a6f17eb58e863b"
	}, r = Object.assign(o, e);
	(u = r.env).HOME ?? (u.HOME = "/home/pyodide"), (m = r.env).PYTHONINSPECT ?? (m.PYTHONINSPECT = "1");
	let a = G(r), n = a.API;
	if (n.lockFilePromise = J(r.lockFileURL), typeof _createPyodideModule != "function") {
		let f = \`\${r.indexURL}pyodide.asm.js\`;
		await I(f);
	}
	let i;
	if (e._loadSnapshot) {
		let f = await e._loadSnapshot;
		ArrayBuffer.isView(f) ? i = f : i = new Uint8Array(f), a.noInitialRun = !0, a.INITIAL_MEMORY = i.length;
	}
	let c = await _createPyodideModule(a);
	if (a.exited) throw a.exited.toThrow;
	if (e.pyproxyToStringRepr && n.setPyProxyToStringMethod(!0), n.version !== "0.27.7" && r.checkAPIVersion) throw new Error(\`Pyodide version does not match: '\${C}' <==> '\${n.version}'. If you updated the Pyodide version, make sure you also updated the 'indexURL' parameter passed to loadPyodide.\`);
	c.locateFile = (f) => {
		throw new Error("Didn't expect to load any more file_packager files!");
	};
	let l;
	i && (l = n.restoreSnapshot(i));
	let d = n.finalizeBootstrap(l, e._snapshotDeserializer);
	return n.sys.path.insert(0, ""), d.version.includes("dev") || n.setCdnUrl(\`https://cdn.jsdelivr.net/pyodide/v\${d.version}/full/\`), n._pyodide.set_excepthook(), await n.packageIndexReady, n.initializeStreams(r.stdin, r.stdout, r.stderr), d;
}
s($e, "loadPyodide");
//#endregion
//#region src/pyworker.ts
let pyodide = null;
let interruptBuffer = null;
let inputCounter = 0;
let workspaceRequestCounter = 0;
const pendingInputRequests = /* @__PURE__ */ new Map();
const pendingWorkspaceRequests = /* @__PURE__ */ new Map();
const originalConsole = {
	log: console.log.bind(console),
	info: console.info.bind(console),
	warn: console.warn.bind(console),
	error: console.error.bind(console),
	debug: console.debug.bind(console)
};
function formatArg(arg) {
	if (arg === null) return "null";
	if (arg === void 0) return "undefined";
	if (typeof arg === "string") return arg;
	if (typeof arg === "number" || typeof arg === "boolean") return String(arg);
	if (arg instanceof Error) return \`\${arg.name}: \${arg.message}\`;
	try {
		return JSON.stringify(arg);
	} catch {
		return String(arg);
	}
}
console.log = function(...args) {
	originalConsole.log.apply(console, args);
	self.postMessage({
		id: "console-log",
		type: "console",
		payload: {
			level: "info",
			message: args.map((a) => formatArg(a)).join(" ")
		}
	});
};
console.info = function(...args) {
	originalConsole.info.apply(console, args);
	self.postMessage({
		id: "console-log",
		type: "console",
		payload: {
			level: "info",
			message: args.map((a) => formatArg(a)).join(" ")
		}
	});
};
console.warn = function(...args) {
	originalConsole.warn.apply(console, args);
	self.postMessage({
		id: "console-log",
		type: "console",
		payload: {
			level: "warning",
			message: args.map((a) => formatArg(a)).join(" ")
		}
	});
};
console.error = function(...args) {
	originalConsole.error.apply(console, args);
	self.postMessage({
		id: "console-log",
		type: "console",
		payload: {
			level: "error",
			message: args.map((a) => formatArg(a)).join(" ")
		}
	});
};
console.debug = function(...args) {
	originalConsole.debug.apply(console, args);
	self.postMessage({
		id: "console-log",
		type: "console",
		payload: {
			level: "debug",
			message: args.map((a) => formatArg(a)).join(" ")
		}
	});
};
const consoleBuffer = [];
function sendMessage(response) {
	self.postMessage(response);
}
function createWorkspaceRequest(op, path, extra) {
	const id = \`ws-\${workspaceRequestCounter++}\`;
	return new Promise((resolve, reject) => {
		pendingWorkspaceRequests.set(id, {
			resolve,
			reject
		});
		sendMessage({
			id,
			type: "workspaceRequest",
			payload: {
				op,
				path: path ?? "",
				...extra
			}
		});
	});
}
function createLyraBridge() {
	return {
		read_file: (path, binary) => createWorkspaceRequest("read", path, { binary: !!binary }),
		write_file: (path, content) => createWorkspaceRequest("write", path, { content }),
		list_dir: (path) => createWorkspaceRequest("list", path || "."),
		exists: (path) => createWorkspaceRequest("exists", path),
		is_file: (path) => createWorkspaceRequest("is_file", path),
		is_dir: (path) => createWorkspaceRequest("is_dir", path),
		get_uri: (path) => createWorkspaceRequest("get_uri", path),
		revoke_uri: (uri) => createWorkspaceRequest("revoke_uri", void 0, { uri }),
		fetch: async (pathOrUri) => {
			const isBlobUrl = typeof pathOrUri === "string" && pathOrUri.startsWith("blob:");
			let url;
			if (isBlobUrl) url = pathOrUri;
			else url = await createWorkspaceRequest("get_uri", pathOrUri);
			const r = await fetch(url);
			if (!isBlobUrl) await createWorkspaceRequest("revoke_uri", void 0, { uri: url });
			return r;
		},
		uri: (path) => {
			const state = {};
			return {
				async __aenter__() {
					state._url = await createWorkspaceRequest("get_uri", path);
					return state._url;
				},
				async __aexit__(_excType, _excVal, _excTb) {
					if (state._url) {
						await createWorkspaceRequest("revoke_uri", void 0, { uri: state._url });
						state._url = void 0;
					}
				}
			};
		}
	};
}
async function initPyodide(payload) {
	const poVersion = package_default.version;
	pyodide = await $e({ indexURL: \`https://cdn.jsdelivr.net/pyodide/v\${poVersion}/full/\` });
	if (typeof SharedArrayBuffer !== "undefined") try {
		const interruptBufferShared = new SharedArrayBuffer(1);
		interruptBuffer = new Uint8Array(interruptBufferShared);
		pyodide.setInterruptBuffer(interruptBuffer);
		sendMessage({
			id: "interrupt-buffer",
			type: "success",
			payload: interruptBufferShared
		});
	} catch (error) {
		console.warn("Failed to set up interrupt buffer:", error);
		sendMessage({
			id: "interrupt-buffer",
			type: "error",
			payload: { message: "SharedArrayBuffer not available" }
		});
	}
	else {
		console.warn("SharedArrayBuffer not available - interrupt functionality will be limited");
		sendMessage({
			id: "interrupt-buffer",
			type: "error",
			payload: { message: "SharedArrayBuffer not available" }
		});
	}
	pyodide.globals.set("input", (promptText) => {
		const inputId = \`input-\${inputCounter++}\`;
		sendMessage({
			id: inputId,
			type: "inputRequest",
			payload: { prompt: promptText || "" }
		});
		return new Promise((resolve, reject) => {
			pendingInputRequests.set(inputId, {
				resolve,
				reject
			});
		});
	});
	pyodide.setStderr({ batched: (s) => {
		consoleBuffer.push(s);
		sendMessage({
			id: "stream",
			type: "stderr",
			payload: s
		});
	} });
	pyodide.setStdout({ batched: (s) => {
		consoleBuffer.push(s);
		sendMessage({
			id: "stream",
			type: "stdout",
			payload: s
		});
	} });
	const lyraBridge = createLyraBridge();
	pyodide.globals.set("__lyra_bridge__", lyraBridge);
	pyodide.runPython(\`
import sys
import types
__bridge__ = __lyra_bridge__
__m__ = types.ModuleType('lyra')
for __a__ in ('read_file', 'write_file', 'list_dir', 'exists', 'is_file', 'is_dir', 'get_uri', 'revoke_uri', 'fetch', 'uri'):
    setattr(__m__, __a__, getattr(__bridge__, __a__))
sys.modules['lyra'] = __m__
del __lyra_bridge__, __bridge__, __m__, __a__
\`);
	if (payload.vars) for (const [key, value] of Object.entries(payload.vars)) pyodide.globals.set(key, value);
}
async function loadPackages(payload) {
	if (!pyodide) throw new Error("Pyodide not initialized");
	if (payload.packages.length > 0) await pyodide.loadPackage(payload.packages, { checkIntegrity: false });
}
function convertResult(result) {
	if (result === void 0 || result === null) return result;
	const resultType = typeof result;
	if (resultType === "string" || resultType === "number" || resultType === "boolean") return result;
	if (result && typeof result === "object") {
		if (typeof result.toJs === "function") try {
			const jsValue = result.toJs({
				dict_converter: Object.fromEntries,
				create_pyproxies: false
			});
			if (typeof result.destroy === "function") result.destroy();
			return jsValue;
		} catch (error) {
			try {
				const strValue = String(result);
				if (typeof result.destroy === "function") result.destroy();
				return strValue;
			} catch {
				return "[Python object]";
			}
		}
		try {
			structuredClone(result);
			return result;
		} catch {
			try {
				return JSON.parse(JSON.stringify(result));
			} catch {
				return String(result);
			}
		}
	}
	return result;
}
async function execCode(payload) {
	if (!pyodide) throw new Error("Pyodide not initialized");
	consoleBuffer.length = 0;
	if (interruptBuffer) interruptBuffer[0] = 0;
	let result;
	try {
		result = await pyodide.runPythonAsync(payload.code);
	} catch (error) {
		if (interruptBuffer) interruptBuffer[0] = 0;
		throw error;
	}
	if (interruptBuffer) interruptBuffer[0] = 0;
	return {
		result: convertResult(result),
		console: consoleBuffer.slice()
	};
}
async function execModule(payload) {
	if (!pyodide) throw new Error("Pyodide not initialized");
	consoleBuffer.length = 0;
	const mod = pyodide.pyimport(payload.moduleName);
	const entryName = payload.entryName ?? "main";
	let result;
	if (entryName in mod) {
		const func = mod[entryName];
		if (!(func instanceof Function)) throw new Error(\`Module entry point is not a function: \${entryName}\`);
		result = func.callKwargs(payload.vars || {});
	}
	return {
		result: convertResult(result),
		console: consoleBuffer.slice()
	};
}
async function runFunction(payload) {
	if (!pyodide) throw new Error("Pyodide not initialized");
	consoleBuffer.length = 0;
	const func = pyodide.globals.get(payload.name);
	const result = func.callKwargs(payload.args);
	func.destroy();
	return {
		result: convertResult(result),
		console: consoleBuffer.slice()
	};
}
async function setGlobal(payload) {
	if (!pyodide) throw new Error("Pyodide not initialized");
	pyodide.globals.set(payload.key, payload.value);
}
async function getVersion() {
	if (!pyodide) throw new Error("Pyodide not initialized");
	const result = await pyodide.runPythonAsync("import sys; sys.version.split()[0]");
	return result != null ? String(result) : String(pyodide.version);
}
self.onmessage = async (event) => {
	const { id, type, payload } = event.data;
	if (type === "inputResponse") {
		const pending = pendingInputRequests.get(id);
		if (pending) {
			pendingInputRequests.delete(id);
			if (payload.cancelled) pending.resolve("");
			else pending.resolve(payload.value || "");
		}
		return;
	}
	if (type === "workspaceResponse") {
		const pending = pendingWorkspaceRequests.get(id);
		if (pending) {
			pendingWorkspaceRequests.delete(id);
			if (payload?.success === false) pending.reject(new Error(payload.error ?? "Workspace request failed"));
			else pending.resolve(payload?.data);
		}
		return;
	}
	try {
		let result;
		switch (type) {
			case "init":
				await initPyodide(payload);
				result = { initialized: true };
				break;
			case "loadPackages":
				await loadPackages(payload);
				result = { loaded: true };
				break;
			case "execCode":
				result = await execCode(payload);
				break;
			case "execModule":
				result = await execModule(payload);
				break;
			case "runFunction":
				result = await runFunction(payload);
				break;
			case "setGlobal":
				await setGlobal(payload);
				result = { set: true };
				break;
			case "getVersion":
				result = await getVersion();
				break;
			default: throw new Error(\`Unknown message type: \${type}\`);
		}
		sendMessage({
			id,
			type: "success",
			payload: result
		});
	} catch (error) {
		sendMessage({
			id,
			type: "error",
			payload: {
				message: error instanceof Error ? error.message : String(error),
				stack: error instanceof Error ? error.stack : void 0
			}
		});
	}
};
//#endregion
export { __commonJSMin as t };

//# sourceMappingURL=pyworker-C_eL_LZm.js.map`,a=typeof self<`u`&&self.Blob&&new Blob([`URL.revokeObjectURL(import.meta.url);`,i],{type:`text/javascript;charset=utf-8`});function o(e){let t;try{if(t=a&&(self.URL||self.webkitURL).createObjectURL(a),!t)throw``;let n=new Worker(t,{type:`module`,name:e?.name});return n.addEventListener(`error`,()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),n}catch{return new Worker(`data:text/javascript;charset=utf-8,`+encodeURIComponent(i),{type:`module`,name:e?.name})}}var s=r(`PyService`),c=0,l=class{constructor(){this.pendingMessages=new Map}async init(e){this.vars=e??{};let t=new o;this.worker=t,t.onmessage=e=>{this.handleWorkerMessage(e.data)},t.onerror=e=>{console.error(`Python Worker error:`,e)},await this.sendMessage(`init`,{vars:this.vars})}async handleWorkspaceRequest(r){let{id:i,payload:a}=r,{op:o,path:s,...c}=a??{},l=(e,t,n)=>{this.worker.postMessage({id:i,type:`workspaceResponse`,payload:{success:e,data:t,error:n}})};try{let r=await e.getWorkspace();if(!r){l(!1,void 0,`No workspace selected`);return}let i=e=>e===``||e===`.`?``:e;switch(o){case`read`:{let e=await r.getResource(i(s));if(!e||!(e instanceof t)){l(!1,void 0,`File not found: ${s}`);return}if(c.binary){let t=await e.getContents({blob:!0});l(!0,t instanceof Blob?await t.arrayBuffer():new ArrayBuffer(0))}else{let t=await e.getContents();l(!0,typeof t==`string`?t:String(t??``))}return}case`write`:{let e=c.content;(e instanceof ArrayBuffer||ArrayBuffer.isView(e))&&(e=new Blob([e]));let n=await r.getResource(i(s),{create:!0});if(!n||!(n instanceof t)){l(!1,void 0,`Failed to create file: ${s}`);return}await n.saveContents(e),l(!0);return}case`list`:{let e=await r.getResource(i(s));if(!e||!(e instanceof n)){l(!1,void 0,`Directory not found: ${s}`);return}l(!0,(await e.listChildren(!1)).map(e=>e.getName()));return}case`exists`:l(!0,await r.getResource(i(s))!=null);return;case`is_file`:l(!0,await r.getResource(i(s))instanceof t);return;case`is_dir`:l(!0,await r.getResource(i(s))instanceof n);return;case`get_uri`:{let e=await r.getResource(i(s));if(!e||!(e instanceof t)){l(!1,void 0,`File not found: ${s}`);return}let n=await e.getContents({uri:!0});l(!0,typeof n==`string`?n:void 0);return}case`revoke_uri`:{let e=c.uri;typeof e==`string`&&URL.revokeObjectURL(e),l(!0);return}default:l(!1,void 0,`Unknown workspace op: ${o}`)}}catch(e){l(!1,void 0,e instanceof Error?e.message:String(e))}}handleWorkerMessage(e){if(e.id===`interrupt-buffer`){e.type===`success`?this.interruptBuffer=new Uint8Array(e.payload):this.interruptBuffer=void 0;return}if(e.type===`workspaceRequest`){this.handleWorkspaceRequest(e);return}if(e.type===`inputRequest`){let t=e.payload.prompt||`Input:`,n=window.prompt(t);this.worker.postMessage({id:e.id,type:`inputResponse`,payload:{value:n,cancelled:n===null}});return}if(e.type===`stdout`){this.stdoutCallback?this.stdoutCallback(e.payload):s.debug(e.payload);return}if(e.type===`stderr`){this.stderrCallback?this.stderrCallback(e.payload):s.error(e.payload);return}if(e.type===`console`){let{level:t,message:n}=e.payload;typeof window<`u`&&window.logToTerminal&&window.logToTerminal(`Python Worker`,n,t);return}let t=this.pendingMessages.get(e.id);t&&(this.pendingMessages.delete(e.id),e.type===`success`?t.resolve(e.payload):e.type===`error`&&t.reject(Error(e.payload.message)))}async sendMessage(e,t){if(!this.worker)throw Error(`PyEnv not initialized yet: see init()`);let n=`msg-${c++}`,r={id:n,type:e,payload:t};return new Promise((e,t)=>{this.pendingMessages.set(n,{resolve:e,reject:t}),this.worker.postMessage(r)})}setStdoutCallback(e){this.stdoutCallback=e}setStderrCallback(e){this.stderrCallback=e}async runFunction(e,t){return await this.sendMessage(`runFunction`,{name:e,args:t})}async setGlobal(e,t){await this.sendMessage(`setGlobal`,{key:e,value:t})}async loadPackages(e){e.length>0&&await this.sendMessage(`loadPackages`,{packages:e})}async execCode(e){return await this.sendMessage(`execCode`,{code:e})}async execScript(e,t=!1){let n=e.split(`.`)[0],r=e.includes(`:`)?e.split(`:`).reverse()[0]:void 0;return await this.execModule(n,r)}async execModule(e,t){return await this.sendMessage(`execModule`,{moduleName:e,entryName:t,vars:this.vars})}async getVersion(){return await this.sendMessage(`getVersion`)}canInterrupt(){return this.interruptBuffer!==void 0}interrupt(){this.interruptBuffer&&(this.interruptBuffer[0]=2)}close(){this.worker&&=(this.worker.terminate(),void 0),this.pendingMessages.clear()}};export{l as t};