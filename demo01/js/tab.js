
class Tab {
    constructor(id) {
        this.main = document.querySelector(id);
        this.add = this.main.querySelector('.tabAdd');
        this.ul = this.main.querySelector('.firstNav ul:first-child');
        this.section = this.main.querySelector('.sections');
        this.init();
    }

    init() {
        this.updateNode();
        // init 初始化操作让相关的元素绑定事件
        this.add.onclick = this.addTab.bind(this.add, this);
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab.bind(this.lis[i], this);
            this.remove[i].onclick = this.removeTab.bind(this.remove[i], this);
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
        }
    }

    updateNode() {
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.remove = this.main.querySelectorAll('.icon-close');
        this.spans = this.main.querySelectorAll('.firstNav li span:first-child');
    }

    clearClass() {
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
    // 1. 切换功能
    toggleTab(that) {
        that.clearClass();
        this["className"] = 'currentTab';
        that.sections[this.index].className = 'tabContent';
        }

    // 2. 添加功能
    addTab(that) {
        that.clearClass();
        // (1) 创建li元素和section元素 
        const li = '<li class="currentTab"><span>新选项卡</span><span class="iconfont icon-close"></span></li>';
        const section = '<section class="tabContent">添加新内容：</section>';
        // (2) 把这两个元素追加到对应的父元素里面
        that.ul.insertAdjacentHTML('beforeend', li);
        that.section.insertAdjacentHTML('beforeend', section);
        that.init();
    }
    // 3. 删除功能
    removeTab(that, e) {
        e.stopPropagation(); // 阻止冒泡 防止触发li 的切换点击事件
        let index = this.parentNode.index;
        that.lis[index].remove();
        that.sections[index].remove();
        that.init();
        if (document.querySelector('.currentTab')) return;
        index--;
        // 手动调用我们的点击事件  不需要鼠标触发
        that.lis[index] && that.lis[index].click();
    }
    // 4. 编辑功能
    editTab() {
        const str = this.innerHTML;
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML = '<input type="text" />';
        const input = this.children[0];
        input.value = str;
        input.select();
        input.onblur = function () {
            this.parentNode.innerHTML = this.value;
        };
        input.onkeyup = function (e) {
            if (e.keyCode === 13) {
                this.blur();
            }
        }
    }
}

new Tab('#tab')