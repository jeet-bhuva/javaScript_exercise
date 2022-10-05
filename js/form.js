function check() 
	{
		var name = document.getElementById('exampleFormControlInput1').value;
		var email = document.getElementById('exampleFormControlInput1').value;
		var gender = document.getElementsByClassName('gender');
		var hob = document.getElementsByClassName('hob');

		if (exampleFormControlInput1 == '') 
		{
			alert("Enter Your Name");
			return false;
		}

		if (exampleFormControlInput1 == '') 
		{
			alert("Enter Your Email-ID");
			return false;
		}


		if (gender[0].checked==false && gender[1].checked==false) 
		{
			alert("Select Gender");
			return false;
		}


			var t=0;

			for (var i = 0; i < hob.length; i++)
			{
					if(hob[i].checked == true)
					{
						t++;
					}
			}

			if(t==0)
			{
				alert("Select hobby");
				return false;
			}

	}