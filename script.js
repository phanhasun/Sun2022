document.getElementById('todo1').onclick = function(e)
{
  var textTodo = document.getElementById("TodoText1");
  
  if (this.checked)
  {
    textTodo.innerHTML = "Mua ô <del>tô</del> che nắng che mưa";
  }
  else
  {
    textTodo.innerHTML = "Mua ô tô che nắng che mưa";
  }
}


document.getElementById('todo2').onclick = function(e)
{
  var textTodo = document.getElementById("TodoText2");

  if (this.checked)
  {
    textTodo.innerHTML = "Tài khoản có 200.000<del>.000</del>";
  }
  else
  {
    textTodo.innerHTML = "Tài khoản có 200.000.000";
  }
}

document.getElementById('todo3').onclick = function(e)
{
  var textTodo = document.getElementById("TodoText3");

  if (this.checked)
  {
    textTodo.innerHTML = "Đưa bạn <del>gái</del> đi chơi";
  }
  else
  {
    textTodo.innerHTML = "Đưa bạn gái đi chơi";
  }
}

document.getElementById('todo4').onclick = function(e)
{
  var textTodo = document.getElementById("TodoText4");

  if (this.checked)
  {
    textTodo.innerHTML = "Chạy deadline mỗi ngày";
  }
  else
  {
    textTodo.innerHTML = "Chạy bộ mỗi ngày";
  }
}

document.getElementById('todo5').onclick = function(e)
{
  var textTodo = document.getElementById("TodoText5");

  if (this.checked)
  {
    textTodo.innerHTML = "Sống <del>cuộc sống an nhàn</del>";
  }
  else
  {
    textTodo.innerHTML = "Sống cuộc sống an nhàn";
  }
}