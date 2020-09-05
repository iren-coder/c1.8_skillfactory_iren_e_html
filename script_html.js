function jQuery (selector, context = document){
	this.elements = Array.from(context.querySelectorAll(selector)); 
	return this
}

jQuery.prototype.each = function (fn){
	this.elements.forEach((element, index) => fn.call(element, element, index));
	return this;
}

//Вешаем обработчик на элементы
jQuery.prototype.click = function(fn){
	this.each(element => element.addEventListener('click', fn))
	return this
}

jQuery.prototype.html = function() {
	this.each(element => element.outerHTML = "<li>list</li>")
    return this
}

// Создаём кнопки и вешаем на них обработчик
const $ = (e) => new jQuery(e);

$('button').click(e => console.log(e)).html()