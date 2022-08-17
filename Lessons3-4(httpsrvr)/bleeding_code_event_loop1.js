// https://youtu.be/ol56smloW2Q
// 1. On the launch of the app a single thread / event loop is created
// 2. Any Sychronous code - including includes is executed first
//    Async code will use callBack functions to run after
//      the async event has been completed
// 3. A single event loop in a single thread is executed after
// the synchronous code has run.
// 4. Each cycle of the event loop is called a tick or cycle
//    Async code is handled by cycles of the event loop
// 5. There are multiple cycles within each event loop cycle /tick

// Some async functions that useful to know about:

// [1] Set Timeout
//  setTimeout(()=>{console.log("timeout")},0);
// Also used in front-end

// [2] Set Interval
//  setInterval(()=>{console.log("interval")},2000);
// Also used in front-end

// [3] Set Immediate
//  setImmediate(()=>{console.log("immediate")});
//  * No timer!

// [4] Next Tick
//  process.nextTick(()=>{console.log("next tick")});
// * No Timer!

// [5] Promises
//  Promise.reolve().then(()=>{console.log("Promise")});
//  * No Timer either!

// NOTES ON THE EVENT LOOP - 5 MACRO TASK PHASES
// Root App (Sync code) =====>  Phase 1 ... Phase 5
// Phase 1: Timers
//  * callback() logic from setTimeout() or setInterval()
//
// Phase 2: I/O Logic
//  * callbacks to os, fs, network, encryption
//
// Phase 3: Polling
// * Callback logic of frameworks like express for instance
//    New incoming responses are handled here
//
// Phase 4: Check
// * setImmediate() callback logic handled here
//
// Phase 5 : close
// * close() or destructors? web socket or tcp/ip teardown etc
//

// Next.tick() and Promises are considered MICRO-TASKS
// micro tasks are handled at EACH PHASE of the event cycle/tick...
//  * next tick() and promises() are PRIORITISED in the callback Queue
//  * This GARANTEES that promises and next ticks are executed first!
//  * Microtasks slip ahead of the immediate next task BEFORE the macro-tasks

// Timeouts - app_timeouts.js
const TIMEOUT_MS = 10;
console.log("Root code Start...");

setTimeout(() => {
  console.log("--> Timeout");
});

console.log("Root code Ends...Event loop takes over.");

// process.nextTick(() => {
//   console.log("next tick");
// });

// promise = new Promise();
// promise.reolve().then(() => {
//   console.log("Promise");
// });
