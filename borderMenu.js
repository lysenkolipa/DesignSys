
(function() 
{
	'use strict'
 	
		let overlay = document.createElement('div')
		overlay.className = 'bt-overlay'
		menu.appendChild(overlay)

		trigger.addEventListener(eventtype, function(ev) 
		{
			ev.stopPropagation()
			ev.preventDefault()
			
			if(classie.has (menu, 'bt-menu-open')) 
				resetMenu()
			else 
				classie.remove(menu, 'bt-menu-close')
				classie.add(menu, 'bt-menu-open')
				overlay.addEventListener( eventtype, closeClickFn)
		})

		if(triggerPlay) 
			triggerPlay.addEventListener (eventtype, function(ev) 
			{
				ev.stopPropagation()
				ev.preventDefault()

				classie.remove( menu, 'bt-menu-close')
				classie.add( menu, 'bt-menu-open')
				overlay.addEventListener( eventtype, closeClickFn)
			})

	}
	init()

})()