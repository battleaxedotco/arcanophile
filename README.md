# arcanophile

## Installation

```bash
npm i arcanophile
```

```js
import { readFile } from "arcanophile";
```

---

## Functions

<dl>
<dt><a href="#folderExists">folderExists(targetPath, createOnRun)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Checks if path exists and is actually a directory, optionally creates the folder whenever investigated</p>
</dd>
<dt><a href="#fileExists">fileExists(targetPath, createOnRun)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Returns Boolean if path exists and it&#39;s a valid folder, optionally creates the folder whenever investigated</p>
</dd>
<dt><a href="#exists">exists(targetPath)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Type independent function to check existence of path</p>
</dd>
<dt><a href="#makeFolder">makeFolder(targetPath)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Shorter alias of a mkdir function to create a folder at specified path</p>
</dd>
<dt><a href="#makeFile">makeFile(targetPath, data, options)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Shorter alias of a writeFileSync function to create a file at specified path</p>
</dd>
<dt><a href="#isFolder">isFolder(targetPath)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Verify a given path string is actually a directory and not a type of file</p>
</dd>
<dt><a href="#readFiles">readFiles(folderPath, verbose)</a> ⇒ <code>Array</code></dt>
<dd><p>Thenable way to get all the file contents of a folder path</p>
</dd>
<dt><a href="#readFile">readFile(folderPath, verbose)</a> ⇒ <code>Array</code></dt>
<dd><p>Thenable way to get a file&#39;s contents</p>
</dd>
<dt><a href="#readDirs">readDirs(folderPath, flatten)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the children filepaths of each folder Array entry</p>
</dd>
<dt><a href="#readDir">readDir(folderPath)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns the children filepaths of given folder path</p>
</dd>
</dl>

<a name="folderExists"></a>

## folderExists(targetPath, createOnRun) ⇒ <code>Boolean</code>
Checks if path exists and is actually a directory, optionally creates the folder whenever investigated

**Kind**: global function  
**Returns**: <code>Boolean</code> - Whether path existed at time of investigating  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| targetPath | <code>String</code> |  | Relative or absolute file path |
| createOnRun | <code>Boolean</code> | <code>true</code> | If TRUE, create empty folder if didn't previously exist |

<a name="fileExists"></a>

## fileExists(targetPath, createOnRun) ⇒ <code>Boolean</code>
Returns Boolean if path exists and it's a valid folder, optionally creates the folder whenever investigated

**Kind**: global function  
**Returns**: <code>Boolean</code> - Whether path exists  

| Param | Type | Description |
| --- | --- | --- |
| targetPath | <code>String</code> | Relative or absolute file path |
| createOnRun | <code>Boolean</code> | If TRUE, create empty folder if didn't previously exist |

<a name="exists"></a>

## exists(targetPath) ⇒ <code>Boolean</code>
Type independent function to check existence of path

**Kind**: global function  
**Returns**: <code>Boolean</code> - Whether path exists  

| Param | Type | Description |
| --- | --- | --- |
| targetPath | <code>String</code> | Relative or absolute file path |

<a name="makeFolder"></a>

## makeFolder(targetPath) ⇒ <code>Boolean</code>
Shorter alias of a mkdir function to create a folder at specified path

**Kind**: global function  
**Returns**: <code>Boolean</code> - Whether folder creation was successful  

| Param | Type | Description |
| --- | --- | --- |
| targetPath | <code>String</code> | Relative or absolute file path |

<a name="makeFile"></a>

## makeFile(targetPath, data, options) ⇒ <code>Boolean</code>
Shorter alias of a writeFileSync function to create a file at specified path

**Kind**: global function  
**Returns**: <code>Boolean</code> - Whether folder creation was successful  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| targetPath | <code>String</code> |  | Relative or absolute file path |
| data | <code>String</code> \| <code>Buffer</code> \| <code>URL</code> |  | Contents of file |
| options | <code>Object</code> | <code></code> | Key/values for encoding, mode, and flag |

<a name="isFolder"></a>

## isFolder(targetPath) ⇒ <code>Boolean</code>
Verify a given path string is actually a directory and not a type of file

**Kind**: global function  
**Returns**: <code>Boolean</code> - Whether path exists  

| Param | Type | Description |
| --- | --- | --- |
| targetPath | <code>String</code> | Relative or absolute file path |

<a name="readFiles"></a>

## readFiles(folderPath, verbose) ⇒ <code>Array</code>
Thenable way to get all the file contents of a folder path

**Kind**: global function  
**Returns**: <code>Array</code> - String data of each file contained within  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| folderPath | <code>String</code> |  | Relative or absolute folder path |
| verbose | <code>Boolean</code> | <code>true</code> | If false, only return file content, otherwise return detailed File object |

<a name="readFile"></a>

## readFile(folderPath, verbose) ⇒ <code>Array</code>
Thenable way to get a file's contents

**Kind**: global function  
**Returns**: <code>Array</code> - String data of each file contained within  

| Param | Type | Description |
| --- | --- | --- |
| folderPath | <code>String</code> | Relative or absolute folder path |
| verbose | <code>Boolean</code> | If false, only return file content, otherwise return detailed File object |

<a name="readDirs"></a>

## readDirs(folderPath, flatten) ⇒ <code>Array</code>
Returns the children filepaths of each folder Array entry

**Kind**: global function  
**Returns**: <code>Array</code> - Any filepaths contained within a target folderpath entry  

| Param | Type | Description |
| --- | --- | --- |
| folderPath | <code>String</code> | Relative or absolute folder path |
| flatten | <code>Boolean</code> | Return as a single Array, otherwise return as Array of separate nested Arrays |

<a name="readDir"></a>

## readDir(folderPath) ⇒ <code>Array</code>
Returns the children filepaths of given folder path

**Kind**: global function  
**Returns**: <code>Array</code> - Paths to each child file entry  

| Param | Type | Description |
| --- | --- | --- |
| folderPath | <code>String</code> | Relative or absolute folder path |

