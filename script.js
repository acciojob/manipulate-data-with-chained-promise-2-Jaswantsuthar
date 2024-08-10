//your JS code here. If required.
function promises() {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve([1,2,3,4])
		},3000)
	})	
}

promises()
	.then((number)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				let evennumber = number.filter(num => num % 2 === 0)

				document.getElementById("output").textcontent= evennumber;
				resolve(evennumber)
			})
		})
	})
	.then((number)=>{
		return new Promise((resolve)=>{
			setTimeout(()=>{
				let evennumber = number.forEach(num => num *2)

				document.getElementById("output").textcontent= evennumber;
				resolve(evennumber)
			})
		})
	})
	.catch((error)=>{
		console.log(error)
	})