const on = function(name, cb) {
    this.addEventListener(name, cb);
}

const off = function(name,cb){
        this.removeEventListener(name,cb);
}

const css = function (values) {
    for (let key in values) {
        this.style[key] = values[key];
    }
}

const addClass = function(names){
    names = names.split(' ');
    elem = this;
    names.forEach(function(name){
        elem.classList.add(name);
    })
}

const removeClass = function(names){
    names = names.split(' ');
    elem = this;
    names.forEach(function(name){
        elem.classList.remove(name);
    })
}

const toggleClass = function(name){
    present = this.getAttribute('class');
    present = present.split(' ');
    if(present.indexOf(name) != -1){
        this.classList.remove(name);
    }
    else{
        this.classList.add(name);
    }

}

const html = function(data){
    if(data != undefined){
        this.innerHTML = data;
    }
    else{
        return this.innerHTML;
    }
}

const text = function(data){
    if(data != undefined){
        this.textContent = data;
    }
    else{
    return this.textContent;
    }
}

const val = function(value){
    if(value != undefined){
        this.value = value;
    }
    else{
        return this.value;
    }
}

const attr = function(attr,value){
    if(attr != undefined && value == undefined){
       return this.getAttribute(attr)
    }
    if(attr != undefined && value != undefined){
        return this.setAttribute(attr,value)
    }
    else{
        throw "error occured attr takes 1 or 2 arguments passed"
        
    }
}

const parent = function(){
    return this.parentNode
}

const child = function(){
    return Array.from(this.children)
}

const next = function(){
    return this.nextElementSibling
}

const styles = function(name){
    if(name != undefined){
        return window.getComputedStyle(this,null).getPropertyValue(name)
    }
    else{
        return window.getComputedStyle(this,null)
    }
}

const is = function(selector){
    return this.matches(selector)
}

const append = function(el){
    this.appendChild(el)
}

const prepend = function(element){
    this.insertBefore(element,this.firstChild)
}

const hide = function(){
    if(this.constructor === Array){
        this.forEach(elem => {
            elem.style.display = "none"
        })
    }
    else{
    this.style.display = 'none';
    }
}

const show = function(){
    if(this.constructor === Array){
        this.forEach(elem => {
            elem.style.display = ''
        })
    }
    else{
    this.style.display = '';
    }
}


const features = {on,off,css,addClass,removeClass,toggleClass,html,text,
                    val,attr,parent,child,next,styles,is,append,prepend,hide,show}

$ = (name) => {
    value =  Array.from(document.querySelectorAll(name));
    if(value.length == 1 ){
        value[0] = Object.assign(value[0],features); 
        return value[0]
    } 
    else{
        elements = []
        value.forEach(val => {
            elem = Object.assign(val,features);
            elements.push(elem);
        })
        elements = Object.assign(elements,features)
        return elements
    }
}

//function to create elements


$create = function(name,content){
    elem = document.createElement(name);
    textnode = document.createTextNode(content);
    elem.appendChild(textnode);
    return elem;
}