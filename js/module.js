try {
    const lbefjkvn = document.querySelectorAll('.toggle_popup_menu');


lbefjkvn.forEach((then) => {
    then.addEventListener('click',() => {
        let pdgkn = then.getAttribute('popupid');
        let erghgh = then.getAttribute('drop-position');
        let dkln = document.querySelector(pdgkn);
        if (erghgh == 'up') {
            let flme = document.querySelector('.popup-container');
            let pefknln = document.querySelector('.container-up');
            pefknln.appendChild(flme);


            dkln.classList.remove('left');
            dkln.classList.remove('right');
            dkln.classList.remove('bottom');
            dkln.classList.add('up');
            dkln.classList.toggle('drowned');
            
        }else if (erghgh == 'bottom') {
            let flme = document.querySelector('.popup-container');
            let pefknln = document.querySelector('.container-bottom');
            pefknln.appendChild(flme);

            dkln.classList.remove('left');
            dkln.classList.remove('right');
            dkln.classList.remove('up');
            dkln.classList.add('bottom');
            dkln.classList.toggle('drowned')
        }else if (erghgh == 'left') {
            let flme = document.querySelector('.popup-container');
            let pefknln = document.querySelector('.container-left');
            pefknln.appendChild(flme);

            dkln.classList.add('left');
            dkln.classList.remove('right');
            dkln.classList.remove('up');
            dkln.classList.remove('bottom');
            dkln.classList.toggle('drowned')
        }else if (erghgh == 'right') {
            let flme = document.querySelector('.popup-container');
            let pefknln = document.querySelector('.container-right');
            pefknln.appendChild(flme);
            dkln.classList.remove('left');
            dkln.classList.add('right');
            dkln.classList.remove('bottom');
            dkln.classList.remove('up');
            dkln.classList.toggle('drowned')
        }else {
            alert('button dont have position settings')
        }
    })
})
}
catch {
    alert("popup error 1" + "<a href='##popuperror2'> ? <a>")
}


function getPosition(e){
	var x = y = 0;
 
	if (!e) {
		var e = window.event;
	}
 
	if (e.pageX || e.pageY){
		x = 10 + e.pageX;
		y = 10 + e.pageY;
	} else if (e.clientX || e.clientY){
		x = 10 + e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		y = 10 + e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	}
 
	return {x: x, y: y}
}
try {
    const gwfsadf = document.querySelectorAll('.toggle_tooltip');


    gwfsadf.forEach((then) => {
    then.addEventListener('mouseenter',(e) => {
        let pdgkn = then.getAttribute('popupid');
        let erghgh = then.getAttribute('drop-position');
        let dkln = document.querySelector(pdgkn);
       
        dkln.classList.add('display');
        if (erghgh == 'up') {
            let flme = document.querySelector('.tooltip__container');
            let pefknln = document.querySelector('.container-up1');
            var rgknldfgkn = then.getBoundingClientRect()
            
            $(dkln).css('left', rgknldfgkn.left + "px")
            var coord = getPosition(e);
            let setttom = coord.y / 1.05;
            $(dkln).css('top', setttom + "px")
            console.log(rgknldfgkn.left + "px")
            
        }else if (erghgh == 'bottom') {
            let flme = document.querySelector('.tooltip__container');
            let pefknln = document.querySelector('.container-bottom1');
            
            var rgknldfgkn = then.getBoundingClientRect()
            
            $(dkln).css('left', rgknldfgkn.left + "px")
            var coord = getPosition(e);
            let setttom = coord.y ;
            $(dkln).css('top', setttom + "px")
            console.log(rgknldfgkn.left + "px")
        }else if (erghgh == 'left') {
            let flme = document.querySelector('.tooltip__container');
            let pefknln = document.querySelector('.container-left1');
            var rgknldfgkn = then.getBoundingClientRect()
            
            let erfgklneifgln = rgknldfgkn.left / 1.21;
            $(dkln).css('left', erfgklneifgln + "px")
            var coord = getPosition(e);
            let setttom = coord.y;
            $(dkln).css('top', setttom + "px")
            console.log(rgknldfgkn.left + "px")
        }else if (erghgh == 'right') {
            let flme = document.querySelector('.tooltip__container');
            let pefknln = document.querySelector('.container-right1');
            
            var rgknldfgkn = then.getBoundingClientRect()
            let erfgklneifgln = rgknldfgkn.left / .9;
            $(dkln).css('left', erfgklneifgln + "px")
            var coord = getPosition(e);
            let setttom = coord.y ;
            $(dkln).css('top', setttom + "px")
            console.log(rgknldfgkn.left + "px")
        }else {
            alert('button dont have position settings')
        }
        
    },then.addEventListener('mouseleave',() => {
        let pdgkn = then.getAttribute('popupid');
        let erghgh = then.getAttribute('drop-position');
        let dkln = document.querySelector(pdgkn);
        dkln.classList.remove('display')  
}))});
}
catch {
    alert("tooltip error 1" + "<a href='##popuperror2'> ? <a>")
}



