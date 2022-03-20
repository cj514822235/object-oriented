// for (var i=0; i<5; i++) {
//     setTimeout(()=>{console.log(i)},i*1000);
// }

console.log('这是因为setTimeout是异步执行，每一次for循环的时候，setTimeout都执行一次，但是里面的函数没有被执行，而是被放到了任务队列里，等待执行。' +
    '只有主线上的任务执行完，才会执行任务队列里的任务。也就是说它会等到for循环全部运行完毕后，才会执行fun函数，但是当for循环结束后此时i的值已经变成了6，' +
    '因此虽然定时器跑了5秒，控制台上的内容依然是5。')

console.log('通过闭包，将i的变量驻留在内存中，当输出j时，引用的是外部函数的变量值i，i的值是根据循环来的，执行setTimeout时已经确定了里面的的输出了。')
for (var i=0; i<=5; i++) {
    (function (j){
        setTimeout(()=>{console.log(j)},j*1000);})(i)
}

// var 改为 let
// for (let i=0; i<5; i++) {
//     setTimeout(()=>{console.log(i)},i*1000);
// }