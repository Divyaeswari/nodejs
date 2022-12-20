readline.promptLoop(function(input){
				console.log('You Said '+input);
				return input==='bye';
			});
			console.log("Exited");