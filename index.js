// todo 发布订阅模式
const eventBus = {
    clientList: {},
    listen: function (key, fn) {
        if (!this.clientList[key]) {
            this.clientList[key] = []
        }
        this.clientList[key].push(fn)
    },
    trigger: function (type, params) {
        let fns = this.clientList[type]
        if (fns && fns.length) {
            fns.forEach(item => {
                item.call(this, params)
            })
        }
    }
}

// 测试
function fun1(a) {
    console.log(a, 'fun1')
}

function fun2(b) {
    console.log(b, 'fun2')
}

eventBus.listen('name', fun1)
eventBus.listen('name', fun2)
eventBus.listen('fun2', fun2)

eventBus.trigger('fun1', 'fun1')
eventBus.trigger('fun2', 'fun2')
eventBus.trigger('name', 'name:张发发')
