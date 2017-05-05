function setFoucus() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName('label')) return false;
    var labelNodes = document.getElementsByTagName('label');
    for (var i = 0; i<labelNodes.length; ++i) {
        if(labelNodes[i].getAttribute('for')) {
            var curId = labelNodes[i].getAttribute('for');
            var tableNode = document.getElementById(curId);
            if (tableNode) {
                labelNodes[i].onclick = (function (curNode) {
                    return function () {
                        curNode.focus();
                        return false;  
                    }
                })(tableNode);
            }
        }
    }
}

/*
目标： 表单中元素获得焦点时，便将其默认的值去掉。失去焦点时显示placeholder的值。
*/
function resetFields(params) {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName('form')) return false;
    var formNode = document.getElementsByTagName('form')[0]; 
    
    for (var i = 0; i < formNode.elements.length; ++i) {
        var element = formNode.elements[i];
        if (element.type === 'submit') continue;
        
        if(!(element.placeholder || element.getAttribute('placeholder'))) continue;
        element.onfocus = function () {
            var text = this.placeholder || this.getAttribute('placeholder');
            console.log('this.value: ' + this.value);
            console.log('text: ' + text);
            if (this.value === text) {
                
                this.className = '';
                this.value = "";
            }
        }
        element.onblur = function () {
            if (this.value === "") {
                this.className = 'placeholder';
                this.value = this.placeholder || this.getAttribute('placeholder');                
            }
        }
    }   
}

function  isFilled(node) {
    if (node.value.replace(' ', '').length === 0) return false;
    var placeholder = node.placeholder || node.getAttribute('placeholder');
    return node.value !== placeholder;
}

function  isEmail(node) {
    if (node.value.indexof('@')===-1 || node.value.indexof('.') === -1) {
        return false;
    }
}

function validateForm(formNode) {
    for (var i = 0; i < formNode.elements.length; ++i) {
        var element = formNode.elements[i];
        if (element.getAttribute('required')) {
            if (!isFilled(element)) {
                alert('The input element is empty!');
                return false;
            }
        }
        
        if (element.type === 'email') {
            if (!isEmail(element)) {
                alert('The input email address is illegal!');
                return false;               
            }
        }
    }
}




function  displayAjaxLoading(element) {
    while(element.hasChildNodes()) {
        element.removeChild(element.lastChild);
    }
    
    var loadingNode = document.createElement('img');
    loadingNode.setAttribute('src', 'images/loading.gif');
    loadingNode.setAttribute('alt', 'loading......');
    element.appendChild(loadingNode);
}

function  submitWithAjax(formNode, target) {
    var request = getHttpObject();
    if (!request) return false;
    displayAjaxLoading(target);
    
    var data = 'hello world';
    
    request.open('POST', formNode.getAttribute('action'),true);
    request.setRequestHeader('Content-type', '');
    request.onreadystatechange = function () {
        if (request.status === 4) {
            var matches;
            if (matches.length > 1) {
                target.innerHtml = "";
            }else {
                target.innerHtml = "";
            }
            
        } else {
            target.innerHtml = "";
        }
        

    };
    request.send(data);
    return true;;
}

function  prepareForms() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementsByTagName('form')) return false;
    var formNodes = document.getElementsByTagName('form');
    
    for (var i = 0; i < formNodes.length; ++i) {
        formNodes[i].onsubmit = function () {
           if (!validateForm(this)) return false;
           var article = document.getElementsByTagName('article')[0];
           if (!submitWithAjax(this, article)) return false;
        }        
    }
}

addloadEvent(setFoucus);
addloadEvent(resetFields);
addloadEvent(prepareForms);