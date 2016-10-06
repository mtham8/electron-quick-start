// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// Each web page in Electron runs on its own process.

/*
In normal browsers, web pages usually run in a sandboxed environment and are not allowed
access to native resources. Electron, however, provides the power to use Node.js in web pages
allowing lower level operating system interactions.

If you want to perform GUI operations in a web page, the renderer process of the web page must
communicate with the main process to request that the main process perform those operations.

In Electron, there are several ways to communicate between the main process and renderer processes.
Such as ipcRenderer and ipcMain modules for sending messages, and the remote module for RPC style communication.
*/
