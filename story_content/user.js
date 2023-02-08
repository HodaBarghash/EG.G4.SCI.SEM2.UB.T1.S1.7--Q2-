function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ghUDB1TmQA":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbyciNp8PpiWWosXwUlsfG5F_MOm92nIyU-GUif7KrJog2Y7dxWmjH9NbUibLlyg0XXZ/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect"),q2attempts:player.GetVar("q2attempts"),q2answeredcorrect:player.GetVar("q2answeredcorrect"),q3attempts:player.GetVar("q3attempts"),q3answeredcorrect:player.GetVar("q3answeredcorrect"),q4attempts:player.GetVar("q4attempts"),q4answeredcorrect:player.GetVar("q4answeredcorrect"),q5attempts:player.GetVar("q5attempts"),q5answeredcorrect:player.GetVar("q5answeredcorrect")})
	}
	)

}

