
function limit(maxCount) {

  const taskQueue = []
  let activeCount = 0

  const next = () => {
    console.log(activeCount, 'activeCount')
    activeCount--
    if (taskQueue.length && activeCount < taskQueue.length) {
      const task = taskQueue.shift()
      task()
    }
  }

  const run = async (fn, resolve, args) => {
    activeCount++
    const res = await fn(...args)
    resolve(res)
    next()
  }

  const push = (fn, resolve, args) => {
    taskQueue.push(run.bind(null, fn, resolve, args))
    if (taskQueue.length && activeCount < taskQueue.length) {
      const task = taskQueue.shift()
      task()
    }
  }
  
  const runner = (fn, ...args) => {
    return new Promise((resolve) => {
      push(fn, resolve, args)
    })
  }
  return runner
}

async function sleep(n,name='test'){
  return new Promise(resolve=>{
    console.log(n,name,'start')
    setTimeout(()=>{
      console.log(n,name,'end','-------------')
      resolve({n,name})
    },n*1000)
  })
}

async function start(){
  let runner = limit(2) //并发量是3
  let tasks = [
    ()=> sleep(1,'吃饭'),
    ()=> sleep(3,'睡觉'),
    ()=> sleep(5,'打游戏'),
    ()=> sleep(3.5,'学习算法'),
    ()=> sleep(4,'学习Vue和React'),
  ].map(runner)
  let result = await Promise.all(tasks)
  console.log(result,'end')
}
start()
